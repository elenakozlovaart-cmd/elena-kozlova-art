import type { Lang } from "@/lib/img";

import w1 from "@/assets/work-01-1600w.jpg";
import w1_800 from "@/assets/work-01-800w.jpg";
import w2 from "@/assets/work-02-1600w.jpg";
import w2_800 from "@/assets/work-02-800w.jpg";
import w3 from "@/assets/work-03-1600w.jpg";
import w3_800 from "@/assets/work-03-800w.jpg";
import w4 from "@/assets/work-04-1600w.jpg";
import w4_800 from "@/assets/work-04-800w.jpg";
import w5 from "@/assets/work-05-1600w.jpg";
import w5_800 from "@/assets/work-05-800w.jpg";
import w6 from "@/assets/work-06-1600w.jpg";
import w6_800 from "@/assets/work-06-800w.jpg";
import w7 from "@/assets/work-07-1600w.jpg";
import w7_800 from "@/assets/work-07-800w.jpg";
import w6Collage from "@/assets/work-06-collage-1600w.jpg";
import w6Collage800 from "@/assets/work-06-collage-800w.jpg";
import w8 from "@/assets/work-08-1600w.jpg";
import w8_800 from "@/assets/work-08-800w.jpg";
import w17 from "@/assets/work-17-1600w.jpg";
import w17_800 from "@/assets/work-17-800w.jpg";
import w9 from "@/assets/work-09-1600w.jpg";
import w9_800 from "@/assets/work-09-800w.jpg";
import w10 from "@/assets/work-10-1600w.jpg";
import w10_800 from "@/assets/work-10-800w.jpg";
import w11 from "@/assets/work-11-1600w.jpg";
import w11_800 from "@/assets/work-11-800w.jpg";
import w12 from "@/assets/work-12-1600w.jpg";
import w12_800 from "@/assets/work-12-800w.jpg";
import w13 from "@/assets/work-13-1600w.jpg";
import w13_800 from "@/assets/work-13-800w.jpg";
import w14 from "@/assets/work-14-1600w.jpg";
import w14_800 from "@/assets/work-14-800w.jpg";
import w15 from "@/assets/work-15-1600w.jpg";
import w15_800 from "@/assets/work-15-800w.jpg";
import w16 from "@/assets/work-16-1600w.jpg";
import w16_800 from "@/assets/work-16-800w.jpg";
import w18 from "@/assets/work-18-1600w.jpg";
import w18_800 from "@/assets/work-18-800w.jpg";
import w19 from "@/assets/work-19-1600w.jpg";
import w19_800 from "@/assets/work-19-800w.jpg";
import w20 from "@/assets/work-20-1000w.jpg";
import w20_800 from "@/assets/work-20-800w.jpg";
import w21 from "@/assets/work-21-1000w.jpg";
import w21_800 from "@/assets/work-21-800w.jpg";
import w22 from "@/assets/work-22-1000w.jpg";
import w22_800 from "@/assets/work-22-800w.jpg";
import w23 from "@/assets/work-23-1000w.jpg";
import w23_800 from "@/assets/work-23-800w.jpg";

export type WorkInfo = {
  c: string; // category
  t: string; // title
  s: string; // size
  y: string; // year
  st: string; // status
  m: string; // medium
  d: string; // description
};

export type DiptychPart = {
  src: string;
  src800: string;
  labelRu: string;
  labelEn: string;
};

export type Work = {
  src: string;
  src800: string;
  srcWidth?: number;
  price: { rub: number; eur: number };
  diptych?: DiptychPart[];
  breakBefore?: true;
  breakAfter?: true;
  vertical?: true; // true → первое число в `s` это ширина (узкая высокая работа). По умолчанию горизонтальная.
  ru: WorkInfo;
  en: WorkInfo;
};

