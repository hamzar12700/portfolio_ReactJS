import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import { GlobalContext } from './ContextApi/Context'
import Login from './pages/Login'
import UiRendering from './pages/UiRendering'

const App = () => {
  const { theme } = useContext(GlobalContext)

  return (
    <div className={`${theme ? "black" : "light"} `} >
      
      <div  className={`container`}>
        <Routes>
          <Route path="/" element={<UiRendering/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>

    </div>
  )
}


export default App