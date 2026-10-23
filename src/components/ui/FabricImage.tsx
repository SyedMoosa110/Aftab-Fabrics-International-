'use client';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { FALLBACK } from '@/lib/images';

// Stage 0: remote photo -> stage 1: self-hosted fallback -> stage 2: weave texture (never a broken image)
export default function FabricImage({ src, alt, className, priority, sizes = '(min-width:1024px) 40vw, 100vw' }:
  { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  const [stage, setStage] = useState(0);
  const current = stage === 0 ? src : FALLBACK[src];
  if (stage >= 2 || !current) return <div role="img" aria-label={alt} className={clsx('weave absolute inset-0', className)} />;
  return (
    <Image key={current} src={current} alt={alt} fill priority={priority} sizes={sizes}
      onError={() => setStage((s) => s + 1)} className={clsx('object-cover', className)} />
  );
}
