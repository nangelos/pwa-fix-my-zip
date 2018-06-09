import React, { Component } from 'react';
// import { Router, browserHistory, Route } from 'react-router';
import {
  Route,
  Switch,
  /* Redirect,*/
  BrowserRouter as Router,
} from 'react-router-dom';
import Image from './components/image';
import Page from './components/Page';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store';

const Home = props => <Page title="Home" />;

const Settings = props => <Page title="Settings" />;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router /* history={browserHistory}*/ >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/issue" component={Image} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
