import React from 'react';
import NavLink from './NavLink';

const Nav = ({ navLinks }) => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				{navLinks.length ? navLinks.map((link) => <NavLink key={link} linkText={link} />) : null}
			</ul>
		</nav>
	);
};

export default Nav;
