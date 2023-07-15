import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import SearchCard from './SearchCard/SearchCard';

const List = ({projectList}) => {

  return (
    <section className='list-section'>
      {projectList.length > 0 &&
        projectList.map(project=><SearchCard key={uuidv4()} project={project}/>)}
    </section>
  );
};

export default List;
