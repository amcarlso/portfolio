import React, { Component } from 'react';
import './App.scss';
// import routes from './routes';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: true,
      about: false,
      skills: false,
      projects: false,
      contact: false
    }
  }

  toSelectedModal = (page) => {
    for (let prop in this.state) {
      if (prop === page) {
        this.setState({[prop]: true});
      } else this.setState({[prop]: false})
    }
  }

  render() {
    const {home, about, contact, skills, projects} = this.state;
    return (
      <div className="App">
        {/* {routes} */}
        <Nav modalSelectFn={this.toSelectedModal}/>
        <div className={home ? 'modal-container show-modal' : 'modal-container hide-modal'}><Home /></div> 
        <div className={about ? 'modal-container show-modal' : 'modal-container hide-modal'}><About /></div>
        <div className={contact ? 'modal-container show-modal' : 'modal-container hide-modal'}><Contact /></div>
        <div className={skills ? 'modal-container show-modal' : 'modal-container hide-modal'}><Skills /></div>
        <div className={projects ? 'modal-container show-modal' : 'modal-container hide-modal'}><Projects /></div>

      </div>
    );
  }
}

export default App;
