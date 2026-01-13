import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectsBoxes from "./ProjectsBoxes";

const Projects = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // ✅ new state for error

  const renderingCards = async () => {
    try {
      setLoading(true);
      setError(""); // reset error

      const userRes = await axios.get(
        "https://api.github.com/users/hamzar12700"
      );
      setUser(userRes.data);

      const repoRes = await axios.get(userRes.data.repos_url);
      setRepos(repoRes.data);

    } catch (err) {
      console.log(err.message);

      // GitHub rate limit error usually 403
      if (err.response && err.response.status === 403) {
        setError("GitHub API rate limit exceeded. Please try again later.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    renderingCards();
  }, []);

  // ✅ Handle loading
  if (loading) return <div className="text-center mt-20">Loading...</div>;

  // ✅ Handle error
  if (error)
    return <div className="text-center mt-20 text-red-600 font-bold">{error}</div>;

  return (
    <div className="mt-20 min-h-80">
      <h1 className="text-center font-bold text-6xl">Recent Projects</h1>

      <div className="flex justify-between my-10 px-30">
        <h1>
          Github Username:{" "}
          <Link to={`http://github.com/${user.login}`}>{user.name || user.login}</Link>
        </h1>
        <img height={"10px"} width={"20px"} src={user.avatar_url} alt="avatar" />
        <h1>Following: {user.following}</h1>
        <h1>Followers: {user.followers}</h1>
      </div>

      {/* github repo boxes */}
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {repos.map((repo) => (
          <ProjectsBoxes
            key={repo.id}
            id={repo.id}
            name={repo.name}
            avatar_url={user.avatar_url} // user avatar
            html_url={repo.html_url}     // repo link
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
