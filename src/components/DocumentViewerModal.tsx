import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Eye, FileText, Loader2, Presentation, ScrollText, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PptxScrollViewer from "@/components/PptxScrollViewer";
import PdfScrollViewer from "@/components/PdfScrollViewer";
import { fitDocxToViewport, isNarrowViewport, NARROW_VIEWPORT_QUERY } from "@/lib/viewerUtils";

export type DocumentKind = "docx" | "pdf" | "pptx";

type DocumentViewerModalProps = {
  triggerLabel: string;
  title: string;
  subtitle?: string;
  src: string;
  kind?: DocumentKind;
  triggerClassName?: string;
};

function detectKind(src: string): DocumentKind {
  const lower = src.toLowerCase();
  if (lower.includes(".pdf")) return "pdf";
  if (lower.includes(".pptx")) return "pptx";
  return "docx";
}

function loadingCopy(kind: DocumentKind) {
  if (kind === "pptx") return { title: "Loading presentation…", detail: "Preparing slides for in-browser preview" };
  if (kind === "pdf") return { title: "Opening PDF…", detail: "Loading research paper in the viewer" };
  return { title: "Loading report…", detail: "Rendering pages for in-browser preview" };
}

function footerCopy(kind: DocumentKind) {
  if (kind === "pptx") return "Scroll down to view all slides";
  if (kind === "pdf") return "Scroll inside the viewer to read all pages";
  return "Scroll down to read the full document";
}

async function fetchAsset(url: string, timeoutMs = 45000): Promise<ArrayBuffer> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal, cache: "force-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.arrayBuffer();
  } finally {
    window.clearTimeout(timeout);
  }
}

