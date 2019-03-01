import React from 'react';
import './Nav.scss';

export default function Nav(props) {
  return (
    <div className='nav'>
      <div value='home' onClick={() => props.pageSelectFn('home')}>Home</div>
      <div value='about' onClick={() => props.pageSelectFn('about')}>About Me</div>
      <div value='skills' onClick={() => props.pageSelectFn('skills')}>Skills</div>
      <div value='projects' onClick={() => props.pageSelectFn('projects')}>Projects</div>
      <div value='contact' onClick={() => props.pageSelectFn('contact')}>Contact</div>
    </div>
  )
}