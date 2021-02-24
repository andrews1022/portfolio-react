import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Heading from './../UI/Heading';

const Projects = ({ section }) => {
	const sectionName = section.toLowerCase();

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const getProjects = async () => {
			const response = await fetch('./assets/Projects.json');
			const json = await response.json();
			setProjects(json);
		};

		getProjects();

		// cleanup
		return () => {
			setProjects([]);
		};
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
