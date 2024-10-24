import React from 'react'
import HomeAbout from './HomeAbout'
import Footer from './footer'
import WhyChoose from './whychoose'

export default function AboutPage() {
  return (
    <div className='md:mt-24 mt-14'>
        <WhyChoose/>
        <HomeAbout/>
        <Footer/>
    </div>
  )
}
