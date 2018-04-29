import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/issue">Report Issue</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Navbar;
