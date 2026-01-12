import React, { useContext } from 'react'
import { GlobalContext } from '../ContextApi/Context'

const HeroSection = () => {
    const {theme} = useContext(GlobalContext)
    return (
        <div className='w-full flex h-130' >
            <div className="left w-[50%]  flex flex-col justify-center gap-4 ">
                <h1 className="text-3xl font-bold">
                    My Name is Muhammad Hamza Raza
                </h1>

                <h1 className="text-xl text-gray-600">
                    I am Full Stack Web Developer
                </h1>

                <button className={`self-start mt-4 px-6 py-3 ${theme ? "bg-white" : "bg-black"}  bg-black ${theme ? "text-black" : "text-white"} rounded-lg font-medium  hover:bg-gray-800 transition-all duration-300 shadow-md}`} >
                    Contact Us
                </button>
            </div>

            <div className="right w-[50%] h-full flex justify-center items-center">
                <img
                    src="/profile.jpeg"
                    className="h-1/2 rounded-full"
                    alt=""
                />
            </div>

        </div>
    )
}

export default HeroSection