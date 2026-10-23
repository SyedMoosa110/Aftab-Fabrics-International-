'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Menu, MessageCircle, Search, X } from 'lucide-react';
import { useQuote } from '@/context/QuoteContext';
import { useScrollTo } from '@/context/Providers';
import { CATEGORIES } from '@/lib/data';
import SearchModal from './SearchModal';
import KhataModal from './KhataModal';

export default function Header() {
  const { items, setOpen } = useQuote();
  const scrollTo = useScrollTo();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [khata, setKhata] = useState(false);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearch(true); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const go = (t: string) => { setMenu(false); setTimeout(() => scrollTo(t), 150); };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="h-8 bg-espresso text-ochre text-[10px] tracking-[0.18em] uppercase flex items-center justify-center overflow-hidden">
          <span className="truncate px-4">Dispatching daily to Karachi, Faisalabad, Rawalpindi &amp; nationwide · Direct mill rates</span>
        </div>
        <nav className="backdrop-blur-md bg-alabaster/80 border-b border-silk">
          <div className="mx-auto max-w-7xl h-16 px-4 lg:px-12 grid grid-cols-3 items-center">
            <div className="flex items-center gap-5">
              <button onClick={() => setMenu(true)} aria-label="Open menu"><Menu className="w-5 h-5" /></button>
              <button onClick={() => setKhata(true)} className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-wider hover:text-ochre-deep transition-colors">
                <BookOpen className="w-4 h-4" /> Dealer Login
              </button>
            </div>
            <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo(0); }} className="text-center leading-none">
              <span className="block font-serif text-xl tracking-[0.3em]">AFTAB FABRICS</span>
              <span className="block text-[9px] tracking-[0.3em] text-ochre-deep mt-1">EST. 1992 · LAHORE</span>
            </a>
            <div className="flex items-center justify-end gap-4">
              <button onClick={() => setSearch(true)} aria-label="Search (Ctrl+K)" className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                <kbd className="hidden lg:inline text-[9px] border border-silk px-1.5 py-0.5 text-espresso/50">⌘K</kbd>
              </button>
              <button onClick={() => setOpen(true)} className="relative flex items-center gap-2 bg-espresso text-alabaster px-3 py-2 text-[11px] uppercase tracking-wider hover:bg-ochre-deep transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Quote</span>
                <span className="font-mono text-ochre">{items.length}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.aside className="fixed inset-0 z-[60] bg-espresso text-alabaster p-8 lg:p-16"
            initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}>
            <button onClick={() => setMenu(false)} aria-label="Close menu" className="absolute right-8 top-8"><X className="w-6 h-6" /></button>
            <p className="text-[10px] tracking-[0.3em] text-ochre uppercase mb-10">The Collection</p>
            <ul className="space-y-4">
              {CATEGORIES.map((c, i) => (
                <motion.li key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}>
                  <button onClick={() => go('#categories')} className="font-serif text-4xl sm:text-6xl hover:text-ochre transition-colors text-left">{c.title}</button>
                </motion.li>
              ))}
              <li><button onClick={() => go('#collections')} className="font-serif italic text-3xl text-ochre">Featured Collections</button></li>
              <li><button onClick={() => go('#dealer')} className="font-serif italic text-3xl text-ochre">Become a Dealer</button></li>
              <li><button onClick={() => { setMenu(false); setKhata(true); }} className="font-serif italic text-3xl text-ochre">Dealer Login</button></li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>

      <SearchModal open={search} onClose={() => setSearch(false)} />
      <KhataModal open={khata} onClose={() => setKhata(false)} />
    </>
  );
}
