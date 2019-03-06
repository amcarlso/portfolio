import React from 'react';
import './Skills.scss';
import sass from './skills-pics/sass.png';
import git from './skills-pics/git.png';
import html from './skills-pics/html.png';
import node from './skills-pics/node.png';
import react from './skills-pics/react.png';
import redux from './skills-pics/redux.png';
import socket from './skills-pics/socket.png';
import css from './skills-pics/css.png';
import javascript from './skills-pics/javascript.png';
// import Nav from '../Nav/Nav';

export default class Skills extends React.Component {
  render() {
    return(
      <div className='skills'>
        {/* <Nav/> */}
        <h2>Skills</h2>
        <div className='content-container'>
          <div>
            <img  src={react} alt='react'/>
            <span>React</span>
          </div>
          <div>
            <img  src={javascript} alt='javascript'/>
            <span>JavScript</span>
          </div>
          <div>
            <img  src={css} alt='css'/>
            <span>CSS</span>
          </div>
          <div>
            <img  src={html} alt='html'/>
            <span>HTML</span>
          </div>
          <div>
            <img  src={redux} alt='redux'/>
            <span>Redux</span>
          </div>
          <div>
            <img  src={sass} alt='sass'/>
            <span>Sass</span>
          </div>
          <div>
            <img  src={node} alt='node'/>
            <span>Node.js</span>
          </div>
          <div>
            <img  src={git} alt='git'/>
            <span>Git</span>
          </div>
          <div>
            <img  src={socket} alt='socket'/>
            <span>Socket.io</span>
          </div>
        </div>
      </div>
    )
  }
}