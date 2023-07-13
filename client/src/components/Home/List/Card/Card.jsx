import React from "react";

const Card = ({project}) => {
  return (
    <>
      <article className="card-article">
        <div className="header-card">
          <h3>{project.title}</h3>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
      </article>
    </>
  );
};

export default Card;
