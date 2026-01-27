import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextApi/Context";
import ProjectsBoxes from "./ProjectsBoxes";
import { useState } from "react";

const Projects = () => {
  const { renderingCards, user, repos, loading, error, theme } = useContext(GlobalContext);

  const [moreCards, setMoreCards] = useState(false)

  useEffect(() => {
    renderingCards();
  }, []);

 console.log(moreCards);
 
    


  // Loading
  if (loading) return <div className="text-center mt-20 text-white">Loading...</div>;

  // Error
  if (error)
    return <div className="text-center mt-20 text-red-600 font-bold">{error}</div>;

  return (
    <div className={` min-h-[80vh] ${theme ? "text-white" : "text-black"} border-b container`}>
      <h1 className="text-center font-bold text-3xl sm:text-6xl  ">Recent Projects</h1>

      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-5 my-10 md:text-md sm:text-sm">
        <h1 className="">
          Github Username:
          <Link
            className={`px-5 py-2 rounded font-bold ${
              theme ? "bg-gray-800 text-white" : "bg-blue-200 text-black"
            }`}
            to={`https://github.com/${user.login}`}
            target="_blank"
          >
            {user.name || user.login}
          </Link>
        </h1>

        <img
          className="rounded-full"
          height={"50px"}
          width={"50px"}
          src={user.avatar_url}
          alt="avatar"
        />
        <h1>Following: {user.following}</h1>
        <h1>Followers: {user.followers}</h1>
      </div>

      {/* Github repo boxes */}
      <div className="flex flex-wrap gap-5 items-start justify-start">
        {/* {repos.splice(0,4).map((repo) => ( */}
          <ProjectsBoxes
            // key={repo.id}
            // id={repo.id}
            // name={repo.name}
            // avatar_url={user.avatar_url} 
            // html_url={repo.html_url}     
            // theme={theme}
          />
        {/* ))} */}

      </div>
<button onClick={()=>setMoreCards(!moreCards)} >See More</button>
    </div>
  );
};

export default Projects;
