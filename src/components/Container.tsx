'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowUpCircle,
  CheckCircle,
  ShieldCheck,
  Truck,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Container() {
  return (
    <main className='flex-1'>
      <section className='w-full py-20 md:py-32 bg-gradient-to-b from-green-50 to-white'>
        <div className='container px-4 md:px-6'>
          <div className='grid gap-10 lg:grid-cols-2 lg:gap-16 items-center'>
            <div className='space-y-6'>
              <div className='inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm font-medium text-green-700'>
                <span className='flex h-2 w-2 rounded-full bg-green-600 mr-2'></span>
                Agricultural Supply Chain Platform
              </div>
              <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
                Connecting Agrovets with Trusted Suppliers
              </h1>
              <p className='max-w-[600px] text-gray-600 md:text-xl'>
                Agrovet bridges the gap between Agrovet businesses and top
                agricultural input producers. Get real-time access to essential
                agricultural products, all in one place.
              </p>
              <div className='flex flex-col gap-3 min-[400px]:flex-row'>
                <Button
                  size='lg'
                  className='bg-green-600 hover:bg-green-700 text-white font-medium rounded-md px-8'>
                  Get Started
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-green-200 text-green-700 hover:bg-green-50 font-medium rounded-md px-8'>
                  Learn More
                </Button>
              </div>
              <div className='pt-4'>
                <p className='text-sm font-medium text-gray-600 mb-3'>
                  Download our mobile app:
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
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-1 rounded-xl bg-gradient-to-r from-green-600 to-green-400 opacity-30 blur'></div>
                <div className='relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg'>
                  <Image
                    src='https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=600&h=600'
                    width={550}
                    height={550}
                    alt='Agrovet Platform'
                    className='w-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='features' className='w-full py-20 md:py-32'>
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
              Our platform offers a comprehensive solution for Agrovet
              businesses to connect with trusted suppliers.
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
                Purchase agricultural inputs directly from verified
                manufacturers and suppliers without intermediaries.
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
              <h3 className='text-xl font-bold'>
                Smart Product Recommendations
              </h3>
              <p className='text-gray-600'>
                Get insights to help you find the best agricultural inputs based
                on your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id='how-it-works'
        className='w-full py-20 md:py-32 bg-gradient-to-b from-white to-green-50'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm font-medium text-green-700'>
              <span className='flex h-2 w-2 rounded-full bg-green-600 mr-2'></span>
              How Agrodigito Works
            </div>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
              Simple 4-Step Process
            </h2>
            <p className='max-w-[800px] text-gray-600 md:text-xl'>
              Getting started with Agrovetnk is easy and straightforward.
            </p>
          </div>
          <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='relative flex flex-col items-center space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm h-full transition-all hover:shadow-md'>
              <div className='absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg shadow-md'>
                1
              </div>
              <div className='rounded-full bg-green-50 p-4 mb-2'>
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
                  className='h-8 w-8 text-green-600'>
                  <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
                  <circle cx='12' cy='7' r='4' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-center'>
                Sign Up & Create Your Profile
              </h3>
              <p className='text-center text-gray-600'>
                Register as an Agrovet owner, supplier, or manufacturer to get
                started.
              </p>
            </div>
            <div className='relative flex flex-col items-center space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm h-full transition-all hover:shadow-md'>
              <div className='absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg shadow-md'>
                2
              </div>
              <div className='rounded-full bg-green-50 p-4 mb-2'>
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
                  className='h-8 w-8 text-green-600'>
                  <circle cx='11' cy='11' r='8' />
                  <path d='m21 21-4.3-4.3' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-center'>
                Browse & Compare Products
              </h3>
              <p className='text-center text-gray-600'>
                Explore agricultural inputs, compare prices, and check supplier
                ratings.
              </p>
            </div>
            <div className='relative flex flex-col items-center space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm h-full transition-all hover:shadow-md'>
              <div className='absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg shadow-md'>
                3
              </div>
              <div className='rounded-full bg-green-50 p-4 mb-2'>
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
                  className='h-8 w-8 text-green-600'>
                  <path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' />
                  <path d='M3 6h18' />
                  <path d='M16 10a4 4 0 0 1-8 0' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-center'>
                Place & Manage Orders
              </h3>
              <p className='text-center text-gray-600'>
                Order directly from trusted suppliers and track your purchase
                history.
              </p>
            </div>
            <div className='relative flex flex-col items-center space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm h-full transition-all hover:shadow-md'>
              <div className='absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg shadow-md'>
                4
              </div>
              <div className='rounded-full bg-green-50 p-4 mb-2'>
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
                  className='h-8 w-8 text-green-600'>
                  <rect width='16' height='13' x='4' y='5' rx='2' />
                  <path d='m22 8-4 4 4 4' />
                  <path d='m2 8 4 4-4 4' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-center'>
                Get Your Inputs Delivered
              </h3>
              <p className='text-center text-gray-600'>
                Enjoy fast and reliable delivery services with real-time
                tracking updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='products' className='w-full py-20 md:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-flex items-center rounded-full border border-green-200 bg-white px-3 py-1 text-sm font-medium text-green-700'>
              <span className='flex h-2 w-2 rounded-full bg-green-600 mr-2'></span>
              Our Product Categories
            </div>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl'>
              Everything You Need for Your Agrovet Business
            </h2>
            <p className='max-w-[800px] text-gray-600 md:text-xl'>
              Explore our wide range of agricultural inputs and supplies.
            </p>
          </div>
          <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
              <div className='aspect-video overflow-hidden'>
                <Image
                  src='/placeholder.svg?height=300&width=400'
                  width={400}
                  height={300}
                  alt='Fertilizers'
                  className='object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Fertilizers</h3>
                <p className='mt-2 text-gray-600'>
                  Organic & synthetic fertilizers for soil enrichment.
                </p>
                <Button
                  variant='link'
                  className='mt-4 p-0 text-green-600 hover:text-green-700'>
                  Explore Products
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
              <div className='aspect-video overflow-hidden'>
                <Image
                  src='/placeholder.svg?height=300&width=400'
                  width={400}
                  height={300}
                  alt='Pesticides & Insecticides'
                  className='object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Pesticides & Insecticides</h3>
                <p className='mt-2 text-gray-600'>
                  Protection against pests and diseases.
                </p>
                <Button
                  variant='link'
                  className='mt-4 p-0 text-green-600 hover:text-green-700'>
                  Explore Products
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
              <div className='aspect-video overflow-hidden'>
                <Image
                  src='/placeholder.svg?height=300&width=400'
                  width={400}
                  height={300}
                  alt='Fungicides'
                  className='object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Fungicides</h3>
                <p className='mt-2 text-gray-600'>
                  Combat fungal infections and ensure crop health.
                </p>
                <Button
                  variant='link'
                  className='mt-4 p-0 text-green-600 hover:text-green-700'>
                  Explore Products
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
              <div className='aspect-video overflow-hidden'>
                <Image
                  src='/placeholder.svg?height=300&width=400'
                  width={400}
                  height={300}
                  alt='Seeds'
                  className='object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Seeds</h3>
                <p className='mt-2 text-gray-600'>
                  High-quality seeds for increased yields.
                </p>
                <Button
                  variant='link'
                  className='mt-4 p-0 text-green-600 hover:text-green-700'>
                  Explore Products
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
              <div className='aspect-video overflow-hidden'>
                <Image
                  src='/placeholder.svg?height=300&width=400'
                  width={400}
                  height={300}
                  alt='Irrigation Equipment'
                  className='object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Irrigation Equipment</h3>
                <p className='mt-2 text-gray-600'>
                  Drip systems, sprinklers, and more for efficient water
                  management.
                </p>
                <Button
                  variant='link'
                  className='mt-4 p-0 text-green-600 hover:text-green-700'>
                  Explore Products
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md'>
              <div className='aspect-video overflow-hidden'>
                <Image
                  src='/placeholder.svg?height=300&width=400'
                  width={400}
                  height={300}
                  alt='Farm Machinery & Tools'
                  className='object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Farm Machinery & Tools</h3>
                <p className='mt-2 text-gray-600'>
                  Tractors, sprayers, and other farm equipment.
                </p>
                <Button
                  variant='link'
                  className='mt-4 p-0 text-green-600 hover:text-green-700'>
                  Explore Products
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      src='/placeholder.svg?height=550&width=300'
                      width={300}
                      height={550}
                      alt='Agrovet Mobile App'
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
                Access our platform on the go with our mobile app. Order
                products, track deliveries, and connect with suppliers from
                anywhere, anytime.
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
                size='lg'
                className='bg-green-600 hover:bg-green-700 text-white font-medium rounded-md px-8'>
                Sign Up Now
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
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
      <div className='fixed bottom-6 right-6 z-50'>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          size='icon'
          className='h-16 w-16 rounded-full bg-white border border-gray-200 text-green-600 hover:bg-green-50 shadow-lg transition-all'
          aria-label='Scroll to top'>
          <ArrowUpCircle className='h-8 w-8' />
        </Button>
      </div>
    </main>
  );
}
export default Container;
