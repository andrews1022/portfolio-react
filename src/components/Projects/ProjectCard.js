import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
	return (
		<li className='project-card'>
			<img className='project-card__thumbnail' src={project.thumbnail} alt='project screenshot' />
			<div className='project-card__inner'>
				<h2 className='project-card__title'>{project.projectTitle}</h2>
				<p className='project-card__tech'>
					{project.techUsed && <span>Tech Used: </span>}

					{/* insert each techUsed and on the last one, do NOT add a comma */}
					{project.techUsed &&
						project.techUsed.map((element, index, array) => {
							return (
								<span key={element}>
									{element}
									{index !== array.length - 1 ? ', ' : ''}
								</span>
							);
						})}
				</p>
				<p className='project-card__summary'>{project.summary}</p>
				<div className='project-card__icon-row'>
					{project.codeLink && (
						<a
							className='project-card__link'
							href={project.codeLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon className='project-card__icon' icon={faGithub} size='2x' />
						</a>
					)}
					{project.liveLink && (
						<a
							className='project-card__link'
							href={project.liveLink}
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon className='project-card__icon' icon={faDesktop} size='2x' />
						</a>
					)}
				</div>
			</div>
		</li>
	);
};

export default ProjectCard;
