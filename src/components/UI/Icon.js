import React from 'react';

const Icon = ({ code, color, size }) => (
	<i className={`icon ${code} text-${color} icon-${size}`}></i>
);

export default Icon;
