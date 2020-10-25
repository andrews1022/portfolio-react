import React from 'react';
import Tool from './Tool';
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
					<h2 className='about__heading'>{section}</h2>
					<p className='about__copy'>
						i'm a web developer with a passion for design from new westminster, bc. i've also built
						a few resources to help out fellow web developers.
					</p>
					<p className='about__copy'>
						with web development, it was truly love at first site. i spend each and everyday either
						coding or designing. in fact, i quit my job so i could focus on learning it full time.
						if that doesn't scream passion, then i don't know what does.
					</p>
					<h2 className='about__heading'>My Tools</h2>
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
