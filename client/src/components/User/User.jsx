import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TitleContext } from "../../context/titleContext";
import { UserLoggedContext } from "../../context/userLoggedContext";

import UserInfo from "../NewProject/UserInfo/UserInfo";
import UserList from "./UserList/UserList";
import Title from "../Title/Title";
import { UserContext } from "../../context/userContext";

const User = () => {
  const [projectList, setProjectList] = useState([]);
  // const [user, setUser] = useState({});
  const [newUrl, setNewUrl] = useState("");

  const { title, updateTitle } = useContext(TitleContext);
  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);
  const { user, updateUser } = useContext(UserContext);

  useEffect(() => {
    updateTitle("Dashboard");

    const getUser = async () => {
      try {
        const resp = await fetch(
          `https://homework-server-gzii.onrender.com/api/users?email=${userLogged}`
        );
        const data = await resp.json();
        updateUser(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    const getProjects = async () => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/projects?email=${userLogged}`
        );
        const data = await resp.json();
        setProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, [userLogged]);

  return (
    <>
      <Title />
      {user && <UserInfo user={user} />}
      <section className="upload-section">
        <Link to="/newproject">
          <button className="upload-button">NEW PROJECT</button>
        </Link>
      </section>
      <UserList projectList={projectList} />
    </>
  );
};

export default User;
