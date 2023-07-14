import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import UserInfo from '../NewProject/UserInfo/UserInfo';
import List from "./List/List";
import Title from "../Title/Title";

const User = () => {

  const [projectList, setProjectList] = useState([]);
  const [user, setUser] = useState({});


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("user_id");

    const getUser = async () => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/users?user_id=${userId}`
        );
        const data = await resp.json();
        setUser(data[0])
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    const getProjects = async () => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/projects?user_id=${userId}`
        );
        const data = await resp.json();
        setProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <>
      <Title />
      <UserInfo user={user}/>
      <List projectList={projectList} />
    </>
  );
};

export default User;
