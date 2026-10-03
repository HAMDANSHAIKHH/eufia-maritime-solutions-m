/**
 * Configurable analytics integration.
 *
 * Nothing loads until a measurement ID is provided through the project's API
 * keys UI (VITE_GA_MEASUREMENT_ID, e.g. G-XXXXXXXXXX). No credentials are
 * hardcoded and no tracker runs without explicit configuration.
 */

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

let started = false;

function start(id: string) {
  if (started || typeof window === "undefined") return;
  started = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer?.push(args);
  };
  w.gtag("js", new Date());
  w.gtag("config", id, { send_page_view: false });
}

/** Sends a page_view for the current route when analytics is configured. */
export function trackPageview(path: string) {
  if (!measurementId) return;
  start(measurementId);
  const w = window as GtagWindow;
  w.gtag?.("event", "page_view", { page_path: path });
}
