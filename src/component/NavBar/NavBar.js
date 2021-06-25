import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link
        className="navbar-brand"
        to="/"
        style={{ color: "#61b522", fontWeight: "bold" }}
      >
        Comics Store
      </Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link
              className="nav-link"
              to="/"
              style={{ color: "#61b522", fontWeight: "bold" }}
            >
              Inico <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              id="fantasma"
              role="button"
              data-toggle="dropdown"
              to="/"
              activeClassName="activo"
              style={{ color: "#61b522", fontWeight: "bold" }}
            >
              Productos
            </NavLink>

            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="fantasma"
            >
              <NavLink className="dropdown-item" to="/categoria/DC">
                DC
              </NavLink>
              <NavLink className="dropdown-item" to="/categoria/MARVEL">
                Marvel
              </NavLink>
              <NavLink className="dropdown-item" to="/categoria/Manga">
                Mangas
              </NavLink>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              style={{ color: "#61b522", fontWeight: "bold" }}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
