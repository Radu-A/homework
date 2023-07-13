import React, { useState } from "react";
import Title from "../Title/Title";

const Project = () => {

  const [project, getProject] = useState({});

  useEffect(() => {

    const getProjects = async ()=> {
      try {
        const resp = await fetch('http://localhost:3000/api/projects');
        const data = await resp.json();
        setProjectList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProjects();
  }, [])

  return (
    <>
      <Title />
    </>
  );
};

export default Project;
