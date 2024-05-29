import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className={`logo ${showNavbar ? "hide" : ""}`}>
          <Link to="/">
            <img
              className="nav-logo"
              src="src/assets/LogoType.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <ul className={`nav-links ${showNavbar ? "active" : ""}`}>
          <li>
            <Link to="/">
              <div className={location.pathname === "/" ? "active" : ""}>
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dispensers">
              <div
                className={location.pathname === "/dispensers" ? "active" : ""}
              >
                Dispensers
              </div>
            </Link>
          </li>
          <li>
            <Link to="/models">
              <div className={location.pathname === "/models" ? "active" : ""}>
                Models
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <div className={location.pathname === "/contact" ? "active" : ""}>
                Contact
              </div>
            </Link>
          </li>
        </ul>
        <div className="menu-toggle" onClick={toggleNavbar}>
          {showNavbar ? <FaTimes size={"26"} /> : <FaBars size={"26"} />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
