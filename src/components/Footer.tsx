import { Leaf } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='w-full bg-gray-900 text-gray-300 border-t py-12 '>
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Leaf className='h-6 w-6 text-green-600' />
              <h2 className='text-xl flex font-bold mb-4 text-white'>
                <span className='text-agrilink-secondary'>Agro</span>Vet
              </h2>
            </div>
            <p className='text-sm text-white'>
              Connecting Agrovets with trusted agricultural input suppliers in
              real-time.
            </p>
            <div className='flex space-x-4'>
              <Link href='#' className='text-gray-500 hover:text-green-600'>
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
                  className='h-5 w-5'>
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>
              </Link>
              <Link href='#' className='text-gray-500 hover:text-green-600'>
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
                  className='h-5 w-5'>
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                </svg>
              </Link>
              <Link href='#' className='text-gray-500 hover:text-green-600'>
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
                  className='h-5 w-5'>
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                </svg>
              </Link>
              <Link href='#' className='text-gray-500 hover:text-green-600'>
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
                  className='h-5 w-5'>
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                  <rect x='2' y='9' width='4' height='12' />
                  <circle cx='4' cy='4' r='2' />
                </svg>
              </Link>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white hover:text-green-600'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='#features'
                  className='text-white hover:text-green-600'>
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#how-it-works'
                  className='text-white hover:text-green-600'>
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href='#products'
                  className='text-white hover:text-green-600'>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href='#mobile-app'
                  className='text-white hover:text-green-600'>
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-white hover:text-green-600'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-green-600'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-green-600'>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-green-600'>
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>Contact</h3>
            <ul className='space-y-2'>
              <li className='flex items-start space-x-2'>
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
                  className='h-5 w-5 text-green-600 mt-0.5'>
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
                <span className='text-white'>+1 (234) 567-8901</span>
              </li>
              <li className='flex items-start space-x-2'>
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
                  className='h-5 w-5 text-green-600 mt-0.5'>
                  <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                  <polyline points='22,6 12,13 2,6' />
                </svg>
                <span className='text-white'>info@agrilink.com</span>
              </li>
              <li className='flex items-start space-x-2'>
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
                  className='h-5 w-5 text-green-600 mt-0.5'>
                  <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                <span className='text-white'>
                  123 Agriculture Street, Arusha
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-gray-800 '>
          <p className='text-center text-sm text-white'>
            © 2025 Agrovet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
