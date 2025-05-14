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
              Welcome to <span className='text-agrilink-primary'>Agri</span>
              <span className='text-agrilink-secondary'>Link</span>
            </h1>
            <div className='w-20 h-1 bg-agrilink-primary mb-8 rounded-full'></div>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium mb-8 leading-snug'>
              Connecting Agrovets with Trusted agricultural input suppliers real
              time.
            </h2>
            <p className='text-gray-600 mb-10 max-w-lg text-lg'>
              AgriLink helps you prepare, buy, and distribute agricultural
              inputs such as chemicals at affordable price and quick delivery.
              Get access to fertilizers, pesticides, herbicides, and other crop
              protection products to maximize your field yields.
            </p>

            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8space-x-3'>
              <Button className='bg-black hover:bg-gray-800 text-white py-7 px-10 text-lg '>
                <svg
                  className='h-5 w-5 mr-2'
                  viewBox='0 0 384 512'
                  fill='currentColor'>
                  <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                </svg>
                App Store
              </Button>
              <Button
                variant='outline'
                className='text-gray-800 border-green-500 py-7 px-10 text-lg  hover:bg-green-500/10'>
                <svg
                  className='h-5 w-5 mr-2'
                  viewBox='0 0 512 512'
                  fill='currentColor'>
                  <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          <div className='w-full md:w-1/2 mt-12 md:mt-0 flex justify-center animate-slide-up'>
            <div className='relative w-full max-w-md'>
              <div className='absolute -z-10 top-1/4 -left-4 w-36 h-36 rounded-full bg-agrilink-accent opacity-20 blur-3xl'></div>
              <div className='absolute -z-10 bottom-1/4 -right-4 w-40 h-40 rounded-full bg-agrilink-secondary opacity-20 blur-3xl'></div>
              <Image
                priority
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
            className='flex flex-col items-center text-agrilink-primary hover:text-agrilink-dark cursor-pointer transition-colors'
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
