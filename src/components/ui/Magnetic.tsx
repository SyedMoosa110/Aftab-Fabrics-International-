'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export default function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 15 });
  const y = useSpring(my, { stiffness: 220, damping: 15 });

  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * strength);
    my.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={move} onMouseLeave={leave} className="inline-block">
      {children}
    </motion.div>
  );
}
