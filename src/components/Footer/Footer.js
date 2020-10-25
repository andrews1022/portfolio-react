import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<p className='footer__text'>
				© {new Date().getFullYear()} all rights reserved
				<span className='footer__divider'> | </span>
				designed and built and andrew shearer
			</p>
		</footer>
	);
};

export default Footer;
