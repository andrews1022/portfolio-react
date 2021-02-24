import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project }) => {
	return (
		<li className='pc'>
			<img className='pc__thumbnail' src={project.thumbnail} alt='project screenshot' />

			<div className='pc__overlay'>
				<div className='pc__inner'>
					<h2 className='pc__title'>{project.projectTitle}</h2>
					<p className='pc__tech'>
						{project.techUsed && <span>Tech Used: </span>}

						{/* insert each techUsed and on the last one, do NOT add a comma */}
						{project.techUsed.length
							? project.techUsed.map((element, index, array) => {
									return (
										<span key={element}>
											{element}
											{index !== array.length - 1 ? ', ' : ''}
										</span>
									);
							  })
							: null}
					</p>
					<p className='pc__summary'>{project.summary}</p>
					<div className='pc__icon-row'>
						{project.codeLink && (
							<a
								className='pc__link'
								href={project.codeLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon className='pc__icon' icon={faGithub} size='2x' />
							</a>
						)}
						{project.liveLink && (
							<a
								className='pc__link'
								href={project.liveLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<FontAwesomeIcon className='pc__icon' icon={faDesktop} size='2x' />
							</a>
						)}
					</div>
				</div>
			</div>
		</li>
	);
};

export default ProjectCard;
