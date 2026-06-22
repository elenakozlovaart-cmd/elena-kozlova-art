import type { Lang } from "@/lib/img";

import pc1 from "@/assets/postcard-01-1600w.jpg";
import pc1_800 from "@/assets/postcard-01-800w.jpg";
import pc2 from "@/assets/postcard-02-1600w.jpg";
import pc2_800 from "@/assets/postcard-02-800w.jpg";
import pc3 from "@/assets/postcard-03-1600w.jpg";
import pc3_800 from "@/assets/postcard-03-800w.jpg";
import pc4 from "@/assets/postcard-04-1600w.jpg";
import pc4_800 from "@/assets/postcard-04-800w.jpg";
import pc5 from "@/assets/postcard-05-1600w.jpg";
import pc5_800 from "@/assets/postcard-05-800w.jpg";
import pc6 from "@/assets/postcard-06-1600w.jpg";
import pc6_800 from "@/assets/postcard-06-800w.jpg";
import pc7 from "@/assets/postcard-07-1600w.jpg";
import pc7_800 from "@/assets/postcard-07-800w.jpg";
import pc8 from "@/assets/postcard-08-1600w.jpg";
import pc8_800 from "@/assets/postcard-08-800w.jpg";
import pc9 from "@/assets/postcard-09-1600w.jpg";
import pc9_800 from "@/assets/postcard-09-800w.jpg";
import postcardBackImg from "@/assets/postcard-back-1600w.jpg";
import postcardBack800Img from "@/assets/postcard-back-800w.jpg";

export type Postcard = {
  src: string;
  src800: string;
  ru: string;
  en: string;
  sold?: boolean;
};

export const postcards: Postcard[] = [
  { src: pc1, src800: pc1_800, ru: "Скворец", en: "Starling" },
  { src: pc2, src800: pc2_800, ru: "Ласточка на цветущей ветке", en: "Swallow on a Blossoming Branch", sold: true },
  { src: pc3, src800: pc3_800, ru: "Скворец на ветке", en: "Starling on a Branch" },
  { src: pc4, src800: pc4_800, ru: "Верба", en: "Pussy Willow" },
  { src: pc5, src800: pc5_800, ru: "Верба на закате", en: "Pussy Willow at Sunset" },
  { src: pc6, src800: pc6_800, ru: "Скворец на берёзе", en: "Starling on a Birch" },
  { src: pc7, src800: pc7_800, ru: "Японская белоглазка", en: "Japanese White-eye", sold: true },
  { src: pc8, src800: pc8_800, ru: "Голубая верба", en: "Blue Pussy Willow" },
  { src: pc9, src800: pc9_800, ru: "Синица и сакура", en: "Tit and Sakura" },
];

export const postcardBack = postcardBackImg;
export const postcardBack800 = postcardBack800Img;

export const getPostcardAlt = (title: string, lang: Lang): string =>
  lang === "ru"
    ? `Авторская акварельная открытка «${title}» — Елена Козлова, 10 × 15 см`
    : `Artist watercolour postcard "${title}" — Elena Kozlova, 10 × 15 cm`;
