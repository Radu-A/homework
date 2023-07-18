import React from "react";

const GithubInfo = ({ githubInfo }) => {
  return (
    <>
      <section className="user-info-section">
        <div className="header-user">
          {githubInfo && (
            <>
              <img className="header-user-img" src={githubInfo.photo} alt="" />
              <h3>
                {githubInfo.firstname} {githubInfo.lastname}
              </h3>
              <p>
                <a href={githubInfo.github} target="blank">
                  {githubInfo.github}
                </a>
              </p>
              <p>{githubInfo.email}</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default GithubInfo;
