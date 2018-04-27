import React from 'react';
import Navbar from '../components/navbar';
import logo from '../logo.png';
import '../App.css';

const Page = ({ title }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">This is the {title} page.</p>
    <Navbar />
  </div>
);

export default Page;
