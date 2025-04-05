import { CheckCircle, ShieldCheck, Truck, Zap } from 'lucide-react';
import React from 'react';

function BennefitSection() {
  return (
    <section id='benefits' className='w-full py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <div className='inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm font-medium text-green-700'>
            <span className='flex h-2 w-2 rounded-full bg-green-600 mr-2'></span>
            Why Agrovet?
          </div>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
            Streamlining Agricultural Supply Chain
          </h2>
          <p className='max-w-[800px] text-gray-600 md:text-xl'>
            Our platform offers a comprehensive solution for Agrovet businesses
            to connect with trusted suppliers.
          </p>
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col items-start space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md'>
            <div className='rounded-full bg-green-50 p-3'>
              <ShieldCheck className='h-6 w-6 text-green-600' />
            </div>
            <h3 className='text-xl font-bold'>
              Seamless Ordering & Direct Connections
            </h3>
            <p className='text-gray-600'>
              Purchase agricultural inputs directly from verified manufacturers
              and suppliers without intermediaries.
            </p>
          </div>
          <div className='flex flex-col items-start space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md'>
            <div className='rounded-full bg-green-50 p-3'>
              <Zap className='h-6 w-6 text-green-600' />
            </div>
            <h3 className='text-xl font-bold'>Real-Time Market Insights</h3>
            <p className='text-gray-600'>
              Stay updated on stock availability, prices, and market trends to
              make informed decisions.
            </p>
          </div>
          <div className='flex flex-col items-start space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md'>
            <div className='rounded-full bg-green-50 p-3'>
              <CheckCircle className='h-6 w-6 text-green-600' />
            </div>
            <h3 className='text-xl font-bold'>
              Trusted Suppliers & Quality Assurance
            </h3>
            <p className='text-gray-600'>
              We partner only with top-tier manufacturers and suppliers to
              ensure product authenticity.
            </p>
          </div>
          <div className='flex flex-col items-start space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md'>
            <div className='rounded-full bg-green-50 p-3'>
              <Truck className='h-6 w-6 text-green-600' />
            </div>
            <h3 className='text-xl font-bold'>
              Efficient Logistics & Delivery Tracking
            </h3>
            <p className='text-gray-600'>
              Monitor your shipments with real-time updates and estimated
              delivery times.
            </p>
          </div>
          <div className='flex flex-col items-start space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md'>
            <div className='rounded-full bg-green-50 p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 text-green-600'>
                <path d='M12 2v20' />
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
              </svg>
            </div>
            <h3 className='text-xl font-bold'>Fast & Secure Transactions</h3>
            <p className='text-gray-600'>
              Enjoy smooth and safe payment methods for all your orders.
            </p>
          </div>
          <div className='flex flex-col items-start space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md'>
            <div className='rounded-full bg-green-50 p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6 text-green-600'>
                <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
                <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
              </svg>
            </div>
            <h3 className='text-xl font-bold'>Smart Product Recommendations</h3>
            <p className='text-gray-600'>
              Get insights to help you find the best agricultural inputs based
              on your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BennefitSection;
