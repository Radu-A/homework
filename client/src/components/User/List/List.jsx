import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from "./Card/Card";

const List = ({projectList}) => {

  return (
    <section className='list-section user-list-section'>
      {projectList.length > 0 &&
        projectList.map(project=><Card key={uuidv4()} project={project}/>)}
    </section>
  );
};

export default List;
