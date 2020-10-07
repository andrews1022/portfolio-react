import React from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './scss/app.min.css';

const App = () => {
  return (
    <div id='app'>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
