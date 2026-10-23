import { PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';
import Reveal from './ui/Reveal';

export default function Collections() {
  return (
    <section id="collections" className="bg-sand/50 py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-ochre-deep mb-3">Featured Wholesale Collections</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light">Signature Lines, Sold by the Thaan</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1} className="h-full"><ProductCard product={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
