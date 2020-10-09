import React from 'react';

const Nav = ({ navLinks }) => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				{navLinks.map((link) => (
					<li key={link} className='nav__item'>
						<a href={`#${link.toLowerCase()}`}>{link}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
