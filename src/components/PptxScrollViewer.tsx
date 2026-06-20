import { useEffect, useRef } from "react";
import { init } from "pptx-preview";

type PptxScrollViewerProps = {
  buffer: ArrayBuffer;
  onReady?: () => void;
  onError?: () => void;
};

function measureWidth(container: HTMLDivElement) {
  const direct = container.clientWidth;
  if (direct > 0) return direct;

  const parent = container.parentElement?.clientWidth ?? 0;
  if (parent > 0) return parent;

  return 880;
}

export default function PptxScrollViewer({ buffer, onReady, onError }: PptxScrollViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previewerRef = useRef<{ destroy: () => void } | null>(null);
  const notifiedRef = useRef(false);

  useEffect(() => {
    notifiedRef.current = false;
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    previewerRef.current?.destroy();
    previewerRef.current = null;
    container.innerHTML = "";

    const render = async () => {
      try {
        const contentWidth = Math.max(280, measureWidth(container) - 32);
        const previewer = init(container, {
          width: contentWidth,
          height: Math.round((contentWidth * 9) / 16),
          mode: "list",
        });

        if (cancelled) {
          previewer.destroy();
          return;
        }

        previewerRef.current = previewer;
        await previewer.preview(buffer);

        if (cancelled || notifiedRef.current) return;
        notifiedRef.current = true;
        onReady?.();
      } catch {
        if (!cancelled && !notifiedRef.current) {
          notifiedRef.current = true;
          onError?.();
        }
      }
    };

    void render();

    const observer = new ResizeObserver(() => {
      if (cancelled || !previewerRef.current) return;
      const contentWidth = Math.max(280, measureWidth(container) - 32);
      container.querySelectorAll<HTMLElement>(".slide-wrapper, [class*='slide-wrapper']").forEach((slide) => {
        slide.style.width = `${contentWidth}px`;
        slide.style.maxWidth = "100%";
      });
    });

    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      previewerRef.current?.destroy();
      previewerRef.current = null;
    };
  }, [buffer, onReady, onError]);

  return <div ref={containerRef} className="pptx-scroll-deck" />;
}
