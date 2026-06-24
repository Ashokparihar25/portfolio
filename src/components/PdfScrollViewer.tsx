import { useEffect, useRef } from "react";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { getDeckContentWidth, getDevicePixelRatio } from "@/lib/viewerUtils";

type PdfScrollViewerProps = {
  buffer: ArrayBuffer;
  onReady?: () => void;
  onError?: () => void;
  onProgress?: (page: number, total: number) => void;
};

export default function PdfScrollViewer({ buffer, onReady, onError, onProgress }: PdfScrollViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const notifiedRef = useRef(false);
  const renderIdRef = useRef(0);
  const resizeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    notifiedRef.current = false;
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const renderId = ++renderIdRef.current;

    const render = async (contentWidth: number) => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

        const pdf = await pdfjs.getDocument({ data: new Uint8Array(buffer) }).promise;
        if (cancelled || renderId !== renderIdRef.current || !containerRef.current) return;

        container.innerHTML = "";
        const dpr = getDevicePixelRatio();
        const totalPages = pdf.numPages;

        for (let pageNum = 1; pageNum <= totalPages; pageNum += 1) {
          if (cancelled || renderId !== renderIdRef.current) return;

          const page = await pdf.getPage(pageNum);
          const baseViewport = page.getViewport({ scale: 1 });
          const displayScale = contentWidth / baseViewport.width;
          const renderScale = displayScale * dpr;
          const viewport = page.getViewport({ scale: renderScale });

          const displayHeight = viewport.height / dpr;

          const pageWrap = document.createElement("div");
          pageWrap.className = "pdf-scroll-page";
          pageWrap.style.width = "100%";
          pageWrap.style.maxWidth = "100%";

          const canvas = document.createElement("canvas");
          canvas.className = "pdf-scroll-page-canvas";
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = "100%";
          canvas.style.maxWidth = "100%";
          canvas.style.height = `${displayHeight}px`;
          canvas.style.display = "block";

          const ctx = canvas.getContext("2d");
          if (!ctx) throw new Error("Canvas not supported.");

          pageWrap.appendChild(canvas);
          container.appendChild(pageWrap);

          await page.render({ canvasContext: ctx, viewport, canvas }).promise;

          if (pageNum === 1) {
            onProgress?.(1, totalPages);
          }
        }

        if (cancelled || renderId !== renderIdRef.current || notifiedRef.current) return;
        notifiedRef.current = true;
        onProgress?.(totalPages, totalPages);
        onReady?.();
      } catch {
        if (!cancelled && renderId === renderIdRef.current && !notifiedRef.current) {
          notifiedRef.current = true;
          onError?.();
        }
      }
    };

    const scheduleRender = (immediate = false) => {
      if (resizeTimerRef.current != null) {
        window.clearTimeout(resizeTimerRef.current);
      }
      const contentWidth = getDeckContentWidth(container);
      if (contentWidth <= 0) return;

      if (immediate) {
        void render(contentWidth);
        return;
      }

      resizeTimerRef.current = window.setTimeout(() => {
        if (!cancelled) void render(getDeckContentWidth(container));
      }, 150);
    };

    const attempt = (immediate = false) => {
      if (getDeckContentWidth(container) <= 0) return false;
      scheduleRender(immediate);
      return true;
    };

    if (!attempt(true)) {
      const tick = () => {
        if (cancelled) return;
        if (!attempt(true)) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const observer = new ResizeObserver(() => {
      if (cancelled) return;
      scheduleRender(false);
    });

    observer.observe(container);
    const scrollParent = container.closest(".doc-viewer-scroll");
    if (scrollParent) observer.observe(scrollParent);

    return () => {
      cancelled = true;
      renderIdRef.current += 1;
      if (resizeTimerRef.current != null) {
        window.clearTimeout(resizeTimerRef.current);
      }
      observer.disconnect();
      container.innerHTML = "";
    };
  }, [buffer, onReady, onError, onProgress]);

  return <div ref={containerRef} className="pdf-scroll-deck" />;
}
