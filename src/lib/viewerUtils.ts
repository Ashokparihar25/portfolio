export const NARROW_VIEWPORT_QUERY = "(max-width: 767px)";

export function isNarrowViewport() {
  return window.matchMedia(NARROW_VIEWPORT_QUERY).matches;
}

export function measureViewerWidth(container: HTMLElement) {
  const scrollParent = container.closest(".doc-viewer-scroll");
  const fromScroll = scrollParent?.clientWidth ?? 0;
  const fromParent = container.parentElement?.clientWidth ?? 0;
  const direct = container.clientWidth;
  const width = Math.max(direct, fromScroll, fromParent);
  if (width > 0) return width;
  return Math.min(window.innerWidth, document.documentElement.clientWidth);
}

export function fitDocxToViewport(container: HTMLElement) {
  const wrapper = container.querySelector<HTMLElement>(".docx-wrapper");
  if (wrapper) {
    wrapper.style.width = "100%";
    wrapper.style.maxWidth = "100%";
    wrapper.style.boxSizing = "border-box";
    wrapper.style.transform = "none";

    wrapper.querySelectorAll<HTMLElement>("section, .docx-viewer-page").forEach((page) => {
      page.style.width = "100%";
      page.style.maxWidth = "100%";
      page.style.boxSizing = "border-box";
      page.style.paddingLeft = "12px";
      page.style.paddingRight = "12px";
    });
  }

  const article = container.querySelector<HTMLElement>(".doc-viewer-article");
  if (article) {
    article.style.maxWidth = "100%";
    article.style.width = "100%";
    article.style.boxSizing = "border-box";
    article.style.padding = "20px 16px";
    article.style.overflowWrap = "anywhere";
  }
}
