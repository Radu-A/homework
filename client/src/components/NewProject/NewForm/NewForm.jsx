import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const NewForm = ({ setUser }) => {
  const [newProject, setNewProject] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <>
      <section className="new-form-section">
        <form className="new-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            placeholder="User_id"
            {...register("User_id", { required: true, max: 10 })}
          />
          <input
            type="text"
            placeholder="Title"
            {...register("Title", { required: true, min: 3 })}
          />
          <select {...register("Development", { required: true })}>
            <option value="Front-End">Front-End</option>
            <option value=" Back-End"> Back-End</option>
            <option value=" Full-Stack"> Full-Stack</option>
          </select>
          <textarea
            {...register("Description", { required: true, max: 299 })}
          />
          <textarea {...register("Done", { required: true, max: 548 })} />
          <textarea {...register("Todo", { required: true, max: 549 })} />
          <input
            type="text"
            placeholder="Screenshot small"
            {...register("Screenshot small", { required: true })}
          />
          <input
            type="text"
            placeholder="Screenshot big"
            {...register("Screenshot big", { required: true, max: 44 })}
          />
          <input
            type="text"
            placeholder="Github"
            {...register("Github", { required: true, max: 45 })}
          />
          <input
            type="text"
            placeholder="Site"
            {...register("Site", { required: true, max: 45 })}
          />
          <input type="submit" value="Create"/>
        </form>
      </section>
    </>
  );
};

export default NewForm;
