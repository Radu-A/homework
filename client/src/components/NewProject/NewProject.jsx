import React, { useState, useEffect, useContext } from "react";
import Title from "../Title/Title";
import NewForm from "./NewForm/NewForm";
import UserInfo from "./UserInfo/UserInfo";
import { UserLoggedContext } from "../../context/userLoggedContext";

const NewProject = () => {
  const [user, setUser] = useState({});
  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);

  useEffect(() => {

    const getUser = async () => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/users?email=${userLogged}`
        );
        const data = await resp.json();
        setUser(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [userLogged]);

  return (
    <>
      <Title />
      <UserInfo user={user} />
      <NewForm user={user} />
    </>
  );
};

export default NewProject;
