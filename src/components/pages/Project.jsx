import React from 'react';

export default function Project({ project }) {
  const { title, deployedLink, githubLink, image } = project;

  return (
    <div>
      <h2>{title}</h2>
      <p>Deployed Link: <a href={deployedLink}>{deployedLink}</a></p>
      <p>GitHub Repository: <a href={githubLink}>{githubLink}</a></p>
      <img src={image} alt={title} />
    </div>
  );
}
