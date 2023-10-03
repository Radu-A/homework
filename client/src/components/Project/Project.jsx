import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import HeaderProject from "./HeaderProject/HeaderProject";
import { useLocation } from "react-router";
import { useContext } from "react";
import { TitleContext } from "../../context/titleContext";

// Use server depending on environment variables
let server = "";
if (import.meta.env.VITE_LOCAL_SERVER) {
  server = import.meta.env.VITE_LOCAL_SERVER;
} else if (import.meta.env.VITE_CLOUD_SERVER) {
  server = import.meta.env.VITE_CLOUD_SERVER;
}

const Project = () => {
  const [project, setProject] = useState({});

  const location = useLocation();

  const { title, updateTitle } = useContext(TitleContext);

  useEffect(() => {
    updateTitle("Project Details");
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const projectId = queryParams.get("project_id");

    const getProject = async () => {
      try {
        const resp = await fetch(
          `${server}/api/projects?project_id=${projectId}`
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
              <h2>Desciption</h2>
              <p>{project.description}</p>
            </article>
            <article className="img-big-article">
              <img src={project.img_big} alt="" />
            </article>
            <article className="done-article">
              <h2>Done</h2>
              <p>{project.done}</p>
            </article>
            <article className="todo-article">
              <h2>To do</h2>
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
