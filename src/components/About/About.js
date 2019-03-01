import React from 'react';
import './About.scss'; 

export default class About extends React.Component {
  render() {
    return(
      <div className='about'>
        <div className='about-text-cont'>
          <span>About Me:</span>
          <p>
            I enjoy working with others and spending time with family and friends.
          </p>
          <p>
            Being outdoors during the summer and traveling to anywhere I can relax and sit on the beach are some of my favorite hobbies. Skiing, in my opinion, is the best way to step back and see life clearly.
          </p>
          <p>
            Outside of my career I love learning about anything to do with chemistry. I am a former accepted medical student turned full-stack web developer.
          </p>
        </div>
      </div>
    )
  }
}