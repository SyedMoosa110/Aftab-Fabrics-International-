export interface ColorVariant { name: string; hex: string }
export interface Product {
  id: string; sku: string; title: string; collection: string; blurb: string;
  moq: string; metersPerThaan: number; colors: ColorVariant[];
  images: { box: string; fabric: string };
}
export interface Category { id: string; title: string; note: string; image: string; span: string }
export interface Slide { tag: string; lead: string; italic: string; body: string; image: string }
