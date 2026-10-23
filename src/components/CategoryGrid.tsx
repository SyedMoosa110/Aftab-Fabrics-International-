import { CATEGORIES } from '@/lib/data';
import FabricImage from './ui/FabricImage';
import Reveal from './ui/Reveal';

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-alabaster py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ochre-deep mb-3">Shop by Category</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light">The Four Houses of Cloth</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[18rem] gap-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1} className={`${c.span} min-h-[18rem]`}>
              <article className="group relative h-full min-h-[18rem] overflow-hidden bg-sand border border-silk">
                <FabricImage src={c.image} alt={c.title} sizes="(min-width:1024px) 25vw, 100vw"
                  className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 text-alabaster">
                  <h3 className="font-serif text-2xl leading-tight">{c.title}</h3>
                  <p className="text-xs text-alabaster/70 mt-1">{c.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
