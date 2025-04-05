import React from 'react';
import { Button } from './ui/button';

function ContactUs() {
  return (
    <section
      id='contact'
      className='w-full py-20 md:py-32 bg-gradient-to-b from-white to-green-100'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-6 text-center'>
          <div className='space-y-2 max-w-3xl'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
              Ready to Transform Your Agrovet Business?
            </h2>
            <p className='text-gray-600 md:text-xl'>
              Join Agrovet today and connect with trusted agricultural input
              suppliers in real-time.
            </p>
          </div>
          <div className='flex flex-col gap-3 min-[400px]:flex-row mt-6'>
            <Button
              variant='outline'
              size='lg'
              className='border-green-600 text-green-700 hover:bg-green-50 font-medium rounded-md px-8'>
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
