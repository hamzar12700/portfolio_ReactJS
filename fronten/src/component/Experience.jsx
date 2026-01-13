import React from 'react'
import ExperienceBoxes from './ExperienceBoxes'

const Experience = () => {
    let expBox = [{
        heading : "Frontend Web Developer",
        para : "Html , css , js , Bootstrap , Tailwind Css"
    },
{
    heading : "Backend Web Developer",
    para : "Php , Laravel , Node js , Express js , Firebase , Sql Server , Mongodb"
}

]
    return (
        <div className='h-120  '>
            <h1 className='text-center font-bold text-6xl py-2 w-full'>Experience</h1>
            {/* whole container  */}
            <div className='flex '>
            <div className='w-[100%] h-100 flex gap-2'>
                {/* left side */}
               {expBox.map((items)=>{
                return <ExperienceBoxes heading={items.heading} para={items.para} />
               })}
                  {/* right side */}
               {/* <ExperienceBoxes  /> */}
            </div>
                <div className='w-1/2  h-100 flex justify-center items-center'>
                <img
                    src="/profile.jpeg"
                    className="h-1/2 rounded-full"
                    alt=""
                />
                </div>
            </div>
        </div>
    )
}

export default Experience