import { useState, useCallback } from "react";
import { downloadResume } from "@/lib/downloadResume";

export function useResumeDownload() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (downloading) return;
    setDownloading(true);
    try {
      await downloadResume();
    } catch (err) {
      console.error("Resume download failed:", err);
    } finally {
      setDownloading(false);
    }
  }, [downloading]);

  return { handleDownload, downloading };
}
