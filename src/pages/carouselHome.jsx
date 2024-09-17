import React, { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Carousel.css'; // For custom CSS transitions

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState('next');

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
    setDirection('next');
    setCurrentPage((prevPage) => (prevPage + 1) % cakes.length);
  };

  const handlePrevious = () => {
    setDirection('prev');
    setCurrentPage((prevPage) => (prevPage - 1 + cakes.length) % cakes.length);
  };

  return (
    <div className="relative w-full md:h-[500px] h-[650px] p-4 overflow-hidden font-lato">
      {/* Carousel Content */}
      <div className="flex h-full items-center justify-between">
        {/* Left Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 p-2 bg-red-100 hover:bg-red-200 focus:outline-none z-10"
        >
          <IconChevronLeft stroke={2} />
        </button>

        {/* Carousel Page */}
        <div className="flex items-center justify-center w-full h-full overflow-hidden relative">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={currentPage}
              timeout={500}
              classNames={direction === 'next' ? 'slide-left' : 'slide-right'}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-center w-full h-full">
                  {currentPage === 0 ? (
                    <>
                      {/* Page 1 Layout */}
                      <div className="w-full md:w-1/2 md:p-4 flex justify-center">
                        <img
                          src={cakes[0].image}
                          alt="Cake 1"
                          className="w-3/4 md:h-[400px] h-[300px] object-cover rounded-lg"
                          style={{ filter: 'drop-shadow(10px 15px 8px rgba(0, 0, 0, 0.3))' }}
                        />
                      </div>
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
                      {/* Page 2 Layout */}
                      <div className="w-full md:w-1/2 p-4 text-left md:px-20 px-5 order-last md:order-first">
                        <h2 className="font-semibold mb-1  font-josefin">EVERY DAY WE MAKE</h2>
                        <h1 className="md:text-4xl text-3xl font-semibold mb-2">Freshly Baked Bread</h1>
                        <p className="text-gray-700">{cakes[1].text}</p>
                        <button className="py-1 rounded-full md:w-[150px] w-[130px] border-yellow-500 border md:mt-10 mt-5 hover:bg-yellow-500 hover:text-white shadow-lg">
                          ORDER NOW
                        </button>
                      </div>
                      <div className="w-full md:w-1/2 md:p-4 flex justify-center">
                        <img
                          src={cakes[1].image}
                          alt="Cake 2"
                          className="w-3/4 md:h-[400px] h-[300px] object-cover rounded-lg"
                             style={{ filter: 'drop-shadow(10px 15px 8px rgba(0, 0, 0, 0.3))' }}
                        />
                      </div>
                      
                    </>
                  )}
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 p-2 bg-red-100 hover:bg-red-200 focus:outline-none"
        >
          <IconChevronRight stroke={2} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

