import React, { useEffect } from 'react'
import Gallery from './gallery'
import MediaData from './mediaData'
import Footer from './footer'

export default function GalleryPage() {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='md:mt-24 mt-10'>
      <Gallery />
      <MediaData />
      <Footer />
    </div>
  )
}
