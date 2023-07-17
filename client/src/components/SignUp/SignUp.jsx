import React, { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../context/titleContext";
import GithubInfo from "./GithubInfo/GithubInfo";
import SignForm from "./SignForm/SignForm";
import Title from "../Title/Title";
import GithubForm from "./GithubForm/GithubForm";

const SignUp = () => {
  const { title, updateTitle } = useContext(TitleContext);
  const [githubInfo, setGithubInfo] = useState({});

  useEffect(() => {
    updateTitle("Sign Up");
  }, []);

  return (
    <section className="sign-section">
      <Title />
      <GithubInfo githubInfo={githubInfo}/>
      <GithubForm githubInfo={githubInfo} setGithubInfo={setGithubInfo}/>
      <SignForm githubInfo={githubInfo}/>
    </section>
  );
  
};

export default SignUp;
