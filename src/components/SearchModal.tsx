'use client';
import { useEffect, useRef, useState } from 'react';
import Modal from './ui/Modal';
import { CATEGORIES, PRODUCTS } from '@/lib/data';
import { useScrollTo } from '@/context/Providers';

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const scrollTo = useScrollTo();
  useEffect(() => { if (open) setTimeout(() => ref.current?.focus(), 100); else setQ(''); }, [open]);

  const needle = q.trim().toLowerCase();
  const results = [
    ...CATEGORIES.map((c) => ({ label: c.title, sub: 'Category', target: '#categories' })),
    ...PRODUCTS.map((p) => ({ label: p.title, sub: `${p.collection} · ${p.sku}`, target: '#collections' })),
  ].filter((r) => !needle || `${r.label} ${r.sub}`.toLowerCase().includes(needle));

  return (
    <Modal open={open} onClose={onClose} label="Search fabrics">
      <input ref={ref} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search latha, Legend, boski…"
        className="w-full border-b border-silk pb-3 font-serif text-2xl outline-none placeholder:text-espresso/30 focus:border-ochre" />
      <ul className="mt-4 max-h-72 overflow-auto divide-y divide-silk" data-lenis-prevent>
        {results.length === 0 && <li className="py-6 text-sm text-espresso/50">No match. Ask the desk on WhatsApp.</li>}
        {results.map((r) => (
          <li key={r.label}>
            <button onClick={() => { onClose(); setTimeout(() => scrollTo(r.target), 200); }}
              className="w-full py-3 flex items-baseline justify-between hover:text-ochre-deep text-left">
              <span className="font-serif text-lg">{r.label}</span>
              <span className="text-[10px] uppercase tracking-wider text-espresso/50">{r.sub}</span>
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
