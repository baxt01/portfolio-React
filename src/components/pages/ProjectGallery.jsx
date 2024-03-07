import React from 'react';
import Project from './Project';
import projectsData from '../projectData.json';

export default function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      {projectsData.slice(0, projectsData.length).map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
}
