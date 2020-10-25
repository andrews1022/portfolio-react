import React from 'react';

const Heading = (props) => (
	<h2 className={`heading text-${props.color}`} style={props.style}>
		{props.text}
	</h2>
);

export default Heading;
