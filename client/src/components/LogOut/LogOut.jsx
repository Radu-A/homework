import React, { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);

  const navigate = useNavigate();

  useEffect(() => {
    updateUserLogged('');
    navigate("/");
  }, []);

  return <div>LogOut</div>;
};

export default LogOut;
