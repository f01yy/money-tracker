export function getNormalizedPrice(value) {
  return `${String(value)
    .split('')
    .reverse()
    .map((dig, idx) => (idx % 3 === 0 && idx > 0 ? `${dig} ` : dig))
    .reverse()
    .join('')
    .trim()} ₽`;
}
