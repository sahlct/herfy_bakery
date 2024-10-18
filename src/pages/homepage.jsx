import React from 'react'
// import { NavBar } from './navbar'
import Carousel from './carouselHome'
import HomeAbout from './HomeAbout'
import BreadOfTheDay from './breadDay'
import CakeTouch from './CakeTouch'
import Footer from './footer'
import WhyChoose from './whychoose'



export default function HomePage() {
  return (
    <div className='bg-[#f9f4ea] md:mt-24 mt-10'>

      <Carousel />
      <HomeAbout />
      <WhyChoose />
      <BreadOfTheDay />
      <CakeTouch />
      <Footer />
    </div>
  )
}
