import React from 'react'
import { NavBar } from './navbar'
// import Carousel from './carouselHome'
import HomeAbout from './HomeAbout'
import BreadOfTheDay from './breadDay'
// import GetinTouch from './GetinTouch'
import Footer from './footer'
import CarouselComponent from './carouselHome'
import CakeTouch from './CakeTouch'

export default function HomePage() {
  return (
    <div className='bg-[#f9f4ea]'>
        <NavBar />
        <CarouselComponent/>
        <HomeAbout />
        <BreadOfTheDay/>
        {/* <GetinTouch /> */}
        <CakeTouch />
        <Footer />
    </div>
  )
}
