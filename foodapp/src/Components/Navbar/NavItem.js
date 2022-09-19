import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const NavItem = ({ navLinks }) => 
  <div>
    <ul>
      {navLinks.map(({ id, url, name }) => (
        <li key={`navbar-${id}`}>
          <NavLink to={url}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </div>


export default NavItem;
