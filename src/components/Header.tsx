import { Leaf } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm'>
      <div className='container flex h-16 items-center justify-between'>
        {/* <div className='flex gap-6 md:gap-10'>
          <Link href='/' className='flex items-center space-x-2'>
            <Leaf className='h-6 w-6 text-green-600' />
            <span className='inline-block font-bold text-xl'>Agrovet </span>
          </Link>
        </div> */}

        <div className='flex items-center'>
          <Link href='/' className='flex items-center space-x-2'>
            <Leaf className='h-6 w-6 text-green-600' />

            <span className='text-agrilink-primary font-bold text-xl md:text-2xl'>
              Agri<span className='text-agrilink-secondary'>Link</span>
            </span>
          </Link>
        </div>
        <nav className='hidden gap-8 md:flex'>
          <Link
            href='#benefits'
            className='flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-green-600'>
            Benefits
          </Link>
          <Link
            href='#how-it-works'
            className='flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-green-600'>
            How It Works
          </Link>
          <Link
            href='#products'
            className='flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-green-600'>
            Products
          </Link>
          <Link
            href='#contact'
            className='flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-green-600'>
            Contact
          </Link>
        </nav>
        <div className='hidden md:flex'>
          <Button className='bg-green-600 hover:bg-green-700 text-white font-medium rounded-md'>
            Download App
          </Button>
        </div>
        <div className='flex md:hidden'>
          {/* Mobile menu button could go here */}
          <Button variant='outline' size='icon' className='h-9 w-9'>
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
              <line x1='3' y1='12' x2='21' y2='12' />
              <line x1='3' y1='6' x2='21' y2='6' />
              <line x1='3' y1='18' x2='21' y2='18' />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