export default function DocumentViewerModal({
  triggerLabel,
  title,
  subtitle,
  src,
  kind: kindProp,
  triggerClassName,
}: DocumentViewerModalProps) {
  const kind = kindProp ?? detectKind(src);
  const isPdf = kind === "pdf";
  const isPptx = kind === "pptx";
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [pptxBuffer, setPptxBuffer] = useState<ArrayBuffer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [useScrollPdf, setUseScrollPdf] = useState(false);
  const loadIdRef = useRef(0);
  const pptxTimeoutRef = useRef<number | null>(null);

  const pdfViewerSrc = `${src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;

  const cleanup = () => {
    if (containerRef.current) containerRef.current.innerHTML = "";
    setPptxBuffer(null);
  };

  useEffect(() => {
    setUseScrollPdf(isNarrowViewport());
    const media = window.matchMedia(NARROW_VIEWPORT_QUERY);
    const onChange = () => setUseScrollPdf(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open || !isPdf) return;

    setLoading(true);
    setError(null);
    setProgress(useScrollPdf ? "Loading PDF pages…" : "Opening PDF…");
    setShowScrollHint(false);

    if (useScrollPdf) return;

    const fallback = window.setTimeout(() => {
      setLoading(false);
      setProgress(null);
    }, 2500);

    return () => window.clearTimeout(fallback);
  }, [open, isPdf, src, useScrollPdf]);

  useEffect(() => {
    if (!open || !isPptx) {
      if (!open) setPptxBuffer(null);
      return;
    }

    const loadId = ++loadIdRef.current;
    setLoading(true);
    setError(null);
    setProgress("Fetching presentation…");
    setShowScrollHint(false);
    setPptxBuffer(null);

    void (async () => {
      try {
        const buffer = await fetchAsset(src);
        if (loadId !== loadIdRef.current) return;
        setPptxBuffer(buffer);
        setProgress("Rendering slides…");

        pptxTimeoutRef.current = window.setTimeout(() => {
          if (loadId !== loadIdRef.current) return;
          setError("Unable to preview this presentation right now. Please try again.");
          setLoading(false);
          setProgress(null);
        }, 60000);
      } catch {
        if (loadId === loadIdRef.current) {
          setError("Unable to preview this presentation right now. Please try again.");
          setLoading(false);
          setProgress(null);
        }
      }
    })();

    return () => {
      loadIdRef.current += 1;
      if (pptxTimeoutRef.current != null) {
        window.clearTimeout(pptxTimeoutRef.current);
        pptxTimeoutRef.current = null;
      }
    };
  }, [open, isPptx, src]);

  useEffect(() => {
    if (!open || isPdf || isPptx) {
      if (!open) {
        setLoading(false);
        setError(null);
        setProgress(null);
        setShowScrollHint(false);
        cleanup();
      }
      return;
    }

    const loadId = ++loadIdRef.current;

    const waitForContainer = (): Promise<HTMLDivElement> =>
      new Promise((resolve, reject) => {
        let attempts = 0;
        const tick = () => {
          if (loadId !== loadIdRef.current) return;
          const container = containerRef.current;
          if (container) {
            resolve(container);
            return;
          }
          attempts += 1;
          if (attempts > 60) {
            reject(new Error("Viewer failed to mount."));
            return;
          }
          requestAnimationFrame(tick);
        };
        tick();
      });

    const renderWithMammoth = async (container: HTMLDivElement, buffer: ArrayBuffer) => {
      const mammoth = await import("mammoth");
      const result = await mammoth.convertToHtml({ arrayBuffer: buffer });
      container.innerHTML = `<article class="doc-viewer-article">${result.value}</article>`;
      if (isNarrowViewport()) fitDocxToViewport(container);
    };

    const renderWithDocxPreview = async (container: HTMLDivElement, buffer: ArrayBuffer) => {
      const narrow = isNarrowViewport();
      const { renderAsync } = await import("docx-preview");
      await renderAsync(buffer, container, undefined, {
        className: "docx-viewer-page",
        inWrapper: true,
        ignoreWidth: narrow,
        ignoreHeight: false,
        breakPages: true,
        renderHeaders: true,
        renderFooters: true,
        renderFootnotes: true,
        renderEndnotes: true,
      });
      if (narrow) fitDocxToViewport(container);
    };

    const loadDocument = async () => {
      setLoading(true);
      setError(null);
      setProgress(null);
      setShowScrollHint(false);

      try {
        const container = await waitForContainer();
        if (loadId !== loadIdRef.current) return;

        cleanup();
        container.innerHTML = "";

        setProgress("Fetching file…");
        const buffer = await fetchAsset(src);
        if (loadId !== loadIdRef.current) return;

        setProgress("Rendering document…");
        try {
          await renderWithDocxPreview(container, buffer);
        } catch {
          container.innerHTML = "";
          await renderWithMammoth(container, buffer);
        }

        if (loadId !== loadIdRef.current) return;
        if (!container.innerHTML.trim()) {
          throw new Error("Document rendered empty.");
        }

        setShowScrollHint(true);
      } catch {
        if (loadId === loadIdRef.current) {
          setError("Unable to preview this file right now. Please try again in a moment.");
        }
      } finally {
        if (loadId === loadIdRef.current) {
          setLoading(false);
          setProgress(null);
        }
      }
    };

    void loadDocument();

    return () => {
      loadIdRef.current += 1;
      cleanup();
    };
  }, [open, src, kind, isPdf, isPptx]);

  useEffect(() => {
    if (!showScrollHint || !scrollRef.current) return;

    const scrollEl = scrollRef.current;
    const hideHint = () => {
      if (scrollEl.scrollTop > 48) setShowScrollHint(false);
    };

    scrollEl.addEventListener("scroll", hideHint, { passive: true });
    return () => scrollEl.removeEventListener("scroll", hideHint);
  }, [showScrollHint]);

  const handlePdfLoad = () => {
    setLoading(false);
    setProgress(null);
    setError(null);
    setShowScrollHint(useScrollPdf);
  };

  const handlePdfError = () => {
    setLoading(false);
    setError("Unable to open this PDF in the browser viewer. Please try again.");
  };

  const handlePptxReady = useCallback(() => {
    if (pptxTimeoutRef.current != null) {
      window.clearTimeout(pptxTimeoutRef.current);
      pptxTimeoutRef.current = null;
    }
    setLoading(false);
    setProgress(null);
    setShowScrollHint(true);
  }, []);

  const handlePptxError = useCallback(() => {
    setLoading(false);
    setError("Unable to preview this presentation right now. Please try again.");
  }, []);

  const loadMessages = loadingCopy(kind);
  const HeaderIcon = kind === "pptx" ? Presentation : FileText;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={
            triggerClassName ??
            "group inline-flex items-center gap-1.5 mt-3 px-3.5 py-2 rounded-lg text-[11px] font-heading font-600 bg-primary/10 text-primary border border-primary/25 hover:bg-primary/15 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(187_92%_52%/0.15)] transition-all duration-300"
          }
        >
          <Eye size={13} className="transition-transform group-hover:scale-110" />
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent
        className="doc-viewer-modal max-w-[min(960px,96vw)] w-full h-[min(88vh,900px)] max-md:fixed max-md:inset-0 max-md:left-0 max-md:top-0 max-md:translate-x-0 max-md:translate-y-0 max-md:w-screen max-md:max-w-none max-md:h-[100dvh] max-md:max-h-[100dvh] max-md:rounded-none max-md:border-0 p-0 gap-0 overflow-hidden border-primary/20 bg-card/95 backdrop-blur-xl flex flex-col [&>button:last-of-type]:hidden"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="doc-viewer-modal-accent" aria-hidden="true" />

        <DialogHeader className="relative z-30 shrink-0 px-4 py-3 sm:px-6 sm:py-4 border-b border-border/60 bg-muted/30 max-md:pt-[calc(0.75rem+env(safe-area-inset-top))]">
          <div className="flex items-start gap-3 pr-12">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
              <HeaderIcon size={18} />
            </div>
            <div className="min-w-0 text-left">
              <DialogTitle className="font-heading font-700 text-base sm:text-lg text-foreground leading-snug">
                {title}
              </DialogTitle>
              {subtitle && (
                <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  {subtitle}
                </DialogDescription>
              )}
            </div>
          </div>

          <DialogClose asChild>
            <button
              type="button"
              className="doc-viewer-close absolute right-3 top-3 sm:right-4 sm:top-4 z-50 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/80 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 max-md:top-[calc(0.75rem+env(safe-area-inset-top))] max-md:right-[calc(0.75rem+env(safe-area-inset-right))]"
              aria-label="Close document viewer"
            >
              <X size={18} />
            </button>
          </DialogClose>
        </DialogHeader>

        <div
          ref={scrollRef}
          className={`doc-viewer-scroll flex-1 min-h-0 relative ${
            isPdf && !useScrollPdf
              ? "doc-viewer-scroll-pdf overflow-hidden flex flex-col"
              : "overflow-y-auto overflow-x-hidden overscroll-contain"
          }`}
        >
          {showScrollHint && !loading && !error && (!isPdf || useScrollPdf) && (
            <div className="doc-viewer-scroll-hint" aria-hidden="true">
              <ChevronDown size={14} className="doc-viewer-scroll-hint-icon" />
              <span>
                {isPptx ? "Scroll down for more slides" : isPdf ? "Scroll down for more pages" : "Scroll down for more pages"}
              </span>
            </div>
          )}

          {loading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-muted/40 backdrop-blur-sm">
              <Loader2 size={28} className="text-primary animate-spin" />
              <div className="text-center px-6">
                <p className="text-sm font-heading font-600 text-foreground">{progress ?? loadMessages.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{loadMessages.detail}</p>
              </div>
              <div className="flex gap-1.5 mt-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="doc-viewer-loading-bar"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && !loading && (
            <div className="flex flex-col items-center justify-center gap-3 py-16 px-6 text-center min-h-[320px]">
              <ScrollText size={32} className="text-muted-foreground/60" />
              <p className="text-sm text-muted-foreground max-w-sm">{error}</p>
              <DialogClose asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-heading font-600 bg-primary/10 text-primary border border-primary/25 hover:bg-primary/15 transition-all"
                >
                  Close
                </button>
              </DialogClose>
            </div>
          )}

          {isPdf && open && !error && useScrollPdf && (
            <PdfScrollViewer
              src={src}
              onReady={handlePdfLoad}
              onError={handlePdfError}
            />
          )}

          {isPdf && open && !error && !useScrollPdf && (
            <iframe
              key={src}
              src={pdfViewerSrc}
              title={title}
              className={`doc-viewer-pdf-iframe ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
              onLoad={handlePdfLoad}
              onError={handlePdfError}
            />
          )}

          {isPptx && pptxBuffer && !error && (
            <PptxScrollViewer
              buffer={pptxBuffer}
              onReady={handlePptxReady}
              onError={handlePptxError}
            />
          )}

          {!isPdf && !isPptx && (
            <div className="doc-viewer-canvas relative min-h-full">
              <div
                ref={containerRef}
                className={`doc-viewer-shell ${error ? "hidden" : ""} ${loading ? "invisible" : "visible"}`}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          )}
        </div>

        <div className="shrink-0 flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 border-t border-border/60 bg-muted/20 max-md:pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1.5">
            <ScrollText size={12} className="text-primary/70 shrink-0" />
            {footerCopy(kind)} ·{" "}
            <span className="hidden md:inline">Press Esc to close</span>
            <span className="md:hidden">Tap Close to exit</span>
          </p>
          <DialogClose asChild>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-heading font-600 text-muted-foreground border border-border hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all"
            >
              <X size={12} /> Close
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
