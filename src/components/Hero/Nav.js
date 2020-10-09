import React from 'react';

const Nav = () => {
  const navItems = ['Home', 'Projects', 'About', 'Contract'];

  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>Home</li>
        <li className='nav__item'>Projects</li>
        <li className='nav__item'>About</li>
        <li className='nav__item'>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
