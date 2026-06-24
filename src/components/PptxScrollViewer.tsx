import { useEffect, useRef } from "react";
import { parse } from "@pagus-kit/core";
import { buildFontSubstitutes, renderSlide } from "@pagus-kit/renderer";
import { cleanPptxSvg, getDeckContentWidth, getDevicePixelRatio, isNarrowViewport } from "@/lib/viewerUtils";

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

function mountSlideSvg(
  viewEl: HTMLElement,
  svgMarkup: string,
  displayWidth: number,
  displayHeight: number,
) {
  viewEl.innerHTML = cleanPptxSvg(svgMarkup);
  viewEl.style.width = `${displayWidth}px`;
  viewEl.style.height = `${displayHeight}px`;
  viewEl.style.maxWidth = "100%";
  viewEl.style.margin = "0 auto";
  viewEl.style.overflow = "hidden";
  viewEl.style.flexShrink = "0";

  const svg = viewEl.querySelector("svg");
  if (svg) {
    svg.style.display = "block";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  }
}

function renderDeck(container: HTMLDivElement, buffer: ArrayBuffer, contentWidth: number) {
  return parse(buffer).then((presentation) => {
    const fontSubstitutes = buildFontSubstitutes(presentation.fonts, {});
    const dpr = getDevicePixelRatio();
    const narrow = isNarrowViewport();
    const displayWidth = contentWidth;
    const displayScale = displayWidth / presentation.slideSize.width;
    const renderScale = displayScale * dpr;
    const displayHeight = (displayWidth * presentation.slideSize.height) / presentation.slideSize.width;

    container.innerHTML = "";

    presentation.slides.forEach((slide, index) => {
      const slideEl = document.createElement("div");
      slideEl.className = "pptx-scroll-slide";
      slideEl.style.width = "100%";
      slideEl.style.maxWidth = "100%";
      slideEl.style.height = `${displayHeight}px`;
      slideEl.style.minHeight = `${displayHeight}px`;
      slideEl.style.display = "flex";
      slideEl.style.alignItems = "flex-start";
      slideEl.style.justifyContent = "center";

      const viewEl = document.createElement("div");
      viewEl.className = "pptx-scroll-slide-view";

      const rendered = renderSlide(slide, presentation.slideSize, {
        scale: renderScale,
        fontSubstitutes,
      });

      mountSlideSvg(viewEl, rendered.svg, displayWidth, displayHeight);
      slideEl.appendChild(viewEl);

      if (!narrow) {
        applyShrinkFit(viewEl);
      }

      const label = document.createElement("span");
      label.className = "pptx-scroll-slide-number";
      label.textContent = String(index + 1);
      slideEl.appendChild(label);

      container.appendChild(slideEl);
    });

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

    const run = async (contentWidth: number) => {
      try {
        await renderDeck(container, buffer, contentWidth);
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

    const scheduleRender = (immediate = false) => {
      if (resizeTimerRef.current != null) {
        window.clearTimeout(resizeTimerRef.current);
      }
      const contentWidth = getDeckContentWidth(container);
      if (contentWidth <= 0) return;

      if (immediate) {
        void run(contentWidth);
        return;
      }

      resizeTimerRef.current = window.setTimeout(() => {
        if (!cancelled) void run(getDeckContentWidth(container));
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
  }, [buffer, onReady, onError]);

  return <div ref={containerRef} className="pptx-scroll-deck" />;
}
