import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TitleContext } from "../../../context/titleContext";
import { useNavigate } from "react-router-dom";

// https://api.github.com/users/${username}

const NewForm = ({ user }) => {
  const navigate = useNavigate();

  const { title, updateTitle } = useContext(TitleContext);

  useEffect(() => {
    console.log("cargando New Project");
    console.log(user);
    updateTitle("New Project");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("onsubmit");
    console.log(data);
    console.log(user.user_id);
    let newProject = {
      user_id: user.user_id,
      title: data.title,
      development: data.development,
      description: data.description,
      done: data.done,
      todo: data.todo,
      img_small: data.img_small,
      img_big: data.img_big,
      github: data.github,
      site: data.site,
    };

    fetch(`https://homework-server-gzii.onrender.com/api/projects`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    })
      .then(console.log(newProject))
      .catch((error) => console.log(error));
    console.log(newProject);
  };
  console.log(errors);

  return (
    <>
      <section className="new-form-section">
        <form className="new-form" onSubmit={handleSubmit(onSubmit)}>
          {/* <input
            type="number"
            placeholder="User_id"
            {...register("user_id", { required: true, max: 10 })}
          /> */}
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true, min: 3 })}
          />
          <select {...register("development", { required: true })}>
            <option value="Front-End">Front-End</option>
            <option value=" Back-End"> Back-End</option>
            <option value=" Full-Stack"> Full-Stack</option>
          </select>
          <textarea
            {...register("description", { required: true, max: 299 })}
          />
          <textarea {...register("done", { required: true, max: 548 })} />
          <textarea {...register("todo", { required: true, max: 549 })} />
          <input
            type="text"
            placeholder="img_small"
            {...register("img_small", { required: true })}
          />
          <input
            type="text"
            placeholder="img_big"
            {...register("img_big", { required: true, max: 44 })}
          />
          <input
            type="text"
            placeholder="Github"
            {...register("github", { required: true, max: 45 })}
          />
          <input
            type="text"
            placeholder="Site"
            {...register("site", { required: true, max: 45 })}
          />
          <input type="submit" value="Create" />
        </form>
      </section>
    </>
  );
};

export default NewForm;
