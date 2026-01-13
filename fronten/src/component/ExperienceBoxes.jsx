import React from 'react'

const ExperienceBoxes = ({heading , para}) => {
    return (
        <div className='border  h-100 w-[80%] rounded-2xl flex flex-col justify-center items-start gap-5 p-5 my-10 hover:bg-black hover:text-white transition-all duration-100'>
            <img className='svgIcons' src="./code-svgrepo-com.svg" height={"20px"} width={"100px"} alt="" />
            <h1 className='font-bold text-4xl'>{heading}</h1>
            <p>{para}  </p>
        </div>
    )
}

export default ExperienceBoxes