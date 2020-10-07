import React from 'react';
import NewWest from './../../images/new-westminster.jpg';

const About = () => {
  const tools = ['HTML', 'CSS (Sass)', 'JavaScript', 'React', 'TypeScript', 'Git', 'Adobe CC'];

  return (
    <section className='about'>
      <div>
        <img src={NewWest} alt='Large W made of shipping containers in New Westminster, BC'></img>
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
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
