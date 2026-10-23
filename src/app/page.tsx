import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import CategoryGrid from '@/components/CategoryGrid';
import Collections from '@/components/Collections';
import Banner from '@/components/Banner';
import LotCalculator from '@/components/LotCalculator';
import DealerSignup from '@/components/DealerSignup';
import Footer from '@/components/Footer';
import QuoteDrawer from '@/components/QuoteDrawer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <CategoryGrid />
        <Collections />
        <Banner />
        <LotCalculator />
        <DealerSignup />
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
