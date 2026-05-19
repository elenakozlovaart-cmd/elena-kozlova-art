import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpeg";
import portrait from "@/assets/artist-portrait.jpg";
import w1 from "@/assets/work-01.jpeg";
import w2 from "@/assets/work-02.jpeg";
import w3 from "@/assets/work-03.jpeg";
import w4 from "@/assets/work-04.jpeg";
import w5 from "@/assets/work-05.jpg";
import w6 from "@/assets/work-06.jpeg";
import w7 from "@/assets/work-07.jpeg";
import w8 from "@/assets/work-08.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Елена Козлова — Художник-акварелист" },
      { name: "description", content: "Современная акварельная живопись. Пейзажи внутренних состояний и фигуративные этюды." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  component: Index,
});

type Lang = "ru" | "en";

const works = [
  { src: w1, ru: { t: "Дилижан", s: "32 × 41 см", y: "2026", st: "В наличии" }, en: { t: "Dilijan", s: "32 × 41 cm", y: "2026", st: "Available" } },
  { src: w2, ru: { t: "Нораванк", s: "36 × 48 см", y: "2026", st: "В наличии" }, en: { t: "Noravank", s: "36 × 48 cm", y: "2026", st: "Available" } },
  { src: w3, ru: { t: "Озеро Севан", s: "30 × 42 см", y: "2026", st: "Продано" }, en: { t: "Lake Sevan", s: "30 × 42 cm", y: "2026", st: "Sold" } },
  { src: w4, ru: { t: "Ереван. Площадь Республики", s: "32 × 45 см", y: "2025", st: "В наличии" }, en: { t: "Yerevan, Republic Square", s: "32 × 45 cm", y: "2025", st: "Available" } },
  { src: w5, ru: { t: "Гюмри", s: "38 × 56 см", y: "2025", st: "В наличии" }, en: { t: "Gyumri", s: "38 × 56 cm", y: "2025", st: "Available" } },
  { src: w6, ru: { t: "Родина-мать I", s: "30 × 42 см", y: "2025", st: "В наличии" }, en: { t: "Motherland I", s: "30 × 42 cm", y: "2025", st: "Available" } },
  { src: w7, ru: { t: "Родина-мать II", s: "30 × 42 см", y: "2025", st: "Продано" }, en: { t: "Motherland II", s: "30 × 42 cm", y: "2025", st: "Sold" } },
  { src: w8, ru: { t: "Сквозь дождь", s: "26 × 36 см", y: "2025", st: "В наличии" }, en: { t: "Through the Rain", s: "26 × 36 cm", y: "2025", st: "Available" } },
];

