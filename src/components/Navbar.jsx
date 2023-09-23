import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { About } from "../pages";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav id="main-nav">
      <div className="container">
        <img src="img/logo.png" alt="NewsGrid" className="logo" />

        <div className="social">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <ul>
          <li>
            <a className={pathname === "/" ? "current" : ""}>
              <NavLink
                className={pathname === "/" ? "myNav" : ""}
                to="/"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </a>
          </li>
          <li>
            <a className={pathname === "/about" ? "current" : ""}>
              <NavLink
                className={pathname === "/about" ? "myNav" : ""}
                to="/about"
                activeClassName="active"
                exact
              >
                About
              </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
