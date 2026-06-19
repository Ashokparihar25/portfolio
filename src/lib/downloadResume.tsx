export async function downloadResume(): Promise<void> {
  const [{ pdf }, { ResumePdfDocument }, { contact }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("@/lib/ResumePdfDocument"),
    import("@/data/portfolio"),
  ]);

  const blob = await pdf(<ResumePdfDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = contact.resumeFilename;
  anchor.click();
  URL.revokeObjectURL(url);
}
