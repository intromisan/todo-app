import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-navbar'>
      <div className='navbar-brand'>
        ToDo App
      </div>
      <ul className="navbar-nav">
        <li className="nav-item ml-4">
          <NavLink 
            className="nav-link"
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item ml-4">
          <NavLink
            className="nav-link"
            to="/info"
          >
            Information
          </NavLink>
        </li>        
      </ul>
    </nav>
  )
}