import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsBoxes = ({id , name , avatar_url}) => {
  return (
    <div className='border rounded-4xl flex flex-col justify-center items-start w-60 h-80 hover:bg-black hover:text-white ' key={id}>
        Project Name : {name}
            {/* <img src={avatar_url} alt="" /> */}
           <h1 >Repo Link : <br /> <Link className='border px-5 rounded' to={`https://github.com/hamzar12700/${name}`} target="_blank" >{name}</Link></h1>
          </div>
  )
}

export default ProjectsBoxes