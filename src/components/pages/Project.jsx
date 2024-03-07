import React from 'react';

export default function Project({ project }) {
  const { title, deployedLink, githubLink, image } = project;

  return (
    <div>
      <h2>{title}</h2>
      <p>Deployed Link: <a href={deployedLink}>{deployedLink}</a></p>
      <p>GitHub Repository: <a href={githubLink}>{githubLink}</a></p>
      <img src={image} width="200px" height="200px" alt={title} /><br />
    </div>
  );
}
