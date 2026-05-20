import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
import w9 from "@/assets/work-09.jpg";
import w10 from "@/assets/work-10.jpg";
import w11 from "@/assets/work-11.jpg";
import w12 from "@/assets/work-12.jpg";
import w13 from "@/assets/work-13.png";
import w14 from "@/assets/work-14.png";
import w15 from "@/assets/work-15.png";
import w16 from "@/assets/work-16.png";

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
  { src: w1, ru: { c: "Армения", t: "Дилижан", s: "38 × 56 см", y: "2026", st: "В наличии", m: "Акварель на бумаге", d: "Туман укрывает горные склоны Дилижана — воздух будто растворяет очертания деревьев, оставляя только дыхание леса." }, en: { c: "Armenia", t: "Dilijan", s: "38 × 56 cm", y: "2026", st: "Available", m: "Watercolour on paper", d: "Mist drapes the slopes of Dilijan — the air dissolves the contours of trees, leaving only the breath of the forest." } },
  { src: w2, ru: { c: "Армения", t: "Нораванк", s: "38 × 56 см", y: "2026", st: "В наличии", m: "Акварель на бумаге", d: "Тёплый камень древнего монастыря, выросший из охристых скал. Свет здесь хранит память столетий." }, en: { c: "Armenia", t: "Noravank", s: "38 × 56 cm", y: "2026", st: "Available", m: "Watercolour on paper", d: "Warm stone of the ancient monastery rising from ochre cliffs. The light here holds the memory of centuries." } },
  { src: w3, ru: { c: "Армения", t: "Озеро Севан", s: "38 × 56 см", y: "2026", st: "в наличии", m: "Акварель на бумаге", d: "Прозрачная синь высокогорного озера, где небо и вода говорят на одном языке тишины." }, en: { c: "Armenia", t: "Lake Sevan", s: "38 × 56 cm", y: "2026", st: "Available", m: "Watercolour on paper", d: "The transparent blue of a highland lake, where sky and water share one language of stillness." } },
  { src: w4, ru: { c: "Армения", t: "Ереван. Площадь Республики", s: "38 × 56 см", y: "2026", st: "В наличии", m: "Акварель на бумаге", d: "Розовый туф города оживает в мягком вечернем свете — архитектура дышит, отражаясь в движении прохожих." }, en: { c: "Armenia", t: "Yerevan, Republic Square", s: "38 × 56 cm", y: "2026", st: "Available", m: "Watercolour on paper", d: "The pink tuff of the city comes alive in the soft evening light — architecture breathes through the motion of passers-by." } },
  { src: w5, ru: { c: "Армения", t: "Гюмри", s: "38 × 56 см", y: "2026", st: "В наличии", m: "Акварель на бумаге", d: "Тихие улицы Гюмри, где время движется неспешно, а каждый дом хранит свой собственный сюжет." }, en: { c: "Armenia", t: "Gyumri", s: "38 × 56 cm", y: "2026", st: "Available", m: "Watercolour on paper", d: "Quiet streets of Gyumri, where time moves slowly and each house keeps its own quiet story." } },
  { src: w6, ru: { c: "Родина-мать", t: "Родина-мать I", s: "40 × 60 см", y: "2025", st: "В наличии", m: "Акварель на бумаге", d: "Монументальный силуэт, растворённый в воздушной перспективе — величие, переданное лёгкостью акварели." }, en: { c: "Motherland", t: "Motherland I", s: "40 × 60 cm", y: "2025", st: "Available", m: "Watercolour on paper", d: "A monumental silhouette dissolved into aerial perspective — grandeur conveyed through the lightness of watercolour." } },
  { src: w7, ru: { c: "Родина-мать", t: "Родина-мать II", s: "40 × 60 см", y: "2025", st: "в наличии", m: "Акварель на бумаге", d: "Продолжение размышления о памяти и пространстве: фигура и небо сливаются в единое состояние." }, en: { c: "Motherland", t: "Motherland II", s: "40 × 60 cm", y: "2025", st: "Available", m: "Watercolour on paper", d: "A continuation of a reflection on memory and space: figure and sky merge into a single state." } },
  { src: w8, ru: { c: "Городская лирика", t: "Сквозь дождь", s: "60 × 40 см", y: "2025", st: "В наличии", m: "Акварель бумага на подрамнике, в раме", d: "Город сквозь стеклянную пелену дождя — отражения и движение размывают границы между улицей и сном." }, en: { c: "Urban lyrics", t: "Through the Rain", s: "60 × 40 cm", y: "2025", st: "Available", m: "Watercolour on paper on stretcher, framed", d: "A city seen through a glassy veil of rain — reflections and movement blur the line between street and dream." } },
  { src: w9, ru: { c: "Байкал", t: "Деревня на Ольхоне. Байкал", s: "38 × 56 см", y: "2024", st: "В наличии", m: "Акварель на бумаге", d: "Деревянные дома на ветреном острове — простая жизнь у большой воды, написанная в скупой и тёплой палитре." }, en: { c: "Baikal", t: "Village on Olkhon. Baikal", s: "38 × 56 cm", y: "2024", st: "Available", m: "Watercolour on paper", d: "Wooden houses on a windswept island — quiet life beside the great water, painted in a sparing, warm palette." } },
  { src: w10, ru: { c: "Байкал", t: "Ступа Просветления на острове Огой. Байкал", s: "38 × 56 см", y: "2024", st: "В наличии", m: "Акварель на бумаге", d: "Белая ступа над озером — точка покоя в широте байкальского пейзажа, где горизонт становится молитвой." }, en: { c: "Baikal", t: "Stupa of Enlightenment on Ogoy Island. Baikal", s: "38 × 56 cm", y: "2024", st: "Available", m: "Watercolour on paper", d: "A white stupa above the lake — a point of stillness in the vastness of Baikal, where the horizon turns into prayer." } },
  { src: w11, ru: { c: "Байкал", t: "Байкал. Корабли", s: "38 × 56 см", y: "2024", st: "В наличии", m: "Акварель на бумаге", d: "Силуэты кораблей у берега — пауза между плаванием и тишиной, между водой и небом." }, en: { c: "Baikal", t: "Baikal. Ships", s: "38 × 56 cm", y: "2024", st: "Available", m: "Watercolour on paper", d: "Silhouettes of ships at the shore — a pause between voyage and silence, between water and sky." } },
  { src: w12, ru: { c: "Байкал", t: "Ольхон. Шаманка", s: "38 × 56 см", y: "2024", st: "В наличии", m: "Акварель на бумаге", d: "Скала Шаманка — древний образ Байкала, написанный почти иконографично: камень, ветер и свет." }, en: { c: "Baikal", t: "Olkhon. Shamanka", s: "38 × 56 cm", y: "2024", st: "Available", m: "Watercolour on paper", d: "Shamanka Rock — an ancient image of Baikal rendered almost iconographically: stone, wind and light." } },
  { src: w13, ru: { c: "Круглая серия", t: "Огни города", s: "d 40 см", y: "2025", st: "В наличии", m: "Акварель бумага на подрамнике, в раме", d: "Ночные огни, собранные в круг — городская мелодия, увиденная издалека и сведённая к чистому свету." }, en: { c: "Circular series", t: "City Lights", s: "d 40 cm", y: "2025", st: "Available", m: "Watercolour on paper on stretcher, framed", d: "Night lights gathered into a circle — an urban melody seen from afar and distilled into pure light." } },
  { src: w14, ru: { c: "Круглая серия", t: "Чайка над водой", s: "d 40 см", y: "2025", st: "В наличии", m: "Акварель бумага на подрамнике, в раме", d: "Лёгкое движение крыла над водной гладью — мгновение, остановленное прозрачным мазком." }, en: { c: "Circular series", t: "Gull Above Water", s: "d 40 cm", y: "2025", st: "Available", m: "Watercolour on paper on stretcher, framed", d: "The light motion of a wing above still water — an instant held by a single transparent stroke." } },
  { src: w15, ru: { c: "Круглая серия", t: "Полёт", s: "d 40 см", y: "2025", st: "В наличии", m: "Акварель бумага на подрамнике, в раме", d: "Птица в свободном пространстве воздуха — образ внутренней лёгкости и тишины." }, en: { c: "Circular series", t: "Flight", s: "d 40 cm", y: "2025", st: "Available", m: "Watercolour on paper on stretcher, framed", d: "A bird in the open space of air — an image of inner lightness and stillness." } },
  { src: w16, ru: { c: "Круглая серия", t: "Москва на закате", s: "d 40 см", y: "2025", st: "В наличии", m: "Акварель бумага на подрамнике, в раме", d: "Тёплый закатный свет ложится на знакомые силуэты — город становится мягким, почти музыкальным." }, en: { c: "Circular series", t: "Moscow at Sunset", s: "d 40 cm", y: "2025", st: "Available", m: "Watercolour on paper on stretcher, framed", d: "Warm sunset light falls on familiar silhouettes — the city becomes soft, almost musical." } },
];

