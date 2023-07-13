import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import HeaderProject from "./HeaderProject/HeaderProject";
import { useLocation } from "react-router";

const Project = () => {

  const [project, setProject] = useState({});

  const location = useLocation();

  useEffect(() => {

    const queryParams = new URLSearchParams(location.search);
    const projectId = queryParams.get('project_id');

    const getProject = async ()=> {
      try {
        const resp = await fetch(`http://localhost:3000/api/projects?project_id=${projectId}`);
        const data = await resp.json();
        setProject(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getProject();
  }, [])

  return (
    <>
      <Title />
      <section className="project-section">
      
      <HeaderProject project={project}/>
        <article className="description-article">
          <h3>Desciption</h3>
          <p>{project.description}</p>
        </article>
        <article className="img-big-article">
          <img src={project.img_big} alt="" />
        </article>
        <article className="done-article">
          <h3>Done</h3>
          <p>{project.done}</p>
        </article>
        <article className="todo-article">
          <h3>To do</h3>
          <p>{project.todo}</p>
        </article>
      </section>
    </>
  );
};

export default Project;
