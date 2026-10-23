'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SPRING = { type: 'spring', stiffness: 55, damping: 15, mass: 1 } as const;

export default function AestheticPreloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = performance.now(); const DURATION = 2400;
    let raf = 0; let timer: ReturnType<typeof setTimeout>;
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setPct(Math.round(100 * (1 - Math.pow(1 - t, 3)))); // ease-out
      if (t < 1) raf = requestAnimationFrame(tick);
      else timer = setTimeout(() => { setGone(true); onDone(); }, 350);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div key="pre" className="fixed inset-0 z-[100] flex items-center justify-center" exit={{ transition: { duration: 1.1 } }}>
          <motion.div className="absolute inset-x-0 top-0 h-1/2 bg-espresso" exit={{ y: '-100%' }} transition={SPRING} />
          <motion.div className="absolute inset-x-0 bottom-0 h-1/2 bg-espresso" exit={{ y: '100%' }} transition={SPRING} />
          <motion.div className="relative z-10 text-center" exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
            <span className="block text-[10px] uppercase tracking-[0.35em] text-ochre mb-3">Aftab Fabrics International</span>
            <h2 className="font-serif text-5xl tracking-[0.2em] text-alabaster mb-6">LEGEND</h2>
            <div className="mx-auto h-px w-52 bg-white/15 overflow-hidden">
              <div className="h-full bg-ochre" style={{ width: `${pct}%` }} />
            </div>
            <span className="mt-5 block font-mono text-2xl text-ochre" style={{ textShadow: '0 0 18px rgba(197,168,128,.65)' }}>{String(pct).padStart(3, '0')}<span className="text-white/30 text-xs"> / 100</span></span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
