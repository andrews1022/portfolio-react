import React from 'react';

const ProjectCard = ({ project }) => {
	return (
		<li className='project-card'>
			<div className='project-card__header'>
				<img className='project-card__thumbnail' src={project.thumbnail} alt='project screenshot' />
				<div className='project-card__header-inner'>
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
				</div>
			</div>
			<p className='project-card__summary'>{project.summary}</p>
			<div className='project-card__icon-row'>
				{project.codeLink && (
					<a
						className='project-card__link'
						href={project.codeLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='project-card__icon fab fa-github'></i>
					</a>
				)}
				{project.liveLink && (
					<a
						className='project-card__link'
						href={project.liveLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='project-card__icon fas fa-desktop'></i>
					</a>
				)}
			</div>
		</li>
	);
};

export default ProjectCard;
