import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserLoggedContext } from "../../../context/userLoggedContext";
import { useNavigate } from "react-router-dom";

const SignForm = ({ githubInfo }) => {
  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);
  const navigate = useNavigate();
  const [form, setForm] = useState();

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
    defaultValues: {
      photo: githubInfo.photo,
      firstname: githubInfo.firstname,
      lastname: githubInfo.lastname,
      github: githubInfo.github,
    },
    values,
  });

  console.log("datos github");
  console.log(githubInfo.firsname);

  const onSubmit = (data) => {
    let newUser = {
      email: data.email,
      photo: data.photo,
      firstname: data.firstname,
      lastname: data.lastname,
      curse: data.curse,
      github: data.github,
    };

    const createUser = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        const data = await resp.json();
      } catch (error) {
        console.log(error);
      }
    };
    createUser();
    updateUserLogged(newUser.email);
    console.log(newUser.email);
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
    </section>
  );
};

export default SignForm;
