import React, { useState } from "react";
import Title from "../Title/Title";
import SearchForm from './SearchForm';
import SearchList from './SearchList/SearchList';

const Home = () => {
  const [projectList, setProjectList] = useState([]);

  const updateProjectList = (data) => {
    setProjectList(data);
  };

  return (
    <>
      <Title />
      <SearchForm projectList={projectList} updateProjectList={updateProjectList} />
      <SearchList projectList={projectList} />
    </>
  );
};

export default Home;
