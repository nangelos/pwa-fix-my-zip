import React from 'react';
import { Link } from 'react-router';

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
