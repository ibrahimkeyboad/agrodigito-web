'use client';

import { ArrowUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function DownloadApp() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section
      id='mobile-app'
      className='w-full py-20 md:py-32 bg-gradient-to-b from-green-50 to-white'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-16 items-center'>
          <div className='order-2 lg:order-1'>
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-green-400 opacity-30 blur'></div>
                <div className='relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg'>
                  <Image
                    src='https://www.appletechsoft.com/wp-content/uploads/2020/08/Impact-of-Mobile-Apps-on-Agriculture-Industry.jpg'
                    width={300}
                    height={550}
                    alt='AgriLink Mobile App'
                    className='w-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-6 order-1 lg:order-2'>
            <div className='inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm font-medium text-green-700'>
              <span className='flex h-2 w-2 rounded-full bg-green-600 mr-2'></span>
              Mobile Application
            </div>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
              Take AgriLink With You Everywhere
            </h2>
            <p className='max-w-[600px] text-gray-600 md:text-xl'>
              Access our platform on the go with our mobile app. Order products,
              track deliveries, and connect with suppliers from anywhere,
              anytime.
            </p>
            <ul className='space-y-3'>
              <li className='flex items-start space-x-3'>
                <CheckCircle className='h-6 w-6 text-green-600 mt-0.5 flex-shrink-0' />
                <span className='text-gray-600'>
                  Real-time inventory updates and price alerts
                </span>
              </li>
              <li className='flex items-start space-x-3'>
                <CheckCircle className='h-6 w-6 text-green-600 mt-0.5 flex-shrink-0' />
                <span className='text-gray-600'>
                  Mobile ordering with secure payment options
                </span>
              </li>
              <li className='flex items-start space-x-3'>
                <CheckCircle className='h-6 w-6 text-green-600 mt-0.5 flex-shrink-0' />
                <span className='text-gray-600'>
                  Live tracking of your shipments
                </span>
              </li>
              <li className='flex items-start space-x-3'>
                <CheckCircle className='h-6 w-6 text-green-600 mt-0.5 flex-shrink-0' />
                <span className='text-gray-600'>
                  Direct messaging with suppliers
                </span>
              </li>
            </ul>
            <div className='pt-4'>
              <p className='text-sm font-medium text-gray-600 mb-3'>
                Download our mobile app now:
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='bg-black flex items-center h-16 justify-center rounded-lg px-6 gap-2 text-lg hover:bg-gray-800'>
                  <svg
                    className='w-8 text-white'
                    viewBox='0 0 384 512'
                    fill='currentColor'>
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                  <h3 className='flex flex-col items-center hover:bg-gray-800 text-white'>
                    <span className='text-sm font-bold'>Download on the</span>
                    <span className='text-lg font-bold'>App Store</span>
                  </h3>
                </button>
                <button className='flex rounded-xl justify-center text-gray-900 gap-1 items-center border-gray-700 border h-16 px-6 text-lg transition-all hover:bg-gray-800 hover:text-white'>
                  <svg
                    className='w-7'
                    viewBox='0 0 512 512'
                    fill='currentColor'>
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>

                  <h3 className='flex flex-col items-start'>
                    <span className='text-sm font-bold'>Get it on </span>
                    <span className='text-lg font-bold'> Google Play</span>
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        } bg-white text-agrilink-primary hover:bg-agrilink-primary hover:text-white focus:outline-hidden focus:ring-2 focus:ring-white`}
        aria-label='Scroll to top of page'>
        <ArrowUp size={22} strokeWidth={2.5} />
      </button>
    </section>
  );
}

export default DownloadApp;
