import { useEffect, useRef } from "react";
import { measureViewerWidth } from "@/lib/viewerUtils";

type PdfScrollViewerProps = {
  src: string;
  onReady?: () => void;
  onError?: () => void;
};

export default function PdfScrollViewer({ src, onReady, onError }: PdfScrollViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const notifiedRef = useRef(false);
  const renderIdRef = useRef(0);

  useEffect(() => {
    notifiedRef.current = false;
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const renderId = ++renderIdRef.current;

    const render = async (width: number) => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();

        const pdf = await pdfjs.getDocument(src).promise;
        if (cancelled || renderId !== renderIdRef.current || !containerRef.current) return;

        container.innerHTML = "";
        const contentWidth = Math.max(280, width - 16);

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
          if (cancelled || renderId !== renderIdRef.current) return;

          const page = await pdf.getPage(pageNum);
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = contentWidth / baseViewport.width;
          const viewport = page.getViewport({ scale });

          const pageWrap = document.createElement("div");
          pageWrap.className = "pdf-scroll-page";

          const canvas = document.createElement("canvas");
          canvas.className = "pdf-scroll-page-canvas";
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          pageWrap.appendChild(canvas);
          container.appendChild(pageWrap);

          await page.render({ canvas, viewport }).promise;
        }

        if (cancelled || renderId !== renderIdRef.current || notifiedRef.current) return;
        notifiedRef.current = true;
        onReady?.();
      } catch {
        if (!cancelled && renderId === renderIdRef.current && !notifiedRef.current) {
          notifiedRef.current = true;
          onError?.();
        }
      }
    };

    const run = (immediate = false) => {
      const width = measureViewerWidth(container);
      if (width <= 0) return false;
      void render(width);
      return true;
    };

    if (!run(true)) {
      const tick = () => {
        if (cancelled) return;
        if (!run(true)) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const observer = new ResizeObserver(() => {
      if (cancelled) return;
      const width = measureViewerWidth(container);
      if (width <= 0) return;
      void render(width);
    });

    observer.observe(container);
    const scrollParent = container.closest(".doc-viewer-scroll");
    if (scrollParent) observer.observe(scrollParent);

    return () => {
      cancelled = true;
      renderIdRef.current += 1;
      observer.disconnect();
      container.innerHTML = "";
    };
  }, [src, onReady, onError]);

  return <div ref={containerRef} className="pdf-scroll-deck" />;
}
