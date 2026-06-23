export const WA_PRIMARY = "263773540198";
export const WA_SECONDARY = "263712220874";

export const waLink = (msg?: string) =>
  `https://wa.me/${WA_PRIMARY}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const WA_QUOTE = waLink("Hello, I would like to discuss a petroleum products opportunity. Please assist.");
export const WA_PRODUCT = (name: string) =>
  waLink(`Hello, I am interested in ${name}. Please send me more information.`);
export const WA_SPEC = (name: string) =>
  waLink(`Hello, could you please send me the specification sheet for ${name}?`);

export const CONTACT_EMAIL = "absalomlusuwi@lusfamenergy.com";
export const CONTACT_PHONE_PRIMARY = "+263 77 354 0198";
export const CONTACT_PHONE_SECONDARY = "+263 71 222 0874";
export const CONTACT_ADDRESS = "Stand 2488, Crowhill, Harare, Zimbabwe";
