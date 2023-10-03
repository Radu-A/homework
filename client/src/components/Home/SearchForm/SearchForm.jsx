import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Use server depending on environment variables
let server = "";
if (import.meta.env.VITE_LOCAL_SERVER) {
  server = import.meta.env.VITE_LOCAL_SERVER;
} else if (import.meta.env.VITE_CLOUD_SERVER) {
  server = import.meta.env.VITE_CLOUD_SERVER;
}

const Form = ({ projectList, updateProjectList }) => {
  const [query, setQuery] = useState("");

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        const resp = await fetch(`${server}/api/projects`);
        const data = await resp.json();
        updateProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const resp = await fetch(`${server}/api/projects/order?sort=${query}`);
        const data = await resp.json();
        updateProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, [query]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const resp = await fetch(
          `${server}/api/projects/search?keyword=${keyword}`
        );
        const data = await resp.json();
        updateProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, [keyword]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setKeyword(data.Search);
  };

  const handleSelectChanche = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  return (
    <>
      <section className="form-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Search" {...register("Search", {})} />
        </form>
        <select name="" id="" onChange={handleSelectChanche}>
          <option value="">order by</option>
          <option value="date">Date</option>
          <option value="curse">Curse</option>
          <option value="development">Development</option>
        </select>
      </section>
    </>
  );
};

export default Form;
