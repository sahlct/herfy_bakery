import React, { useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Chocolate from './chocolate';
import Pinaple from './pinaple';

export default function BreadOfTheDay() {
  const [activeButton, setActiveButton] = useState("Chocolate Cake");

  return (
    <div className="md:py-20 py-10 font-lato">
      <h1 className="font-bold font-josefin" style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>Our Products</h1>
      <p className="font-josefin text-gray-500">DELIVERING TO YOUR DOOR</p>

      <div className="main p-4 font-josefin">
        <div className="sinceContainer w-full">
          <div className="buttons flex sm:justify-center justify-start space-x-4 mb-4 overflow-x-auto scrollbar-hidden">
            <button
              className={`py-1 px-4 text-xl md:text-2xl md:font-bold ms-0 whitespace-nowrap ${activeButton === 'Chocolate Cake' ? ' text-yellow-500 ' : 'text-gray-500'}`}
              onClick={() => setActiveButton('Chocolate Cake')}
            >
              Chocolate Cake
            </button>
            <button
              className={`py-1 px-4 text-xl md:text-2xl !ms-0 md:font-bold whitespace-nowrap ${activeButton === 'Pinapple Cake' ? ' text-yellow-500 ' : 'text-gray-500'}`}
              onClick={() => setActiveButton('Pinapple Cake')}
            >
              Pinapple Cake
            </button>
          </div>
        </div>
      </div>

      {activeButton === "Chocolate Cake" ? <Chocolate /> : <Pinaple />}
    </div>
  );
}
