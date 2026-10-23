import type { Category, Product, Slide } from './types';
import { IMG } from './images';

export const BUSINESS = {
  name: 'Aftab Fabrics International',
  brand: 'Legend by Aftab Fabrics International',
  tagline: 'Splendid wearing for life',
  est: 1992,
  phoneDisplay: '+92 310 4887728',
  phoneWa: '923104887728',
  address: 'Shop 98, Near Chuna Mandi Chowk, Azam Cloth Market, Lahore, Pakistan',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Azam+Cloth+Market+Lahore',
  facebook: 'AftabFabricsInternational',
};

export const SLIDES: Slide[] = [
  { tag: 'New Wholesale Arrivals', lead: 'Timeless Heritage', italic: 'for the Modern Gentleman',
    body: 'Crafting premium cotton latha and suiting since 1992. Direct mill allocations from Azam Cloth Market, Lahore to your store.',
    image: IMG.hero1.url },
  { tag: 'Legend Suiting', lead: 'Weave Density', italic: 'You Can Feel in the Hand',
    body: 'Yarn purity and weave density selected for the retailer whose customers return for the fall of the cloth.',
    image: IMG.hero2.url },
  { tag: 'Thaan & Roll Lots', lead: 'Rolled Right,', italic: 'Dispatched Daily',
    body: 'Full thaan lots, shade-carded and bilty-dispatched across Pakistan.',
    image: IMG.hero3.url },
];

export const TRUST = [
  { icon: 'mill', title: 'Direct Mill Rates', text: 'Wholesale rates straight from Azam Cloth Market, Lahore.' },
  { icon: 'truck', title: 'Nationwide Cargo & Bilty', text: 'Daily shipments via cargo partners and local bilty networks.' },
  { icon: 'shield', title: '100% Weave Guarantee', text: 'Tested weave and colorfast status.' },
  { icon: 'phone', title: '24/7 Desk', text: `Direct call and WhatsApp on ${BUSINESS.phoneDisplay}.` },
] as const;

export const CATEGORIES: Category[] = [
  { id: 'cotton', title: 'Pure Cotton & Latha', note: 'Signature 68000 and 80000 weave textures', image: IMG.catCotton.url, span: 'lg:col-span-2 lg:row-span-2' },
  { id: 'washwear', title: 'Wash & Wear Suiting', note: 'Multi-season gents’ wear', image: IMG.catWashWear.url, span: '' },
  { id: 'kamalia', title: 'Kamalia & Textured Weaves', note: 'Slub, dobby and karandi', image: IMG.catKamalia.url, span: '' },
  { id: 'boski', title: 'Boski & Formal Silk', note: 'Silk-finish heavyweight Boski', image: IMG.catBoski.url, span: 'lg:col-span-2' },
];

const shades = (list: [string, string][]) => list.map(([name, hex]) => ({ name, hex }));

// SKUs, MOQs and shades are PLACEHOLDERS. Replace with the client's real data.
export const PRODUCTS: Product[] = [
  { id: 'legend', sku: 'LGD-001', title: 'Legend Suiting', collection: 'Legend', blurb: 'The flagship line.',
    moq: '1 Thaan', metersPerThaan: 40,
    colors: shades([['Ivory', '#F4EFE6'], ['Charcoal', '#3A3A3F'], ['Navy', '#1F2A44'], ['Fawn', '#B89B72'], ['Olive', '#5E6148']]),
    images: { box: IMG.legendBox.url, fabric: IMG.legendModel.url } },
  { id: 'trendy', sku: 'TRN-001', title: 'Trendy Threads', collection: 'Trendy Threads', blurb: 'Contemporary shades for the younger buyer.',
    moq: '1 Thaan', metersPerThaan: 40,
    colors: shades([['White', '#FFFFFF'], ['Sky', '#9DB7D0'], ['Slate', '#5B6573'], ['Sand', '#D8C7A8']]),
    images: { box: IMG.trendyBox.url, fabric: IMG.trendyModel.url } },
  { id: 'daynight', sku: 'DNT-001', title: 'Day Night Collection', collection: 'Day Night', blurb: 'Everyday wear with a dependable hand.',
    moq: '1 Thaan', metersPerThaan: 40,
    colors: shades([['Black', '#111111'], ['Grey', '#8A8A8E'], ['Brown', '#6B4E37'], ['Cream', '#EADFC8'], ['Bottle', '#2F4A3A']]),
    images: { box: IMG.daynightBox.url, fabric: IMG.daynightModel.url } },
];
