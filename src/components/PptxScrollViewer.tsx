import { useEffect, useRef } from "react";
import { parse } from "@pagus-kit/core";
import { buildFontSubstitutes, renderSlide } from "@pagus-kit/renderer";

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
    const available = Math.max(280, contentWidth - 32);
    const scale = available / presentation.slideSize.width;
    const scaledHeight = presentation.slideSize.height * scale;

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
      viewEl.style.width = `${rendered.width}px`;
      viewEl.style.height = `${rendered.height}px`;

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

  useEffect(() => {
    notifiedRef.current = false;
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const renderId = ++renderIdRef.current;

    const run = async (width: number) => {
      try {
        container.innerHTML = "";
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

    const attempt = () => {
      const width = measureWidth(container);
      if (width <= 0) return false;
      void run(width);
      return true;
    };

    if (!attempt()) {
      const tick = () => {
        if (cancelled) return;
        if (!attempt()) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const observer = new ResizeObserver(() => {
      if (cancelled) return;
      const width = measureWidth(container);
      if (width <= 0) return;
      void run(width);
    });

    observer.observe(container);
    if (container.parentElement) observer.observe(container.parentElement);

    return () => {
      cancelled = true;
      renderIdRef.current += 1;
      observer.disconnect();
      container.innerHTML = "";
    };
  }, [buffer, onReady, onError]);

  return <div ref={containerRef} className="pptx-scroll-deck" />;
}
