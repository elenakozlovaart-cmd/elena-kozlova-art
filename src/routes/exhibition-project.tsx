import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import exhibitionCss from "../exhibition-project.css?url";
import { makeSrcSet, type Lang } from "@/lib/img";
import kalyazin from "@/assets/exhibition-water-kalyazin-1600w.jpg";
import kalyazin800 from "@/assets/exhibition-water-kalyazin-800w.jpg";
import neva from "@/assets/exhibition-water-neva-1600w.jpg";
import neva800 from "@/assets/exhibition-water-neva-800w.jpg";
import sea from "@/assets/exhibition-water-sea-1600w.jpg";
import sea800 from "@/assets/exhibition-water-sea-800w.jpg";
import stones from "@/assets/exhibition-water-stones-1600w.jpg";
import stones800 from "@/assets/exhibition-water-stones-800w.jpg";
import sunset from "@/assets/exhibition-water-sunset-1600w.jpg";
import sunset800 from "@/assets/exhibition-water-sunset-800w.jpg";
import throughRain from "@/assets/work-08-1600w.jpg";
import throughRain800 from "@/assets/work-08-800w.jpg";
import warmTrace from "@/assets/work-17-1600w.jpg";
import warmTrace800 from "@/assets/work-17-800w.jpg";
import proSvet from "@/assets/work-18-1600w.jpg";
import proSvet800 from "@/assets/work-18-800w.jpg";
import walkingSky from "@/assets/work-19-1600w.jpg";
import walkingSky800 from "@/assets/work-19-800w.jpg";

export const Route = createFileRoute("/exhibition-project")({
  head: () => ({
    meta: [
      { title: "«Вода держит свет» — выставочный проект Елены Козловой" },
      {
        name: "description",
        content:
          "Персональный выставочный проект Елены Козловой «Вода держит свет»: два акварельных цикла, девять произведений, концепция и логика экспозиции.",
      },
      {
        property: "og:title",
        content: "«Вода держит свет» — выставочный проект Елены Козловой",
      },
      {
        property: "og:description",
        content:
          "Два акварельных цикла о воде, свете и памяти места. Девять произведений 2024–2026 годов.",
      },
      {
        property: "og:url",
        content: "https://elenakozlovaart.ru/exhibition-project",
      },
    ],
    links: [
      { rel: "stylesheet", href: exhibitionCss },
      { rel: "canonical", href: "https://elenakozlovaart.ru/exhibition-project" },
    ],
  }),
  component: ExhibitionProject,
});

const LANG_STORAGE_KEY = "elena-kozlova-lang";
const CONTACT_LINK = "https://t.me/ElenaKozlovaArt";

const waterWorks = [
  {
    src: neva,
    src800: neva800,
    orientation: "portrait",
    ru: { title: "Нева", alt: "Акварель «Нева» из цикла «Вода»" },
    en: { title: "Neva", alt: 'Watercolour "Neva" from the "Water" series' },
  },
  {
    src: sunset,
    src800: sunset800,
    orientation: "portrait",
    ru: { title: "Закат с птицами", alt: "Акварель «Закат с птицами» из цикла «Вода»" },
    en: { title: "Sunset with Birds", alt: 'Watercolour "Sunset with Birds"' },
  },
  {
    src: stones,
    src800: stones800,
    orientation: "portrait",
    ru: {
      title: "Прозрачная вода с камнями",
      alt: "Акварель «Прозрачная вода с камнями» из цикла «Вода»",
    },
    en: { title: "Clear Water with Stones", alt: 'Watercolour "Clear Water with Stones"' },
  },
  {
    src: sea,
    src800: sea800,
    orientation: "landscape",
    ru: { title: "Море волнуется", alt: "Акварель «Море волнуется» из цикла «Вода»" },
    en: { title: "The Sea Is Stirring", alt: 'Watercolour "The Sea Is Stirring"' },
  },
  {
    src: kalyazin,
    src800: kalyazin800,
    orientation: "portrait",
    ru: {
      title: "Калязин. Затопленная колокольня",
      alt: "Акварель «Калязин. Затопленная колокольня»",
    },
    en: {
      title: "Kalyazin. The Flooded Bell Tower",
      alt: 'Watercolour "Kalyazin. The Flooded Bell Tower"',
    },
  },
] as const;

