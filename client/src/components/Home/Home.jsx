import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { TitleContext } from "../../context/titleContext";
import Title from "../Title/Title";
import SearchForm from './SearchForm';
import SearchList from './SearchList/SearchList';

const Home = () => {
  const [projectList, setProjectList] = useState([]);

  const { title, updateTitle } = useContext(TitleContext);

  useEffect(()=>{
    updateTitle('Our Projects');
  }, [])

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
