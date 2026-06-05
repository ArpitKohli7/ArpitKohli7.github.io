import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";

function Header({ theme }) {
  return (
    <header className="header">
      <NavLink to="/home" tag={Link} className="logo">
        <span className="logo-name" style={{ color: theme.text }}>
          {greeting.logo_name}
        </span>
      </NavLink>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <NavLink to="/home" tag={Link} activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }} className="homei">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" tag={Link} activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }} className="xp">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" tag={Link} activeStyle={{ fontWeight: "bold" }}
            style={{ borderRadius: 5, color: theme.text }} className="cr">
            Contact and Resume
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default React.memo(Header);
