import React from 'react';
import './Home.scss';
import myPic from '../../allen.JPG';

export default class Home extends React.Component {
  
  render() {
    return (
      <div className='home'>
        <div className='heading'>
          <p className='first'>Hi,</p>
          <p className='second'>I'm Allen Carlson.</p>
          <p className='second'>Full Stack Web Developer.</p>
        </div>
        <img src={myPic} alt='allen'/>
      </div>
    )
  }
}