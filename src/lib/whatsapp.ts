import { BUSINESS } from './data';
export const waLink = (text: string) =>
  `https://wa.me/${BUSINESS.phoneWa}?text=${encodeURIComponent(text)}`;
