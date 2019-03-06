import React from 'react';
import './Contact.scss';
import linkedin from './linkedin.png';
import github from './github.png';
import email from './email.png';
import axios from 'axios';
import Swal from 'sweetalert2';

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

  // componentDidMount() {
  //   document.getElementById('name-input').focus();
  // }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  handleMail = async () => {
    const {name, phone, email, message} = this.state;
    if (name === '' || phone === '' || email === '' || message === '') {
      return Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please fill out all sections!',
      })
    }
    if (!email.includes('@') || !email.includes('.')) {
      return Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address!',
      })
    }
    let res = await axios.post('/api/send', {name, phone, email, message});
    console.log(res.data)
    if (res) {
      this.setState({name: '', phone: '', email: '', message: ''});
      console.log('getting hit')
      console.log(this.state)
    }
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
            <input value={this.state.name} onChange={(e) => this.handleInput("name", e)} id='name-input' placeholder='Name'/>
            <input value={this.state.phone} onChange={(e) => this.handleInput("phone", e)} id='phone-input' placeholder='Phone Number'/>
          </div>
          <input value={this.state.email} onChange={(e) => this.handleInput("email", e)} className='medium-input' placeholder='Email'/>
          <textarea value={this.state.message} onChange={(e) => this.handleInput("message", e)} className='large-input' placeholder='Message'></textarea>
          <div onClick={() => this.handleMail()} className='send-button'>Send</div>
        </div>
      </div>
    )
  }
}