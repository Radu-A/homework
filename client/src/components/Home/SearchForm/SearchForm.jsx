import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ projectList, updateProjectList }) => {
  const [query, setQuery] = useState("");

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    let urlProjects = "/api/projects";
    if (import.meta.env.VITE_LOCAL_SERVER) {
      urlProjects = `${import.meta.env.VITE_LOCAL_SERVER}/api/projects`;
    }
    const getProjects = async () => {
      try {
        const resp = await fetch(urlProjects);
        const data = await resp.json();
        updateProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    let urlSortedProjects = `/api/projects/order?sort=${query}`;
    if (import.meta.env.VITE_LOCAL_SERVER) {
      urlSortedProjects = `${
        import.meta.env.VITE_LOCAL_SERVER
      }/api/projects/order?sort=${query}`;
    }
    const getProjects = async () => {
      try {
        const resp = await fetch(urlSortedProjects);
        const data = await resp.json();
        updateProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, [query]);

  useEffect(() => {
    let urlProjectsByKeyword = `/api/projects/search?keyword=${keyword}`
    if (import.meta.env.VITE_LOCAL_SERVER) {
      urlProjectsByKeyword = `${import.meta.env.VITE_LOCAL_SERVER
      }/api/projects/search?keyword=${keyword}`
    }
    const getProjects = async () => {
      try {
        const resp = await fetch(urlProjectsByKeyword);
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
