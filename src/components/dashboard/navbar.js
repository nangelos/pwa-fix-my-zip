import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav id="navbar">
      <NavLink to="/" className="navbar-home">
        Home
      </NavLink>
      <NavLink to="/issues" className="navbar-child">
        Issues
      </NavLink>
      <NavLink to="/users" className="navbar-child">
        Users
      </NavLink>
    </nav>
  )
}
