import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const Navigation = () => (
  <header className="d-flex flex-column align-center col-md-12">
    <div className="container">
      <nav className="navigation d-flex justify-between align-center">
        <Link className="brand" to="/">
          <img className="logo" src={logo} alt="logo" />
          <h3> Space Travelers&apos; Hub</h3>
        </Link>
        <ul className="main-nav">
          <li className="nav-item">
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'link')}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

);

export default Navigation;
