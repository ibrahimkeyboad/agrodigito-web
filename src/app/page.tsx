import BennefitSection from '@/components/BennefitSection';
import ContactUs from '@/components/ContactUs';
import DownloadApp from '@/components/DownloadApp';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorkSection';
import ProductCategoriesSection from '@/components/ProductSection';
import StructuredData from '@/components/structured-data';

export const metadata = {
  title: 'AgroDigito - Connecting Agrovets with Trusted Suppliers',
  description:
    'Platform for seamless ordering of agricultural inputs like seeds, fertilizers, and pesticides with real-time insights.',
  keywords:
    'agrodigito, agrovets, agricultural inputs, suppliers, farming supplies, agriculture, seeds, fertilizers, pesticides, ',
};

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <StructuredData />

      <Header />
      {/* <Navbar /> */}
      <HeroSection />
      <BennefitSection />
      <HowItWorksSection />
      <ProductCategoriesSection />
      <DownloadApp />
      <ContactUs />
      <Footer />
    </div>
  );
}
