import React from 'react';

const ProjectCard = ({ project }) => {
	return (
		<div>
			<h2>{project.projectTitle}</h2>
			<p>
				Tech Used:{' '}
				{project.techUsed.map((tech) => (
					<span key={tech}>{tech}, </span>
				))}
			</p>
			<p>{project.summary}</p>
			<div>
				<a href={project.codeLink}>Code</a>
				<a href={project.liveLink}>Live</a>
			</div>
		</div>
	);
};

export default ProjectCard;
