import React from "react";
import homework1 from '../../assets/homework-1.png'

const Title = () => {
  return (
    <>
      <section className="title-section">
        <div>
        <img className="logo-img" src={homework1} alt="" />
        </div>
        <h1>Homework</h1>
      </section>
    </>
  );
};

export default Title;
