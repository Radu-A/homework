import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

const Form = ({ projectList, updateProjectList }) => {

  const [query, setQuery] = useState("");

  const [keyword, setKeyword] = useState('');


  useEffect(() => {
    const getProjects = async () => {
      try {
        const resp = await fetch("http://localhost:3000/api/projects");
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
        const resp = await fetch(`http://localhost:3000/api/projects/order?sort=${query}`);
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
      console.log('this is your keyword');
      console.log(keyword);
      try {
        const resp = await fetch(`http://localhost:3000/api/projects/search?keyword=${keyword}`);
        const data = await resp.json();
        updateProjectList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, [keyword]);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log('this is your data');
    console.log(data.Search);
    setKeyword(data.Search);
  };
  console.log(errors);

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
