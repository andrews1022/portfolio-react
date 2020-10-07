import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h2>{project.projectTitle}</h2>
      <ul>
        {project.techUsed.map((tech) => {
          return <li key={tech}>{tech}</li>;
        })}
      </ul>
      <p>{project.summary}</p>
      <div>
        <a href={project.codeLink}>Code</a>
        <a href={project.liveLink}>Live</a>
      </div>
    </div>
  );
};

export default ProjectCard;
