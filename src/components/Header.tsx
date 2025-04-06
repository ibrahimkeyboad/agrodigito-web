'use client';
import { Download, Leaf, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        <div className='md:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={toggleMenu}
            aria-label='Toggle menu'>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white py-4 px-4 shadow-md'>
          <div className='flex flex-col space-y-4'>
            <a
              href='#benefits'
              className='text-gray-700 hover:text-agrilink-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              Why AgriLink
            </a>
            <a
              href='#how-it-works'
              className='text-gray-700 hover:text-agrilink-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              How it Works
            </a>
            <a
              href='#products'
              className='text-gray-700 hover:text-agrilink-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              Products
            </a>
            <a
              href='#contact'
              className='text-gray-700 hover:text-agrilink-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <div className='pt-2'>
              <Button className='w-full bg-agrilink-primary shadow-md hover:shadow-lg transition-all'>
                <Download size={18} />
                Download App
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
