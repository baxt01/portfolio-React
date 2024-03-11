import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import projectsData from '../projectData.json';
import './ProjectGallery.css';

export default function ProjectGallery() {
  return (
    <div className='container text-left'>
        <div className='row'>
            <div className='col-lg-3 col-sm-0'>
                </div>
              <div className='col-lg-8 col-sm-4'>
                <h1 className='ms-5 title'>  Project Gallery</h1>
                <div className='section text-center px-5 py-5 text-center'>
                <div className="projects">
                {projectsData.map((project, index) => (
                  <Link key={index} to={`/project/${index}`}>
                    {project.title}<br />
                  </Link>
                ))}
                  </div>
                </div>
           </div>
            <div className='col-lg-1 col-sm-0'>
        </div>
    </div>
    </div>
    
    );
}