import React, { useEffect } from 'react'
import BreadOfTheDay from './breadDay'
import Footer from './footer'

export default function Products() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mt-10'>
      <BreadOfTheDay />
      <Footer />
    </div>
  )
}
