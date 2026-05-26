import { useEffect, useState } from "react";

type ImgErrorEntry = {
  url: string;
  currentSrc: string;
  naturalWidth: number;
  naturalHeight: number;
  complete: boolean;
  visible: boolean;
  rect: string;
  cssDisplay: string;
  parentTag: string;
  errorType: string;
  status?: number | string;
  contentType?: string;
  contentLength?: string;
  fetchError?: string;
  ts: string;
};

type Summary = {
  ua: string;
  url: string;
  totalImgs: number;
  completedOk: number;
  completedZero: number;
  notComplete: number;
};

function shorten(s: string, n = 80) {
  if (!s) return s;
  return s.length > n ? s.slice(0, n) + "…" : s;
}

export function ImageDebugOverlay() {
  const [enabled, setEnabled] = useState(false);
  const [errors, setErrors] = useState<ImgErrorEntry[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("img-debug") !== "1") return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const seen = new Set<string>();

    const probe = async (url: string): Promise<Partial<ImgErrorEntry>> => {
      try {
        const res = await fetch(url, { method: "GET", cache: "no-store" });
        return {
          status: res.status,
          contentType: res.headers.get("content-type") || "",
          contentLength: res.headers.get("content-length") || "",
        };
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        return { fetchError: msg };
      }
    };

    const recordImg = async (img: HTMLImageElement, errorType: string) => {
      const url = img.currentSrc || img.src;
      if (!url) return;
      const key = errorType + "|" + url;
      if (seen.has(key)) return;
      seen.add(key);
      const rect = img.getBoundingClientRect();
      const cs = window.getComputedStyle(img);
      const entry: ImgErrorEntry = {
        url,
        currentSrc: img.currentSrc || "",
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        complete: img.complete,
        visible: rect.width > 0 && rect.height > 0,
        rect: `${Math.round(rect.width)}×${Math.round(rect.height)}`,
        cssDisplay: cs.display,
        parentTag: img.parentElement?.tagName?.toLowerCase() || "",
        errorType,
        ts: new Date().toISOString().slice(11, 19),
      };
      const probed = await probe(url);
      Object.assign(entry, probed);
      setErrors((prev) => [...prev, entry]);
    };

    const onError = (ev: Event) => {
      const target = ev.target as HTMLElement | null;
      if (target && target.tagName === "IMG") {
        void recordImg(target as HTMLImageElement, "error event");
      }
    };
    document.addEventListener("error", onError, true);

    const sweep = () => {
      const imgs = Array.from(document.querySelectorAll("img"));
      let ok = 0;
      let zero = 0;
      let notComplete = 0;
      for (const img of imgs) {
        if (!img.complete) {
          notComplete++;
          continue;
        }
        if (img.naturalWidth === 0) {
          zero++;
          void recordImg(img, "complete but naturalWidth=0");
        } else {
          ok++;
        }
      }
      setSummary({
        ua: navigator.userAgent,
        url: window.location.href,
        totalImgs: imgs.length,
        completedOk: ok,
        completedZero: zero,
        notComplete,
      });
    };

    const t1 = window.setTimeout(sweep, 2000);
    const t2 = window.setTimeout(sweep, 6000);
    const t3 = window.setTimeout(sweep, 12000);

    return () => {
      document.removeEventListener("error", onError, true);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [enabled]);

  if (!enabled) return null;

  const copyReport = async () => {
    const payload = { summary, errors };
    const text = JSON.stringify(payload, null, 2);
    try {
      await navigator.clipboard.writeText(text);
      alert("Image debug report copied to clipboard");
    } catch {
      window.prompt("Copy this report:", text);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 8,
        right: 8,
        bottom: 8,
        zIndex: 2147483647,
        maxHeight: collapsed ? "auto" : "55vh",
        overflowY: "auto",
        background: "rgba(0,0,0,0.92)",
        color: "#fff",
        font: "11px/1.35 ui-monospace, SFMono-Regular, Menlo, monospace",
        padding: "10px 12px",
        borderRadius: 10,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
      role="dialog"
      aria-label="Image debug overlay"
    >
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <strong style={{ fontSize: 12 }}>img-debug</strong>
        <span style={{ opacity: 0.6 }}>
          {summary
            ? `${summary.completedOk}/${summary.totalImgs} ok · ${summary.completedZero} broken · ${summary.notComplete} loading`
            : "scanning…"}
        </span>
        <span style={{ flex: 1 }} />
        <button
          onClick={copyReport}
          style={{ background: "#fff", color: "#000", border: 0, padding: "4px 8px", borderRadius: 6, fontSize: 11 }}
        >
          Copy report
        </button>
        <button
          onClick={() => setCollapsed((c) => !c)}
          style={{ background: "transparent", color: "#fff", border: "1px solid #fff5", padding: "4px 8px", borderRadius: 6, fontSize: 11 }}
        >
          {collapsed ? "Expand" : "Collapse"}
        </button>
      </div>

      {!collapsed && (
        <>
          {summary && (
            <div style={{ opacity: 0.7, marginBottom: 8, wordBreak: "break-all" }}>
              <div>UA: {shorten(summary.ua, 140)}</div>
              <div>URL: {shorten(summary.url, 140)}</div>
            </div>
          )}
          {errors.length === 0 ? (
            <div style={{ opacity: 0.7 }}>
              No image errors captured yet. Scroll the page, then tap a painting card and a postcard to open the modal so all images get a chance to load. Then tap "Copy report".
            </div>
          ) : (
            <ol style={{ margin: 0, paddingLeft: 18 }}>
              {errors.map((e, i) => (
                <li key={i} style={{ marginBottom: 8, paddingBottom: 8, borderBottom: "1px solid #fff2" }}>
                  <div style={{ color: "#ff8a8a", marginBottom: 2 }}>
                    [{e.ts}] {e.errorType}
                  </div>
                  <div style={{ wordBreak: "break-all" }}>{e.url}</div>
                  <div style={{ opacity: 0.75 }}>
                    natural={e.naturalWidth}×{e.naturalHeight} · rect={e.rect} · complete={String(e.complete)} · display={e.cssDisplay} · parent={e.parentTag}
                  </div>
                  <div style={{ opacity: 0.75 }}>
                    fetch: {e.fetchError ? `ERROR ${e.fetchError}` : `${e.status} · ${e.contentType || "?"} · ${e.contentLength || "?"}b`}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </>
      )}
    </div>
  );
}

export default ImageDebugOverlay;
