import React from 'react';
import Form from './Form';

const Contact = ({ section }) => {
	const sectionName = section.toLowerCase();

	const socialLinks = [
		{ type: 'Resume', icon: 'fas fa-file-pdf', url: './assets/resume.pdf' },
		{
			type: 'LinkedIn',
			icon: 'fab fa-linkedin',
			url: 'https://www.linkedin.com/in/andrew-shearer-webdev/'
		},
		{ type: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/andrews1022' }
	];

	return (
		<section className={sectionName} id={sectionName}>
			<div className='contact__row'>
				<div className='contact__box'>
					<h2 className='contact__heading'>Get In Touch</h2>
					<p className='contact__copy'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<div>
						{socialLinks.map((link) => (
							<a href={link.url} key={link.type} target='_blank' rel='noopener noreferrer'>
								{<i className={link.icon}></i>}
							</a>
						))}
					</div>
				</div>
				<div className='contact__box'>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