function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenIdx(null); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIdx]);

  const t = lang === "ru"
    ? {
        nav: { works: "Работы", about: "О художнике", cv: "Выставки", contact: "Контакты" },
        heroKicker: "Художник-акварелист",
        heroName: "Елена\nКозлова",
        heroLead: "Современный художник-акварелист. Елена работает с темами света, памяти, путешествий и внутренних состояний, создавая атмосферные акварели, в которых важны прозрачность, воздух и ощущение момента.",
        heroCta: "Смотреть работы",
        heroCta2: "Познакомиться с художником",
        aboutKicker: "О художнике",
        aboutBody: [
          "В своей практике Елена Козлова обращается к акварели как к медиуму, позволяющему фиксировать ускользающие состояния — свет, движение, внутреннее напряжение формы.",
          "Её работы находятся на границе между наблюдением и переживанием: пейзаж становится отражением внутреннего опыта, а фигура — способом исследования пластики и присутствия.",
        ],
        aboutCta: "Запросить доступные работы",
        seriesKicker: "Серии работ",
        seriesTitle: "Серии",
        series: [
          { title: "Армения", desc: "Акварельные впечатления от света, гор, архитектуры и древних мест." },
          { title: "Пейзажи внутреннего состояния", desc: "Пейзаж как способ передать тишину, память и настроение." },
          { title: "Фигуративные этюды", desc: "Наблюдение за человеком, жестом, позой и состоянием." },
          { title: "Город и память", desc: "Городские пространства, в которых важны свет, ритм и личное воспоминание." },
          { title: "Пленэрные наблюдения", desc: "Работы, созданные из непосредственного контакта с местом." },
        ],
        worksKicker: "Работы",
        worksTitle: "Галерея",
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
        acqTitle: "Как приобрести работу",
        acqSteps: [
          { n: "01", title: "Выберите работу", desc: "Посмотрите доступные акварели в разделе «Работы»." },
          { n: "02", title: "Нажмите «Запросить стоимость»", desc: "Отправьте запрос по понравившейся работе." },
          { n: "03", title: "Уточните детали", desc: "Елена ответит по наличию, стоимости, оформлению и доставке." },
          { n: "04", title: "Согласуйте покупку или резерв", desc: "Работу можно приобрести, зарезервировать или обсудить индивидуальный запрос." },
        ],
        acqNote: "Можно обсудить оформление, доставку, резерв работы и возможность создания похожей акварели по индивидуальному запросу.",
        acqCta: "Написать в Telegram",
        tgKicker: "Следить за новыми работами",
        tgBody: "В Telegram Елена публикует новые акварели, фрагменты процесса, выставки и доступные работы.",
        tgCta: "Подписаться на Telegram",
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
        heroLead: "Contemporary watercolour artist. Elena works with themes of light, memory, journeys and inner states, creating atmospheric watercolours where transparency, air and the feeling of the moment matter.",
        heroCta: "View works",
        heroCta2: "Meet the artist",
        aboutKicker: "About the artist",
        aboutBody: [
          "Elena Kozlova is a contemporary watercolour artist whose practice explores the relationship between perception and inner experience. Her work moves between landscape and figurative study, treating both as spaces of observation and reflection.",
          "Working primarily with watercolour, she focuses on light, movement and the subtle tension of form. Each piece is approached as a singular work — responsive, immediate, and materially sensitive.",
          "Her works are held in private collections across Europe and Russia.",
        ],
        aboutCta: "Inquire about available works",
        seriesKicker: "Series",
        seriesTitle: "Series",
        series: [
          { title: "Armenia", desc: "Watercolour impressions of light, mountains, architecture and ancient places." },
          { title: "Landscapes of inner states", desc: "Landscape as a way to convey silence, memory and mood." },
          { title: "Figurative studies", desc: "Observation of the human figure, gesture, posture and state." },
          { title: "City and memory", desc: "Urban spaces where light, rhythm and personal recollection matter." },
          { title: "Plein air observations", desc: "Works born from direct contact with a place." },
        ],
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
        acqTitle: "How to acquire a work",
        acqSteps: [
          { n: "01", title: "Choose a work", desc: "Browse available watercolours in the “Works” section." },
          { n: "02", title: "Click “Inquire”", desc: "Send a request for the work you are interested in." },
          { n: "03", title: "Discuss the details", desc: "Elena will reply about availability, price, framing and shipping." },
          { n: "04", title: "Confirm purchase or reserve", desc: "The work can be purchased, reserved, or discussed as a personal commission." },
        ],
        acqNote: "We can discuss framing, shipping, reserving a work, and the possibility of creating a similar watercolour as a personal commission.",
        acqCta: "Message on Telegram",
        tgKicker: "Follow new works",
        tgBody: "On Telegram, Elena shares new watercolors, fragments of the creative process, exhibitions and available works.",
        tgCta: "Follow on Telegram",
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
            <div className="mt-10 flex flex-wrap gap-3 items-center text-[11px] tracking-[0.3em] uppercase">
              <a href="#works" className="inline-block text-center rounded-full px-7 py-3.5 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors">
                {t.heroCta}
              </a>
              <a href="#about" className="inline-block text-center rounded-full px-7 py-3.5 bg-[#e8dcdb] text-[#6b5557] hover:bg-[#dcc9c9] transition-colors">
                {t.heroCta2}
              </a>
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.7) 28%, #000 55%, #000 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.7) 28%, #000 55%, #000 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
              }}
            >
              <img src={hero} alt="Elena Kozlova" className="w-full h-full object-cover" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, hsl(var(--background)) 0%, color-mix(in oklab, hsl(var(--background)) 88%, transparent) 18%, color-mix(in oklab, hsl(var(--background)) 55%, transparent) 42%, color-mix(in oklab, hsl(var(--background)) 22%, transparent) 65%, transparent 88%)",
                }}
              />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-foreground/40 text-right">
              {lang === "ru" ? "Портрет художника" : "Portrait of the artist"}
            </p>
          </div>
        </div>
      </section>


      {/* SERIES */}
      <section className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
            <div className="md:col-span-5">
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.seriesKicker}</p>
              <h2 style={serif} className="text-5xl md:text-7xl font-light leading-none">{t.seriesTitle}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {t.series.map((s, i) => (
              <div key={i} className="group border-t border-border pt-6">
                <h3 style={serif} className="text-2xl md:text-3xl italic font-light leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-foreground/65">
                  {s.desc}
                </p>
              </div>
            ))}
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
              const layouts = [
                "md:col-span-7",
                "md:col-span-5 md:mt-40",
                "md:col-span-5",
                "md:col-span-6 md:mt-24 md:col-start-7",
                "md:col-span-7",
                "md:col-span-5 md:mt-32",
                "md:col-span-6",
                "md:col-span-5 md:col-start-8 md:mt-20",
              ];
              const layout = layouts[i % layouts.length];
              const info = w[lang];
              const sold = lang === "ru" ? info.st.toLowerCase() === "продано" : info.st.toLowerCase() === "sold";
              return (
                <figure key={i} className={`group ${layout}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(i)}
                    aria-label={info.t}
                    className="relative overflow-hidden bg-secondary block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-1 focus-visible:ring-foreground/40"
                  >
                    <img src={w.src} alt={info.t} className="w-full h-auto object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700 flex items-end p-6 md:p-8">
                      <span style={serif} className="text-2xl md:text-3xl italic text-background opacity-0 group-hover:opacity-100 transition-opacity duration-700 drop-shadow-md">
                        {info.t}
                      </span>
                    </div>
                  </button>
                  <figcaption className="mt-6 grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-8">
                      <h3 style={serif} className="text-xl md:text-2xl italic font-light leading-tight">
                        <button type="button" onClick={() => setOpenIdx(i)} className="text-left hover:text-foreground/70 transition-colors cursor-pointer">
                          {info.t}
                        </button>
                      </h3>
                      <p className="mt-2 text-[12px] tracking-[0.1em] text-foreground/55">
                        {info.m || t.cardMedium} · {info.s} · {info.y}
                      </p>
                    </div>
                    <div className="col-span-4 flex flex-col items-end gap-2 text-right">
                      <span className={`text-[10px] tracking-[0.25em] uppercase ${sold ? "text-foreground/40" : "text-foreground/80"}`}>
                        {info.st}
                      </span>
                      {!sold && (
                        <a href={mailto} className="text-[10px] tracking-[0.2em] uppercase rounded-full px-4 py-1.5 bg-[#e8dcdb] text-[#6b5557] hover:bg-[#dcc9c9] transition-colors">
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

      {/* ARTWORK MODAL */}
      {openIdx !== null && (() => {
        const w = works[openIdx];
        const info = w[lang];
        const labels = lang === "ru"
          ? { cat: "Категория", tech: "Техника", size: "Размер", year: "Год", status: "Статус", desc: "Описание", cta: "Запросить стоимость", ask: "Задать вопрос о работе", close: "Закрыть" }
          : { cat: "Category", tech: "Technique", size: "Size", year: "Year", status: "Status", desc: "Description", cta: "Inquire", ask: "Ask about this work", close: "Close" };
        const rows: { label: string; value: string }[] = [
          { label: labels.cat, value: info.c },
          { label: labels.tech, value: info.m },
          { label: labels.size, value: info.s },
          { label: labels.year, value: info.y },
          { label: labels.status, value: info.st },
        ];
        return (
          <div
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setOpenIdx(null)}
            role="dialog"
            aria-modal="true"
            aria-label={info.t}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
              aria-label={labels.close}
              className="fixed top-5 right-5 md:top-8 md:right-8 z-[110] w-11 h-11 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors text-3xl leading-none font-light"
            >
              ×
            </button>
            <div
              className="min-h-full grid md:grid-cols-12 gap-8 md:gap-12 px-4 md:px-12 lg:px-20 py-16 md:py-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:col-span-8 flex items-center justify-center">
                <img
                  src={w.src}
                  alt={info.t}
                  className="max-w-full max-h-[88vh] w-auto h-auto object-contain"
                />
              </div>
              <div className="md:col-span-4 flex flex-col justify-center md:py-8">
                <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/50 mb-4">{info.c}</p>
                <h2 style={serif} className="text-3xl md:text-4xl lg:text-5xl italic font-light leading-[1.1] mb-10">
                  {info.t}
                </h2>
                <dl className="space-y-5 mb-10">
                  {rows.slice(1).map((r) => (
                    <div key={r.label} className="grid grid-cols-12 gap-3 items-baseline border-b border-border/40 pb-3">
                      <dt className="col-span-4 text-[10px] tracking-[0.25em] uppercase text-foreground/50">{r.label}</dt>
                      <dd className="col-span-8 text-[13px] text-foreground/85">{r.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mb-10">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/50 mb-3">{labels.desc}</p>
                  <p style={serif} className="text-lg md:text-xl leading-[1.6] font-light text-foreground/85 italic">
                    {info.d}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={mailto}
                    className="inline-block text-center text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors"
                  >
                    {labels.cta}
                  </a>
                  <a
                    href="https://t.me/ElenaKozlova_Art"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-[#e8dcdb] text-[#6b5557] hover:bg-[#dcc9c9] transition-colors"
                  >
                    {labels.ask}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}


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

      {/* TELEGRAM */}
      <section className="py-32 md:py-40 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">{t.tgKicker}</p>
          <p style={serif} className="text-3xl md:text-4xl leading-[1.35] font-light text-foreground/85 whitespace-pre-line mb-12">
            {t.tgBody}
          </p>
          <a
            href="https://t.me/ElenaKozlova_Art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] tracking-[0.3em] uppercase rounded-full px-8 py-4 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors"
          >
            {t.tgCta}
          </a>
        </div>
      </section>

      {/* ACQUISITION */}
      <section className="py-32 md:py-40 border-t border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
            <div className="md:col-span-5">
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.acqKicker}</p>
              <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05]">{t.acqTitle}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">
            {t.acqSteps.map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <p className="text-[11px] tracking-[0.3em] text-foreground/45 mb-5">{s.n}</p>
                <h3 style={serif} className="text-xl md:text-2xl italic font-light leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-foreground/65">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl">
            <p style={serif} className="text-xl md:text-2xl leading-[1.5] font-light text-foreground/80 italic mb-10">
              {t.acqNote}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/ElenaKozlova_Art"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center text-[11px] tracking-[0.3em] uppercase rounded-full px-8 py-4 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors"
              >
                {t.acqCta}
              </a>
              <a
                href={mailto}
                className="inline-block text-center text-[11px] tracking-[0.3em] uppercase rounded-full px-8 py-4 bg-[#e8dcdb] text-[#6b5557] hover:bg-[#dcc9c9] transition-colors"
              >
                {lang === "ru" ? "Написать на почту" : "Email Elena"}
              </a>
            </div>
          </div>
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
            <a href={mailto} className="inline-block text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors">
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
