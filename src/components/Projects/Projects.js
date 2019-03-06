import React from 'react';
import './Projects.scss';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import hmrxHome from './hmrx-landing.PNG';
import hmrxDash from './hmrx-dash.PNG';
import hmrxClock from './hmrx-clock.PNG';
import cramifyHome from './cramify-home.PNG';
import cramifyDash from './cramify-dash.PNG';
import cramifyGame from './cramify-game.PNG';
import cramifyWinner from './cramify-winner2.PNG';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hmrxCarousel: 1,
      cramifyCarousel: 1
    }
  }

  handleHmrxCarousel = () => {
    const {hmrxCarousel} = this.state;
    if (hmrxCarousel === 1) {
      this.setState({hmrxCarousel: 2})
    } else if (hmrxCarousel === 2) {
      this.setState({hmrxCarousel: 3})
    } else if (hmrxCarousel === 3) {
      this.setState({hmrxCarousel: 1})
    }
  }
  handleHmrxCarouselRev = () => {
    const {hmrxCarousel} = this.state;
    if (hmrxCarousel === 1) {
      this.setState({hmrxCarousel: 3})
    } else if (hmrxCarousel === 2) {
      this.setState({hmrxCarousel: 1})
    } else if (hmrxCarousel === 3) {
      this.setState({hmrxCarousel: 2})
    }
  }
  handleCramifyCarousel = () => {
    const {cramifyCarousel} = this.state;
    if (cramifyCarousel === 1) {
      this.setState({cramifyCarousel: 2});
    } else if (cramifyCarousel === 2) {
      this.setState({cramifyCarousel: 3});
    } else if (cramifyCarousel === 3) {
      this.setState({cramifyCarousel: 4});
    } else if (cramifyCarousel === 4) {
      this.setState({cramifyCarousel: 1});
    }
  }
  handleCramifyCarouselRev = () => {
    const {cramifyCarousel} = this.state;
    if (cramifyCarousel === 1) {
      this.setState({cramifyCarousel: 4});
    } else if (cramifyCarousel === 2) {
      this.setState({cramifyCarousel: 1});
    } else if (cramifyCarousel === 3) {
      this.setState({cramifyCarousel: 2});
    } else if (cramifyCarousel === 4) {
      this.setState({cramifyCarousel: 3});
    }
  }

  render() {
    const {hmrxCarousel, cramifyCarousel} = this.state;
    return(
      <div className='projects'>
        <div className='site-container'>
          <h1 className='title'>HMRX</h1>
          <div className='carousel'>
            <div className='destination-buttons' onClick={() => this.handleHmrxCarouselRev()}>Back</div>
            <img className='pic' src={hmrxCarousel === 1 ? hmrxHome : hmrxCarousel === 2 ? hmrxDash : hmrxCarousel === 3 ? hmrxClock : null} alt='hmrx pic'/>
            <div className='destination-buttons' onClick={() => this.handleHmrxCarousel()}>Next</div>
          </div>
          <div className='site-info'>
          <p>Live Site:</p>
          <a className='link' href='https://hmrxhr.com'>https://hmrxhr.com</a>
          </div>
          <div className='github-info'>
            <p>GitHub Repository:</p>
            <a className='link' href='https://github.com/amcarlso/hmrx'>https://github.com/amcarlso/hmrx</a>
          </div>
          <div className='explanation'>
            <li>DevMountain Personal Project</li>
            <li>Mobile Responsive, Human Resources Platform for small businesses</li>
            <li>Utilizes: React || JavaScript || CSS || Express.js || Twilio || NodeMailer || Node.js || postgreSQL || Moment.js</li>
          </div>
        </div>
        <div className='site-container'>
          <h1 className='title'>Cramify</h1>
          <div className='carousel'>
            <div className='destination-buttons' onClick={() => this.handleCramifyCarouselRev()}>Back</div>
            <img className='pic' src={cramifyCarousel === 1 ? cramifyHome : cramifyCarousel === 2 ? cramifyDash : cramifyCarousel === 3 ? cramifyGame : cramifyCarousel === 4 ? cramifyWinner : null} alt='hmrx pic'/>
            <div className='destination-buttons' onClick={() => this.handleCramifyCarousel()}>Next</div>
          </div>
          <div className='site-info'>
          <p>Live Site:</p>
          <a className='link' href='https://cramify.net'>https://cramify.net</a>
          </div>
          <div className='github-info'>
            <p>GitHub Repository:</p>
            <a className='link' href='https://github.com/Cramify/cramify'>https://github.com/Cramify/cramify</a>
          </div>
          <div className='explanation'>
            <li>DevMountain Group Project</li>
            <li>Mobile Responsive, Multiplayer coding game similar to Kahoot</li>
            <li>Utilizes: React || JavaScript || Sass || Express.js || Redux || Socket.io || Node.js || postgreSQL</li>
          </div>
        </div>
      </div>
    )
  }
}