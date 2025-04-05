import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const categories = [
  {
    name: 'Fertilizers',
    description: 'Organic & synthetic fertilizers for soil enrichment.',
    image:
      'https://images.pexels.com/photos/8543583/pexels-photo-8543583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    count: 48,
  },
  {
    name: 'Pesticides & Herbicides',
    description: 'Protection against pests and weed control for higher yields.',
    image:
      'https://images.pexels.com/photos/17903068/pexels-photo-17903068/free-photo-of-man-spraying-plants-in-a-vegetable-garden-using-a-sprayer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 36,
  },
  {
    name: 'Fungicides',
    description: 'Combat fungal infections and ensure crop health.',
    image:
      'https://ohioline.osu.edu/sites/ohioline/files/01-31-hyg-fact-PP401_01.pdf.pdf-2_4.jpg',

    count: 24,
  },
  {
    name: 'Seeds & Planting Materials',
    description:
      'High-quality seeds and seedlings for optimal field production.',
    image:
      'https://images.pexels.com/photos/4750394/pexels-photo-4750394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

    count: 52,
  },
  {
    name: 'Crop Nutrition Solutions',
    description:
      'Specialized nutrients and growth enhancers for different crop stages.',
    image:
      'https://agrictoday.com.gh/wp-content/uploads/2019/09/YARA.agrictoday.com_.gh_.jpg',

    count: 29,
  },
  {
    name: 'Field Equipment',
    description:
      'Sprayers, applicators and tools for efficient chemical application.',
    image:
      'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 15,
  },
];

const ProductCategoriesSection = () => {
  return (
    <section
      id='products'
      className='py-28 md:py-36 bg-gray-50 relative overflow-hidden'>
      <div className='absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-agrilink-primary/5 to-transparent'></div>

      <div className='container mx-auto px-6 md:px-10 relative z-10'>
        <div className='text-center mb-20'>
          <span className='inline-block px-4 py-1 bg-agrilink-accent/20 text-agrilink-dark rounded-full text-sm font-medium mb-4'>
            Categories
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            Our Product Categories
          </h2>
          <div className='w-20 h-1 bg-agrilink-primary mx-auto mb-8 rounded-full'></div>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Find all the agricultural chemicals and inputs you need to maximize
            your crop production.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {categories.map((category, index) => (
            <Card
              key={index}
              className='overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer'>
              <div className='h-64 relative overflow-hidden'>
                <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent z-10'></div>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={600}
                  height={500}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute top-4 right-4 bg-agrilink-accent/80 text-agrilink-dark text-sm font-medium px-3 py-1 rounded-full z-20 backdrop-blur-xs'>
                  {category.count} Products
                </div>
                <div className='absolute bottom-4 left-4 z-20'>
                  <h3 className='text-2xl font-bold mb-1 text-white'>
                    {category.name}
                  </h3>
                </div>
              </div>
              <CardContent className='p-8 flex justify-between items-center'>
                <p className='text-gray-600 group-hover:text-agrilink-primary transition-colors'>
                  {category.description}
                </p>
                <div className='ml-4 w-10 h-10 rounded-full flex items-center justify-center bg-agrilink-light group-hover:bg-agrilink-primary transition-colors'>
                  <ChevronRight
                    size={16}
                    className='text-agrilink-primary group-hover:text-white transition-colors'
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
