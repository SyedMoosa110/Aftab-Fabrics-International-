# Aftab Fabrics International — Luxury B2B Website

Next.js 14 (App Router) · Tailwind 3.4 · Framer Motion · Lenis · Lucide

## Run karne ka tareeqa
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Node 18.17+ chahiye. Google Fonts (Cormorant Garamond, Plus Jakarta Sans) internet se load hote hain.

## Real photos lagana
`public/images/` mein abhi **placeholder fabric textures** hain. Inhi naam ki apni WebP photos (85% quality) se replace kar dein:
hero-drape, hero-weave, hero-thaan, cat-cotton, cat-washwear, cat-kamalia, cat-boski,
legend-box, legend-fabric, trendy-box, trendy-fabric, daynight-box, daynight-fabric (4:5 portrait),
macro-cotton (wide). Facebook CDN links use na karein, wo expire ho jate hain; photos download karke yahin rakhein.

## Data badalna
`src/lib/data.ts`: phone, address, slides, categories, products. SKU, MOQ, thaan length aur shade hex abhi **placeholder** hain, client ke real data se replace karein.
WhatsApp number sirf `BUSINESS.phoneWa` mein hai.

## Launch se pehle client se confirm karein
- "Pure cotton / colorfast / tested" claims sach aur provable hon.
- "500+ retail outlets" ka claim.
- Dealer form aur Khata modal sirf WhatsApp par bhejte hain (backend nahi). Agla step: `/api/dealers` route + database/sheet.

## Structure
```
src/app        layout, page, globals.css
src/lib        types, data, whatsapp link builder
src/context    Providers (preloader + Lenis), QuoteContext (quote basket)
src/components Header, Hero, TrustStrip, Categories, ProductCard, Collections,
               MidBanner, DealerSignup, Footer, QuoteDrawer, Search/Khata modals, ui/*
```
