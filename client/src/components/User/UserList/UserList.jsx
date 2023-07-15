import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import UserListCard from "./UserListCard/UserListCard";

const List = ({projectList}) => {

  return (
    <section className='list-section' id='user-list-section'>
      {projectList.length > 0 &&
        projectList.map(project=><UserListCard key={uuidv4()} project={project}/>)}
    </section>
  );
};

export default List;
