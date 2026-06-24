export const NARROW_VIEWPORT_QUERY = "(max-width: 767px)";

export function isNarrowViewport() {
  return window.matchMedia(NARROW_VIEWPORT_QUERY).matches;
}

/** All in-browser viewers use the mobile-optimized path at this breakpoint. */
export function useMobileViewer() {
  return isNarrowViewport();
}

/** Cap DPR so very high-density phones stay performant. */
export function getDevicePixelRatio() {
  return Math.min(window.devicePixelRatio || 1, 2.5);
}

export function measureViewerWidth(container: HTMLElement) {
  const scrollParent = container.closest(".doc-viewer-scroll") as HTMLElement | null;
  const modal = container.closest(".doc-viewer-modal") as HTMLElement | null;

  const candidates = [
    scrollParent?.clientWidth ?? 0,
    modal?.clientWidth ?? 0,
    container.parentElement?.clientWidth ?? 0,
    container.clientWidth,
    window.innerWidth,
    document.documentElement.clientWidth,
  ];

  const width = Math.max(...candidates);
  if (width > 0) return width;
  return window.innerWidth;
}

/** Usable width for PDF pages / PPT slides — full screen on mobile. */
export function getDeckContentWidth(container: HTMLElement) {
  const measured = measureViewerWidth(container);
  const horizontalPadding = isNarrowViewport() ? 0 : 32;
  return Math.max(280, measured - horizontalPadding);
}

/** Scale an element down so nothing is clipped horizontally (mobile PPT/DOCX fallback). */
export function fitScaleToWidth(el: HTMLElement, host: HTMLElement, availableWidth: number) {
  el.style.transform = "";
  el.style.transformOrigin = "";
  el.style.marginBottom = "";
  el.style.marginLeft = "";
  el.style.width = "";

  const naturalWidth = Math.max(el.scrollWidth, el.offsetWidth);
  if (naturalWidth <= availableWidth || naturalWidth <= 0) {
    el.style.width = "100%";
    el.style.maxWidth = "100%";
    return 1;
  }

  const scale = availableWidth / naturalWidth;
  const naturalHeight = el.offsetHeight || el.scrollHeight;

  el.style.width = `${naturalWidth}px`;
  el.style.transformOrigin = "top left";
  el.style.transform = `scale(${scale})`;
  el.style.marginBottom = `${naturalHeight * (scale - 1)}px`;
  host.style.overflow = "hidden";
  host.style.width = "100%";

  return scale;
}

function isBlackStroke(color: string) {
  if (!color || color === "none") return false;
  const c = color.toLowerCase().replace(/\s/g, "");
  return c === "#000" || c === "#000000" || c === "black" || c === "rgb(0,0,0)";
}

/** Remove PowerPoint placeholder outlines (black stroke, no fill) from rendered SVG. */
export function cleanPptxSvg(svgMarkup: string): string {
  if (typeof document === "undefined") {
    return svgMarkup
      .replace(/<path\s+[^>]*fill="none"[^>]*stroke="#000000"[^>]*\/?>\s*/gi, "")
      .replace(/<path\s+[^>]*stroke="#000000"[^>]*fill="none"[^>]*\/?>\s*/gi, "");
  }

  const template = document.createElement("template");
  template.innerHTML = svgMarkup.trim();
  const svg = template.content.querySelector("svg");
  if (!svg) return svgMarkup;

  svg.querySelectorAll("path, rect, line, polyline, polygon").forEach((el) => {
    const fill = (el.getAttribute("fill") ?? "").toLowerCase();
    const stroke = el.getAttribute("stroke") ?? "";
    if ((fill === "none" || fill === "transparent") && isBlackStroke(stroke)) {
      el.remove();
    }
  });

  return svg.outerHTML;
}

function resetDocxScale(wrapper: HTMLElement, shell: HTMLElement) {
  wrapper.style.transform = "";
  wrapper.style.transformOrigin = "";
  wrapper.style.marginBottom = "";
  wrapper.style.marginLeft = "";
  wrapper.style.width = "";
  wrapper.style.maxWidth = "";
  shell.style.height = "";
  shell.style.overflow = "";
}

/**
 * Fit docx-preview output to the viewer width on mobile.
 * docx-preview uses fixed pixel page widths; scale-to-fit keeps all text visible.
 */
export function fitDocxToViewport(container: HTMLElement) {
  const shell = container;
  const wrapper = container.querySelector<HTMLElement>(".docx-wrapper");
  const article = container.querySelector<HTMLElement>(".doc-viewer-article");

  if (article) {
    article.style.maxWidth = "100%";
    article.style.width = "100%";
    article.style.boxSizing = "border-box";
    article.style.padding = isNarrowViewport() ? "20px 16px 32px" : "40px 48px";
    article.style.overflowWrap = "break-word";
    article.style.wordBreak = "break-word";

    article.querySelectorAll<HTMLElement>("p, li, td, th, span, div, table").forEach((el) => {
      el.style.maxWidth = "100%";
      el.style.overflowWrap = "break-word";
      el.style.wordBreak = "break-word";
      if (el.style.width && el.style.width.endsWith("px")) {
        el.style.width = "auto";
      }
    });
    return;
  }

  if (!wrapper) return;

  resetDocxScale(wrapper, shell);

  const available = getDeckContentWidth(container);
  const pages = wrapper.querySelectorAll<HTMLElement>("section, .docx-viewer-page");

  pages.forEach((page) => {
    page.style.boxSizing = "border-box";
    if (isNarrowViewport()) {
      page.style.minHeight = "auto";
    }
  });

  const pageWidths = Array.from(pages).map((page) => page.offsetWidth || page.scrollWidth);
  const naturalWidth = Math.max(wrapper.scrollWidth, wrapper.offsetWidth, ...pageWidths, 0);

  if (naturalWidth <= 0 || available <= 0) return;

  fitScaleToWidth(wrapper, shell, available);

  if (isNarrowViewport()) {
    const firstPage = pages[0];
    if (firstPage) {
      firstPage.style.paddingTop = "8px";
    }
  }
}
