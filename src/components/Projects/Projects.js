import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectData from './../../assets/Projects.json';

const Projects = ({ section }) => {
	return (
		<section className={section.toLowerCase()} id={section.toLowerCase()}>
			<h2>{section}</h2>
			<ul className='projects__list'>
				{ProjectData.map((project) => (
					<ProjectCard key={project.projectTitle} project={project} />
				))}
			</ul>
		</section>
	);
};

export default Projects;
