'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import Lenis from 'lenis';
import Preloader from '@/components/AestheticPreloader';
import { QuoteProvider } from './QuoteContext';

type ScrollTarget = string | number;
const ScrollCtx = createContext<(target: ScrollTarget) => void>(() => {});
export const useScrollTo = () => useContext(ScrollCtx);

export default function Providers({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenis.stop(); // locked until the preloader finishes
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  useEffect(() => { if (ready) lenisRef.current?.start(); }, [ready]);

  const scrollTo = useCallback((target: ScrollTarget) => {
    lenisRef.current?.scrollTo(target, { offset: typeof target === 'number' ? 0 : -90, duration: 1.4 });
  }, []);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <ScrollCtx.Provider value={scrollTo}>
      <QuoteProvider>
        <Preloader onDone={onDone} />
        {children}
      </QuoteProvider>
    </ScrollCtx.Provider>
  );
}
