import React from 'react';
import { IconShoppingCart, IconTruckDelivery, IconShieldHalf } from '@tabler/icons-react';

export default function WhyChoose() {
  return (
    <div className="container mx-auto px-4 py-10 pb-20">
      <h1 className="font-bold font-josefin text-center mb-8" style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>
        Why Herfy?
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-full p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out mx-auto relative lg:top-0"
          style={{ width: '300px', height: '300px' }} > {/* Control vertical offset */}
          <div className="flex justify-center items-center mb-4">
            <IconShoppingCart size={50} className="text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-red-500">Easy to order</h3>
          <p className="text-gray-500 mb-4">
            We make ordering bread - just a few clicks and you're done. Experience the simplicity of our online bakery service.
          </p>
          <a href="https://wa.me/919745956330"><p className="text-blue-500 hover:underline">
           contact us
          </p></a>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-full p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out mx-auto relative lg:top-16"
          style={{ width: '300px', height: '300px' }}> {/* Control vertical offset */}
          <div className="flex justify-center items-center mb-4">
            <IconTruckDelivery size={50} className="text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-red-500">Fastest Delivery</h3>
          <p className="text-gray-500 mb-4">
            Fresh from our ovens to your door in record time. We pride ourselves on swift, reliable delivery service.
          </p>
          <a href="https://wa.me/919745956330"><p className="text-blue-500 hover:underline">
           contact us
          </p></a>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-full p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out mx-auto relative lg:top-0"
          style={{ width: '300px', height: '300px' }}> {/* Control vertical offset */}
          <div className="flex justify-center items-center mb-4">
            <IconShieldHalf size={50} className="text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-red-500">Pure test</h3>
          <p className="text-gray-500 mb-4">
            Quality is our promise. Every loaf undergoes thorough testing to ensure you get nothing but the best in best.
          </p>
          <a href="https://wa.me/919745956330"><p className="text-blue-500 hover:underline">
           contact us
          </p></a>
        </div>

      </div>
    </div>
  );
}