export const works: Work[] = [
  {
    src: w1,
    src800: w1_800,
    price: { rub: 15000, eur: 150 },
    vertical: true,
    ru: {
      c: "Армения",
      t: "Дилижан",
      s: "38 × 56 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Туман укрывает горные склоны Дилижана — воздух будто растворяет очертания деревьев, оставляя только дыхание леса.",
    },
    en: {
      c: "Armenia",
      t: "Dilijan",
      s: "38 × 56 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper",
      d: "Mist drapes the slopes of Dilijan — the air dissolves the contours of trees, leaving only the breath of the forest.",
    },
  },
  {
    src: w2,
    src800: w2_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Армения",
      t: "Нораванк",
      s: "38 × 56 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Тёплый камень древнего монастыря, выросший из охристых скал. Свет здесь хранит память столетий.",
    },
    en: {
      c: "Armenia",
      t: "Noravank",
      s: "38 × 56 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper",
      d: "Warm stone of the ancient monastery rising from ochre cliffs. The light here holds the memory of centuries.",
    },
  },
  {
    src: w3,
    src800: w3_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Армения",
      t: "Озеро Севан",
      s: "38 × 56 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Прозрачная синь высокогорного озера, где небо и вода говорят на одном языке тишины.",
    },
    en: {
      c: "Armenia",
      t: "Lake Sevan",
      s: "38 × 56 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper",
      d: "The transparent blue of a highland lake, where sky and water share one language of stillness.",
    },
  },
  {
    src: w4,
    src800: w4_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Армения",
      t: "Ереван. Площадь Республики",
      s: "38 × 56 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Розовый туф города оживает в мягком evening light — архитектура дышит, отражаясь в движении прохожих.",
    },
    en: {
      c: "Armenia",
      t: "Yerevan, Republic Square",
      s: "38 × 56 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper",
      d: "The pink tuff of the city comes alive in the soft evening light — architecture breathes through the motion of passers-by.",
    },
  },
  {
    src: w5,
    src800: w5_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Армения",
      t: "Гюмри",
      s: "38 × 56 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Тихие улицы Гюмри, где время движется неспешно, а каждый дом хранит свой собственный сюжет.",
    },
    en: {
      c: "Armenia",
      t: "Gyumri",
      s: "38 × 56 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper",
      d: "Quiet streets of Gyumri, where time moves slowly and each house keeps its own quiet story.",
    },
  },
  {
    src: w6Collage,
    src800: w6Collage800,
    price: { rub: 30000, eur: 300 },
    diptych: [
      { src: w6, src800: w6_800, labelRu: "I", labelEn: "I" },
      { src: w7, src800: w7_800, labelRu: "II", labelEn: "II" },
    ],
    ru: {
      c: "Родина-мать",
      t: "Родина-мать (диптих)",
      s: "40 × 60 см × 2",
      y: "2025",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Диптих: монументальный силуэт и его продолжение — размышление о памяти и пространстве, переданное лёгкостью акварели. Продаётся только парой.",
    },
    en: {
      c: "Motherland",
      t: "Motherland (diptych)",
      s: "40 × 60 cm × 2",
      y: "2025",
      st: "Available",
      m: "Watercolour on paper",
      d: "A diptych: a monumental silhouette and its continuation — a reflection on memory and space conveyed through the lightness of watercolour. Sold only as a pair.",
    },
  },
  {
    src: w8,
    src800: w8_800,
    price: { rub: 18000, eur: 180 },
    ru: {
      c: "Городская лирика",
      t: "Сквозь дождь",
      s: "60 × 40 см",
      y: "2025",
      st: "В наличии",
      m: "Акварель бумага на планшете, в раме",
      d: "Город сквозь стеклянную пелену дождя — отражения и движение размывают границы между улицей и сном.",
    },
    en: {
      c: "Urban lyrics",
      t: "Through the Rain",
      s: "60 × 40 cm",
      y: "2025",
      st: "Available",
      m: "Watercolour on paper on board, framed",
      d: "A city seen through a glassy veil of rain — reflections and movement blur the line between street and dream.",
    },
  },
  {
    src: w17,
    src800: w17_800,
    price: { rub: 30000, eur: 300 },
    ru: {
      c: "Городская лирика",
      t: "Тёплый след",
      s: "70 × 50 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель, бумага на планшете",
      d: "Работа из серии «Сквозь дождь», построенной на эффекте капель на стекле и размытых огней города. Сердце, проведённое пальцем по запотевшему окну, становится тёплым следом чьего-то присутствия — коротким и хрупким, прежде чем его смоет дождь.",
    },
    en: {
      c: "Urban lyrics",
      t: "A Warm Trace",
      s: "70 × 50 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper on board",
      d: 'Part of the "Through the Rain" series, built on the effect of raindrops on glass and the blurred lights of the city. A heart traced by a finger on a misted window becomes the warm trace of someone’s presence — brief and fragile, before the rain washes it away.',
    },
  },
  {
    src: w18,
    src800: w18_800,
    price: { rub: 18000, eur: 180 },
    ru: {
      c: "Городская лирика",
      t: "ПроСвет",
      s: "60 × 40 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель, бумага на планшете",
      d: "Прозрачный купол зонта, последние капли и тёплые отражения витрин — момент, когда дождь стихает и небо начинает светлеть. Работа из серии «Сквозь дождь».",
    },
    en: {
      c: "Urban lyrics",
      t: "ProSvet",
      s: "60 × 40 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper on board",
      d: 'A transparent umbrella, the last drops, and warm reflections of shop windows — the moment when the rain quiets and the sky begins to clear. Part of the "Through the Rain" series.',
    },
  },
  {
    src: w19,
    src800: w19_800,
    price: { rub: 18000, eur: 180 },
    ru: {
      c: "Городская лирика",
      t: "Идущие по небу",
      s: "60 × 40 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель, бумага на планшете",
      d: "Работа из серии «Сквозь дождь»: фигуры прохожих и отражения города будто продолжаются в светлом небе.",
    },
    en: {
      c: "Urban lyrics",
      t: "Walking in the Sky",
      s: "60 × 40 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper on board",
      d: 'Part of the "Through the Rain" series: figures of passers-by and city reflections seem to continue into the bright sky.',
    },
  },
  {
    src: w9,
    src800: w9_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Байкал",
      t: "Деревня на Ольхоне. Байкал",
      s: "38 × 56 см",
      y: "2024",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Деревянные дома на ветреном острове — простая жизнь у большой воды, написанная в единой тёплой палитре.",
    },
    en: {
      c: "Baikal",
      t: "Village on Olkhon. Baikal",
      s: "38 × 56 cm",
      y: "2024",
      st: "Available",
      m: "Watercolour on paper",
      d: "Wooden houses on a windswept island — quiet life beside the great water, painted in a single warm palette.",
    },
  },
  {
    src: w10,
    src800: w10_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Байкал",
      t: "Ступа Просветления на острове Огой. Байкал",
      s: "38 × 56 см",
      y: "2024",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Белая ступа над озером — точка покоя в широте байкальского пейзажа, где горизонт становится молитвой.",
    },
    en: {
      c: "Baikal",
      t: "Stupa of Enlightenment on Ogoy Island. Baikal",
      s: "38 × 56 cm",
      y: "2024",
      st: "Available",
      m: "Watercolour on paper",
      d: "A white stupa above the lake — a point of stillness in the vastness of Baikal, where the horizon turns into prayer.",
    },
  },
  {
    src: w11,
    src800: w11_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Байкал",
      t: "Байкал. Корабли",
      s: "38 × 56 см",
      y: "2024",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Силуэты кораблей у берега — пауза между плаванием и тишиной, между водой и небом.",
    },
    en: {
      c: "Baikal",
      t: "Baikal. Ships",
      s: "38 × 56 cm",
      y: "2024",
      st: "Available",
      m: "Watercolour on paper",
      d: "Silhouettes of ships at the shore — a pause between voyage and silence, between water and sky.",
    },
  },
  {
    src: w12,
    src800: w12_800,
    price: { rub: 15000, eur: 150 },
    ru: {
      c: "Байкал",
      t: "Ольхон. Шаманка",
      s: "38 × 56 см",
      y: "2024",
      st: "В наличии",
      m: "Акварель на бумаге",
      d: "Скала Шаманка — древний образ Байкала, написанный почти иконографично: камень, ветер и свет.",
    },
    en: {
      c: "Baikal",
      t: "Olkhon. Shamanka",
      s: "38 × 56 cm",
      y: "2024",
      st: "Available",
      m: "Watercolour on paper",
      d: "Shamanka Rock — an ancient image of Baikal rendered almost iconographically: stone, wind and light.",
    },
  },
  {
    src: w13,
    src800: w13_800,
    price: { rub: 18000, eur: 180 },
    ru: {
      c: "Круглая серия",
      t: "Огни города",
      s: "d 50 см",
      y: "2025",
      st: "В наличии",
      m: "Акварель бумага на планшете, в раме",
      d: "Ночные огни, собранные в круг — городская мелодия, увиденная издалека и сведённая к чистому свету.",
    },
    en: {
      c: "Circular series",
      t: "City Lights",
      s: "d 50 cm",
      y: "2025",
      st: "Available",
      m: "Watercolour on paper on board, framed",
      d: "Night lights gathered into a circle — an urban melody seen from afar and distilled into pure light.",
    },
  },
  {
    src: w14,
    src800: w14_800,
    price: { rub: 12000, eur: 120 },
    ru: {
      c: "Круглая серия",
      t: "Чайка над водой",
      s: "d 40 см",
      y: "2025",
      st: "В наличии",
      m: "Акварель бумага на планшете, в раме",
      d: "Лёгкое движение крыла над водной гладью — мгновение, остановленное прозрачным мазком.",
    },
    en: {
      c: "Circular series",
      t: "Gull Above Water",
      s: "d 40 cm",
      y: "2025",
      st: "Available",
      m: "Watercolour on paper on board, framed",
      d: "The light motion of a wing above still water — an instant held by a single transparent stroke.",
    },
  },
  {
    src: w15,
    src800: w15_800,
    price: { rub: 12000, eur: 120 },
    ru: {
      c: "Круглая серия",
      t: "Полёт",
      s: "d 40 см",
      y: "2025",
      st: "В наличии",
      m: "Акварель бумага на планшете, в раме",
      d: "Птица в свободном пространстве воздуха — образ внутренней лёгкости и тишины.",
    },
    en: {
      c: "Circular series",
      t: "Flight",
      s: "d 40 cm",
      y: "2025",
      st: "Available",
      m: "Watercolour on paper on board, framed",
      d: "A bird in the open space of air — an image of inner lightness and stillness.",
    },
  },
  {
    src: w16,
    src800: w16_800,
    price: { rub: 12000, eur: 120 },
    ru: {
      c: "Круглая серия",
      t: "Москва на закате",
      s: "d 40 см",
      y: "2025",
      st: "В наличии",
      m: "Акварель бумага на планшете, в раме",
      d: "Тёплый закатный свет ложится на знакомые силуэты — город становится мягким, почти музыкальным.",
    },
    en: {
      c: "Circular series",
      t: "Moscow at Sunset",
      s: "d 40 cm",
      y: "2025",
      st: "Available",
      m: "Watercolour on paper on board, framed",
      d: "Warm sunset light falls on familiar silhouettes — the city becomes soft, almost musical.",
    },
  },
  {
    src: w20,
    src800: w20_800,
    srcWidth: 1000,
    breakBefore: true,
    price: { rub: 12000, eur: 120 },
    ru: {
      c: "Цветы",
      t: "Бархатный вечер",
      s: "d 40 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель, бумага на планшете",
      d: "Роза в глубоких сумеречных оттенках — мягкий цветочный образ, собранный в круг.",
    },
    en: {
      c: "Flowers",
      t: "Velvet Evening",
      s: "d 40 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper on board",
      d: "A rose in deep twilight tones — a soft floral image gathered into a circle.",
    },
  },
  {
    src: w21,
    src800: w21_800,
    srcWidth: 1000,
    breakAfter: true,
    price: { rub: 12000, eur: 120 },
    ru: {
      c: "Цветы",
      t: "Мелодия июня",
      s: "d 40 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель, бумага на планшете",
      d: "Раскрытый пион и свежая зелень создают ясный, светлый образ начала лета.",
    },
    en: {
      c: "Flowers",
      t: "June Melody",
      s: "d 40 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper on board",
      d: "An open peony and fresh greenery create a clear, luminous image of early summer.",
    },
  },
  {
    src: w22,
    src800: w22_800,
    srcWidth: 1000,
    price: { rub: 12000, eur: 120 },
    ru: {
      c: "Цветы",
      t: "Жемчуг дождя",
      s: "d 40 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель, бумага на планшете",
      d: "Капли на лепестках орхидеи становятся частью её рисунка и усиливают глубину цвета.",
    },
    en: {
      c: "Flowers",
      t: "Pearls of Rain",
      s: "d 40 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper on board",
      d: "Drops on the orchid petals become part of its pattern and deepen the colour.",
    },
  },
  {
    src: w23,
    src800: w23_800,
    srcWidth: 1000,
    price: { rub: 12000, eur: 120 },
    ru: {
      c: "Цветы",
      t: "Притяжение",
      s: "d 40 см",
      y: "2026",
      st: "В наличии",
      m: "Акварель, бумага на планшете",
      d: "Две рыбы движутся навстречу друг другу среди цветов и тёмной воды — образ тихого притяжения.",
    },
    en: {
      c: "Flowers",
      t: "Attraction",
      s: "d 40 cm",
      y: "2026",
      st: "Available",
      m: "Watercolour on paper on board",
      d: "Two fish move towards each other among flowers and dark water — an image of quiet attraction.",
    },
  },
];

export const getWorkAlt = (info: WorkInfo, lang: Lang): string =>
  lang === "ru"
    ? `Акварель «${info.t}» — ${info.c}, ${info.s}, ${info.y}, художник Елена Козлова`
    : `Watercolour "${info.t}" — ${info.c}, ${info.s}, ${info.y}, by artist Elena Kozlova`;

export const formatPrice = (price: { rub: number; eur: number }, lang: Lang): string =>
  lang === "ru" ? `${price.rub.toLocaleString("ru-RU")} руб.` : `${price.eur} €`;
