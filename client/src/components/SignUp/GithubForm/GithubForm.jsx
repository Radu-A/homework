import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const GithubForm = ({ setGithubInfo }) => {
  const [githubName, setGithubName] = useState("");

  useEffect(() => {
    const getGithubInfo = async () => {
      try {
        const resp = await fetch(`https://api.github.com/users/${githubName}`);
        const data = await resp.json(resp);
        const nameArray = data.name.split(" ");
        const firstname = nameArray[0];
        const lastname = nameArray[1];
        const githubData = {
          photo: data.avatar_url,
          github: data.html_url,
          firstname: firstname,
          lastname: lastname,
        };
        setGithubInfo(githubData);
      } catch (error) {
        console.log(error);
      }
    };
    getGithubInfo();
  }, [githubName]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.username);
    setGithubName(data.username);
  };
  console.log(errors);

  return (
    <section className="github-form">
      <h1>Introduce your github username</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
        />
        {/* <button type="submit">SEARCH</button> */}
      </form>
    </section>
  );
};

export default GithubForm;
