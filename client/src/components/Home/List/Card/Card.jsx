import React from "react";
import { Link } from "react-router-dom";

const Card = ({project}) => {

  const url = `/project?project_id=${project.project_id}`

  return (
    <>
      <article className="card-article">
        <div className="header-card">
          <img className="img-header-article" src={project.photo} alt="" />
          <div className="text-header-card">
            <h3><Link to={url} >{project.title}</Link></h3>
            <p>{project.firstname} {project.lastname} - <span>FS {project.curse}</span></p>
          </div>
        </div>
        <div className="description-card">
          <div className="description-card-text">
            <h3><span>{project.date} -</span> {project.development}</h3>
            <p>{project.description}</p>
          </div>
          <img className="card-img" src={project.img_small} alt="" />
        </div>
      </article>
    </>
  );
};

export default Card;
