import world01 from "@/assets/world-01-1600w.jpg";
import world01_800 from "@/assets/world-01-800w.jpg";
import world02 from "@/assets/world-02-1600w.jpg";
import world02_800 from "@/assets/world-02-800w.jpg";
import world03 from "@/assets/world-03-1600w.jpg";
import world03_800 from "@/assets/world-03-800w.jpg";
import world04 from "@/assets/world-04-1600w.jpg";
import world04_800 from "@/assets/world-04-800w.jpg";
import world05 from "@/assets/world-05-1600w.jpg";
import world05_800 from "@/assets/world-05-800w.jpg";
import world06 from "@/assets/world-06-1600w.jpg";
import world06_800 from "@/assets/world-06-800w.jpg";
import world07 from "@/assets/world-07-1600w.jpg";
import world07_800 from "@/assets/world-07-800w.jpg";
import world08 from "@/assets/world-08-1600w.jpg";
import world08_800 from "@/assets/world-08-800w.jpg";
import world09 from "@/assets/world-09-1600w.jpg";
import world09_800 from "@/assets/world-09-800w.jpg";
import world10 from "@/assets/world-10-1600w.jpg";
import world10_800 from "@/assets/world-10-800w.jpg";

export type WorldPhoto = {
  src: string;
  src800: string;
  ru: string;
  en: string;
};

export const worldPhotos: WorldPhoto[] = [
  { src: world01, src800: world01_800, ru: "Художник у работ в выставочном зале", en: "Artist with her works in the exhibition hall" },
  { src: world07, src800: world07_800, ru: "Пленэр на Площади Республики, Ереван", en: "Plein air at Republic Square, Yerevan" },
  { src: world06, src800: world06_800, ru: "Пленэр в Дилижане, Армения", en: "Plein air in Dilijan, Armenia" },
  { src: world10, src800: world10_800, ru: "Пленэр на Байкале", en: "Plein air at Lake Baikal" },
  { src: world03, src800: world03_800, ru: "Работа на пленэре в парке", en: "Working en plein air in the park" },
  { src: world08, src800: world08_800, ru: "Пленэр у воды, Москва", en: "Plein air by the water, Moscow" },
  { src: world05, src800: world05_800, ru: "Палитра и акварель в работе", en: "Palette and watercolour in progress" },
  { src: world09, src800: world09_800, ru: "Этюд деревни — процесс и палитра", en: "Village study — process and palette" },
  { src: world04, src800: world04_800, ru: "Создание акварели в мастерской", en: "Creating a watercolour in the studio" },
  { src: world02, src800: world02_800, ru: "У художественной галереи", en: "At the art gallery" },
];
