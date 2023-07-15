import React, { useContext } from "react";
import { TitleContext } from "../../context/titleContext";
import homework1 from '../../assets/homework-1.png'

const Title = () => {

  const { title, updateTitle } = useContext(TitleContext);

  return (
    <>
      <section className="title-section">
        <div>
        <img className="logo-img" src={homework1} alt="" />
        </div>
        <h1>{title}</h1>
      </section>
    </>
  );
};

export default Title;
