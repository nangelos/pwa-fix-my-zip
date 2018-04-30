import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Dashboard from './dashboard';
import Navbar from './navbar';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: 'PT Sans';
  }
`;

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
