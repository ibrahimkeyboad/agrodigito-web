import React from 'react';
import { Users, Package, ShoppingCart, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Sign Up & Create Your Profile',
    description:
      'Register as an Agrovet owner, supplier, or manufacturer and complete your business profile.',
    icon: <Users className='h-8 w-8 text-white' />,
  },
  {
    number: '02',
    title: 'Browse & Compare Products',
    description:
      'Explore a wide range of agricultural inputs, compare prices, and check supplier ratings.',
    icon: <Package className='h-8 w-8 text-white' />,
  },
  {
    number: '03',
    title: 'Place & Manage Orders',
    description:
      'Order directly from trusted suppliers and track your purchase history easily.',
    icon: <ShoppingCart className='h-8 w-8 text-white' />,
  },
  {
    number: '04',
    title: 'Get Your Inputs Delivered',
    description:
      'Enjoy fast and reliable delivery services with real-time tracking updates.',
    icon: <Truck className='h-8 w-8 text-white' />,
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id='how-it-works'
      className='py-28 md:py-36 bg-white relative overflow-hidden'>
      <div className='absolute right-0 top-0 w-2/3 h-2/3 bg-agrodigito-light/50 rounded-bl-[100%] -z-10'></div>

      <div className='container mx-auto px-6 md:px-10'>
        <div className='text-center mb-20'>
          <span className='inline-block px-4 py-1 bg-agrodigito-accent/20 text-agrodigito-dark rounded-full text-sm font-medium mb-4'>
            Process
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            How <span className='text-agrodigito-primary'>Agro</span>
            <span className='text-agrodigito-secondary'>Digito</span> Works
          </h2>
          <div className='w-20 h-1 bg-agrodigito-primary mx-auto mb-8 rounded-full'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Get started in just a few simple steps and transform how you source
            agricultural inputs.
          </p>
        </div>

        <div className='relative'>
          {/* Connector Line */}
          <div className='hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-agrodigito-secondary/30 -z-10 transform -translate-y-1/2'></div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
            {steps.map((step, index) => (
              <div key={index} className='flex flex-col items-center group'>
                <div className='mb-8 flex justify-center relative'>
                  <div className='flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-agrodigito-primary to-agrodigito-dark shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105'>
                    {step.icon}
                  </div>
                  <div className='absolute -top-3 -right-3 bg-agrodigito-accent w-8 h-8 rounded-full flex items-center justify-center text-agrodigito-dark font-bold text-sm shadow-md'>
                    {step.number.split('')[1]}
                  </div>
                </div>
                <div className='text-center'>
                  <h3 className='text-xl font-semibold mb-3 text-gray-800 group-hover:text-agrodigito-primary transition-colors'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