const rainWorks = [
  {
    src: warmTrace,
    src800: warmTrace800,
    sizeRu: "70 × 50 см",
    sizeEn: "70 × 50 cm",
    year: "2026",
    large: true,
    ru: {
      title: "Тёплый след",
      alt: "Акварель «Тёплый след» из цикла «Сквозь дождь»",
      description:
        "Капли удерживают свет города и одновременно скрывают его. Сердце на запотевшем стекле становится хрупким следом человеческого присутствия.",
    },
    en: {
      title: "A Warm Trace",
      alt: 'Watercolour "A Warm Trace" from the "Through the Rain" series',
      description:
        "Drops hold the city's light while concealing it. A heart on misted glass becomes a fragile trace of human presence.",
    },
  },
  {
    src: throughRain,
    src800: throughRain800,
    sizeRu: "60 × 40 см",
    sizeEn: "60 × 40 cm",
    year: "2025",
    large: false,
    ru: {
      title: "Сквозь дождь",
      alt: "Акварель «Сквозь дождь»",
      description:
        "Город теряет устойчивые контуры и превращается в поле цветовых сигналов. Дождевое стекло становится границей между наблюдением и переживанием.",
    },
    en: {
      title: "Through the Rain",
      alt: 'Watercolour "Through the Rain"',
      description:
        "The city loses its stable contours and becomes a field of colour signals. Rain-covered glass forms a boundary between observation and experience.",
    },
  },
  {
    src: proSvet,
    src800: proSvet800,
    sizeRu: "60 × 40 см",
    sizeEn: "60 × 40 cm",
    year: "2026",
    large: false,
    ru: {
      title: "ПроСвет",
      alt: "Акварель «ПроСвет»",
      description:
        "Поверхность зонта собирает дождь и отражённый городской свет. Видимое распадается на цвет, блик и движение.",
    },
    en: {
      title: "ProSvet",
      alt: 'Watercolour "ProSvet"',
      description:
        "The surface of an umbrella gathers rain and reflected city light. What is visible dissolves into colour, glare, and movement.",
    },
  },
  {
    src: walkingSky,
    src800: walkingSky800,
    sizeRu: "60 × 40 см",
    sizeEn: "60 × 40 cm",
    year: "2026",
    large: false,
    ru: {
      title: "Идущие по небу",
      alt: "Акварель «Идущие по небу»",
      description:
        "Отражение в мокрой мостовой меняет направление взгляда: зритель одновременно видит землю и небо.",
    },
    en: {
      title: "Walking in the Sky",
      alt: 'Watercolour "Walking in the Sky"',
      description:
        "A reflection in wet pavement redirects the gaze: the viewer sees ground and sky at the same time.",
    },
  },
] as const;

