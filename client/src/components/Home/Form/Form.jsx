import React, { useEffect, useState } from "react";


function orderByDate(projectList) {
  projectList.sort(function(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB - dateA;
  });
  return projectList;
}

const Form = ({projectList, updateProjectList}) => {

  useEffect(() => {

    const getProjects = async ()=> {
      try {
        const resp = await fetch('http://localhost:3000/api/projects');
        const data = await resp.json();
        updateProjectList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProjects();
  }, [])

  const handleSelectChanche = ()=> {
    const orderedProjectList = orderByDate(projectList);
    updateProjectList(orderedProjectList);
    console.log(projectList);
  }

  return (
    <>
      <section className="form-section">
        <input type="text" />
        <select name="" id="" onChange={handleSelectChanche}>
          <option value="">order by</option>
          <option value="">Curse</option>
          <option value="">Date</option>
          <option value="">User</option>
        </select>
      </section>
    </>
  );
};

export default Form;
