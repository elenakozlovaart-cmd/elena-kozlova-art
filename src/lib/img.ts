// Формирует srcSet для пары 800w/1600w. Браузер выбирает по viewport и DPI.
export const makeSrcSet = (src1600: string, src800: string) => `${src800} 800w, ${src1600} 1600w`;

export type Lang = "ru" | "en";
