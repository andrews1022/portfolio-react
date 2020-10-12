import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ section, projectData }) => {
	const sectionName = section.toLowerCase();

	return (
		<section className={sectionName} id={sectionName}>
			<h2 className='projects__heading'>{section}</h2>
			<ul className='projects__list'>
				{projectData.map((project) => (
					<ProjectCard key={project.projectTitle} project={project} />
				))}
			</ul>
		</section>
	);
};

export default Projects;
