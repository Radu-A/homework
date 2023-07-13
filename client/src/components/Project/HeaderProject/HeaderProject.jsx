import React from "react";

const HeaderProject = ({project}) => {
  return (
    <>
        <article className="header-project-article">
          <div className="header-user">
              <img className="header-user-img" src={project.photo} alt="" />
            <div className="header-user-text">
              <h3>{project.firstname} {project.lastname}</h3>
              <p>Full-Stack {project.curse}</p>
            </div>
          </div>
          <div className="header-title">
            <h2>{project.title} Superproject</h2>
            <h3>{project.development}</h3>
          </div>
        </article>
    </>
    );
};

export default HeaderProject;
