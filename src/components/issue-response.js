import React from 'react';
import Navbar from '../components/navbar';
import logo from '../styles/logo.png';
import '../styles/App.css';

const IssueResponse = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Thank you for helping us fix your neghborhood!</h2>
      </div>
      <p className="App-intro">Let us know about any other issues.</p>
      <button onClick={props.newIssue} > Report Another Issue </button>
      <Navbar />
    </div>
  );
};

export default IssueResponse;
