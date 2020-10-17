import React from 'react';
import newWestPic from './../../images/new-westminster-cropped.jpg';

const About = ({ section, tools }) => {
	const sectionName = section.toLowerCase();

	return (
		<section className={sectionName} id={sectionName}>
			<div>
				<img src={newWestPic} alt='Large W made of shipping containers in New Westminster, BC' />
			</div>
			<div>
				<h2>{section}</h2>
				<p>
					i'm a web developer with a passion for design from new westminster, bc. i've also built a
					few resources to help out fellow web developers.
					<br />
					with web development, it was truly love at first site. i spend each and everyday either
					coding or designing. in fact, i quit my job so i could focus on learning it full time. if
					that doesn't scream passion, then i don't know what does.
				</p>
				<h2>My Tools</h2>
				<ul>
					{tools.map((tool) => (
						<li key={tool}>{tool}</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default About;
