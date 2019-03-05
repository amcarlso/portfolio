import React from 'react';
import './Contact.scss';
import linkedin from './linkedin.png';
import github from './github.png';
import email from './email.png';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  }

  componentDidMount() {
    document.getElementById('name-input').focus();
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }
  render() {
    return(
      <div className='contact'>
        <div className='contact-details'>
          <a href='https://www.linkedin.com/in/allencarlson/'><img src={linkedin} alt='linkedin'/></a>
          <a href='https://github.com/amcarlso'><img src={github} alt='github'/></a>
          <img id='email-logo' src={email} alt='email'/>
          <p id='email-address'>allen.carlson123@gmail.com</p>
        </div>
        <div className='input-container'>
          <div className='name-phone'>
            <input onChange={(e) => this.handleInput("name", e)} id='name-input' placeholder='Name'/>
            <input onChange={(e) => this.handleInput("phone", e)} id='phone-input' placeholder='Phone Number'/>
          </div>
          <input onChange={(e) => this.handleInput("email", e)} className='medium-input' placeholder='Email'/>
          <textarea onChange={(e) => this.handleInput("message", e)} className='large-input' placeholder='Message'></textarea>
          <div className='send-button'>Send</div>
        </div>
      </div>
    )
  }
}