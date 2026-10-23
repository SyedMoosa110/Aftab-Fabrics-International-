import { Factory, PhoneCall, ShieldCheck, Truck } from 'lucide-react';
import { TRUST } from '@/lib/data';
import Reveal from './ui/Reveal';

const icons = { mill: Factory, truck: Truck, shield: ShieldCheck, phone: PhoneCall };

export default function TrustStrip() {
  return (
    <section className="bg-sand border-y border-silk">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-silk">
        {TRUST.map((t, i) => {
          const Icon = icons[t.icon];
          return (
            <Reveal key={t.title} delay={i * 0.1} className="p-8 flex gap-4">
              <Icon className="w-5 h-5 text-ochre-deep shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em]">{t.title}</h4>
                <p className="text-xs text-espresso/60 mt-1.5 leading-relaxed">{t.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
