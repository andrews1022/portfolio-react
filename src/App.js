import React from 'react';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './scss/app.min.css';

const App = () => {
	// For all components (minus the footer)
	// To be used to set nav links, as well as section ids
	const navLinks = ['Projects', 'About', 'Contact'];

	return (
		<div id='app'>
			<Hero navLinks={navLinks} />
			<Projects section={navLinks[0]} />
			<About section={navLinks[1]} />
			<Contact section={navLinks[2]} />
			<Footer />
		</div>
	);
};

export default App;
