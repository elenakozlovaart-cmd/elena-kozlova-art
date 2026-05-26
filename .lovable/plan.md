## Goal

Ship only the `?img-debug=1` diagnostic overlay. Do **not** change any image loading behavior, design, layout, text, or styling. After we have a report from a real affected phone, we'll decide the actual fix.

## What gets added

### 1) New file: `src/components/ImageDebugOverlay.tsx`

A self-contained client component that:

- Renders nothing unless `new URLSearchParams(location.search).get("img-debug") === "1"`.
- Attaches a capture-phase `error` listener on `document` to catch every `<img>` load failure anywhere on the page (hero, world, tiles, portrait, paintings/postcards modal, lightbox carousel).
- Sweeps `document.querySelectorAll("img")` at 2s / 6s / 12s after mount and flags any image where `complete === true && naturalWidth === 0` (broken-but-no-error case, common with carrier transcoding).
- For each failure, records: URL, `currentSrc`, `naturalWidth/Height`, bounding rect, computed `display`, parent tag, error type, plus a `fetch(url, { cache: "no-store" })` probe that captures the actual HTTP `status`, `content-type`, `content-length`, or network error message.
- Shows a fixed bottom overlay (high z-index, monospace, dark background) with:
  - Summary line: `N/M ok · X broken · Y loading`
  - UA + URL
  - List of every broken image with all fields above
  - "Copy report" button (writes JSON to clipboard, with `window.prompt` fallback for iOS Safari when clipboard API is blocked)
  - "Collapse / Expand" toggle

Pure overlay — `position: fixed`, only mounts when the query flag is set, zero impact on any other element.

### 2) One-line wiring in `src/routes/index.tsx`

- Add `import ImageDebugOverlay from "@/components/ImageDebugOverlay";` next to existing imports.
- Add `<ImageDebugOverlay />` as the last child inside the top-level `<div className="min-h-screen …">` return.

No other change to `index.tsx`. All existing `<img loading="eager" decoding="async" …>` tags stay exactly as they are.

## How the user uses it

1. Publish.
2. On the affected iPhone / Yandex Browser / Android, open `https://elenakozlovaart.ru/?img-debug=1`.
3. Scroll the whole page; tap a painting card to open the modal; swipe through a couple of postcards.
4. Tap **Copy report** and paste the JSON back here.

The report tells us in one shot whether the failure is `404`, `403`, wrong `content-type` (e.g. `text/html` from a Cloudflare challenge or carrier proxy), `content-length: 0` (transcoder stripped the body), a CORS/network error, or `naturalWidth=0` after a successful fetch (decode failure — points to specific JPEGs).

## Technical details

Files touched:
- **Create** `src/components/ImageDebugOverlay.tsx` (~180 lines, self-contained, no new deps).
- **Edit** `src/routes/index.tsx`: 1 added import line + 1 added `<ImageDebugOverlay />` line. No image/JSX/style changes.

Safety:
- SSR-safe: all browser API access lives inside `useEffect` and is gated on `typeof window !== "undefined"`.
- Zero runtime cost when the query flag is absent — `useState(false)` + a single `useEffect` that returns immediately.
- No new dependencies, no router/search-param schema changes (raw `URLSearchParams` read).
- No service worker, no PWA, no caching changes.

## Out of scope (explicitly not doing this turn)

- Switching any image to `loading="lazy"`.
- Adding `width` / `height` / `fetchPriority` attributes.
- Re-encoding any image.
- Any design, layout, color, typography, copy, animation, structure, or routing change.
