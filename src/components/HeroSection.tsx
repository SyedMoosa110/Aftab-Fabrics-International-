'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES, BUSINESS } from '@/lib/data';
import { useScrollTo } from '@/context/Providers';
import FabricImage from './ui/FabricImage';
import Magnetic from './ui/Magnetic';

export default function HeroSection() {
  const [i, setI] = useState(0);
  const scrollTo = useScrollTo();
  const s = SLIDES[i];
  const n = SLIDES.length;
  const pad = (x: number) => String(x).padStart(2, '0');

  useEffect(() => {
    const t = setTimeout(() => setI((p) => (p + 1) % n), 6000);
    return () => clearTimeout(t);
  }, [i, n]);

  return (
    <section id="top" className="relative min-h-screen bg-alabaster pt-36 pb-16 px-6 lg:px-12 flex items-center overflow-hidden">
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-7 min-h-[26rem] justify-center">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="space-y-7">
              <span className="inline-flex items-center gap-2 border border-ochre/50 px-3 py-1 bg-sand/60 text-[10px] font-semibold tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-ochre" />{s.tag}
              </span>
              <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight">
                {s.lead}<br /><span className="italic text-ochre-deep">{s.italic}</span>
              </h1>
              <p className="max-w-xl text-sm sm:text-base text-espresso/70 leading-relaxed">{s.body}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap items-center gap-5">
            <Magnetic>
              <button onClick={() => scrollTo('#collections')}
                className="inline-flex items-center gap-3 bg-espresso text-alabaster px-7 py-4 text-xs tracking-wider uppercase font-semibold hover:bg-ochre-deep transition-colors duration-300">
                Explore Wholesale Catalog <ArrowUpRight className="w-4 h-4 text-ochre" />
              </button>
            </Magnetic>
            <a href="#dealer" onClick={(e) => { e.preventDefault(); scrollTo('#dealer'); }}
              className="text-xs uppercase tracking-wider underline underline-offset-8 decoration-ochre hover:text-ochre-deep">
              Get the Rate Sheet
            </a>
          </div>

          <div className="flex items-center gap-5 pt-4 font-mono text-xs text-espresso/60">
            <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous slide"><ChevronLeft className="w-4 h-4" /></button>
            <span>{pad(i + 1)} / {pad(n)}</span>
            <div className="relative h-px w-28 bg-espresso/20 overflow-hidden"><motion.div key={i} className="absolute inset-y-0 left-0 bg-espresso" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 6, ease: 'linear' }} /></div>
            <button onClick={() => setI((i + 1) % n)} aria-label="Next slide"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand shadow-2xl group">
            <AnimatePresence>
              <motion.div key={i} className="absolute inset-0" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }}>
                <FabricImage src={s.image} alt={`${BUSINESS.brand}: ${s.tag}`} priority className="group-hover:scale-105 transition-transform duration-700 ease-out" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Floating heritage seal */}
          <div className="absolute -left-6 bottom-10 animate-float hidden sm:block">
            <div className="relative w-36 h-36 rounded-full backdrop-blur-lg bg-white/40 border border-white/60 shadow-xl grid place-items-center">
              <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spinslow" aria-hidden>
                <defs><path id="seal-circle" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" /></defs>
                <text fontSize="9.5" letterSpacing="2.6" fill="#18181B" className="font-serif italic">
                  <textPath href="#seal-circle">Splendid Wearing for Life — Est. 1992 —</textPath>
                </text>
              </svg>
              <span className="font-serif text-2xl text-ochre-deep">1992</span>
            </div>
          </div>
          <div className="sm:hidden mt-4 backdrop-blur-md bg-white/60 border border-silk p-4 text-center">
            <p className="font-serif italic">“{BUSINESS.tagline}”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
