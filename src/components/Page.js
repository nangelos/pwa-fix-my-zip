import React from 'react';
import Navbar from '../components/navbar';
import logo from '../styles/logo.png';
import '../styles/App.css';

const Page = ({ title }) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">This is the {title} page.</p>
      <Navbar />
    </div>
  );
};

export default Page;
