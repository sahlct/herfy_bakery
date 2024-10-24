import React, { useEffect } from 'react'
import CakeTouch from './CakeTouch'
import Footer from './footer'
// import MediaData from './mediaData'

export default function ContactPage() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='md:mt-24 mt-10'>
        {/* <MediaData/> */}
        <CakeTouch/>
        <Footer/>
    </div>
  )
}
