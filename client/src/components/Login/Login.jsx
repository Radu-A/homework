import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const Login = () => {

  const [message, setMessage] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const tryLogin = async ()=> {
      try {
        const resp = await fetch(`/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const respData = await resp.json();
        console.log(respData);
        setMessage(respData.message);
      } catch (error) {
        console.log(error)
      }
    }
    tryLogin();
  };
  console.log(errors);
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="user" {...register("user", {required: true})} />
        <input type="text" placeholder="password" {...register("password", {required: true})} />

        <input type="submit" />
      </form>
      {message && <div>{message}</div>}
    </>
  );
};

export default Login;
