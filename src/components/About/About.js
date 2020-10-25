import React from 'react';
import Tool from './Tool';
import Heading from './../UI/Heading';
import newWestPic from './../../images/new-westminster-cropped.jpg';

const About = ({ section }) => {
	const sectionName = section.toLowerCase();

	const tools = [
		'JavaScript',
		'React',
		'TypeScript',
		'CSS (Sass & Less)',
		'HTML',
		'Git',
		'Adobe CC'
	];

	return (
		<section className={sectionName} id={sectionName}>
			<div className='about__row'>
				<div className='about__box'>
					<img
						className='about__image'
						src={newWestPic}
						alt='Large W made of shipping containers in New Westminster, BC'
					/>
				</div>
				<div className='about__box'>
					<Heading text={section} color='white-smoke' />
					<p className='about__copy'>
						I’m a web developer with a passion for learning from New Westminster, BC. I’ve also
						built a few resources to help out fellow web developers.
					</p>
					<p className='about__copy'>
						With web development, it was truly love at first site. I spend each and everyday coding
						and learning. In fact, I quit my job so I could focus getting into the industry full
						time, and it worked. If that doesn't scream passion, then I don't know what does.
					</p>
					<Heading text='My Tools' color='white-smoke' />
					<ul className='tool'>
						{tools.map((tool) => (
							<Tool key={tool} toolText={tool} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
