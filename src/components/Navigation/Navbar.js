// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/home">
          <h3>Home</h3>
        </Link>
        <ul>
          <li>Lorem hrj hrj</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact">
          <h3>Contact</h3>
        </Link>
        <ul>
          <li>Lorem</li>
        </ul>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/about">
          <h3>About</h3>
        </Link>
        <ul>
          <li>Lorem</li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default Navbar;
