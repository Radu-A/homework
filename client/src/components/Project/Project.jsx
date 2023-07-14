import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import HeaderProject from "./HeaderProject/HeaderProject";
import { useLocation } from "react-router";

const Project = () => {
  const [project, setProject] = useState({});

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const projectId = queryParams.get("project_id");

    const getProject = async () => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/projects?project_id=${projectId}`
        );
        const data = await resp.json();
        setProject(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getProject();
  }, []);

  return (
    <>
      <Title />
      <section className="project-section">
        {project && (
          <>
            <HeaderProject project={project} />
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
            <article className="link-article">
              <h2>Git repository</h2>
              <h3>
                <a href={project.github} target="blank">
                  {project.github}
                </a>
              </h3>
              <h2>Live site</h2>
              <h3>
                <a href={project.site} target="blank">
                  {project.site}
                </a>
              </h3>
            </article>
            <article className="link-article"></article>
          </>
        )}
      </section>
    </>
  );
};

export default Project;
