import { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";

const LogOut = () => {
  const { updateUserLogged } = useContext(UserLoggedContext);
  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const deleteToken = async () => {
      try {
        const response = await axios.get("https://homework-server-gzii.onrender.com/auth/logout");
        console.log(response);
      } catch (error) {
        alert(error);
      }
    };

    deleteToken();

    updateUserLogged("");
    updateUser("");
    navigate("/");
  }, []);

  return <div>LogOut</div>;
};

export default LogOut;
