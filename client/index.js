import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from './App';
import registerServiceWorker from '../src/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
