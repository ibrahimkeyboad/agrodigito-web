import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

function ContactUs() {
  return (
    // <section
    //   id='contact'
    //   className='w-full py-20 md:py-32 bg-gradient-to-b from-white to-green-100'>
    //   <div className='container px-4 md:px-6'>
    //     <div className='flex flex-col items-center justify-center space-y-6 text-center'>
    //       <div className='space-y-2 max-w-3xl'>
    //         <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
    //           Ready to Transform Your AgriLink Business?
    //         </h2>
    //         <p className='text-gray-600 md:text-xl'>
    //           Join AgriLink today and connect with trusted agricultural input
    //           suppliers in real-time.
    //         </p>
    //       </div>
    //       <div className='flex flex-col gap-3 min-[400px]:flex-row mt-6'>
    //         <Button
    //           variant='outline'
    //           size='lg'
    //           className='border-green-600 text-green-700 hover:bg-green-50 font-medium rounded-md px-8'>
    //           Contact Sales
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      id='contact'
      className='w-full py-20 md:py-32 bg-gradient-to-b from-white to-green-50'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <div className='inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm font-medium text-green-700'>
            <span className='flex h-2 w-2 rounded-full bg-green-600 mr-2'></span>
            Contact Us
          </div>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
            Get in Touch With Our Team
          </h2>
          <p className='max-w-[800px] text-gray-600 md:text-xl'>
            We&apos;re here to answer your questions about Agri Link and help
            transform your agricultural supply chain.
          </p>
        </div>

        <div className='grid gap-10 lg:grid-cols-5 lg:gap-10 items-start max-w-6xl mx-auto'>
          <div className='lg:col-span-3 space-y-8'>
            <div className='rounded-xl  bg-white p-8 shadow-sm'>
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <h3 className='text-2xl font-bold'>
                    Contact Our Sales Department
                  </h3>
                  <p className='text-gray-600'>
                    Complete the form below and a member of our agricultural
                    supply chain team will contact you within 24 hours.
                  </p>
                </div>

                <form className='space-y-6'>
                  <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='first-name'
                        className='text-sm font-medium leading-none'>
                        First Name <span className='text-red-500'>*</span>
                      </label>
                      <input
                        id='first-name'
                        required
                        placeholder='Enter your first name'
                        className='flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label
                        htmlFor='last-name'
                        className='text-sm font-medium leading-none'>
                        Last Name <span className='text-red-500'>*</span>
                      </label>
                      <input
                        id='last-name'
                        required
                        placeholder='Enter your last name'
                        className='flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='email'
                        className='text-sm font-medium leading-none'>
                        Email Address <span className='text-red-500'>*</span>
                      </label>
                      <input
                        id='email'
                        type='email'
                        required
                        placeholder='Enter your email'
                        className='flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label
                        htmlFor='phone'
                        className='text-sm font-medium leading-none'>
                        Phone Number
                      </label>
                      <input
                        id='phone'
                        type='tel'
                        placeholder='Enter your phone number'
                        className='flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='company'
                      className='text-sm font-medium leading-none'>
                      Company Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      id='company'
                      required
                      placeholder='Enter your company name'
                      className='flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='business-type'
                      className='text-sm font-medium leading-none'>
                      Business Type <span className='text-red-500'>*</span>
                    </label>
                    <select
                      id='business-type'
                      required
                      className='flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
                      <option value='' disabled selected>
                        Select your business type
                      </option>
                      <option value='agrovet'>Agrovet</option>
                      <option value='supplier'>Agricultural Supplier</option>
                      <option value='manufacturer'>Manufacturer</option>
                      <option value='distributor'>Distributor</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-sm font-medium leading-none'>
                      Message <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                      id='message'
                      required
                      placeholder='Please describe your business needs and how we can help'
                      className='flex min-h-[120px] w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    />
                  </div>

                  <div className='flex items-start space-x-2'>
                    <input
                      type='checkbox'
                      id='privacy-policy'
                      className='h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600 rounded mt-1'
                    />
                    <label
                      htmlFor='privacy-policy'
                      className='text-sm text-gray-600'>
                      I agree to the processing of my personal data according to
                      Agri Link&apos;s{' '}
                      <Link href='#' className='text-green-600 hover:underline'>
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  <Button className='w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-md py-2.5'>
                    Submit Inquiry
                  </Button>

                  <p className='text-xs text-gray-500 text-center'>
                    By submitting this form, you agree to our terms and
                    conditions and our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className='lg:col-span-2 space-y-8'>
            <div className='rounded-xl bg-white p-8 shadow-sm'>
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold'>Contact Information</h3>

                <div className='space-y-4'>
                  <div className='flex items-start space-x-4'>
                    <div className='rounded-full bg-green-50 p-2.5 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='text-green-600'>
                        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                      </svg>
                    </div>
                    <div className='space-y-1'>
                      <h4 className='font-semibold'>Phone</h4>
                      <p className='text-gray-600'>+255 76334856</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='rounded-full bg-green-50 p-2.5 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='text-green-600'>
                        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                        <polyline points='22,6 12,13 2,6' />
                      </svg>
                    </div>
                    <div className='space-y-1'>
                      <h4 className='font-semibold'>Email</h4>
                      <p className='text-gray-600'>sales@agrilink.com</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div className='rounded-full bg-green-50 p-2.5 flex-shrink-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='text-green-600'>
                        <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                        <circle cx='12' cy='10' r='3' />
                      </svg>
                    </div>
                    <div className='space-y-1'>
                      <h4 className='font-semibold'>Address</h4>
                      <p className='text-gray-600'>123 Mbauda Street</p>
                      <p className='text-gray-600'>Arusha, Tanzania</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-xl  bg-white p-8 shadow-sm'>
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold'>Business Hours</h3>

                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='font-medium'>Monday - Friday</span>
                    <span className='text-gray-600'>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-medium'>Saturday</span>
                    <span className='text-gray-600'>
                      10:00 AM - 4:00 PM EST
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-medium'>Sunday</span>
                    <span className='text-gray-600'>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
