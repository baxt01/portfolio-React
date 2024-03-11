import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import projectsData from '../projectData.json';
import './ProjectGallery.css';

export default function ProjectGallery() {
  return (
    <div>
      <h1>Project Gallery</h1>
      {projectsData.map((project, index) => (
        <Link key={index} to={`/project/${index}`}>
          {project.title}<br />
        </Link>
      ))}
    </div>
  );
}
