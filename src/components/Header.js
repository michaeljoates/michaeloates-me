import React from 'react';
import { NavLink } from 'react-router-dom'; // if you are using react-router for navigation
import '../Styles.css'; // Import your CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace "Your Site Name" with your actual site name or logo */}
        <NavLink to="/">Your Site Name</NavLink>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
