import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const NavItem = ({ navLinks }) => {
  return (
    <div>
      <ul>
        {navLinks.map((cur) => {
          const { id, url, name } = cur;
          return (
            <li key={id}>
              <NavLink to={url}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavItem;
