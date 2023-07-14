import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import NewForm from "./NewForm/NewForm";
import UserInfo from "./UserInfo/UserInfo";

const NewProject = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const projectId = queryParams.get("project_id");

    const getProject = async () => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/users?email=saana.toivonen@example.com`
        );
        const data = await resp.json();
        setUser(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getProject();
  }, []);

  return (
    <>
      <Title />
      <UserInfo user={user}/>
      <NewForm user={user}/>
    </>
  );
};

export default NewProject;
