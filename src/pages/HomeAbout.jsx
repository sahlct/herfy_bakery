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
            <div className='w-full md:w-1/2 relative flex justify-center'>
              <div className="relative w-full md:h-[350px] max-w-[350px] px-10">
                {imageLoading.story && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <img
                  src="/assets/iso.jpg"
                  alt="Our Story"
                  className={`w-full h-full object-cover transition-opacity duration-500 shadow-xl ${
                    imageLoading.story ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad('story')}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-col p-4 md:p-10'>
              <h1 className='text-xl md:text-2xl mb-6 font-bold'>
                ISO : Food Safety Management System </h1>
              <p className='text-center leading-relaxed font-lato'>
                Herfy Bakery is proud to be ISO 22000:2018 certified, ensuring the highest standards in food safety management. Specializing in the manufacturing and distribution of premium bakery products, including cakes, sweets, and snacks, we are committed to delivering quality and excellence in every bite. Trust in our certified expertise for safe, delicious, and meticulously crafted baked goods.
              </p>
            </div>
          </div>
        );
      case 'Commitments':
        return (
          <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 relative flex justify-center'>
              <div className="relative w-full md:h-[350px] max-w-[350px] px-10">
                {imageLoading.commitments && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <img
                  src="/assets/haccp.jpg"
                  alt="Commitments"
                  className={`w-full h-full object-cover transition-opacity duration-500 shadow-xl ${
                    imageLoading.commitments ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad('commitments')}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-col p-4 md:p-10'>
              <h1 className='text-xl md:text-2xl mb-6 font-bold'>Hazard Analysis & Critical Control Point</h1>
              <p className='text-center leading-relaxed font-lato'>
                Herfy Bakery is proud to be HACCP certified, demonstrating our commitment to maintaining the highest food safety standards. Specializing in the production of cakes, sweets, and other bakery products, we ensure that every item meets strict hazard control measures for safe and delicious products. Trust in Herfy Bakery for premium quality and certified food safety excellence.
              </p>
            </div>
          </div>
        );
      case 'Why Choose Us':
        return (
          <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 relative flex justify-center'>
              <div className="relative w-full md:h-[350px] max-w-[350px] px-10">
                {imageLoading.chooseUs && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <img
                  src="/assets/whogmp.jpg"
                  alt="Why Choose Us"
                  className={`w-full h-full object-cover transition-opacity duration-500 shadow-xl ${
                    imageLoading.chooseUs ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad('chooseUs')}
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-col p-4 md:p-10'>
              <h1 className='text-xl md:text-2xl mb-6 font-bold'>Premium Quality Bakery Products with WHO-GMP Certification</h1>
              <p className='text-center leading-relaxed font-lato'>
                At Herfy Bakery, we take pride in producing top-notch cakes, snacks, and savory treats while adhering to the highest international standards. With our WHO-GMP certification, we ensure that every product is crafted under stringent quality controls, reflecting our commitment to excellence, safety, and customer satisfaction. Trust us for baked goods that are not only delicious but also produced with the utmost care and compliance.
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
        <div className="buttons flex sm:justify-center justify-start space-x-4 overflow-x-auto scrollbar-hidden mb-3 md:mb-0">
          <button
            className={`py-1 px-4 text-xl md:text-2xl md:font-bold ms-0 whitespace-nowrap ${activeTab === 'Our Story' ? ' text-yellow-500 ' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Our Story')}
          >
            ISO
          </button>
          <button
            className={`py-1 px-4 text-xl md:text-2xl !ms-0 md:font-bold whitespace-nowrap ${activeTab === 'Commitments' ? ' text-yellow-500 ' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Commitments')}
          >
            HACCP
          </button>
          <button
            className={`py-1 px-4 text-xl md:text-2xl !ms-0 md:font-bold whitespace-nowrap ${activeTab === 'Why Choose Us' ? ' text-yellow-500 ' : 'text-gray-500'}`}
            onClick={() => setActiveTab('Why Choose Us')}
          >
            WHO-GMP
          </button>
        </div>

        <div className="content bg-[#f9f4ea] p-0 md:p-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}