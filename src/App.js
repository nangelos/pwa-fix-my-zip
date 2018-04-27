import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import Image from './components/image';
import Page from './components/Page';
import './App.css';

const Home = props => <Page title="Home" />;

const Settings = props => <Page title="Settings" />;

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/issue" component={Image} />
        <Route path="/settings" component={Settings} />
      </Router>
    );
  }
}

export default App;
