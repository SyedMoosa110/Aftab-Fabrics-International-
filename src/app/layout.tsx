import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import Providers from '@/context/Providers';
import { BUSINESS } from '@/lib/data';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal', 'italic'], variable: '--font-cormorant' });
const sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Aftab Fabrics International | Wholesale Men’s Suiting, Lahore',
  description: 'Mill-direct cotton, latha, wash & wear and luxury suiting in thaan lots. Azam Cloth Market, Lahore. Est. 1992.',
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'ClothingStore',
  name: BUSINESS.name, telephone: '+923104887728', foundingDate: '1992',
  address: { '@type': 'PostalAddress', streetAddress: 'Shop 98, Near Chuna Mandi Chowk, Azam Cloth Market', addressLocality: 'Lahore', addressCountry: 'PK' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
