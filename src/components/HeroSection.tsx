'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className='pt-36 pb-28 md:pt-44 md:pb-36 bg-linear-to-b from-agrilink-light to-white relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-full h-full overflow-hidden z-0'>
        <div className='absolute top-0 right-0 w-3/4 h-3/4 bg-agrilink-accent/10 rounded-bl-[100%] transform translate-x-1/4 -translate-y-1/4'></div>
        <div className='absolute bottom-0 left-0 w-1/2 h-1/2 bg-agrilink-secondary/10 rounded-tr-[100%] transform -translate-x-1/4 translate-y-1/4'></div>
      </div>

      <div className='container mx-auto px-6 md:px-10 relative z-10'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-1/2 animate-fade-in'>
            <span className='inline-block px-4 py-1 bg-agrilink-accent/20 text-agrilink-dark rounded-full text-sm font-medium mb-6'>
              Agricultural Supply Chain Solutions
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              Welcome to <span className='text-agrilink-primary'>Agro</span>
              <span className='text-agrilink-secondary'>Vet</span>
            </h1>
            <div className='w-20 h-1 bg-agrilink-primary mb-8 rounded-full'></div>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium mb-8 leading-snug'>
              Connecting Agrovets with Trusted Agricultural Chemical Suppliers
              in Real Time
            </h2>
            <p className='text-gray-600 mb-10 max-w-lg text-lg'>
              Agrovet helps you prepare, buy, and distribute agricultural
              chemicals efficiently. Get access to fertilizers, pesticides,
              herbicides, and other crop protection products to maximize your
              field yields.
            </p>
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8'>
              <Button className='bg-agrilink-primary hover:bg-agrilink-dark text-white py-7 px-10 text-lg font-medium shadow-lg hover:shadow-xl transition-all'>
                Download on App Store
              </Button>
              <Button
                variant='outline'
                className='border-agrilink-primary text-agrilink-primary hover:bg-agrilink-primary/10 py-7 px-10 text-lg font-medium shadow-md hover:shadow-lg transition-all'>
                Get it on Google Play
              </Button>
            </div>
          </div>
          <div className='w-full md:w-1/2 mt-12 md:mt-0 flex justify-center animate-slide-up'>
            <div className='relative w-full max-w-md'>
              <div className='absolute -z-10 top-1/4 -left-4 w-36 h-36 rounded-full bg-agrilink-accent opacity-20 blur-3xl'></div>
              <div className='absolute -z-10 bottom-1/4 -right-4 w-40 h-40 rounded-full bg-agrilink-secondary opacity-20 blur-3xl'></div>
              <Image
                width={550}
                height={550}
                src='https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=600'
                alt='Agricultural chemicals and crop fields'
                className='w-full h-auto rounded-2xl shadow-2xl ring-4 ring-white'
              />
              <div className='absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl'>
                <span className='text-agrilink-primary font-bold'>100+</span>
                <span className='text-gray-600 text-sm block'>
                  Trusted Suppliers
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-20'>
          <button
            onClick={() => scrollToSection('benefits')}
            className='flex flex-col items-center text-agrilink-primary hover:text-agrilink-dark transition-colors'
            aria-label='Scroll to benefits section'>
            <span className='text-sm font-medium mb-2'>
              Discover the Benefits
            </span>
            <ArrowDown size={20} className='animate-bounce' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
