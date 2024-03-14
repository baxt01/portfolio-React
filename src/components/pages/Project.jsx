import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projectData.json';

export default function Project() {
  const { key } = useParams();
  const project = projectsData[parseInt(key)];

  // Ensure that project is defined before accessing its properties
  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, deployedLink, githubLink, image } = project;

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-lg-2 col-sm-0'>
          </div>
          <div className='col-lg-8 col-sm-4'>
      <h2 className='title'> {title} </h2>
      <p>Deployed Link: <a href={deployedLink}>{deployedLink}</a></p>
      <p>GitHub Repository: <a href={githubLink}>{githubLink}</a></p>
      <img src={image} width="200px" height="200px" alt={title} /><br />
        </div>
        <div className='col-lg-2 col-sm-0'>
        </div>
      </div>
    </div>
  );
}
