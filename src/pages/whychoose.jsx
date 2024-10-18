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
            Our mission is to bring the art of bread making back to its roots and to share our passion for bread with others.
          </p>
          <p className="text-blue-500 hover:underline">
            Read more
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-full p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out mx-auto relative lg:top-16"
             style={{ width: '300px', height: '300px'}}> {/* Control vertical offset */}
          <div className="flex justify-center items-center mb-4">
            <IconTruckDelivery size={50} className="text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-red-500">Fastest Delivery</h3>
          <p className="text-gray-500 mb-4">
            Our mission is to bring the art of bread making back to its roots and to share our passion for bread with others.
          </p>
          <p className="text-blue-500 hover:underline">
            Read more
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-full p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out mx-auto relative lg:top-0"
             style={{ width: '300px', height: '300px'}}> {/* Control vertical offset */}
          <div className="flex justify-center items-center mb-4">
            <IconShieldHalf size={50} className="text-teal-500" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-red-500">Pure test</h3>
          <p className="text-gray-500 mb-4">
            Our mission is to bring the art of bread making back to its roots and to share our passion for bread with others.
          </p>
          <p className="text-blue-500 hover:underline">
            Read more
          </p>
        </div>

      </div>
    </div>
  );
}
