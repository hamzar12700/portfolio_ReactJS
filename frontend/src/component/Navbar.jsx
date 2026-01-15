import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../ContextApi/Context'
import DarkBtn from './DarkBtn'

const Navbar = () => {
    const {theme , setTheme} = useContext(GlobalContext)
  return (
    <div>

    <div className='flex justify-between items-center h-20 fixed '>
        <h1 className='text-3xl font-bold cursor-pointer'>Hamza</h1>
        <ul className='md:flex items-center gap-8 hidden'>
            <li className=' cursor-pointer'>Home</li>
            <li className=' cursor-pointer'>About</li> 
            <li className=' cursor-pointer'>Services</li>
            <li className=' cursor-pointer'>Projects</li>
        </ul>
       <div className='flex gap-4 items-center'>
       
       <Link to="/login" ><button className='cursor-pointer' >Login</button></Link>

       {/* <button className='navBtn md:block hidden border px-3 py-1 hover:bg-black  transition delay-150 duration-100 ease-in-out rounded hover:text-amber-50 cursor-pointer' onClick={()=>setTheme((prev)=> !prev)}>{theme ? "Dark Theme On" : "Dark Theme Off"}</button> */}
       <DarkBtn/>
        
       </div>
    </div>
    <hr />
    </div>
  )
}

export default Navbar