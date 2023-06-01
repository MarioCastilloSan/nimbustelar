import React from 'react'
import {useParams} from 'react-router-dom';
import {ProjectList} from '../helpers/ProjectList.js'
 import LinkIcon from '@mui/icons-material/Link';
 import '../styles/ProjectDisplay.css'
function ProjectDisplay() {
    const{id}=useParams();
    const project = ProjectList[id];
    const url = project.url;
    return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name}/>
        <p><b>{project.info}</b></p>
        <p className='socialMedia2'><LinkIcon onClick={() => window.open(url, '_blank')}/></p>
        
    </div>
    );
}

export default ProjectDisplay;