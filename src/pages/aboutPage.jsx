import React, { useEffect } from 'react'
import HomeAbout from './HomeAbout'
import Footer from './footer'
import WhyChoose from './whychoose'

export default function AboutPage() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='md:mt-24 mt-14'>
        <WhyChoose/>
        <HomeAbout/>
        <Footer/>
    </div>
  )
}