const copy = {
  ru: {
    nav: {
      works: "Работы",
      about: "О художнике",
      exhibitions: "Выставки",
      project: "Выставочные проекты",
      collaboration: "Сотрудничество",
      contact: "Контакты",
    },
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    eyebrow: "Персональный выставочный проект",
    title: (
      <>
        Вода
        <br />
        держит свет
      </>
    ),
    medium: "Акварель · 2024–2026",
    workCount: "9 произведений",
    scroll: "Прокрутите, чтобы увидеть проект",
    conceptKicker: "Концепция",
    conceptTitle: "Два состояния воды",
    concept: [
      "«Вода держит свет» объединяет два акварельных цикла: «Вода» (2024) и «Сквозь дождь» (2025–2026). Проект исследует, как вода меняет восприятие пространства, света и памяти о месте.",
      "Экспозиция движется от открытого водного горизонта к близкой поверхности дождевого стекла. Сначала вода становится ландшафтом и носителем памяти, затем — оптической линзой, собирающей городской свет в цветовые пятна.",
    ],
    stateOne: "Открытая вода",
    stateOneDetail: "Горизонт · движение · память",
    stateTwo: "Вода как линза",
    stateTwoDetail: "Стекло · дождь · городской свет",
    waterKicker: "Цикл 01 · 2024",
    waterTitle: "Открытая вода",
    waterNote:
      "Пять акварелей одного формата показаны в едином физическом масштабе: от чистого движения воды к образу места, сохраняющего историческую память.",
    waterMeta: "2024 · 28 × 37 см · бумага, акварель",
    rainKicker: "Цикл 02 · 2025–2026",
    rainTitle: "Сквозь дождь",
    rainNote:
      "Вода перестаёт быть пейзажем и становится способом видеть: капли, стекло и отражения приближают зрителя к поверхности города.",
    statusKicker: "Статус проекта",
    statusTitle: "Проект представлен на Open Call «Выставочные залы Москвы» — 2027",
    statusBody:
      "Девять существующих оригинальных произведений образуют камерную персональную экспозицию — от открытого горизонта к близкой поверхности дождевого стекла.",
    contact: "Связаться с художником",
    backToTop: "Наверх ↑",
  },
  en: {
    nav: {
      works: "Works",
      about: "About",
      exhibitions: "Exhibitions",
      project: "Exhibition Projects",
      collaboration: "Collaboration",
      contact: "Contact",
    },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    eyebrow: "Solo exhibition project",
    title: (
      <>
        Water
        <br />
        holds light
      </>
    ),
    medium: "Watercolour · 2024–2026",
    workCount: "9 original works",
    scroll: "Scroll to view the project",
    conceptKicker: "Concept",
    conceptTitle: "Two states of water",
    concept: [
      "“Water Holds Light” brings together two watercolour series: “Water” (2024) and “Through the Rain” (2025–2026). The project explores how water changes our perception of space, light, and the memory of place.",
      "The exhibition moves from an open water horizon to the close surface of rain-covered glass. Water first becomes landscape and a vessel for memory, then an optical lens gathering city light into fields of colour.",
    ],
    stateOne: "Open water",
    stateOneDetail: "Horizon · movement · memory",
    stateTwo: "Water as a lens",
    stateTwoDetail: "Glass · rain · city light",
    waterKicker: "Series 01 · 2024",
    waterTitle: "Open water",
    waterNote:
      "Five watercolours of the same sheet size are shown at one physical scale, moving from the pure motion of water to a place holding historical memory.",
    waterMeta: "2024 · 28 × 37 cm · watercolour on paper",
    rainKicker: "Series 02 · 2025–2026",
    rainTitle: "Through the Rain",
    rainNote:
      "Water stops being landscape and becomes a way of seeing: drops, glass, and reflections bring the viewer closer to the surface of the city.",
    statusKicker: "Project status",
    statusTitle: "The project is presented for the Moscow Exhibition Halls Open Call — 2027",
    statusBody:
      "Nine existing original works form an intimate solo exhibition, moving from an open horizon to the close surface of rain-covered glass.",
    contact: "Contact the artist",
    backToTop: "Back to top ↑",
  },
} as const;

