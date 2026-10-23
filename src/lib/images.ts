// Every photo on the site is declared here. `url` is the remote Unsplash photo,
// `local` is the self-hosted fallback in /public/images used if the remote fails.
// To swap a photo: change the Unsplash ID below (or point `url` at your own file).
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const IMG = {
  hero1: { url: u('photo-1594938298603-c8148c4dae35', 1200), local: '/images/hero-drape.webp' },   // man in tailored blazer
  hero2: { url: u('photo-1507679799987-c73779587ccf', 1200), local: '/images/hero-weave.webp' },   // formal suiting
  hero3: { url: u('photo-1617137968427-85924c800a22', 1200), local: '/images/hero-thaan.webp' },   // gentleman, suit
  catCotton: { url: u('photo-1620799140408-edc6dcb6d633', 900), local: '/images/cat-cotton.webp' },   // white cotton weave
  catWashWear: { url: u('photo-1558769132-cb1aea458c5e', 900), local: '/images/cat-washwear.webp' }, // draped navy/charcoal cloth
  catKamalia: { url: u('photo-1528459801416-a9e53bbf4e17', 900), local: '/images/cat-kamalia.webp' }, // textured yarn / loom
  catBoski: { url: u('photo-1520006403909-838d6b92c22e', 900), local: '/images/cat-boski.webp' },     // ivory / gold silk-finish
  legendModel: { url: u('photo-1552374196-1ab2a1c593e8', 900), local: '/images/legend-fabric.webp' },
  legendBox: { url: u('photo-1549465220-1a8b9238cd48', 900), local: '/images/legend-box.webp' },       // luxury gift box
  trendyModel: { url: u('photo-1516826957135-700dedea698c', 900), local: '/images/trendy-fabric.webp' },
  trendyBox: { url: u('photo-1513885535751-8b9238bd345a', 900), local: '/images/trendy-box.webp' },
  daynightModel: { url: u('photo-1488161628813-04466f872be2', 900), local: '/images/daynight-fabric.webp' },
  daynightBox: { url: u('photo-1607344645866-009c320b63e0', 900), local: '/images/daynight-box.webp' },
  workshop: { url: u('photo-1556905055-8f358a7a47b2', 1800), local: '/images/macro-cotton.webp' },    // tailoring workshop
} as const;

export const FALLBACK: Record<string, string> = Object.fromEntries(
  Object.values(IMG).map((i) => [i.url, i.local])
);
