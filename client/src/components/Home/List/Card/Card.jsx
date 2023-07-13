import React from "react";

const Card = ({project}) => {

  const url = `/details?name=${project.name}`

  return (
    <>
      <article className="card-article">
        {/* <div>
        <p className="date-paragraph">{project.date}</p>
        </div> */}
        <div className="header-card">
          <img className="img-header-article" src={project.photo} alt="" />
          <div className="text-header-card">
            <h3>{project.title}</h3>
            <p>{project.firstname} {project.lastname}</p>
          </div>
        </div>
        <div className="description-card">
          <div className="description-card-text">
            <h3>{project.development}</h3>
            <p>{project.description}</p>
          </div>
          <img className="card-img" src={project.img_small} alt="" />
        </div>
      </article>
    </>
  );
};

export default Card;
