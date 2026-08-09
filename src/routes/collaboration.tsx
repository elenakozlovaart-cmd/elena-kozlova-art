import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Send, Instagram, ChevronLeft } from "lucide-react";

import buketnayaElena from "@/assets/spaces/buketnaya-elena-1600w.jpg";
import buketnayaElenaSmall from "@/assets/spaces/buketnaya-elena-800w.jpg";
import buketnayaFacade from "@/assets/spaces/buketnaya-facade-1600w.jpg";
import buketnayaFacadeSmall from "@/assets/spaces/buketnaya-facade-800w.jpg";
import buketnayaWall from "@/assets/spaces/buketnaya-wall-1600w.jpg";
import buketnayaWallSmall from "@/assets/spaces/buketnaya-wall-800w.jpg";
import buketnayaBear from "@/assets/spaces/buketnaya-bear-1600w.jpg";
import buketnayaBearSmall from "@/assets/spaces/buketnaya-bear-800w.jpg";
import collaborationHero from "@/assets/spaces/collaboration-hero-1047w.jpg";
import collaborationHero800 from "@/assets/spaces/collaboration-hero-800w.jpg";
import mockupArmenia from "@/assets/spaces/mockup-armenia-1600w.jpg";
import mockupArmeniaSmall from "@/assets/spaces/mockup-armenia-800w.jpg";
import mockupUsadby from "@/assets/spaces/mockup-usadby-1600w.jpg";
import mockupUsadbySmall from "@/assets/spaces/mockup-usadby-800w.jpg";
import mockupCircles from "@/assets/spaces/mockup-circles-1600w.jpg";
import mockupCirclesSmall from "@/assets/spaces/mockup-circles-800w.jpg";
import mockupVet from "@/assets/spaces/mockup-vet-1600w.jpg";
import mockupVetSmall from "@/assets/spaces/mockup-vet-800w.jpg";
import selectionFlowersBefore from "@/assets/spaces/selection-flowers-before-1200w.jpg";
import selectionFlowersBeforeSmall from "@/assets/spaces/selection-flowers-before-800w.jpg";
import selectionFlowersVisual from "@/assets/spaces/selection-flowers-visual-1200w.jpg";
import selectionFlowersVisualSmall from "@/assets/spaces/selection-flowers-visual-800w.jpg";
import selectionArchesBefore from "@/assets/spaces/selection-arches-before-1200w.jpg";
import selectionArchesBeforeSmall from "@/assets/spaces/selection-arches-before-800w.jpg";
import selectionArchesVisual from "@/assets/spaces/selection-arches-visual-1200w.jpg";
import selectionArchesVisualSmall from "@/assets/spaces/selection-arches-visual-800w.jpg";

const TG_CHANNEL_LINK = "https://t.me/ElenaKozlova_Art";
const TG_DM_LINK = "https://t.me/ElenaKozlovaArt";
const MAX_LINK = "https://max.ru/join/2XSGUWjyi4zS_lLZENNtohJvgO086bGV9ka7Il06jYQ";
const IG_LINK = "https://instagram.com/elenakozlovaart";
const MaxIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="maxBrandGradCollab" cx="28%" cy="82%" r="110%">
        <stop offset="0%" stopColor="#3BB0FF" />
        <stop offset="45%" stopColor="#5B5BF5" />
        <stop offset="100%" stopColor="#A855F7" />
      </radialGradient>
    </defs>
    <circle cx="12" cy="12" r="11" fill="url(#maxBrandGradCollab)" />
    <path
      d="M12.4 6.2c-3.1 0-5.6 2.4-5.6 5.4 0 1.6.7 3 1.9 4v2.9c0 .3.3.4.5.3l2.1-1.7c.4.1.8.1 1.1.1 3.1 0 5.6-2.4 5.6-5.4 0-3.1-2.5-5.6-5.6-5.6z"
      fill="#fff"
    />
  </svg>
);

const serif = { fontFamily: "'Cormorant Garamond', Georgia, serif" };

