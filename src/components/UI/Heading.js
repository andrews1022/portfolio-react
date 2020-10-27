import React from 'react';

const Heading = ({ color, text }) => <h2 className={`heading text-${color}`}>{text}</h2>;

export default Heading;
