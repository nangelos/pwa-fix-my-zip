import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import Image from './components/camera';
import logo from './logo.png';
import './App.css';

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">This is the {title} page.</p>
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/camera">Camera</Link>
      <Link to="/settings">Settings</Link>
    </div>
  </div>
);

const Home = props => <Page title="Home" />;

const Settings = props => <Page title="Settings" />;

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/camera" component={Image} />
        <Route path="/settings" component={Settings} />
      </Router>
    );
  }
}

export default App;
