'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FabricImage from './ui/FabricImage';
import { IMG } from '@/lib/images';

export default function Banner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-espresso py-36 px-6 text-center">
      <motion.div style={{ y }} className="absolute inset-[-10%] opacity-70">
        <FabricImage src={IMG.workshop.url} alt="Tailoring and fabric workshop" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/90 via-espresso/55 to-espresso/90" />
      <motion.div className="relative max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
        <p className="text-[10px] uppercase tracking-[0.35em] text-ochre mb-6">Since 1992</p>
        <h2 className="font-serif text-4xl sm:text-6xl text-alabaster font-light leading-[1.1]">Luxury in Every Thread,<br /><span className="italic text-ochre">Crafted for Distinction.</span></h2>
        <p className="mt-8 text-sm text-alabaster/70">Supplying 500+ retail outlets across Pakistan and export markets with unstitched men’s fabrics.</p>
      </motion.div>
    </section>
  );
}
