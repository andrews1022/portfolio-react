import React from 'react';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectData from './assets/Projects.json';
import './scss/app.min.css';

const App = () => {
	// For all components (minus the footer)
	const navLinks = ['Projects', 'About', 'Contact'];

	// For 'Hero'
	const fullName = 'Andrew Shearer';
	const role = 'Web Developer';
	const secretMessage = "That's me!";

	// For 'About'
	const tools = ['HTML', 'CSS (Sass)', 'JavaScript', 'React', 'TypeScript', 'Git', 'Adobe CC'];

	return (
		<div id='app'>
			<Hero navLinks={navLinks} fullName={fullName} role={role} secretMessage={secretMessage} />
			<Projects section={navLinks[0]} projectData={ProjectData} />
			<About section={navLinks[1]} tools={tools} />
			<Contact section={navLinks[2]} />
			<Footer />
		</div>
	);
};

export default App;
