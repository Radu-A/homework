import React from "react";

const HeaderProject = ({project}) => {
  return (
    <>
        <article className="header-project-article">
          <div className="header-user">
              <img className="header-user-img" src={project.photo} alt="" />
              <h3>{project.firstname} {project.lastname}</h3>
              <p>Full-Stack {project.curse}</p>
          </div>
          <div className="header-title">
            <h2>{project.title} Superproject</h2>
            <h3>{project.development}</h3>
            <p>{project.date}</p>
          </div>
        </article>
    </>
    );
};

export default HeaderProject;
