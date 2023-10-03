import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../context/userLoggedContext";
import Home from "../Home/Home";
import User from "../User/User";
import Project from "../Project/Project";
import NewProject from "../NewProject/NewProject";
import Login from "../Login/Login";
import LogOut from "../LogOut/LogOut";
import SignUp from "../SignUp/SignUp";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const Main = () => {
  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);

  useEffect(() => {
    const token = Cookies.get("access-token");
    if (token) {
      const decodedToken = jwtDecode(token);
      updateUserLogged(decodedToken.email);
    }
  }, []);

  return (
    <>
      <main>
        <Routes>
          {userLogged ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/project" element={<Project />} />
              <Route path="/newproject" element={<NewProject />} />
              <Route path="/logout" element={<LogOut />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/signin" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<Home />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
};

export default Main;
