'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white py-4 shadow-sm'>
      <div className='container mx-auto px-4 md:px-6 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <span className='text-agrodigito-primary font-bold text-xl md:text-2xl'>
            Agro<span className='text-agrodigito-secondary'>Vet</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-6'>
          <a
            href='#benefits'
            className='text-gray-700 hover:text-agrodigito-primary transition-colors'>
            Why Agrodigito
          </a>
          <a
            href='#how-it-works'
            className='text-gray-700 hover:text-agrodigito-primary transition-colors'>
            How it Works
          </a>
          <a
            href='#products'
            className='text-gray-700 hover:text-agrodigito-primary transition-colors'>
            Products
          </a>
          <a
            href='#contact'
            className='text-gray-700 hover:text-agrodigito-primary transition-colors'>
            Contact
          </a>
          <Button className='bg-agrodigito-primary hover:bg-agrodigito-dark text-white'>
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
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
              className='text-gray-700 hover:text-agrodigito-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              Why Agrodigito
            </a>
            <a
              href='#how-it-works'
              className='text-gray-700 hover:text-agrodigito-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              How it Works
            </a>
            <a
              href='#products'
              className='text-gray-700 hover:text-agrodigito-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              Products
            </a>
            <a
              href='#contact'
              className='text-gray-700 hover:text-agrodigito-primary transition-colors'
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <div className='pt-2'>
              <Button variant='outline' className='text-white'>
                Download App
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
