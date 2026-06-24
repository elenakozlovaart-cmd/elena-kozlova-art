// Формирует srcSet для пары 800w/1600w. Браузер выбирает по viewport и DPI.
export const makeSrcSet = (src1600: string, src800: string) => `${src800} 800w, ${src1600} 1600w`;

export type Lang = "ru" | "en";

// Физические ширина и высота работы в см — для масштаба карточек в галерее.
// "60 × 40 см" + vertical=false → { wCm: 60, hCm: 40 } (горизонтальная)
// "38 × 56 см" + vertical=true  → { wCm: 38, hCm: 56 } (узкая высокая)
// "d 40 см" → { wCm: 40, hCm: 40 } (круглая = квадратная карточка)
// Множитель "× 2" в диптихе игнорируется — масштабируемся по одной панели.
export function parseSizeCm(s: string, vertical = false): { wCm: number; hCm: number } {
  const nums = s.match(/\d+/g);
  if (!nums || nums.length === 0) return { wCm: 50, hCm: 50 };
  if (nums.length === 1) {
    const d = Number(nums[0]);
    return { wCm: d, hCm: d };
  }
  const longSide = Math.max(Number(nums[0]), Number(nums[1]));
  const shortSide = Math.min(Number(nums[0]), Number(nums[1]));
  return vertical
    ? { wCm: shortSide, hCm: longSide }
    : { wCm: longSide, hCm: shortSide };
}
