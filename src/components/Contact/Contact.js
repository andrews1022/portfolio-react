import React from 'react';
import Heading from './../UI/Heading';
import Form from './Form';

const Contact = ({ section }) => {
	const sectionName = section.toLowerCase();

	const socialLinks = [
		{ type: 'Resume', icon: 'fas fa-file-pdf', url: './assets/resume.pdf' },
		{ type: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/andrews1022' },
		{
			type: 'LinkedIn',
			icon: 'fab fa-linkedin',
			url: 'https://www.linkedin.com/in/andrew-shearer-webdev/'
		}
	];

	return (
		<section className={sectionName} id={sectionName}>
			<div className='contact__row'>
				<div className='contact__box'>
					<Heading text='Get In Touch' color='maire' />
					<p className='contact__copy'>
						If you think I’d make a great fit for your team, feel free to send me a message, or
						reach out to me on LinkedIn!
					</p>
					<div className='contact__icon-row'>
						{socialLinks.map((link) => (
							<a
								className='contact__icon-link'
								href={link.url}
								key={link.type}
								target='_blank'
								rel='noopener noreferrer'
							>
								{<i className={`contact__icon ${link.icon}`}></i>}
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
