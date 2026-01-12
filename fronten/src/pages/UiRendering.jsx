import React from 'react'
import HeroSection from '../component/HeroSection'
import Navbar from '../component/Navbar'
import Projects from '../component/Projects'

const UiRendering = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Projects/>
    </div>
  )
}

export default UiRendering