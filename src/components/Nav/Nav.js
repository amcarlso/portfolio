import React from 'react';
import './Nav.scss';

export default function Nav(props) {
  return (
    <div className='nav'>
      <div value='home' onClick={() => props.modalSelectFn('home')}>Home</div>
      <div value='about' onClick={() => props.modalSelectFn('about')}>About Me</div>
      <div value='skills' onClick={() => props.modalSelectFn('skills')}>Skills</div>
      <div value='projects' onClick={() => props.modalSelectFn('projects')}>Projects</div>
      <div value='contact' onClick={() => props.modalSelectFn('contact')}>Contact</div>
    </div>
  )
}