function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = lang === "ru"
    ? {
        nav: { works: "Работы", about: "О художнике", cv: "Выставки", contact: "Контакты" },
        heroKicker: "Художник-акварелист",
        heroName: "Елена\nКозлова",
        heroLead: "Работает с темой внутренних состояний через пейзаж и фигуративные этюды.\nУчастница выставок в России, работы в частных коллекциях Европы и России.",
        heroCta: "Смотреть работы",
        heroCta2: "Связаться",
        aboutKicker: "О художнике",
        aboutBody: [
          "В своей практике Елена Козлова обращается к акварели как к медиуму, позволяющему фиксировать ускользающие состояния — свет, движение, внутреннее напряжение формы.",
          "Её работы находятся на границе между наблюдением и переживанием: пейзаж становится отражением внутреннего опыта, а фигура — способом исследования пластики и присутствия.",
        ],
        aboutCta: "Запросить доступные работы",
        worksKicker: "Работы",
        worksTitle: "Избранное",
        worksIntro: "Подборка недавних акварелей.\nКаждая работа уникальна и существует в единственном экземпляре.",
        cardMedium: "Акварель на бумаге",
        cardCta: "Запросить стоимость",
        cvKicker: "Биография",
        cvTitle: "Избранные выставки",
        cvSolo: "Персональные выставки",
        cvGroup: "Групповые выставки",
        cvPlein: "Пленэры",
        cvSoloItems: ["2019 — Персональная выставка, Дом учёных, Троицк (Москва)"],
        cvGroupItems: [
          "2025 — Акварельный фестиваль «Яблоневый сад», Лобня",
          "2025 — Троицкий музей им. Лялько, Троицк (Москва)",
          "2024 — Коллективная выставка «Моё лето», галерея современного искусства Molbert, Санкт-Петербург",
          "2023 — Выставка Троицкого отделения Союза художников Подмосковья, Дом учёных, Троицк",
          "2023 — Коллективная выставка «Фестиваль цветов», Троицкая открытая галерея, Москва",
        ],
        cvPleinItems: ["2024 — остров Ольхон, Байкал", "2026 — художественный тур по Армении"],
        acqKicker: "Приобретение",
        acqBody: "Работы доступны по запросу.\nДля уточнения стоимости, наличия и условий доставки свяжитесь с художником.",
        footerName: "Елена Козлова",
        footerTagline: "современный художник, работающий в технике акварели",
        footerBio: "Практика Елены Козловой сосредоточена на изображении пейзажей внутренних состояний и фигуративных этюдов. В её работах акварель выступает как средство фиксации эмоциональных и пластических наблюдений, соединяя спонтанность и точность.",
        footerMeta: [
          "Член Союза акварелистов России.",
          "Участница групповых выставок в Москве, Санкт-Петербурге и Подмосковье (2021–2026).",
          "Работы находятся в частных коллекциях в России и Европе.",
        ],
        footerContactLabel: "Связь",
        footerCta: "Написать",
        rights: "Все права защищены",
      }
    : {
        nav: { works: "Works", about: "About", cv: "Exhibitions", contact: "Contact" },
        heroKicker: "Watercolour artist",
        heroName: "Elena\nKozlova",
        heroLead: "Landscapes of inner states and figurative studies.\nOriginal works available.",
        heroCta: "View works",
        heroCta2: "Inquire",
        aboutKicker: "About the artist",
        aboutBody: [
          "Elena Kozlova is a contemporary watercolour artist whose practice explores the relationship between perception and inner experience. Her work moves between landscape and figurative study, treating both as spaces of observation and reflection.",
          "Working primarily with watercolour, she focuses on light, movement and the subtle tension of form. Each piece is approached as a singular work — responsive, immediate, and materially sensitive.",
          "Her works are held in private collections across Europe and Russia.",
        ],
        aboutCta: "Inquire about available works",
        worksKicker: "Works",
        worksTitle: "Selected",
        worksIntro: "A selection of recent works in watercolour.\nEach piece is unique and created as an original.",
        cardMedium: "Watercolour on paper",
        cardCta: "Inquire",
        cvKicker: "Biography",
        cvTitle: "Selected Exhibitions",
        cvSolo: "Solo exhibition",
        cvGroup: "Group exhibitions",
        cvPlein: "Plein air",
        cvSoloItems: ["2019 — House of Scientists, Troitsk (Moscow)"],
        cvGroupItems: [
          "2025 — Watercolour Festival “Yablonevy Sad”, Lobnya",
          "2025 — Lyalka Museum, Troitsk (Moscow)",
          "2024 — “My Summer”, Molbert Contemporary Gallery, Saint Petersburg",
          "2023 — Union of Artists of Moscow Region, Troitsk",
          "2023 — “Flower Festival”, Troitsk Open Gallery",
        ],
        cvPleinItems: ["2024 — Olkhon Island, Lake Baikal", "2026 — Armenia (art tour)"],
        acqKicker: "Acquisition",
        acqBody: "Works are available upon request.\nFor pricing, availability, and shipping details, please get in touch.",
        footerName: "Elena Kozlova",
        footerTagline: "contemporary watercolour artist",
        footerBio: "Elena Kozlova's practice focuses on landscapes of inner states and figurative studies. In her work, watercolour acts as a medium for fixing emotional and plastic observations — joining spontaneity and precision.",
        footerMeta: [
          "Member of the Russian Watercolour Society.",
          "Participant in group exhibitions in Moscow, Saint Petersburg and the Moscow region (2021–2026).",
          "Works are held in private collections across Russia and Europe.",
        ],
        footerContactLabel: "For inquiries, commissions and collaborations",
        footerCta: "Contact",
        rights: "All rights reserved",
      };

  const mailto = "mailto:elenakozlova77@yandex.ru";
  const serif = { fontFamily: "'Cormorant Garamond', serif" };
  const sans = { fontFamily: "'Inter', sans-serif" };

  return (
    <div className="min-h-screen bg-background text-foreground" style={sans}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="text-[11px] tracking-[0.35em] uppercase">
            {lang === "ru" ? "Елена Козлова" : "Elena Kozlova"}
          </a>
          <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-foreground/70">
            <a href="#works" className="hover:text-foreground transition-colors">{t.nav.works}</a>
            <a href="#about" className="hover:text-foreground transition-colors">{t.nav.about}</a>
            <a href="#cv" className="hover:text-foreground transition-colors">{t.nav.cv}</a>
            <a href="#contact" className="hover:text-foreground transition-colors">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-1 text-[11px] tracking-[0.2em]">
            <button
              onClick={() => setLang("ru")}
              className={`px-2 py-1 transition-colors ${lang === "ru" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"}`}
            >
              RU
            </button>
            <span className="text-foreground/30">/</span>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors ${lang === "en" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"}`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="pt-28 md:pt-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end min-h-[88vh] pb-16 md:pb-24">
          <div className="md:col-span-5 md:pb-12">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">{t.heroKicker}</p>
            <h1 style={serif} className="text-6xl md:text-[7.5rem] leading-[0.92] font-light whitespace-pre-line tracking-tight">
              {t.heroName}
            </h1>
            <p className="mt-10 text-base md:text-[15px] leading-[1.8] text-foreground/70 whitespace-pre-line max-w-md">
              {t.heroLead}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 items-center text-[11px] tracking-[0.3em] uppercase">
              <a href="#works" className="border-b border-foreground pb-1 hover:text-foreground/60 hover:border-foreground/60 transition-colors">
                {t.heroCta}
              </a>
              <a href={mailto} className="text-foreground/60 hover:text-foreground transition-colors">
                {t.heroCta2}
              </a>
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-secondary">
              <img src={hero} alt="Elena Kozlova" className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-foreground/40 text-right">
              {lang === "ru" ? "Портрет художника" : "Portrait of the artist"}
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 md:col-start-1">
            <div className="md:sticky md:top-32">
              <img src={portrait} alt={lang === "ru" ? "Елена Козлова в студии" : "Elena Kozlova"} className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-16">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">{t.aboutKicker}</p>
            <h2 style={serif} className="text-3xl md:text-5xl leading-[1.15] font-light mb-12">
              {lang === "ru" ? "Акварель как фиксация ускользающего." : "Watercolour as a record of the fleeting."}
            </h2>
            <div className="space-y-6 text-[15px] leading-[1.85] text-foreground/75 max-w-xl">
              {t.aboutBody.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <a href={mailto} className="inline-block mt-12 text-[11px] tracking-[0.3em] uppercase border-b border-foreground pb-1 hover:text-foreground/60 hover:border-foreground/60 transition-colors">
              {t.aboutCta}
            </a>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
            <div className="md:col-span-5">
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.worksKicker}</p>
              <h2 style={serif} className="text-5xl md:text-7xl font-light leading-none">{t.worksTitle}</h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 md:pt-4">
              <p className="text-[15px] leading-[1.85] text-foreground/70 whitespace-pre-line">{t.worksIntro}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-20 md:gap-y-28">
            {works.map((w, i) => {
              const layout = [
                "md:col-span-7",
                "md:col-span-5 md:mt-40",
                "md:col-span-5",
                "md:col-span-6 md:mt-24 md:col-start-7",
                "md:col-span-7",
                "md:col-span-5 md:mt-32",
                "md:col-span-6",
                "md:col-span-5 md:col-start-8 md:mt-20",
              ][i];
              const info = w[lang];
              const sold = lang === "ru" ? info.st === "Продано" : info.st === "Sold";
              return (
                <figure key={i} className={`group ${layout}`}>
                  <div className="relative overflow-hidden bg-secondary">
                    <img src={w.src} alt={info.t} className="w-full h-auto object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700 flex items-end p-6 md:p-8">
                      <span style={serif} className="text-2xl md:text-3xl italic text-background opacity-0 group-hover:opacity-100 transition-opacity duration-700 drop-shadow-md">
                        {info.t}
                      </span>
                    </div>
                  </div>
                  <figcaption className="mt-6 grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-8">
                      <h3 style={serif} className="text-xl md:text-2xl italic font-light leading-tight">{info.t}</h3>
                      <p className="mt-2 text-[12px] tracking-[0.1em] text-foreground/55">
                        {t.cardMedium} · {info.s} · {info.y}
                      </p>
                    </div>
                    <div className="col-span-4 flex flex-col items-end gap-2 text-right">
                      <span className={`text-[10px] tracking-[0.25em] uppercase ${sold ? "text-foreground/40" : "text-foreground/80"}`}>
                        {info.st}
                      </span>
                      {!sold && (
                        <a href={mailto} className="text-[10px] tracking-[0.25em] uppercase border-b border-foreground/60 pb-0.5 hover:border-foreground transition-colors">
                          {t.cardCta}
                        </a>
                      )}
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="py-32 md:py-44 border-t border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.cvKicker}</p>
            <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05]">{t.cvTitle}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-14">
            {[
              { title: t.cvSolo, items: t.cvSoloItems },
              { title: t.cvGroup, items: t.cvGroupItems },
              { title: t.cvPlein, items: t.cvPleinItems },
            ].map((block, i) => (
              <div key={i}>
                <h3 className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6 pb-3 border-b border-border">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((it, j) => (
                    <li key={j} style={serif} className="text-lg md:text-xl font-light text-foreground/85 leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACQUISITION */}
      <section className="py-32 md:py-40 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">{t.acqKicker}</p>
          <p style={serif} className="text-3xl md:text-4xl leading-[1.35] font-light text-foreground/85 whitespace-pre-line mb-12">
            {t.acqBody}
          </p>
          <a href={mailto} className="inline-block text-[11px] tracking-[0.3em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors">
            {lang === "ru" ? "Связаться" : "Get in touch"}
          </a>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="border-t border-border/50 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05] mb-4">{t.footerName}</h2>
            <p className="text-[12px] tracking-[0.2em] uppercase text-foreground/55 mb-10">{t.footerTagline}</p>
            <p className="text-[15px] leading-[1.85] text-foreground/75 max-w-xl mb-8">{t.footerBio}</p>
            <ul className="space-y-2 text-[13px] text-foreground/65 max-w-xl">
              {t.footerMeta.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.footerContactLabel}</p>
            <div className="space-y-4 mb-10">
              <a href={mailto} className="block text-lg md:text-xl text-foreground/90 hover:text-foreground transition-colors" style={serif}>
                elenakozlova77@yandex.ru
              </a>
              <a href="https://t.me/ElenaKozlovaArt" target="_blank" rel="noopener noreferrer" className="block text-lg md:text-xl text-foreground/90 hover:text-foreground transition-colors" style={serif}>
                @ElenaKozlovaArt
              </a>
            </div>
            <a href={mailto} className="inline-block text-[11px] tracking-[0.3em] uppercase border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors">
              {t.footerCta}
            </a>
          </div>
        </div>
        <div className="border-t border-border/40">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/45">
            <span>© {new Date().getFullYear()} {t.footerName}</span>
            <span>{t.rights}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
