import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import exhibitionCss from "../exhibition-project.css?url";
import { makeSrcSet, type Lang } from "@/lib/img";
import waterHero from "@/assets/work-17-1600w.jpg";
import waterHero800 from "@/assets/work-17-800w.jpg";
import motherland from "@/assets/exhibition-motherland-diptych-1600w.jpg";
import motherland800 from "@/assets/exhibition-motherland-diptych-800w.jpg";

export const Route = createFileRoute("/exhibition-projects")({
  head: () => ({
    meta: [
      { title: "Выставочные проекты Елены Козловой" },
      {
        name: "description",
        content:
          "Авторские выставочные проекты Елены Козловой: «Вода держит свет» и диптих «Родина-мать».",
      },
      { property: "og:title", content: "Выставочные проекты Елены Козловой" },
      {
        property: "og:description",
        content:
          "Два самостоятельных акварельных проекта о памяти, месте, воде и историческом образе.",
      },
      { property: "og:url", content: "https://elenakozlovaart.ru/exhibition-projects" },
    ],
    links: [
      { rel: "stylesheet", href: exhibitionCss },
      { rel: "canonical", href: "https://elenakozlovaart.ru/exhibition-projects" },
    ],
  }),
  component: ExhibitionProjects,
});

const LANG_STORAGE_KEY = "elena-kozlova-lang";

const copy = {
  ru: {
    nav: {
      works: "Работы",
      about: "О художнике",
      exhibitions: "Выставки",
      projects: "Выставочные проекты",
      collaboration: "Сотрудничество",
      contact: "Контакты",
    },
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    kicker: "Авторская практика",
    title: "Выставочные проекты",
    water: {
      label: "Персональный выставочный проект",
      title: "Вода держит свет",
      meta: "2024–2026 · 9 произведений · бумага, акварель",
      body: "Два связанных цикла — «Вода» и «Сквозь дождь» — о свете, расстоянии и памяти места.",
      cta: "Открыть проект",
      alt: "Акварель «Тёплый след» из проекта «Вода держит свет»",
    },
    motherland: {
      label: "Диптих",
      title: "Родина-мать",
      meta: "2025 · две части 40 × 60 см · бумага, акварель",
      body: "Проект о соотношении монументального языка исторической памяти и хрупкого человеческого масштаба.",
      cta: "Открыть проект",
      alt: "Диптих Елены Козловой «Родина-мать»",
    },
  },
  en: {
    nav: {
      works: "Works",
      about: "About",
      exhibitions: "Exhibitions",
      projects: "Exhibition Projects",
      collaboration: "Collaboration",
      contact: "Contact",
    },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    kicker: "Artist's practice",
    title: "Exhibition Projects",
    water: {
      label: "Solo exhibition project",
      title: "Water Holds Light",
      meta: "2024–2026 · 9 original works · watercolour on paper",
      body: "Two connected series — “Water” and “Through the Rain” — exploring light, distance, and the memory of place.",
      cta: "View project",
      alt: "Watercolour “A Warm Trace” from the “Water Holds Light” project",
    },
    motherland: {
      label: "Diptych",
      title: "Motherland",
      meta: "2025 · two 40 × 60 cm works · watercolour on paper",
      body: "A project about the relationship between the monumental language of historical memory and fragile human scale.",
      cta: "View project",
      alt: "Elena Kozlova’s “Motherland” diptych",
    },
  },
} as const;

function ExhibitionProjects() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [lang, setLang] = useState<Lang>("ru");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === "ru" || stored === "en") setLang(stored);
    } catch {
      // Language preference is optional when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Keep the page usable when browser storage is unavailable.
    }
  }, [lang]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const t = copy[lang];
  const projects = [
    {
      to: "/exhibition-project" as const,
      image: waterHero,
      image800: waterHero800,
      copy: t.water,
      className: "water",
    },
    {
      to: "/exhibition-projects/motherland" as const,
      image: motherland,
      image800: motherland800,
      copy: t.motherland,
      className: "motherland",
    },
  ];

  if (pathname !== "/exhibition-projects") {
    return <Outlet />;
  }

  return (
    <div className="exhibition-project-page ep-index-page">
      <nav className="ep-nav">
        <div className="ep-nav-inner">
          <Link to="/" className="ep-brand">
            {lang === "ru" ? "Елена Козлова" : "Elena Kozlova"}
          </Link>
          <div className="ep-desktop-nav">
            <a href="/#works">{t.nav.works}</a>
            <a href="/#about">{t.nav.about}</a>
            <a href="/#cv">{t.nav.exhibitions}</a>
            <Link to="/exhibition-projects" className="active">
              {t.nav.projects}
            </Link>
            <Link to="/collaboration">{t.nav.collaboration}</Link>
            <a href="/#contact">{t.nav.contact}</a>
          </div>
          <div className="ep-language">
            <button
              type="button"
              onClick={() => setLang("ru")}
              className={lang === "ru" ? "active" : undefined}
            >
              RU
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={lang === "en" ? "active" : undefined}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="ep-mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      <div className={`ep-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <a href="/#works" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.works}
        </a>
        <a href="/#about" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.about}
        </a>
        <a href="/#cv" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.exhibitions}
        </a>
        <Link to="/exhibition-projects" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.projects}
        </Link>
        <Link to="/collaboration" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.collaboration}
        </Link>
        <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.contact}
        </a>
      </div>

      <main className="ep-index-main">
        <header className="ep-index-header">
          <p className="ep-kicker">{t.kicker}</p>
          <h1>{t.title}</h1>
        </header>

        <section className="ep-project-list" aria-label={t.title}>
          {projects.map((project) => (
            <article className={`ep-project-card ${project.className}`} key={project.to}>
              <Link
                to={project.to}
                className="ep-project-card-image"
                aria-label={`${project.copy.cta}: ${project.copy.title}`}
              >
                <img
                  src={project.image}
                  srcSet={makeSrcSet(project.image, project.image800)}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  alt={project.copy.alt}
                />
              </Link>
              <div className="ep-project-card-copy">
                <p className="ep-kicker">{project.copy.label}</p>
                <h2>{project.copy.title}</h2>
                <p className="ep-project-card-meta">{project.copy.meta}</p>
                <p className="ep-project-card-body">{project.copy.body}</p>
                <Link to={project.to} className="ep-button">
                  {project.copy.cta}
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="ep-footer">
        <div className="ep-footer-inner">
          <span className="ep-footer-name">
            {lang === "ru" ? "Елена Козлова" : "Elena Kozlova"}
          </span>
          <Link className="ep-footer-link" to="/">
            {lang === "ru" ? "На главную ↑" : "Home ↑"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
