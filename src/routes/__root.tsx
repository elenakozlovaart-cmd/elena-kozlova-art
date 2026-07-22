import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const assetRecoveryScript = `(function () {
  var key = "elena-kozlova-asset-reload-v2";
  var reloadParam = "__asset_reload";
  var reasonParam = "__asset_reason";

  function shouldHandle(url) {
    try {
      var parsed = new URL(url, window.location.href);
      return parsed.origin === window.location.origin && parsed.pathname.startsWith("/assets/");
    } catch (error) {
      return false;
    }
  }

  function isRecoverableMessage(message) {
    return (
      message.indexOf("/assets/") !== -1 ||
      message.indexOf("Failed to fetch dynamically imported module") !== -1 ||
      message.indexOf("Importing a module script failed") !== -1 ||
      message.indexOf("ChunkLoadError") !== -1 ||
      message.indexOf("Loading chunk") !== -1
    );
  }

  function buildFreshUrl(reason) {
    var currentUrl = new URL(window.location.href);
    var currentAttempt = Number(currentUrl.searchParams.get(reloadParam) || "0");
    currentUrl.searchParams.set(reloadParam, String(currentAttempt + 1));
    currentUrl.searchParams.set(reasonParam, reason);
    return currentUrl.toString();
  }

  function reloadOnce(reason, url) {
    try {
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(
        key,
        JSON.stringify({ reason: reason, url: url || window.location.href, at: Date.now() }),
      );
    } catch (error) {}

    window.location.replace(buildFreshUrl(reason));
  }

  window.addEventListener(
    "error",
    function (event) {
      var target = event.target;
      if (target instanceof HTMLScriptElement && shouldHandle(target.src)) {
        reloadOnce("script", target.src);
        return;
      }
      if (
        target instanceof HTMLLinkElement &&
        (target.rel === "stylesheet" || target.rel === "modulepreload") &&
        shouldHandle(target.href)
      ) {
        reloadOnce(target.rel, target.href);
        return;
      }

      var message = String((event && event.message) || "");
      if (isRecoverableMessage(message)) {
        reloadOnce("window-error", message);
      }
    },
    true,
  );

  window.addEventListener("vite:preloadError", function (event) {
    var detail = event && typeof event === "object" && "payload" in event ? event.payload : "";
    var message = String(detail || "");
    if (!isRecoverableMessage(message)) return;
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    reloadOnce("vite:preloadError", message);
  });

  window.addEventListener("unhandledrejection", function (event) {
    var message = String((event.reason && event.reason.message) || event.reason || "");
    if (!isRecoverableMessage(message)) return;
    if (event && typeof event.preventDefault === "function") {
      event.preventDefault();
    }
    reloadOnce("import", message);
  });

  window.addEventListener(
    "load",
    function () {
      try {
        window.sessionStorage.removeItem(key);

        var cleanUrl = new URL(window.location.href);
        if (cleanUrl.searchParams.has(reloadParam) || cleanUrl.searchParams.has(reasonParam)) {
          cleanUrl.searchParams.delete(reloadParam);
          cleanUrl.searchParams.delete(reasonParam);
          window.history.replaceState({}, document.title, cleanUrl.toString());
        }
      } catch (error) {}
    },
    { once: true },
  );
})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Елена Козлова — художник-акварелист" },
      { name: "description", content: "Официальный сайт Елены Козловой — художника-акварелиста из Москвы, резидента Союза акварелистов России. Авторские акварели: пейзажи, пленэры, путешествия, анималистика. Работы в наличии, открытки, кейсы сотрудничества и подбор картин в интерьеры кафе и отелей." },
      { property: "og:title", content: "Елена Козлова — художник-акварелист" },
      { property: "og:description", content: "Акварельные работы Елены Козловой — пейзажи, пленэры, путешествия, анималистика. Картины в наличии, открытки, сотрудничество для интерьеров." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elenakozlovaart.ru/" },
      { property: "og:image", content: "https://elenakozlovaart.ru/og-image.jpg" },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Елена Козлова — художник-акварелист" },
      { name: "twitter:description", content: "Акварельные работы Елены Козловой — пейзажи, пленэры, путешествия, анималистика. Картины в наличии, открытки, сотрудничество для интерьеров." },
      { name: "twitter:image", content: "https://elenakozlovaart.ru/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://elenakozlovaart.ru/" },
    ],
    scripts: [
      {
        children: assetRecoveryScript,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Елена Козлова",
            alternateName: "Elena Kozlova",
            jobTitle: "Художник-акварелист",
            description:
              "Художник-акварелист из Москвы (Троицк), резидент Союза акварелистов России. Пишет акварельные пейзажи, пленэры, путешествия, анималистику. Работы в наличии для интерьеров кафе, ресторанов, отелей.",
            url: "https://elenakozlovaart.ru",
            image: "https://elenakozlovaart.ru/og-image.jpg",
            email: "elenakozlova77@yandex.ru",
            sameAs: [
              "https://instagram.com/elenakozlovaart",
              "https://instagram.com/kozlova_gallery",
              "https://t.me/ElenaKozlova_Art",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Москва, Троицк",
              addressCountry: "RU",
            },
            memberOf: {
              "@type": "Organization",
              name: "Союз акварелистов России",
            },
            knowsAbout: [
              "акварель",
              "watercolour",
              "пленэр",
              "пейзаж",
              "анималистика",
              "акварельная живопись",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://elenakozlovaart.ru",
            name: "Елена Козлова — художник-акварелист",
            alternateName: "Elena Kozlova — Watercolour Artist",
            inLanguage: ["ru", "en"],
            author: {
              "@type": "Person",
              name: "Елена Козлова",
              url: "https://elenakozlovaart.ru",
            },
          },
        ]),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
