import React, { Component } from 'react';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
      return (
    <div className="App">
    <Home />
    <Projects />
    <Contact />
    </div>
  );
  }
}

export default App;