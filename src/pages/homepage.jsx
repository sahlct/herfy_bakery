import React from 'react'
// import { NavBar } from './navbar'
import Carousel from './carouselHome'
import HomeAbout from './HomeAbout'
import BreadOfTheDay from './breadDay'
import CakeTouch from './CakeTouch'
import Footer from './footer'



export default function HomePage() {
  return (
    <div className='bg-[#f9f4ea]'>
       
        <Carousel/>
        <HomeAbout/>
       <BreadOfTheDay/>
       <CakeTouch/>
       <Footer/>
    </div>
  )
}
