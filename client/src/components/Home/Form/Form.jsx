import React, { useEffect, useState } from "react";

const Form = ({setProjectList}) => {

  useEffect(() => {

    const getProjects = async ()=> {
      try {
        const resp = await fetch('http://localhost:3000/api/projects');
        const data = await resp.json();
        setProjectList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProjects();
  }, [])

  return (
    <>
      <section className="form-section">
        <input type="text" />
        <select name="" id="">
          <option value="">order by</option>
        </select>
      </section>
    </>
  );
};

export default Form;