function ExhibitionProject() {
  const [lang, setLang] = useState<Lang>("ru");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === "ru" || stored === "en") setLang(stored);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {}
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

  return (
    <div className="exhibition-project-page">
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
              {t.nav.project}
            </Link>
            <Link to="/collaboration">{t.nav.collaboration}</Link>
            <a href="#contact">{t.nav.contact}</a>
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
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
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
          {t.nav.project}
        </Link>
        <Link to="/collaboration" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.collaboration}
        </Link>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
          {t.nav.contact}
        </a>
      </div>

      <main>
        <section className="ep-hero" id="top">
          <div className="ep-hero-copy">
            <p className="ep-eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <div className="ep-accent-rule" />
            <div className="ep-hero-meta">
              <span>{lang === "ru" ? "Елена Козлова" : "Elena Kozlova"}</span>
              <span>{t.medium}</span>
              <span>{t.workCount}</span>
            </div>
            <span className="ep-scroll-mark">{t.scroll}</span>
          </div>
          <div
            className="ep-hero-art"
            role="img"
            aria-label={rainWorks[0][lang].alt}
            style={{
              backgroundImage: `linear-gradient(90deg, var(--ep-deep), transparent 24%), linear-gradient(0deg, rgb(20 43 58 / 30%), transparent 40%), url("${warmTrace}")`,
            }}
          />
        </section>

        <section className="ep-section">
          <div className="ep-container ep-concept-grid">
            <div>
              <p className="ep-kicker">{t.conceptKicker}</p>
              <h2>{t.conceptTitle}</h2>
              <div className="ep-concept-copy">
                {t.concept.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="ep-states">
              <div className="ep-state">
                <span className="ep-state-number">01</span>
                <strong>{t.stateOne}</strong>
                <span className="ep-state-detail">{t.stateOneDetail}</span>
              </div>
              <div className="ep-state">
                <span className="ep-state-number">02</span>
                <strong>{t.stateTwo}</strong>
                <span className="ep-state-detail">{t.stateTwoDetail}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ep-section ep-water-section">
          <div className="ep-container">
            <div className="ep-section-head">
              <div>
                <p className="ep-kicker">{t.waterKicker}</p>
                <h2>{t.waterTitle}</h2>
              </div>
              <p className="ep-section-note">{t.waterNote}</p>
            </div>
            <div className="ep-water-grid">
              {waterWorks.map((work) => (
                <article key={work.ru.title}>
                  <div className={`ep-scale-stage ${work.orientation}`}>
                    <img
                      src={work.src}
                      srcSet={makeSrcSet(work.src, work.src800)}
                      sizes="(max-width: 680px) 90vw, (max-width: 1120px) 45vw, 390px"
                      alt={work[lang].alt}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="ep-art-title">{work[lang].title}</h3>
                  <p className="ep-art-meta">{t.waterMeta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ep-section ep-rain-section">
          <div className="ep-container">
            <div className="ep-section-head">
              <div>
                <p className="ep-kicker">{t.rainKicker}</p>
                <h2>{t.rainTitle}</h2>
              </div>
              <p className="ep-section-note">{t.rainNote}</p>
            </div>
            <div className="ep-rain-grid">
              {rainWorks.map((work) => (
                <article
                  key={work.ru.title}
                  className={`ep-rain-card ${work.large ? "large" : ""}`}
                >
                  <div className="ep-rain-frame">
                    <img
                      src={work.src}
                      srcSet={makeSrcSet(work.src, work.src800)}
                      sizes="(max-width: 1120px) 90vw, 580px"
                      alt={work[lang].alt}
                      loading="lazy"
                    />
                  </div>
                  <div className="ep-rain-info">
                    <div>
                      <h3>{work[lang].title}</h3>
                      <p className="ep-art-meta">
                        {work.year} · {lang === "ru" ? work.sizeRu : work.sizeEn}
                      </p>
                    </div>
                    <p className="ep-rain-description">{work[lang].description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ep-section ep-status-section" id="contact">
          <div className="ep-container">
            <div className="ep-status-card">
              <p className="ep-kicker">{t.statusKicker}</p>
              <h2>{t.statusTitle}</h2>
              <p>{t.statusBody}</p>
              <a className="ep-button" href={CONTACT_LINK} target="_blank" rel="noopener noreferrer">
                {t.contact}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ep-footer">
        <div className="ep-footer-inner">
          <span className="ep-footer-name">
            {lang === "ru" ? "Елена Козлова" : "Elena Kozlova"}
          </span>
          <a className="ep-footer-link" href="#top">
            {t.backToTop}
          </a>
        </div>
      </footer>
    </div>
  );
}
