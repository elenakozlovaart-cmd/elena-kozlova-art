import { createFileRoute, Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import exhibitionCss from "../exhibition-project.css?url";
import diptych from "@/assets/exhibition-motherland-diptych-1200w.jpg";
import diptych800 from "@/assets/exhibition-motherland-diptych-800w.jpg";
import motherlandI from "@/assets/exhibition-motherland-source-i.jpg";
import motherlandII from "@/assets/exhibition-motherland-source-ii.jpg";

export const Route = createFileRoute("/exhibition-projects/motherland")({
  head: () => ({
    meta: [
      { title: "Родина-мать" },
      {
        name: "description",
        content: "Историческая память, монументальный образ и человеческие жизни",
      },
      { property: "og:title", content: "Родина-мать" },
      {
        property: "og:description",
        content: "Историческая память, монументальный образ и человеческие жизни",
      },
      { property: "og:url", content: "https://elenakozlovaart.ru/exhibition-projects/motherland" },
    ],
    links: [
      { rel: "stylesheet", href: exhibitionCss },
      { rel: "canonical", href: "https://elenakozlovaart.ru/exhibition-projects/motherland" },
    ],
  }),
  component: MotherlandProject,
});

const statement = [
  "Диптих «Родина-мать» обращается к двум образам, связанным с исторической памятью Волгограда: монументу «Родина-мать зовёт!» и фонтану «Детский хоровод» («Бармалей»). В первом листе фигура монумента показана крупно. Меч пересекает открытое небо, а свободные красные, тёмные и лиловые пятна существуют между цветением, следом взрыва и эмоциональным отпечатком памяти. Во втором листе монумент возвышается над детским хороводом: Родина-мать становится образом Матери, вставшей на защиту детей. Красно-чёрное поле объединяет два символа и превращает пространство между ними в зону напряжения.",
  "Проект не предлагает ни идеализации, ни отрицания прошлого. Он рассматривает, как унаследованный визуальный язык войны продолжает формировать современное восприятие истории. Монументальная фигура воплощает героизм и коллективную стойкость. Детский хоровод возвращает в это пространство телесную хрупкость и мирную повседневность. Рядом с монументальным образом возникает память о конкретных людях и цене войны.",
] as const;

const works = [
  {
    image: motherlandI,
    title: "Родина-мать I",
    number: "I",
    description:
      "Фигура показана с близкой точки зрения. Её масштаб выходит за границы листа, а меч пересекает пространство неба. Цветовые потёки делают торжественный образ неустойчивым: они могут читаться одновременно как цветение, след времени и след разрушения.",
  },
  {
    image: motherlandII,
    title: "Родина-мать II",
    number: "II",
    description:
      "Монумент соединён с образом детского хоровода. Родина-мать возвышается над детьми как Мать, вставшая на их защиту. В одной композиции встречаются государственный символ и хрупкий человеческий масштаб. Красно-чёрное поле становится пространством памяти, где защита, героическое и трагическое существуют вместе.",
  },
] as const;

function MotherlandProject() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="exhibition-project-page ep-motherland-page">
      <nav className="ep-nav">
        <div className="ep-nav-inner">
          <Link to="/" className="ep-brand">
            Елена Козлова
          </Link>
          <div className="ep-desktop-nav">
            <a href="/#works">Работы</a>
            <a href="/#about">О художнике</a>
            <a href="/#cv">Выставки</a>
            <Link to="/exhibition-projects" className="active">
              Выставочные проекты
            </Link>
            <Link to="/collaboration">Сотрудничество</Link>
            <a href="#contact">Контакты</a>
          </div>
          <button
            type="button"
            className="ep-mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
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
        <a href="/#works" onClick={closeMenu}>
          Работы
        </a>
        <a href="/#about" onClick={closeMenu}>
          О художнике
        </a>
        <a href="/#cv" onClick={closeMenu}>
          Выставки
        </a>
        <Link to="/exhibition-projects" onClick={closeMenu}>
          Выставочные проекты
        </Link>
        <Link to="/collaboration" onClick={closeMenu}>
          Сотрудничество
        </Link>
        <a href="#contact" onClick={closeMenu}>
          Контакты
        </a>
      </div>

      <main>
        <section className="ep-motherland-hero" id="top">
          <div className="ep-motherland-hero-copy">
            <p className="ep-motherland-eyebrow">ПРОЕКТ ДЛЯ ART’COMA 2026</p>
            <h1>Родина-мать</h1>
            <p className="ep-motherland-kind">диптих</p>
            <div className="ep-motherland-hero-meta">
              <span>Елена Козлова</span>
              <span>2025 / бумага, акварель</span>
              <span>40 x 60 см x 2</span>
            </div>
            <p className="ep-motherland-theme">Тема фестиваля: «Снизу ещё не постучали»</p>
          </div>
          <div className="ep-motherland-hero-art">
            <img
              src={diptych}
              srcSet={`${diptych800} 800w, ${diptych} 1200w`}
              sizes="(max-width: 760px) 100vw, 50vw"
              alt="Родина-мать"
              width={1200}
              height={896}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="ep-motherland-section ep-motherland-overview">
          <div className="ep-container">
            <header className="ep-motherland-section-header">
              <h2>Диптих</h2>
              <p>Два вертикальных листа образуют единое произведение</p>
            </header>
            <div className="ep-motherland-overview-layout">
              <div className="ep-motherland-overview-works">
                {works.map((work) => (
                  <figure key={`overview-${work.title}`}>
                    <img src={work.image} alt={work.title} />
                    <figcaption>{work.title}</figcaption>
                  </figure>
                ))}
              </div>
              <aside className="ep-motherland-tech">
                <strong>ТЕХНИЧЕСКИЕ ДАННЫЕ</strong>
                <span>2025</span>
                <span>Бумага, акварель</span>
                <span>40 x 60 см каждая</span>
                <span>Две части</span>
                <span>Вертикальная ориентация</span>
              </aside>
            </div>
            <p className="ep-motherland-pdf-marker">Art’Coma 2026 / 02</p>
          </div>
        </section>

        <section className="ep-motherland-section ep-motherland-statement">
          <div className="ep-container">
            <header className="ep-motherland-section-header">
              <h2>О проекте</h2>
              <p>Историческая память, монументальный образ и человеческие жизни</p>
            </header>
            <div className="ep-motherland-statement-grid">
              {statement.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote>
              Прозрачность акварели противопоставлена материальной тяжести бетонного монумента.
              Память здесь показана не неподвижной: она меняется, наслаивается и заново
              прочитывается из настоящего. Диптих задаёт вопрос, способна ли историческая память
              защитить общество от повторения трагедий прошлого. Работа соединяет гордость за
              мужество защитников, скорбь по погибшим и тревогу перед возможным повторением войны,
              не сводя прошлое к однозначной формуле.
            </blockquote>
            <p className="ep-motherland-pdf-marker">Art’Coma 2026 / 03</p>
          </div>
        </section>

        <section className="ep-motherland-section ep-motherland-parts">
          <div className="ep-container">
            <header className="ep-motherland-section-header">
              <h2>Две части</h2>
              <p>Сопоставление монументального призыва и уязвимости человеческой жизни</p>
            </header>
            <div className="ep-motherland-parts-grid">
              {works.map((work) => (
                <article key={work.title}>
                  <img src={work.image} alt={work.title} loading="lazy" />
                  <div>
                    <h3>{work.number}</h3>
                    <p>{work.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="ep-motherland-pdf-marker">Art’Coma 2026 / 04</p>
          </div>
        </section>

        <section className="ep-motherland-section ep-motherland-author" id="contact">
          <div className="ep-container">
            <header className="ep-motherland-section-header">
              <h2>Экспонирование и автор</h2>
            </header>
            <div className="ep-motherland-author-grid">
              <div className="ep-motherland-installation">
                <h3>ЭКСПОНИРОВАНИЕ</h3>
                <p>
                  Оба листа являются единым произведением и экспонируются только вместе.
                  Рекомендуемая схема - вертикальное размещение на одной стене, выравнивание по
                  верхнему краю, одинаковое оформление и интервал 8-12 см. Тип рамы, защитное
                  остекление и подвес согласуются с организаторами.
                </p>
                <h3>АВТОРСТВО</h3>
                <p>
                  Обе работы полностью выполнены Еленой Козловой. Соавторы отсутствуют. Произведение
                  создано в 2025 году и соответствует требованию Art’Coma о работах не ранее 2024
                  года.
                </p>
              </div>
              <div className="ep-motherland-artist">
                <h3>Елена Козлова</h3>
                <strong>ХУДОЖНИК-АКВАРЕЛИСТ / МОСКВА</strong>
                <p>
                  Член Союза акварелистов России. Работает в студии и на пленэрах, исследуя
                  отношения между местом, памятью, светом и внутренним состоянием человека.
                  Участвует в групповых выставках с 2016 года; в 2019 году состоялась персональная
                  выставка в Доме учёных в Троицке. В 2026 году работа художницы отобрана для IV
                  Международного фестиваля акварели Colors of Armenia. В 2026 году — участница
                  международной онлайн-выставки «Water», No.35 Gallery, Лондон.
                </p>
                <div className="ep-motherland-contacts">
                  <a href="https://elenakozlovaart.ru">elenakozlovaart.ru</a>
                  <a href="mailto:elenakozlova77@yandex.ru">elenakozlova77@yandex.ru</a>
                  <a href="https://t.me/ElenaKozlovaArt" target="_blank" rel="noopener noreferrer">
                    t.me/ElenaKozlovaArt
                  </a>
                </div>
              </div>
            </div>
            <p className="ep-motherland-pdf-marker">Art’Coma 2026 / 05</p>
          </div>
        </section>
      </main>
    </div>
  );
}
