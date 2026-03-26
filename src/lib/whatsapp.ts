export const WA_NUMBER = "263773540198";
export const waLink = (msg?: string) =>
  `https://wa.me/${WA_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const WA_QUOTE = waLink("Hello, I would like to request a petroleum products quote. Please assist.");
export const WA_PRODUCT = (name: string) =>
  waLink(`Hello, I am interested in ${name}. Please send me a quote and spec sheet.`);
export const WA_SPEC = (name: string) =>
  waLink(`Hello, could you please send me the spec sheet for ${name}?`);
