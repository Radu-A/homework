import { useContext, useEffect } from "react";
import { UserLoggedContext } from "../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";

// Use server depending on environment variables
let server = "";
if (import.meta.env.VITE_LOCAL_SERVER) {
  server = import.meta.env.VITE_LOCAL_SERVER;
} else if (import.meta.env.VITE_CLOUD_SERVER) {
  server = import.meta.env.VITE_CLOUD_SERVER;
}

const LogOut = () => {
  const { updateUserLogged } = useContext(UserLoggedContext);
  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const deleteToken = async () => {
      try {
        const response = await axios.get(`${server}/auth/logout`);
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
