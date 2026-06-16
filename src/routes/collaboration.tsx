import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Send, Instagram, Mail, ChevronLeft } from "lucide-react";

import buketnayaElena from "@/assets/spaces/buketnaya-elena-1600w.jpg";
import buketnayaElenaSmall from "@/assets/spaces/buketnaya-elena-800w.jpg";
import buketnayaFacade from "@/assets/spaces/buketnaya-facade-1600w.jpg";
import buketnayaFacadeSmall from "@/assets/spaces/buketnaya-facade-800w.jpg";
import buketnayaWall from "@/assets/spaces/buketnaya-wall-1600w.jpg";
import buketnayaWallSmall from "@/assets/spaces/buketnaya-wall-800w.jpg";
import buketnayaBear from "@/assets/spaces/buketnaya-bear-1600w.jpg";
import buketnayaBearSmall from "@/assets/spaces/buketnaya-bear-800w.jpg";
import mockupArmenia from "@/assets/spaces/mockup-armenia-1600w.jpg";
import mockupArmeniaSmall from "@/assets/spaces/mockup-armenia-800w.jpg";
import mockupUsadby from "@/assets/spaces/mockup-usadby-1600w.jpg";
import mockupUsadbySmall from "@/assets/spaces/mockup-usadby-800w.jpg";
import mockupCircles from "@/assets/spaces/mockup-circles-1600w.jpg";
import mockupCirclesSmall from "@/assets/spaces/mockup-circles-800w.jpg";
import mockupVet from "@/assets/spaces/mockup-vet-1600w.jpg";
import mockupVetSmall from "@/assets/spaces/mockup-vet-800w.jpg";

const TG_CHANNEL_LINK = "https://t.me/ElenaKozlova_Art";
const TG_DM_LINK = "https://t.me/ElenaKozlovaArt";
const MAX_LINK = "https://max.ru/join/2XSGUWjyi4zS_lLZENNtohJvgO086bGV9ka7Il06jYQ";
const IG_LINK = "https://instagram.com/elenakozlovaart";
const MAIL_LINK = "mailto:elenakozlova77@yandex.ru?subject=Сотрудничество";

const MaxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
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
      { name: "description", content: "Авторская акварель Елены Козловой для интерьеров кафе, ресторанов, отелей и офисов. Кейс магазина «Букетная» (Троицк), серии работ под разные пространства — премиум-лобби, рестораны, минималистичные кафе, pet-friendly заведения." },
      { property: "og:title", content: "Сотрудничество — Елена Козлова" },
      { property: "og:description", content: "Акварель в интерьеры кафе, ресторанов и отелей. Реализованный кейс и подборки под разные пространства." },
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
    document.title = lang === "ru" ? "Сотрудничество — Елена Козлова" : "Collaboration — Elena Kozlova";
  }, [lang]);

  const translations = {
    ru: {
      navName: "Елена Козлова",
      navHome: "Главная",
      navCollab: "Сотрудничество",

      heroKicker: "Сотрудничество",
      heroTitle: "Акварель для пространств,\nв которых важна атмосфера",
      heroBody: "Подбираю работы под интерьер кафе, ресторана, отеля или офиса. Авторская акварель — каждая работа существует в единственном экземпляре, и в пространстве звучит как голос места.",
      heroCta: "Запросить подборку",

      caseKicker: "Реализованный проект",
      caseTitle: "«Букетная»",
      caseAddress: "Москва, Троицк, ул. Нагорная, 8",
      caseBody: "Магазин букетов и подарков, где живут мои акварели — круглая серия на стене, работы в рамах, открытки. Владельцам хотелось, чтобы интерьер ощущался тёплым и собранным, с живой деталью, которая не выглядит случайной. Акварель добавила пространству воздуха и мягкого присутствия — того, что сложно передать постером или обычным декором.\n\nМожно зайти и посмотреть вживую.",
      caseAlt1: "Художница в магазине «Букетная» на фоне круглых акварелей",
      caseAlt2: "Фасад магазина «Букетная» в Троицке",
      caseAlt3: "Стенка с акварелями над букетами в «Букетной»",
      caseAlt4: "Акварель «Белый медведь» в раме на стене магазина",

      mockupsKicker: "Варианты",
      mockupsTitle: "Серии под разные пространства",
      mockupsBody: "Несколько примеров, как авторские серии работают в реальных интерьерах. Под ваше пространство соберу подборку отдельно.",
      mockups: [
        { src: mockupArmenia, srcSmall: mockupArmeniaSmall, label: "Премиум-лобби отеля" },
        { src: mockupUsadby, srcSmall: mockupUsadbySmall, label: "Ресторан русской кухни" },
        { src: mockupCircles, srcSmall: mockupCirclesSmall, label: "Лобби или кафе с видом" },
        { src: mockupVet, srcSmall: mockupVetSmall, label: "Ветклиника, груминг, кафе" },
      ],

      processKicker: "Как работаем",
      processTitle: "От идеи до работы в интерьере",
      process: [
        { n: "01", title: "Расскажите про пространство", desc: "Пара фото, размер стены, какое ощущение хотите. В Telegram, MAX или на почту." },
        { n: "02", title: "Подбираю", desc: "3–5 работ под формат и стилистику пространства. Присылаю на согласование с предварительной ценой." },
        { n: "03", title: "Согласуем оформление и доставку", desc: "Оформление в раме (по желанию) и доставка по Москве или регионам — за счёт покупателя." },
      ],

      ctaKicker: "Связь",
      ctaTitle: "Напишите — соберём подборку под ваше пространство",
      ctaBody: "Отвечаю в течение дня.",
      ctaTg: "Написать в Telegram",
      ctaMax: "Написать в MAX",
      ctaMail: "Написать на почту",

      footerName: "Елена Козлова",
      footerRights: "Все права защищены",
    },
    en: {
      navName: "Elena Kozlova",
      navHome: "Home",
      navCollab: "Collaboration",

      heroKicker: "Collaboration",
      heroTitle: "Watercolour for spaces\nwhere atmosphere matters",
      heroBody: "I select works for the interiors of cafés, restaurants, hotels and offices. Each watercolour is an original — and in a space it sounds like the voice of the place itself.",
      heroCta: "Request a selection",

      caseKicker: "Completed project",
      caseTitle: "Buketnaya",
      caseAddress: "Moscow, Troitsk, 8 Nagornaya Street",
      caseBody: "A flower and gift shop where my watercolours live: the round series on the wall, framed works, postcards. The owners wanted the space to feel warm and considered — with a living detail that does not look accidental. Watercolour brought air and a soft presence — something that is hard to convey through a poster or ordinary decor.\n\nYou are welcome to visit and see them in person.",
      caseAlt1: "The artist sitting at Buketnaya in front of round watercolours",
      caseAlt2: "Facade of Buketnaya shop in Troitsk",
      caseAlt3: "Wall with watercolours above bouquets at Buketnaya",
      caseAlt4: "Framed watercolour of a polar bear on the shop wall",

      mockupsKicker: "Examples",
      mockupsTitle: "Series for different spaces",
      mockupsBody: "A few examples of how author series work in real interiors. For your specific space I’ll put together a selection separately.",
      mockups: [
        { src: mockupArmenia, srcSmall: mockupArmeniaSmall, label: "Premium hotel lobby" },
        { src: mockupUsadby, srcSmall: mockupUsadbySmall, label: "Russian cuisine restaurant" },
        { src: mockupCircles, srcSmall: mockupCirclesSmall, label: "Lobby or café with a view" },
        { src: mockupVet, srcSmall: mockupVetSmall, label: "Vet clinic, grooming, café" },
      ],

      processKicker: "How it works",
      processTitle: "From idea to artwork in the space",
      process: [
        { n: "01", title: "Tell me about the space", desc: "A couple of photos, wall size, the feeling you’re after. On Telegram, MAX or email." },
        { n: "02", title: "I put together a selection", desc: "3–5 works that fit the format and the mood, sent over for approval with a preliminary quote." },
        { n: "03", title: "Framing and delivery", desc: "Framing (on request) and delivery within Moscow or the regions — at the buyer’s expense." },
      ],

      ctaKicker: "Get in touch",
      ctaTitle: "Drop me a line — I’ll put together a selection for your space",
      ctaBody: "I usually respond within a day.",
      ctaTg: "Message on Telegram",
      ctaMax: "Message on MAX",
      ctaMail: "Email me",

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
            <Link to="/" className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] uppercase hover:text-foreground/70 transition-colors whitespace-nowrap">
              {t.navName}
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.25em] uppercase text-foreground/70 md:mr-8 lg:mr-12">
            <Link to="/" className="hover:text-foreground transition-colors">{t.navHome}</Link>
            <span className="text-foreground">{t.navCollab}</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-[11px] tracking-[0.2em]">
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/60 hover:text-foreground transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={TG_CHANNEL_LINK} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-foreground/60 hover:text-foreground transition-colors">
              <Send className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-1">
              <button onClick={() => setLang("ru")} className={`px-2 py-1 transition-colors ${lang === "ru" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"}`}>RU</button>
              <span className="text-foreground/30">/</span>
              <button onClick={() => setLang("en")} className={`px-2 py-1 transition-colors ${lang === "en" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"}`}>EN</button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">{t.heroKicker}</p>
          <h1 style={serif} className="text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.05] whitespace-pre-line mb-10">{t.heroTitle}</h1>
          <p className="text-base md:text-[17px] leading-[1.8] text-foreground/70 max-w-2xl mx-auto mb-12">{t.heroBody}</p>
          <a href="#contact" className="inline-block text-[11px] tracking-[0.3em] uppercase rounded-full px-8 py-4 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors">
            {t.heroCta}
          </a>
        </div>
      </section>

      {/* CASE — БУКЕТНАЯ */}
      <section className="py-20 md:py-28 border-t border-border/40 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.caseKicker}</p>
              <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05] mb-3">{t.caseTitle}</h2>
              <p className="text-[12px] tracking-[0.2em] uppercase text-foreground/55">{t.caseAddress}</p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/75 whitespace-pre-line">{t.caseBody}</p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <img src={buketnayaElena} srcSet={`${buketnayaElenaSmall} 800w, ${buketnayaElena} 1600w`} sizes="(max-width: 768px) 100vw, 400px" alt={t.caseAlt1} loading="lazy" decoding="async" className="w-full h-full object-cover aspect-[3/4] block" />
              <img src={buketnayaFacade} srcSet={`${buketnayaFacadeSmall} 800w, ${buketnayaFacade} 1600w`} sizes="(max-width: 768px) 100vw, 400px" alt={t.caseAlt2} loading="lazy" decoding="async" className="w-full h-full object-cover aspect-[3/4] block" />
              <img src={buketnayaBear} srcSet={`${buketnayaBearSmall} 800w, ${buketnayaBear} 1600w`} sizes="(max-width: 768px) 100vw, 400px" alt={t.caseAlt4} loading="lazy" decoding="async" className="w-full h-full object-cover aspect-[3/4] block" />
            </div>
            <div>
              <img src={buketnayaWall} srcSet={`${buketnayaWallSmall} 800w, ${buketnayaWall} 1600w`} sizes="(max-width: 768px) 100vw, 1024px" alt={t.caseAlt3} loading="lazy" decoding="async" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.mockupsKicker}</p>
            <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05] mb-6">{t.mockupsTitle}</h2>
            <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/70">{t.mockupsBody}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {t.mockups.map((m, i) => (
              <figure key={i}>
                <div className="overflow-hidden bg-secondary">
                  <img src={m.src} srcSet={`${m.srcSmall} 800w, ${m.src} 1600w`} sizes="(max-width: 768px) 100vw, 600px" alt={lang === "ru" ? `Акварель в интерьере — ${m.label}, пример размещения работ Елены Козловой` : `Watercolour in interior — ${m.label}, placement example of Elena Kozlova’s works`} loading="lazy" decoding="async" className="w-full h-auto object-cover aspect-[4/3]" />
                </div>
                <figcaption className="mt-5 text-[12px] tracking-[0.25em] uppercase text-foreground/65">{m.label}</figcaption>
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
              <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-6">{t.processKicker}</p>
              <h2 style={serif} className="text-4xl md:text-6xl font-light leading-[1.05]">{t.processTitle}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {t.process.map((s) => (
              <div key={s.n} className="border-t border-border/60 pt-6">
                <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/50 mb-4">{s.n}</p>
                <h3 style={serif} className="text-2xl md:text-3xl font-light leading-[1.15] mb-4">{s.title}</h3>
                <p className="text-[14px] leading-[1.75] text-foreground/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-36 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-foreground/50 mb-8">{t.ctaKicker}</p>
          <h2 style={serif} className="text-4xl md:text-5xl font-light leading-[1.15] mb-6">{t.ctaTitle}</h2>
          <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/70 mb-12">{t.ctaBody}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={TG_DM_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-[#b89a99] text-white hover:bg-[#a8888a] transition-colors">
              <Send className="w-4 h-4" strokeWidth={1.75} />
              {t.ctaTg}
            </a>
            <a href={MAX_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-transparent border border-[#d9c5c4] text-[#6b5557] hover:bg-[#f1e6e5] transition-colors">
              <MaxIcon className="w-4 h-4" />
              {t.ctaMax}
            </a>
            <a href={MAIL_LINK} className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.3em] uppercase rounded-full px-7 py-3.5 bg-transparent border border-[#d9c5c4] text-[#6b5557] hover:bg-[#f1e6e5] transition-colors">
              <Mail className="w-4 h-4" strokeWidth={1.75} />
              {t.ctaMail}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (упрощённый) */}
      <footer className="border-t border-border/40 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/45">
          <span>© {new Date().getFullYear()} {t.footerName}</span>
          <span>{t.footerRights}</span>
        </div>
      </footer>
    </div>
  );
}
