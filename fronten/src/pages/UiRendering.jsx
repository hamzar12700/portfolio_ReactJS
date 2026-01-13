import React, { useContext } from 'react'
import Experience from '../component/Experience'
import HeroSection from '../component/HeroSection'
import Navbar from '../component/Navbar'
import Projects from '../component/Projects'
import { GlobalContext } from '../ContextApi/Context'

const UiRendering = () => {
  const { theme } = useContext(GlobalContext)
  return (
    <div  className={`${theme ? "black" : "light"}`}>
        <Navbar/>
        <HeroSection/>
        <Experience/>
        <Projects/>
    </div>
  )
}

export default UiRendering