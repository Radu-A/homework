import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import UserInfo from "../NewProject/UserInfo/UserInfo";
import UserList from "./UserList/UserList";
import Title from "../Title/Title";

const User = () => {
  const [projectList, setProjectList] = useState([]);
  const [user, setUser] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("user_id");
    setUrl(`/newproject?user_id=${userId}`);
    const getUser = async () => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/users?user_id=${userId}`
        );
        const data = await resp.json();
        setUser(data[0]);
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
      <UserInfo user={user} />
      <section className="upload-section">
        <Link to={url}>
          <button className="upload-button">UPLOAD</button>
        </Link>
      </section>
      <UserList projectList={projectList} />
    </>
  );
};

export default User;
