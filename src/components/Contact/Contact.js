import React from 'react';
import Form from './Form';
import Resume from './../../assets/resume.pdf';

const Contact = () => {
  const socialLinks = [
    { type: 'Resume', link: Resume },
    { type: 'LinkedIn', link: 'https://www.linkedin.com/in/andrew-shearer-webdev/' },
    { type: 'GitHub', link: 'https://github.com/andrews1022' },
  ];

  return (
    <section className='contact'>
      <div className='contact__row'>
        <div className='contact__box'>
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div>
            {socialLinks.map((link) => {
              return (
                <a href={link.link} key={link.type} target='_blank' rel='noopener noreferrer'>
                  {link.type}
                </a>
              );
            })}
          </div>
        </div>
        <div className='contact__box'>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
