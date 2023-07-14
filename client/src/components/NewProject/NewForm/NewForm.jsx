import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// https://api.github.com/users/${username}

const NewForm = ({ user }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(user.user_id);
    console.log(typeof user.user_id);
    let newProject = {
      "user_id": user.user_id,
      "title": data.title,
      "development": data.development,
      "description": data.description,
      "done": data.done,
      "todo": data.todo,
      "img_small": data.img_small,
      "img_big": data.img_big,
      "github": data.github,
      "site": data.site
      }

    fetch(`http://localhost:3000/api/projects`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject)
    })
    .then(window.location.reload())
    .catch(error=>console.log(error));
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
            placeholder="Screenshot small"
            {...register("screenshot small", { required: true })}
          />
          <input
            type="text"
            placeholder="Screenshot big"
            {...register("screenshot big", { required: true, max: 44 })}
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
          <input type="submit" value="Create"/>
        </form>
      </section>
    </>
  );
};

export default NewForm;
