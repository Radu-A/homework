import React, { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogOut = () => {
  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);

  const navigate = useNavigate();

  useEffect(() => {
    const deleteToken = async () => {
      try {
        const response = await axios.get("/auth/logout");
        const message = await response.data;
        alert(message);
      } catch (error) {
        alert(error);
      }
    };

    deleteToken();

    updateUserLogged("");
    navigate("/");
  }, []);

  return <div>LogOut</div>;
};

export default LogOut;
