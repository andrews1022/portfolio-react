import React from 'react';
import Background from './../../images/hero-image.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <img
        className='hero__background'
        src={Background}
        alt='Blue jay holding a phone on Twitter'
      ></img>
    </section>
  );
};

export default Hero;
