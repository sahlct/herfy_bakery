import React, { useState } from 'react';

export default function HomeAbout() {
  const [activeTab, setActiveTab] = useState('Our Story');
  const [imageLoading, setImageLoading] = useState({ story: true, commitments: true, chooseUs: true });

  const handleImageLoad = (key) => {
    setImageLoading((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Our Story':
        return (
          <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 relative'>
              {imageLoading.story && (
                <div className="w-full h-[300px] md:h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
              )}
              <img
                src="https://piktochart.com/wp-content/uploads/2023/05/large-272.jpg"
                alt="Our Story"
                className={`w-full h-auto object-cover px-10 transition-opacity duration-500 ${
                  imageLoading.story ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad('story')}
              />
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-col p-4 md:p-10'>
              <h1 className='text-xl md:text-2xl mb-6 font-bold'>Since From 1790</h1>
              <p className='text-center leading-relaxed font-lato'>
                At Herfy Bakery, our journey began with a simple dream: to create sponge cakes that are not only delicious but also bring a smile to everyone who tastes them. With a focus on quality and tradition, we use only the finest ingredients and time-tested recipes to ensure every bite is perfect.
              </p>
            </div>
          </div>
        );
      case 'Commitments':
        return (
          <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 relative'>
              {imageLoading.commitments && (
                <div className="w-full h-[300px] md:h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
              )}
              <img
                src="https://cdn-ghkoj.nitrocdn.com/kjYfdEBKRwdYwvHQyjaYBdTGFpFGjqYW/assets/images/optimized/rev-39d8e95/sertifier.com/blog/wp-content/uploads/2020/10/certificate-text-samples.jpg"
                alt="Commitments"
                className={`w-full h-auto object-cover px-10 transition-opacity duration-500 ${
                  imageLoading.commitments ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad('commitments')}
              />
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-col p-4 md:p-10'>
              <h1 className='text-xl md:text-2xl mb-6 font-bold'>Obligations</h1>
              <p className='text-center leading-relaxed font-lato'>
                We believe in the magic of baking. From the moment you step into our bakery to the time you savor your first bite, we aim to provide an experience that is both delightful and memorable. Our team of skilled bakers works tirelessly to maintain the highest standards of excellence, ensuring that every cake we produce meets our stringent quality criteria.
              </p>
            </div>
          </div>
        );
      case 'Why Choose Us':
        return (
          <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 relative'>
              {imageLoading.chooseUs && (
                <div className="w-full h-[300px] md:h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>
              )}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15MltYgHa8uF-3GMyckQ8wTHk8TQqAQIYuA&s"
                alt="Why Choose Us"
                className={`w-full h-auto object-cover px-10 transition-opacity duration-500 ${
                  imageLoading.chooseUs ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => handleImageLoad('chooseUs')}
              />
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-col p-4 md:p-10'>
              <h1 className='text-xl md:text-2xl mb-6 font-bold'>Why We're Your Best Option?</h1>
              <p className='text-center leading-relaxed font-lato'>
                We source only the best ingredients, ensuring the freshest and most flavorful sponge cakes. Our expert bakers are passionate and experienced, dedicated to perfecting the art of sponge cake baking. Whether you need cakes for a special event or a regular supply for your business, we offer customization to meet your specific needs. Your satisfaction is our top priority, and we strive to exceed your expectations with every order.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main p-4 font-josefin">
      <h1 className="font-semibold font-lato" style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>About Us</h1>
      <p className="md:text-lg text-base mb-10">PASSION WITH FLOUR</p>

      <div className="sinceContainer w-full">
        <div className="buttons flex sm:justify-center justify-start space-x-4 overflow-x-auto scrollbar-hidden">
          <button
            className={`py-1 px-4 text-xl md:text-2xl md:font-bold ms-0 whitespace-nowrap ${activeTab === 'Our Story' ? ' text-yellow-500 ' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Our Story')}
          >
            Achievements
          </button>
          <button
            className={`py-1 px-4 text-xl md:text-2xl !ms-0 md:font-bold whitespace-nowrap ${activeTab === 'Commitments' ? ' text-yellow-500 ' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Commitments')}
          >
            Moments
          </button>
          <button
            className={`py-1 px-4 text-xl md:text-2xl !ms-0 md:font-bold whitespace-nowrap ${activeTab === 'Why Choose Us' ? ' text-yellow-500 ' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Why Choose Us')}
          >
            Stars
          </button>
        </div>

        <div className="content bg-[#f9f4ea] p-0 md:p-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
