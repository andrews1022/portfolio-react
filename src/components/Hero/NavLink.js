import React from 'react';

const NavLink = ({ linkText }) => {
	return (
		<li className='nav__item'>
			<a className='nav__link' href={`#${linkText.toLowerCase()}`}>
				{linkText}
			</a>
		</li>
	);
};

export default NavLink;
