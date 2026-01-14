import React from 'react'

const ExperienceBoxes = ({heading , para}) => {
    return (
        <div className='border h-80 w-[100%]  sm:min-h-100  rounded-2xl flex flex-col justify-center items-start gap-5 p-5 my-10 hover:bg-black hover:text-white transition-all duration-100'>
            <img className='svgIcons md:h-[20%] h-[30%] ' src="./code-svgrepo-com.svg" height={"20px"} width={"100px"} alt="" />
            <h1  className='font-bold md:text-2xl sm:text-[130%] text-sm'>{heading}</h1>
            <p className='md:text-md text-sm'>{para}  </p>
        </div>
    )
}

export default ExperienceBoxes