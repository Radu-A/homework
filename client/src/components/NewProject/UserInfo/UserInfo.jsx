import React from "react";

const UserInfo = ({ user }) => {
  return (
    <>
      <section className="user-info-section">
        <div className="header-user">
          {user && (
            <>
              <img className="header-user-img" src={user.photo} alt="" />
              <h3>
                {user.firstname} {user.lastname}
              </h3>
              <p>Full-Stack {user.curse}</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default UserInfo;
