import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function DownloadApp() {
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
                    alt='Agrovet Link Mobile App'
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
              Take Agrovet With You Everywhere
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
              <div className='flex flex-col sm:flex-row gap-3'>
                <Link href='#' className='inline-block'>
                  <div className='flex items-center bg-black text-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all h-[50px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='mr-2'>
                      <path
                        d='M17.707 10.708L16.586 9.587L13 13.173L13 2.00001H11L11 13.173L7.414 9.587L6.293 10.708L12 16.415L17.707 10.708Z'
                        transform='rotate(90 12 12)'
                      />
                      <path d='M18 18H6C5.449 18 5 18.449 5 19C5 19.551 5.449 20 6 20H18C18.551 20 19 19.551 19 19C19 18.449 18.551 18 18 18Z' />
                    </svg>
                    <div>
                      <div className='text-xs'>Download on the</div>
                      <div className='text-lg font-semibold'>App Store</div>
                    </div>
                  </div>
                </Link>
                <Link href='#' className='inline-block'>
                  <div className='flex items-center bg-black text-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all h-[50px]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='mr-2'>
                      <path d='M5.26 3.795L14.055 12.59L5.261 21.384L5.26 3.795ZM5.5 7.915V17.175L10.645 12.59L5.5 7.915Z' />
                      <path d='M14.5 12.59L17.4 15.49L7.935 20.44L14.5 12.59Z' />
                      <path d='M17.4 9.69L14.5 12.59L7.935 4.74L17.4 9.69Z' />
                    </svg>
                    <div>
                      <div className='text-xs'>Get it on</div>
                      <div className='text-lg font-semibold'>Google Play</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
