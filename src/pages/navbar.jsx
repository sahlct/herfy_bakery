import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { Bars3Icon } from '@heroicons/react/24/outline';

export function NavBar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation(); // Access the current location

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  // Links with their respective paths
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className='z-20 w-full fixed top-0'>
      {/* Navbar for screens above 700px */}
      <div className='hidden sm:flex w-full h-[100px] bg-[#f9f4ea] justify-between md:px-20 px-10 items-center shadow-md'>
        <div className='logowithName flex gap-2 items-center'>
          <img src="/assets/logo.png" alt="Logo" className='h-[150px] w-[150px]' />
          {/* <p className='font-bold font-josefin' style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>Herfy</p> */}
        </div>
        <div className='options flex gap-10 items-center'>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              // Add active class based on the current URL path
              className={`hover:text-[#DD9356] transition-colors duration-300 ${
                location.pathname === link.path ? 'text-[#DD9356] font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar and Menu Icon for screens below 700px */}
      <div className="flex sm:hidden sticky top-0 w-full h-[60px] bg-[#f9f4ea] items-center justify-between px-5 z-40 shadow-md">
        <div className="logowithName flex gap-2 items-center">
          <img src="/assets/logo.png" alt="Logo" className='h-[70px] w-[70px]' />
          {/* <p className='font-bold font-josefin text-xl'>Herfy</p> */}
        </div>
        <button onClick={toggleSidebar} className="p-2 rounded bg-[#DD9356]">
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Custom Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform ${openSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col gap-5 px-7 py-3">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Logo" className='h-[50px] w-[50px]' />
            <p className="font-bold text-xl">Herfy</p>
          </div>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeSidebar}
              // Add active class based on the current URL path
              className={`flex items-center gap-3 w-full h-[40px] px-4 hover:bg-[#DD9356] hover:text-white transition-colors duration-300 ${
                location.pathname === link.path ? 'bg-[#DD9356] text-white' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop Blur */}
      {openSidebar && (
        <div onClick={closeSidebar} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-40 transition-opacity duration-300 ease-in-out"></div>
      )}
    </div>
  );
}
