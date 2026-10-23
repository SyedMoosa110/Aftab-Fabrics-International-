'use client';
import { useState } from 'react';
import { waLink } from '@/lib/whatsapp';
import Reveal from './ui/Reveal';
import Magnetic from './ui/Magnetic';

export default function DealerSignup() {
  const [biz, setBiz] = useState('');
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');

  const submit = () => {
    if (biz.trim().length < 2) return setErr('Please enter your business name.');
    if (phone.replace(/\D/g, '').length < 10) return setErr('Please enter a valid WhatsApp number.');
    setErr('');
    window.open(waLink(`Assalam-o-Alaikum, I am ${biz.trim()} (WhatsApp: ${phone.trim()}). Please add me to the dealer list and send the digital shade cards and current rate sheet.`), '_blank', 'noopener');
  };

  return (
    <section id="dealer" className="bg-alabaster py-24 px-6 lg:px-12">
      <Reveal className="mx-auto max-w-3xl border border-ochre p-8 sm:p-14 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-ochre-deep mb-3">Wholesale Dealers</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light">Receive Shade Cards &amp; Weekly Rates</h2>
        <p className="text-sm text-espresso/60 mt-4 max-w-lg mx-auto">Cloth merchants, retailers and boutique owners: join the dealer list for digital shade cards, price updates and new inventory.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
          <input value={biz} onChange={(e) => setBiz(e.target.value)} placeholder="Business name" aria-label="Business name"
            className="border border-silk bg-white px-4 py-3.5 text-sm outline-none focus:border-ochre" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp number" aria-label="WhatsApp number" inputMode="tel"
            className="border border-silk bg-white px-4 py-3.5 text-sm outline-none focus:border-ochre" />
        </div>
        {err && <p role="alert" className="text-xs text-red-700 mt-3">{err}</p>}
        <div className="mt-6"><Magnetic>
          <button onClick={submit} className="bg-espresso text-alabaster px-9 py-4 text-xs uppercase tracking-wider font-semibold hover:bg-ochre-deep transition-colors">Join the Dealer List</button>
        </Magnetic></div>
      </Reveal>
    </section>
  );
}
