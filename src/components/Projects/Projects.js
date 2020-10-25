import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ section }) => {
	const sectionName = section.toLowerCase();

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch('./assets/Projects.json')
			.then((response) => response.json())
			.then((json) => setProjects(json));
	}, []);

	return (
		<section className={sectionName} id={sectionName}>
			<h2 className='projects__heading'>{section}</h2>
			<ul className='projects__list'>
				{/* loop over projects, and create ProjectCard component for each project */}
				{projects.map((project) => (
					<ProjectCard key={project.projectTitle} project={project} />
				))}
			</ul>
		</section>
	);
};

export default Projects;
