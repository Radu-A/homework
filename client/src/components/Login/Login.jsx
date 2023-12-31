import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserLoggedContext } from "../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import { TitleContext } from "../../context/titleContext";

const Login = () => {
  // This change the text of Title component
  const { title, updateTitle } = useContext(TitleContext);
  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    updateTitle("Log In");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(UserLoggedContext);
  const onSubmit = (data) => {
    console.log(data);
    const tryLogin = async () => {
      try {
        const resp = await fetch(`/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const respData = await resp.json();
        console.log(respData);
        setMessage(respData.message);
      } catch (error) {
        console.log(error);
      }
    };
    tryLogin();

    updateUserLogged(data.email);
    console.log(userLogged);
    navigate("/user");
  };
  console.log(errors);

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
        {message && <div>{message}</div>}
      </section>
    </>
  );
};

export default Login;
