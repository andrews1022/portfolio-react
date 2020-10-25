import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Heading from './../UI/Heading';

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
			<Heading text={section} color='maire' />
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
