'use client';
import { useState } from 'react';
import { PRODUCTS } from '@/lib/data';
import { waLink } from '@/lib/whatsapp';
import Reveal from './ui/Reveal';

export default function LotCalculator() {
  const [id, setId] = useState(PRODUCTS[0].id);
  const [thaans, setThaans] = useState(5);
  const p = PRODUCTS.find((x) => x.id === id)!;
  const meters = thaans * p.metersPerThaan;
  const yards = Math.round(meters * 1.0936);
  const msg = `Assalam-o-Alaikum, I need a rate for ${thaans} thaan (${meters} m) of ${p.title} (SKU ${p.sku}). Please share the lot price and availability.`;

  return (
    <section id="calculator" className="bg-sand/50 py-24 px-6 lg:px-12">
      <Reveal className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ochre-deep mb-3">B2B Lot Calculator</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light">Plan your lot, <span className="italic text-ochre-deep">get the rate</span></h2>
          <p className="text-sm text-espresso/60 mt-4 max-w-md">Pick a line and the number of thaans. See the total length instantly, then send it to the wholesale desk for today’s price.</p>
        </div>
        <div className="bg-white border border-silk p-8 shadow-xl">
          <label className="text-[10px] uppercase tracking-wider text-espresso/50">Collection</label>
          <select value={id} onChange={(e) => setId(e.target.value)} className="mt-2 w-full border border-silk bg-alabaster px-4 py-3 text-sm outline-none focus:border-ochre">
            {PRODUCTS.map((x) => <option key={x.id} value={x.id}>{x.title}</option>)}
          </select>
          <label className="mt-6 block text-[10px] uppercase tracking-wider text-espresso/50">Thaans: <span className="font-mono text-espresso">{thaans}</span></label>
          <input type="range" min={1} max={60} value={thaans} onChange={(e) => setThaans(+e.target.value)} className="mt-2 w-full accent-[#8C7A5E]" />
          <div className="mt-6 grid grid-cols-2 border-t border-silk pt-5 text-center">
            <div><p className="font-serif text-4xl">{meters}</p><p className="text-[10px] uppercase tracking-wider text-espresso/50">Meters</p></div>
            <div><p className="font-serif text-4xl">{yards}</p><p className="text-[10px] uppercase tracking-wider text-espresso/50">Yards</p></div>
          </div>
          <a href={waLink(msg)} target="_blank" rel="noopener noreferrer"
            className="mt-6 block text-center bg-[#25D366] text-white py-4 text-xs uppercase tracking-wider font-semibold hover:bg-[#1DA851] transition-colors">Get Rate on WhatsApp</a>
        </div>
      </Reveal>
    </section>
  );
}
