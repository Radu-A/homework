import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserLoggedContext } from "../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import { TitleContext } from "../../context/titleContext";

// Use server depending on environment variables
let server = "";
if (import.meta.env.VITE_LOCAL_SERVER) {
  server = import.meta.env.VITE_LOCAL_SERVER;
} else if (import.meta.env.VITE_CLOUD_SERVER) {
  server = import.meta.env.VITE_CLOUD_SERVER;
}

const Login = () => {
  // This context change the text of "Title" component
  const { updateTitle } = useContext(TitleContext);
  const { updateUserLogged } = useContext(UserLoggedContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // This UseEffect change the text of "Title" component
  useEffect(() => {
    updateTitle("Log In");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(UserLoggedContext);
  const onSubmit = (data) => {
    const tryFetchLogin = async () => {
      try {
        const resp = await fetch(`${server}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const respData = await resp.json();
        console.log(respData);
        if (respData.message === "Correct password, user logged") {
          updateUserLogged(data.email);
          navigate("/user");
        } else {
          setMessage(respData.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // tryFetchLogin();
    const tryAxiosLogin = async () => {
      try {
        const response = await axios(`${server}/auth/login`, {
          method: "post",
          url: `${server}/auth/login`,
          data: data,
        });
        const respData = await response.data;
        if (respData.message === "Correct password, user logged") {
          updateUserLogged(data.email);
          navigate("/user");
        } else {
          setMessage(respData.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    tryAxiosLogin();
  };

  return (
    <>
      <section className="login-section">
        <Title />
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="password"
            {...register("password", { required: true })}
          />

          <input type="submit" />
        </form>
        {message && (
          <div className="login-message-div">
            <p>{message}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
