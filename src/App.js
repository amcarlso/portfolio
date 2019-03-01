import React, { Component } from 'react';
import './App.css';
// import routes from './routes';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './reset.scss';

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

  toSelectedPage = (page) => {
    console.log(page)
    for (let prop in this.state) {
      if (prop === page) {
        this.setState({[prop]: true});
      } else this.setState({[prop]: false})
    }
  }

  render() {
    console.log(this.state);
    const {home, about, contact, skills, projects} = this.state;
    return (
      <div className="App">
        <Nav pageSelectFn={this.toSelectedPage}/>
        { home ? <Home /> : 
          about ? <About /> : 
          contact ? <Contact /> : 
          skills ? <Skills /> :
          projects ? <Projects /> : null
        }

      </div>
    );
  }
}

export default App;
