import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from './../UI/Heading';
import Form from './Form';
import { socialLinks } from './../../data/data';

const Contact = ({ section }) => {
	const sectionName = section.toLowerCase();

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
						{socialLinks.length
							? socialLinks.map((link) => (
									<a
										className='contact__icon-link'
										href={link.url}
										key={link.type}
										target='_blank'
										rel='noopener noreferrer'
									>
										<FontAwesomeIcon className='contact__icon' icon={link.icon} size='1x' />
									</a>
							  ))
							: null}
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
