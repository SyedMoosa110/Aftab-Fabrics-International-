'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';
import { waLink } from '@/lib/whatsapp';

export default function QuoteDrawer() {
  const { items, open, setOpen, setThaans, remove, clear } = useQuote();
  const message = items.length
    ? `Assalam-o-Alaikum, I would like a bulk quote:\n\n${items.map((i, n) => `${n + 1}. ${i.title} (SKU ${i.sku}), Shade: ${i.shade}, ${i.thaans} thaan`).join('\n')}\n\nPlease share lot rates and availability.`
    : '';

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="bd" className="fixed inset-0 z-[65] bg-espresso/40 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.aside key="dr" role="dialog" aria-label="Bulk quote" className="fixed right-0 top-0 bottom-0 z-[66] w-full max-w-md bg-alabaster border-l border-silk flex flex-col"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex items-center justify-between p-6 border-b border-silk">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ochre-deep">WhatsApp Bulk Quote</p>
                <h3 className="font-serif text-3xl">Your Lots ({items.length})</h3>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-auto p-6 space-y-4" data-lenis-prevent>
              {items.length === 0 && <p className="text-sm text-espresso/50">No lots selected yet. Choose a shade on any collection and tap “Quote”.</p>}
              {items.map((i) => (
                <div key={i.key} className="bg-white border border-silk p-4">
                  <div className="flex justify-between">
                    <div><p className="font-serif text-lg leading-tight">{i.title}</p><p className="text-[10px] font-mono text-espresso/50">{i.sku} · {i.shade}</p></div>
                    <button onClick={() => remove(i.key)} aria-label="Remove"><Trash2 className="w-4 h-4 text-espresso/40 hover:text-espresso" /></button>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-sm">
                    <button onClick={() => setThaans(i.key, i.thaans - 1)} aria-label="Fewer" className="w-7 h-7 border border-silk grid place-items-center"><Minus className="w-3 h-3" /></button>
                    <span className="font-mono w-8 text-center">{i.thaans}</span>
                    <button onClick={() => setThaans(i.key, i.thaans + 1)} aria-label="More" className="w-7 h-7 border border-silk grid place-items-center"><Plus className="w-3 h-3" /></button>
                    <span className="text-xs text-espresso/50">thaan</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-silk space-y-3">
              <a aria-disabled={!items.length} href={items.length ? waLink(message) : undefined} target="_blank" rel="noopener noreferrer"
                className={`block text-center py-4 text-xs uppercase tracking-wider font-semibold text-white ${items.length ? 'bg-[#25D366] hover:bg-[#1DA851]' : 'bg-espresso/20 pointer-events-none'}`}>
                Send Quote on WhatsApp
              </a>
              {items.length > 0 && <button onClick={clear} className="w-full text-[11px] uppercase tracking-wider text-espresso/50 hover:text-espresso">Clear all</button>}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
