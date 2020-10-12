import React from 'react';

const ProjectCard = ({ project }) => {
	return (
		<li className='project-card'>
			<h2 className='project-card__title'>{project.projectTitle}</h2>
			<p className='project-card__tech'>
				Tech Used:{' '}
				{project.techUsed.map((tech) => (
					<span key={tech}>{tech}, </span>
				))}
			</p>
			<p className='project-card__summary'>{project.summary}</p>
			<div className='project-card__icon-row'>
				<a className='project-card__link' href={project.codeLink}>
					<i className='project-card__icon fab fa-github'></i>
				</a>
				<a className='project-card__link' href={project.liveLink}>
					<i className='project-card__icon fas fa-desktop'></i>
				</a>
			</div>
		</li>
	);
};

export default ProjectCard;
