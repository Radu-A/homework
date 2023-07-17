import { Routes, Route } from 'react-router-dom';
import React, { useContext } from "react";
import { UserLoggedContext } from '../../context/userLoggedContext';
import Home from '../Home/Home';
import User from '../User/User';
import Project from '../Project/Project';
import NewProject from '../NewProject/NewProject';
import SignIn from '../SignIn/SignIn';
import Login from '../Login/Login';
import LogOut from '../LogOut/LogOut';

const Main = () => {

  const {userLogged, updateUserLogged} = useContext(UserLoggedContext);

  return (
    <>
      <main>
        <Routes>
          {userLogged ? 
          <>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/project" element={<Project />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/logout" element={<LogOut />} />
          </> :
          <>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/login' element={<Login />} />
          </>}
        </Routes>
      </main>
    </>
  );
};

export default Main;
