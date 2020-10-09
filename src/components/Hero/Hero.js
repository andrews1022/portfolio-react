import React from 'react';
import Nav from './Nav';
import heroImage from './../../images/hero-image.jpg';

const Hero = ({ fullName, role, secretMessage, navLinks }) => {
	return (
		<section className='hero'>
			<Nav navLinks={navLinks} />
			<img className='hero__background' src={heroImage} alt='Blue jay holding a phone on Twitter' />
			<h1 className='hero__heading'>
				<span className='hero__heading-name'>{fullName}</span>
				<br />
				<span className='hero__heading-role'>{role}</span>
			</h1>
			<span className='hero__secret'>{secretMessage}</span>
		</section>
	);
};

export default Hero;
