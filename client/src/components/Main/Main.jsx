import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from '../Home/Home';
import User from '../User/User';
import Project from '../Project/Project';
import NewProject from '../NewProject/NewProject';

const Main = () => {
  return (
    <>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/project" element={<Project />} />
            <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
