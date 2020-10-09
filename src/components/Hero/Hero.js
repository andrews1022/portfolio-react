import React from 'react';
import Nav from './Nav';
import Background from './../../images/hero-image.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <Nav />
      <img
        className='hero__background'
        src={Background}
        alt='Blue jay holding a phone on Twitter'
      ></img>
    </section>
  );
};

export default Hero;
