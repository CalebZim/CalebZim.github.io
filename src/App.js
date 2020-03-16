import React, { Component } from 'react';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Videos from './Components/Videos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
      return (
    <div className="App">
    <Router>
    <Route exact path='/' component={Home} /> 
    <Route exact path='/Projects' component={Projects} /> 
    <Route exact path='/Videos' component={Videos} /> 
    </Router>
    </div>
  );
  }
}

export default App;