import React, { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const cakes = [
    {
      image: '/assets/yellow.png',
      text: 'This is a delicious Pineapple cake made with the finest ingredients.',
    },
    {
      image: '/assets/choclate.png',
      text: 'A tasty Chocolate cake with fresh Chocos and cream.',
    },
  ];

  const handleNext = () => {
    setSlideDirection('animate-slideLeft');
    setCurrentPage((prevPage) => (prevPage + 1) % cakes.length);
  };

  const handlePrevious = () => {
    setSlideDirection('animate-slideRight');
    setCurrentPage((prevPage) => (prevPage - 1 + cakes.length) % cakes.length);
  };

  const [imageLoaded, setImageLoaded] = useState([false, false]);

  const handleImageLoad = (index) => {
    setImageLoaded((prevState) => {
      const updatedLoaded = [...prevState];
      updatedLoaded[index] = true;
      return updatedLoaded;
    });
  };

  const renderImageWithSkeleton = (src, alt, index) => (
    <div className="w-full md:w-1/2 md:p-4 flex justify-center relative">
      {!imageLoaded[index] && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 md:h-[400px] h-[300px] bg-gray-300 animate-pulse rounded-lg" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-3/4 md:h-[400px] h-[300px] object-cover rounded-lg transition-opacity duration-500 ${
          imageLoaded[index] ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => handleImageLoad(index)}
        style={{ filter: 'drop-shadow(10px 15px 8px rgba(0, 0, 0, 0.3))' }}
      />
    </div>
  );

  const renderCarouselPage = (pageIndex) => (
    <div 
      className={`absolute inset-0 flex items-center justify-center ${slideDirection}`}
      key={pageIndex}
      style={{ animation: `${slideDirection} 0.5s ease-in-out` }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-center w-full h-full">
        {pageIndex === 0 ? (
          <>
            {renderImageWithSkeleton(cakes[0].image, 'Cake 1', 0)}
            <div className="w-full md:w-1/2 p-4 text-left md:px-20 px-5">
              <h2 className="font-semibold mb-1 font-josefin">EVERY DAY WE MAKE</h2>
              <h1 className="md:text-4xl text-3xl font-semibold mb-2">Freshly Baked Bread</h1>
              <p className="text-gray-700">{cakes[0].text}</p>
              <button className="py-1 rounded-full md:w-[150px] w-[130px] border-yellow-500 border md:mt-10 mt-5 hover:bg-yellow-500 hover:text-white shadow-lg">
                ORDER NOW
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 p-4 text-left md:px-20 px-5 order-last md:order-first">
              <h2 className="font-semibold mb-1 font-josefin">EVERY DAY WE MAKE</h2>
              <h1 className="md:text-4xl text-3xl font-semibold mb-2">Freshly Baked Bread</h1>
              <p className="text-gray-700">{cakes[1].text}</p>
              <button className="py-1 rounded-full md:w-[150px] w-[130px] border-yellow-500 border md:mt-10 mt-5 hover:bg-yellow-500 hover:text-white shadow-lg">
                ORDER NOW
              </button>
            </div>
            {renderImageWithSkeleton(cakes[1].image, 'Cake 2', 1)}
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-slideLeft {
          animation: slideLeft 0.5s ease-in-out;
        }

        .animate-slideRight {
          animation: slideRight 0.5s ease-in-out;
        }
      `}</style>

      <div className="relative w-full md:h-[500px] h-[650px] p-4 overflow-hidden font-lato">
        <div className="flex h-full items-center justify-between">
          <button
            onClick={handlePrevious}
            className="absolute left-0 p-2 bg-red-100 hover:bg-red-200 focus:outline-none z-10"
          >
            <IconChevronLeft stroke={2} />
          </button>

          <div className="flex items-center justify-center w-full h-full overflow-hidden relative">
            {renderCarouselPage(currentPage)}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 p-2 bg-red-100 hover:bg-red-200 focus:outline-none z-10"
          >
            <IconChevronRight stroke={2} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;