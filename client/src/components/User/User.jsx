import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TitleContext } from "../../context/titleContext";
import { UserContext } from "../../context/userContext";
import { UserLoggedContext } from "../../context/userLoggedContext";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import UserInfo from "../NewProject/UserInfo/UserInfo";
import UserList from "./UserList/UserList";
import Title from "../Title/Title";

const User = () => {
  const [projectList, setProjectList] = useState([]);

  const { updateTitle } = useContext(TitleContext);
  const { userLogged } = useContext(UserLoggedContext);
  const { user, updateUser } = useContext(UserContext);

  useEffect(() => {
    updateTitle("Dashboard");

    const getUser = async () => {
      try {
        const resp = await fetch(`/api/users?email=${userLogged}`);
        const data = await resp.json();
        updateUser(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    const getProjects = async () => {
      try {
        const resp = await fetch(`/api/projects?email=${userLogged}`);
        const data = await resp.json();
        setProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, [userLogged]);

  useEffect(() => {
    const token = Cookies.get("access-token");
    const decodedToken = jwt_decode(token);
    console.log(decodedToken.user_id);
  }, []);

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
