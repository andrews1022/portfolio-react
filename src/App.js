import React from 'react';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { navLinks } from './data/data';
import './scss/app.min.css';

const App = () => {
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
