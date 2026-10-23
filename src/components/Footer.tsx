import { BUSINESS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-espresso text-alabaster px-6 lg:px-12 pt-20 pb-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl sm:text-5xl tracking-[0.12em]">AFTAB FABRICS INTERNATIONAL</h2>
        <p className="text-xs text-ochre tracking-[0.2em] uppercase mt-3">Legend by Aftab Fabrics · Est. 1992 · Azam Cloth Market, Lahore</p>
        <div className="mt-14 grid md:grid-cols-2 gap-10 border-t border-white/10 pt-10 text-sm">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-ochre mb-4">Address &amp; Location</h4>
            <p className="text-alabaster/70 leading-relaxed">{BUSINESS.address}</p>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs uppercase tracking-wider border-b border-ochre pb-1 hover:text-ochre">View on Google Maps</a>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-ochre mb-4">Direct Contact</h4>
            <p className="text-alabaster/70">Phone / WhatsApp: <a href={`tel:+${BUSINESS.phoneWa}`} className="hover:text-ochre">{BUSINESS.phoneDisplay}</a></p>
            <p className="text-alabaster/70 mt-2">Facebook: <a href={`https://facebook.com/${BUSINESS.facebook}`} target="_blank" rel="noopener noreferrer" className="hover:text-ochre">@{BUSINESS.facebook}</a></p>
          </div>
        </div>
        <p className="mt-14 text-[11px] text-alabaster/40">© 1992–{new Date().getFullYear()} Aftab Fabrics International. All rights reserved.</p>
      </div>
    </footer>
  );
}
