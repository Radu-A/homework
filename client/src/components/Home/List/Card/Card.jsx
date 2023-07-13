import React from "react";

const Card = ({project}) => {
  return (
    <>
      <article className="card-article">
        <div className="header-card">
          <img src={project.photo} alt="" />
          <h3>{project.title}</h3>
        </div>
        <div>
          <img className="card-img" src={project.img_big} alt="" />
          <p>{project.description}</p>
        </div>
      </article>
    </>
  );
};

export default Card;