export const Route = createFileRoute("/collaboration")({
  component: CollaborationPage,
  head: () => ({
    meta: [
      { title: "Сотрудничество — Елена Козлова, художник-акварелист" },
      {
        name: "description",
        content:
          "Подбор оригинальных акварелей Елены Козловой для дизайнерских проектов, кафе, ресторанов, небольших отелей и офисов. По фото пространства — 3–5 подходящих работ с предварительной стоимостью.",
      },
      { property: "og:title", content: "Сотрудничество — Елена Козлова" },
      {
        property: "og:description",
        content:
          "Оригинальная акварель для дизайнеров и камерных пространств. Пришлите фото интерьера — Елена предложит 3–5 подходящих работ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elenakozlovaart.ru/collaboration" },
    ],
  }),
});

const LANG_STORAGE_KEY = "elena-kozlova-lang";

function CollaborationPage() {
  const [lang, setLang] = useState<"ru" | "en">("ru");

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
    document.title =
      lang === "ru" ? "Сотрудничество — Елена Козлова" : "Collaboration — Elena Kozlova";
  }, [lang]);

  const translations = {
    ru: {
      navName: "Елена Козлова",
      navHome: "Главная",
      navCollab: "Сотрудничество",

      heroKicker: "Для дизайнеров и камерных пространств",
      heroTitle: "Помогаю завершить интерьер\nоригинальной акварелью",
      heroBody:
        "Подбираю 3–5 авторских работ под концепцию, масштаб и характер интерьера. Чтобы начать, достаточно прислать фото пространства и размер стены — в ответ вы получите подборку с предварительной стоимостью.",
      heroCta: "Прислать фото в Telegram",
      heroCtaNote: "Откроется личный чат со мной — Еленой Козловой.",
      heroAlt: "Акварель в интерьерном пространстве",
      heroBadge: "Визуализация",

      caseKicker: "Кейс сотрудничества",
      caseTitle: "«Букетная»",
      caseBody:
        "Цветочный магазин и пространство подарков, где работали мои акварели: круглая серия на стене, работы в рамах, открытки. Владельцам было важно, чтобы интерьер ощущался тёплым и собранным, с живой деталью, которая не выглядит случайной. Акварель добавила пространству воздуха и мягкого присутствия — того, что сложно передать постером или обычным декором.\n\nЭтот проект остался для меня важным примером того, как авторская акварель может естественно жить в небольшом коммерческом пространстве и поддерживать его характер.",
      caseAlt1: "Художница в магазине «Букетная» на фоне круглых акварелей",
      caseAlt2: "Фасад магазина «Букетная»",
      caseAlt3: "Стенка с акварелями над букетами в «Букетной»",
      caseAlt4: "Акварель «Белый медведь» в раме на стене магазина",

      selectionKicker: "Пример подбора",
      selectionTitle: "Две стены — два решения",
      selectionBody:
        "В каждой паре сначала показана реальная фотография кафе, затем — визуализация с акварелями. Так можно заранее сравнить масштаб, ритм и характер композиции до принятия решения.",
      selectionRealBadge: "Реальный кадр",
      selectionBadge: "Визуализация",
      selectionItems: [
        {
          src: selectionFlowersBefore,
          srcSmall: selectionFlowersBeforeSmall,
          label: "Стена с Еленой · Исходный кадр",
          alt: "Елена Козлова в реальном кафе перед стеной до подбора акварелей",
          visualization: false,
        },
        {
          src: selectionFlowersVisual,
          srcSmall: selectionFlowersVisualSmall,
          label: "Цветочная серия · Три работы",
          alt: "Визуализация трёх круглых цветочных акварелей на стене кафе",
          visualization: true,
        },
        {
          src: selectionArchesBefore,
          srcSmall: selectionArchesBeforeSmall,
          label: "Арочные ниши · Исходный кадр",
          alt: "Реальная фотография стены кафе с тремя арочными нишами",
          visualization: false,
        },
        {
          src: selectionArchesVisual,
          srcSmall: selectionArchesVisualSmall,
          label: "Круглая серия · Ритм арок",
          alt: "Визуализация трёх круглых акварелей в арочных нишах кафе",
          visualization: true,
        },
      ],

      mockupsKicker: "Варианты",
      mockupsTitle: "Серии под разные пространства",
      mockupsBody:
        "Интерьерные визуализации помогают заранее оценить масштаб и настроение серии. Под ваше пространство соберу отдельную подборку.",
      mockups: [
        { src: mockupArmenia, srcSmall: mockupArmeniaSmall, label: "Премиум-лобби отеля" },
        { src: mockupUsadby, srcSmall: mockupUsadbySmall, label: "Ресторан русской кухни" },
        { src: mockupCircles, srcSmall: mockupCirclesSmall, label: "Лобби или кафе с видом" },
        { src: mockupVet, srcSmall: mockupVetSmall, label: "Ветклиника, груминг, кафе" },
      ],

      processKicker: "Как работаем",
      processTitle: "От идеи до работы в интерьере",
      process: [
        {
          n: "01",
          title: "Расскажите про пространство",
          desc: "Пара фото, размер стены, какое ощущение хотите. Удобнее всего — в Telegram или MAX.",
        },
        {
          n: "02",
          title: "Подбираю",
          desc: "3–5 работ под формат и стилистику пространства. Присылаю на согласование с предварительной ценой.",
        },
        {
          n: "03",
          title: "Согласуем оформление и доставку",
          desc: "Оформление в раме (по желанию) и доставка по Москве или регионам — за счёт покупателя.",
        },
      ],

      ctaKicker: "Связь",
      ctaTitle: "Пришлите фото пространства — предложу подходящие работы",
      ctaBody:
        "Добавьте размер стены и какое ощущение хотите создать. Быстрее всего отвечаю в Telegram и MAX.",
      ctaTg: "Прислать фото в Telegram",
      ctaMax: "Прислать фото в MAX",

      footerName: "Елена Козлова",
      footerRights: "Все права защищены",
    },
    en: {
      navName: "Elena Kozlova",
      navHome: "Home",
      navCollab: "Collaboration",

      heroKicker: "For designers and boutique interiors",
      heroTitle: "Helping complete interiors\nwith original watercolour",
      heroBody:
        "I select 3–5 original works to suit an interior’s concept, scale and character. To get started, simply send a photo of the space and the wall dimensions — you’ll receive a selection with preliminary prices.",
      heroCta: "Send a photo via Telegram",
      heroCtaNote: "This opens a personal chat with me, Elena Kozlova.",
      heroAlt: "Watercolour in an interior setting",
      heroBadge: "Visualisation",

      caseKicker: "Collaboration case",
      caseTitle: "Buketnaya",
      caseBody:
        "A flower and gift shop where my watercolours once lived: the round series on the wall, framed works, postcards. The owners wanted the space to feel warm and considered, with a living detail that did not look accidental. Watercolour brought air and a soft presence — something that is hard to convey through a poster or ordinary decor.\n\nThis project remains an important example for me of how original watercolour can naturally live in a small commercial space and support its character.",
      caseAlt1: "The artist sitting at Buketnaya in front of round watercolours",
      caseAlt2: "Facade of Buketnaya shop",
      caseAlt3: "Wall with watercolours above bouquets at Buketnaya",
      caseAlt4: "Framed watercolour of a polar bear on the shop wall",

      selectionKicker: "Selection example",
      selectionTitle: "Two walls — two approaches",
      selectionBody:
        "Each pair begins with a real photograph of the café, followed by a watercolour visualisation. This makes it possible to compare scale, rhythm and composition before making a decision.",
      selectionRealBadge: "Real photograph",
      selectionBadge: "Visualisation",
      selectionItems: [
        {
          src: selectionFlowersBefore,
          srcSmall: selectionFlowersBeforeSmall,
          label: "Wall with Elena · Original photograph",
          alt: "Elena Kozlova in a real café before watercolours were selected for the wall",
          visualization: false,
        },
        {
          src: selectionFlowersVisual,
          srcSmall: selectionFlowersVisualSmall,
          label: "Flower series · Three works",
          alt: "Visualisation of three round floral watercolours on a café wall",
          visualization: true,
        },
        {
          src: selectionArchesBefore,
          srcSmall: selectionArchesBeforeSmall,
          label: "Arched niches · Original photograph",
          alt: "Real photograph of a café wall with three arched niches",
          visualization: false,
        },
        {
          src: selectionArchesVisual,
          srcSmall: selectionArchesVisualSmall,
          label: "Round series · Rhythm of the arches",
          alt: "Visualisation of three round watercolours in the café’s arched niches",
          visualization: true,
        },
      ],

      mockupsKicker: "Examples",
      mockupsTitle: "Series for different spaces",
      mockupsBody:
        "Interior visualisations help assess the scale and mood of a series in advance. I’ll create a separate selection for your space.",
      mockups: [
        { src: mockupArmenia, srcSmall: mockupArmeniaSmall, label: "Premium hotel lobby" },
        { src: mockupUsadby, srcSmall: mockupUsadbySmall, label: "Russian cuisine restaurant" },
        { src: mockupCircles, srcSmall: mockupCirclesSmall, label: "Lobby or café with a view" },
        { src: mockupVet, srcSmall: mockupVetSmall, label: "Vet clinic, grooming, café" },
      ],

      processKicker: "How it works",
      processTitle: "From idea to artwork in the space",
      process: [
        {
          n: "01",
          title: "Tell me about the space",
          desc: "A couple of photos, wall size, the feeling you’re after. Telegram or MAX works best.",
        },
        {
          n: "02",
          title: "I put together a selection",
          desc: "3–5 works that fit the format and the mood, sent over for approval with a preliminary quote.",
        },
        {
          n: "03",
          title: "Framing and delivery",
          desc: "Framing (on request) and delivery within Moscow or the regions — at the buyer’s expense.",
        },
      ],

      ctaKicker: "Get in touch",
      ctaTitle: "Send a photo of your space — I’ll suggest suitable works",
      ctaBody:
        "Include the wall dimensions and the feeling you want to create. Telegram and MAX are the fastest ways to reach me.",
      ctaTg: "Send a photo on Telegram",
      ctaMax: "Send a photo on MAX",

      footerName: "Elena Kozlova",
      footerRights: "All rights reserved",
    },
  } as const;

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              aria-label={t.navHome}
              className="md:hidden text-foreground/70 hover:text-foreground transition-colors p-1 -ml-1 flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
            </Link>
            <Link
              to="/"
              className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] uppercase hover:text-foreground/70 transition-colors whitespace-nowrap"
            >
              {t.navName}
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-foreground/70 md:mr-8 lg:mr-12">
            <Link to="/" className="hover:text-foreground transition-colors">
              {t.navHome}
            </Link>
            <span className="text-foreground">{t.navCollab}</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-[11px] tracking-[0.2em]">
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={TG_CHANNEL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-1">
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
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-28 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 md:order-1 order-2">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">
              {t.heroKicker}
            </p>
            <h1
              style={serif}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] whitespace-pre-line mb-7"
            >
              {t.heroTitle}
            </h1>
            <p className="text-base md:text-[17px] leading-[1.8] text-foreground/70 mb-12">
              {t.heroBody}
            </p>
            <a
              href={TG_DM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.3em] uppercase rounded-full px-8 py-4 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors"
            >
              {t.heroCta}
            </a>
            <p className="mt-3 text-[12px] leading-relaxed text-foreground/55">
              {t.heroCtaNote}
            </p>
          </div>
          <div className="relative md:col-span-7 md:order-2 order-1">
            <img
              src={collaborationHero}
              srcSet={`${collaborationHero800} 800w, ${collaborationHero} 1047w`}
              sizes="(max-width: 768px) 100vw, 58vw"
              alt={t.heroAlt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={1047}
              height={1501}
              className="w-full h-auto block"
            />
            <span className="absolute top-4 left-4 rounded-full px-4 py-2 bg-background/90 backdrop-blur-sm text-[10px] tracking-[0.22em] uppercase text-foreground/75">
              {t.heroBadge}
            </span>
          </div>
        </div>
      </section>

      {/* CASE — БУКЕТНАЯ */}
      <section className="py-20 md:py-28 border-t border-border/40 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">
                {t.caseKicker}
              </p>
              <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05] mb-3">
                {t.caseTitle}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/75 whitespace-pre-line">
                {t.caseBody}
              </p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <img
                src={buketnayaElena}
                srcSet={`${buketnayaElenaSmall} 800w, ${buketnayaElena} 1600w`}
                sizes="(max-width: 768px) 100vw, 400px"
                alt={t.caseAlt1}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={1178}
                height={1600}
                className="w-full h-full object-cover aspect-[3/4] block"
              />
              <img
                src={buketnayaFacade}
                srcSet={`${buketnayaFacadeSmall} 800w, ${buketnayaFacade} 1600w`}
                sizes="(max-width: 768px) 100vw, 400px"
                alt={t.caseAlt2}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={1200}
                height={1600}
                className="w-full h-full object-cover aspect-[3/4] block"
              />
              <img
                src={buketnayaBear}
                srcSet={`${buketnayaBearSmall} 800w, ${buketnayaBear} 1600w`}
                sizes="(max-width: 768px) 100vw, 400px"
                alt={t.caseAlt4}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={1200}
                height={1600}
                className="w-full h-full object-cover aspect-[3/4] block"
              />
            </div>
            <div>
              <img
                src={buketnayaWall}
                srcSet={`${buketnayaWallSmall} 800w, ${buketnayaWall} 1600w`}
                sizes="(max-width: 768px) 100vw, 1024px"
                alt={t.caseAlt3}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width={1600}
                height={900}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SELECTION EXAMPLE — REAL SPACE + VISUALISATIONS */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-16">
            <div className="md:col-span-5">
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">
                {t.selectionKicker}
              </p>
              <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05]">
                {t.selectionTitle}
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/70">
                {t.selectionBody}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {t.selectionItems.map((item) => (
              <figure key={item.label}>
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={item.src}
                    srcSet={`${item.srcSmall} 800w, ${item.src} 1200w`}
                    sizes="(max-width: 768px) 100vw, 420px"
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={1500}
                    className="w-full aspect-[4/5] object-cover block"
                  />
                  <span className="absolute top-4 left-4 rounded-full px-4 py-2 bg-background/90 backdrop-blur-sm text-[10px] tracking-[0.22em] uppercase text-foreground/75">
                    {item.visualization ? t.selectionBadge : t.selectionRealBadge}
                  </span>
                </div>
                <figcaption className="mt-5 text-[12px] tracking-[0.22em] uppercase text-foreground/65">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">
              {t.mockupsKicker}
            </p>
            <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05] mb-6">
              {t.mockupsTitle}
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/70">
              {t.mockupsBody}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {t.mockups.map((m, i) => (
              <figure key={i}>
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={m.src}
                    srcSet={`${m.srcSmall} 800w, ${m.src} 1600w`}
                    sizes="(max-width: 768px) 100vw, 600px"
                    alt={
                      lang === "ru"
                        ? `Акварель в интерьере — ${m.label}, пример размещения работ Елены Козловой`
                        : `Watercolour in interior — ${m.label}, placement example of Elena Kozlova’s works`
                    }
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <span className="absolute top-4 left-4 rounded-full px-4 py-2 bg-background/90 backdrop-blur-sm text-[10px] tracking-[0.22em] uppercase text-foreground/75">
                    {t.selectionBadge}
                  </span>
                </div>
                <figcaption className="mt-5 text-[12px] tracking-[0.25em] uppercase text-foreground/65">
                  {m.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 border-t border-border/40 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
            <div className="md:col-span-5">
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">
                {t.processKicker}
              </p>
              <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05]">
                {t.processTitle}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {t.process.map((s) => (
              <div key={s.n} className="border-t border-border/60 pt-6">
                <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-4">
                  {s.n}
                </p>
                <h3 style={serif} className="text-2xl md:text-3xl font-light leading-[1.15] mb-4">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-foreground/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-36 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">
            {t.ctaKicker}
          </p>
          <h2 style={serif} className="text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/70 mb-12">
            {t.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={TG_DM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors"
            >
              <Send className="w-4 h-4" strokeWidth={1.75} />
              {t.ctaTg}
            </a>
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-transparent border border-[#d9c5c4] text-[#6b5557] hover:bg-[#f1e6e5] transition-colors"
            >
              <MaxIcon className="w-4 h-4" />
              {t.ctaMax}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (упрощённый) */}
      <footer className="border-t border-border/40 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/45">
          <span>
            © {new Date().getFullYear()} {t.footerName}
          </span>
          <span>{t.footerRights}</span>
        </div>
      </footer>
    </div>
  );
}
