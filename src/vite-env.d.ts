/// <reference types="vite/client" />

declare module "*.docx" {
  const src: string;
  export default src;
}

declare module "*.pptx" {
  const src: string;
  export default src;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "pdfjs-dist/build/pdf.worker.min.mjs?url" {
  const src: string;
  export default src;
}
