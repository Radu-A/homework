import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from '../Home/Home';
import User from '../User/User';
import Project from '../Project/Project';

const Main = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};

export default Main;
