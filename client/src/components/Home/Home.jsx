import React, { useState } from "react";
import Title from "../Title/Title";
import Form from "./Form/Form";
import List from "./List/List";

const Home = () => {
  const [projectList, setProjectList] = useState([]);

  const updateProjectList = (data) => {
    setProjectList(data);
  };

  return (
    <>
      <Title />
      <Form projectList={projectList} updateProjectList={updateProjectList} />
      <List projectList={projectList} />
    </>
  );
};

export default Home;
