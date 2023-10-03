import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserLoggedContext } from "../../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";

// Use server depending on environment variables
let server = "";
if (import.meta.env.VITE_LOCAL_SERVER) {
  server = import.meta.env.VITE_LOCAL_SERVER;
} else if (import.meta.env.VITE_CLOUD_SERVER) {
  server = import.meta.env.VITE_CLOUD_SERVER;
}

const SignForm = ({ githubInfo }) => {
  const { updateUserLogged } = useContext(UserLoggedContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  // const [form, setForm] = useState();

  const values = {
    photo: githubInfo.photo,
    firstname: githubInfo.firstname,
    lastname: githubInfo.lastname,
    github: githubInfo.github,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values,
  });

  const onSubmit = (data) => {
    let newUser = {
      email: data.email,
      password: data.password,
      photo: data.photo,
      firstname: data.firstname,
      lastname: data.lastname,
      curse: data.curse,
      github: data.github,
    };

    const tryLogin = async () => {
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

    const createUser = async () => {
      try {
        const resp = await fetch(`${server}/api/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        const data = await resp.json();
        console.log(data);
        if (data.inserted) {
          tryLogin();
          navigate("/user");
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    createUser();
  };
  console.log(errors);

  return (
    <section className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <input
          type="text"
          placeholder="photo"
          {...register("photo", { required: true })}
        />
        <input
          type="text"
          placeholder="firstname"
          {...register("firstname", { required: true })}
        />
        <input
          type="text"
          placeholder="lastname"
          {...register("lastname", { required: true })}
        />
        <input
          type="text"
          placeholder="curse"
          {...register("curse", { required: true })}
        />
        <input
          type="text"
          placeholder="github"
          {...register("github", { required: true })}
        />

        <button type="submit">ADD</button>
      </form>
      {message && (
        <div className="login-message-div">
          <p>{message}</p>
        </div>
      )}
    </section>
  );
};

export default SignForm;
