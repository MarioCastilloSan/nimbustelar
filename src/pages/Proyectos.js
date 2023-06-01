import React from 'react'
import ProjectItem from '../components/ProjectItem'
import {ProjectList} from '../helpers/ProjectList.js'
import '../styles/Proyectos.css'
function Proyectos() {
  return (
    <div className='projects'>

        <h1> Mis Actividades</h1>
        <div className='projectList'>
        {ProjectList.map((project,idx)=>{
            return(
                <ProjectItem  id={idx}name={project.name} image={project.image}/>
            );
        })}
        </div>
    </div>
  );
}

export default Proyectos;