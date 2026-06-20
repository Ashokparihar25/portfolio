import { useEffect, useRef } from "react";
import { parse } from "@pagus-kit/core";
import { buildFontSubstitutes, renderSlide } from "@pagus-kit/renderer";
import { measureViewerWidth } from "@/lib/viewerUtils";

type PptxScrollViewerProps = {
  buffer: ArrayBuffer;
  onReady?: () => void;
  onError?: () => void;
};

function applyShrinkFit(root: ParentNode) {
  root.querySelectorAll<HTMLElement>("[data-pagus-shrink-fit]").forEach((el) => {
    el.style.transform = "";
    el.style.width = "";
    const contentHeight = el.scrollHeight;
    const boxHeight = el.clientHeight;
    if (contentHeight > boxHeight && boxHeight > 0) {
      const ratio = boxHeight / contentHeight;
      el.style.transformOrigin = "top left";
      el.style.transform = `scale(${ratio})`;
      el.style.width = `${100 / ratio}%`;
    }
  });
}

function renderDeck(container: HTMLDivElement, buffer: ArrayBuffer, contentWidth: number) {
  return parse(buffer).then((presentation) => {
    const fontSubstitutes = buildFontSubstitutes(presentation.fonts, {});
    const available = Math.max(280, contentWidth - 16);
    const scale = available / presentation.slideSize.width;
    const scaledHeight = (available * presentation.slideSize.height) / presentation.slideSize.width;

    container.innerHTML = "";

    presentation.slides.forEach((slide, index) => {
      const slideEl = document.createElement("div");
      slideEl.className = "pptx-scroll-slide";
      slideEl.style.height = `${scaledHeight}px`;

      const viewEl = document.createElement("div");
      viewEl.className = "pptx-scroll-slide-view";

      const rendered = renderSlide(slide, presentation.slideSize, {
        scale,
        fontSubstitutes,
      });

      viewEl.innerHTML = rendered.svg;
      slideEl.appendChild(viewEl);

      const label = document.createElement("span");
      label.className = "pptx-scroll-slide-number";
      label.textContent = String(index + 1);
      slideEl.appendChild(label);

      container.appendChild(slideEl);
    });

    applyShrinkFit(container);

    if (container.children.length === 0) {
      throw new Error("No slides rendered.");
    }
  });
}

export default function PptxScrollViewer({ buffer, onReady, onError }: PptxScrollViewerProps) {
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

    const run = async (width: number) => {
      try {
        await renderDeck(container, buffer, width);
        if (cancelled || renderId !== renderIdRef.current || notifiedRef.current) return;
        notifiedRef.current = true;
        requestAnimationFrame(() => onReady?.());
      } catch {
        if (!cancelled && renderId === renderIdRef.current && !notifiedRef.current) {
          notifiedRef.current = true;
          onError?.();
        }
      }
    };

    const scheduleRender = (width: number, immediate = false) => {
      if (resizeTimerRef.current != null) {
        window.clearTimeout(resizeTimerRef.current);
      }
      if (immediate) {
        void run(width);
        return;
      }
      resizeTimerRef.current = window.setTimeout(() => {
        if (!cancelled && width > 0) void run(width);
      }, 150);
    };

    const attempt = (immediate = false) => {
      const width = measureViewerWidth(container);
      if (width <= 0) return false;
      scheduleRender(width, immediate);
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
      const width = measureViewerWidth(container);
      if (width <= 0) return;
      scheduleRender(width, false);
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
  }, [buffer, onReady, onError]);

  return <div ref={containerRef} className="pptx-scroll-deck" />;
}
