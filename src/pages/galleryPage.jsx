import React from 'react'
import Gallery from './gallery'
import MediaData from './mediaData'
import Footer from './footer'

export default function GalleryPage() {
  return (
    <div className='md:mt-24 mt-10'>
        <Gallery />
        <MediaData/>
        <Footer/>
    </div>
  )
}
