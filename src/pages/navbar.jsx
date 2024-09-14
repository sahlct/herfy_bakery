import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

export function NavBar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  const links = [
    { name: 'Home', path: 'home' },
    { name: 'Products', path: 'products' },
    { name: 'About Us', path: 'about' },
    { name: 'Contact Us', path: 'contact' },
  ];

  return (
    <>
      {/* Navbar for screens above 700px */}
      <div className='hidden sm:flex w-full h-[100px] bg-[#f9f4ea] justify-between md:px-20 px-10 items-center shadow-md'>
        <div className='logowithName flex gap-2 items-center'>
          <img src="/assets/logo.png" alt="Logo" className='h-[90px] w-[90px]' />
          <p className='font-bold font-josefin' style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>Herfy</p>
        </div>
        <div className='options flex gap-10 items-center'>
          {links.map(link => (
            <div key={link.path}>{link.name}</div>
          ))}
        </div>
      </div>

      {/* Sidebar and Menu Icon for screens below 700px */}
      <div className="flex sm:hidden fixed top-0 w-full h-[60px] bg-[#f9f4ea] items-center justify-between px-5 z-40 shadow-md">
        <div className="logowithName flex gap-2 items-center">
          <img src="/assets/logo.png" alt="Logo" className='h-[50px] w-[50px]' />
          <p className='font-bold font-josefin text-xl'>Herfy</p>
        </div>
        <button onClick={toggleSidebar} className="p-2 rounded bg-[#DD9356]">
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Custom Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform ${openSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col gap-5 px-7 py-3">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Logo" className='h-[40px] w-[40px]' />
            <p className="font-bold text-xl">Herfy</p>
          </div>
          {links.map(link => (
            <div key={link.path} className="flex items-center gap-3 w-full h-[40px] px-4" onClick={closeSidebar}>
              <p>{link.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop Blur */}
      {openSidebar && (
        <div onClick={closeSidebar} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-40 transition-opacity duration-300 ease-in-out"></div>
      )}
    </>
  );
}
