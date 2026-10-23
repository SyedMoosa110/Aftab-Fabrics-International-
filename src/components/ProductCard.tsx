'use client';
import { useState } from 'react';
import { Check, Layers, MessageSquare, Plus } from 'lucide-react';
import clsx from 'clsx';
import type { Product } from '@/lib/types';
import { waLink } from '@/lib/whatsapp';
import { useQuote } from '@/context/QuoteContext';
import FabricImage from './ui/FabricImage';

export default function ProductCard({ product: p }: { product: Product }) {
  const [shade, setShade] = useState(p.colors[0].name);
  const [view, setView] = useState<'box' | 'fabric'>('fabric');
  const { add } = useQuote();
  const shadeHex = p.colors.find((c) => c.name === shade)?.hex ?? '#FFFFFF';

  const inquiry = waLink(
    `Assalam-o-Alaikum, I am inquiring about Wholesale Lot: ${p.title} (SKU: ${p.sku}). Preferred Shade: ${shade}. Please share current lot price per meter and availability.`
  );

  return (
    <article className="group bg-white border border-silk flex flex-col h-full transition-shadow duration-500 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {(['box', 'fabric'] as const).map((v) => (
          <div key={v} className={clsx('absolute inset-0 transition-opacity duration-500', view === v ? 'opacity-100' : 'opacity-0')}>
            <FabricImage src={p.images[v]} alt={`${p.title} ${v === 'box' ? 'packaging' : 'worn by model'}`} sizes="(min-width:1024px) 30vw, 100vw"
              className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
          </div>
        ))}
        <div aria-hidden className="absolute inset-0 pointer-events-none mix-blend-multiply transition-all duration-500" style={{ backgroundColor: shadeHex, opacity: view === 'fabric' ? 0.32 : 0 }} />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 bg-alabaster/90 border border-ochre/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em]">{p.collection}</span>
        <div className="absolute right-3 top-3 flex bg-alabaster/90 border border-silk text-[9px] uppercase tracking-wider">
          {(['box', 'fabric'] as const).map((v) => (
            <button key={v} onClick={() => setView(v)} aria-pressed={view === v}
              className={clsx('px-2.5 py-1 transition-colors', view === v ? 'bg-espresso text-alabaster' : 'hover:bg-sand')}>
              {v === 'box' ? 'Box' : 'Model'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-[10px] font-mono text-espresso/50 mb-1">
          <span>SKU: {p.sku}</span>
          <span className="flex items-center gap-1 text-ochre-deep"><Layers className="w-3 h-3" />{p.metersPerThaan}M / THAAN</span>
        </div>
        <h3 className="font-serif text-2xl leading-snug">{p.title}</h3>
        <p className="text-xs text-espresso/60 mt-1">{p.blurb}</p>

        <div className="mt-4">
          <p className="text-[10px] uppercase tracking-wider text-espresso/50 mb-2">Shade: <span className="text-espresso">{shade}</span> ({p.colors.length} available)</p>
          <div className="flex flex-wrap gap-2">
            {p.colors.map((c) => (
              <button key={c.name} onClick={() => setShade(c.name)} title={c.name} aria-label={c.name} aria-pressed={shade === c.name}
                style={{ backgroundColor: c.hex }}
                className={clsx('w-6 h-6 rounded-full border grid place-items-center transition-transform', shade === c.name ? 'border-espresso scale-110' : 'border-silk')}>
                {shade === c.name && <Check className={clsx('w-3 h-3', ['#FFFFFF', '#F4EFE6', '#EADFC8'].includes(c.hex) ? 'text-espresso' : 'text-white')} />}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="flex justify-between text-xs pb-3 border-t border-sand pt-3">
            <span className="text-espresso/60">Min. Wholesale Lot</span><span className="font-semibold">{p.moq}</span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <button onClick={() => add({ sku: p.sku, title: p.title, shade, thaans: 1 })} aria-label="Add to quote"
              className="col-span-2 inline-flex items-center justify-center gap-1.5 border border-espresso py-3 text-[11px] uppercase tracking-wider font-semibold hover:bg-espresso hover:text-alabaster transition-colors">
              <Plus className="w-3.5 h-3.5" /> Quote
            </button>
            <a href={inquiry} target="_blank" rel="noopener noreferrer"
              className="col-span-3 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 text-[11px] uppercase font-semibold tracking-wider hover:bg-[#1DA851] transition-colors">
              <MessageSquare className="w-4 h-4 fill-current" /> Lot Inquiry
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
