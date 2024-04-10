import "./Navbar.css";
import logo from "../Image/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [showMenuOpen, setShowMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="home" smooth={true} duration={500}>
        <img src={logo} alt="navbar-icon" />
      </Link>
      <div className="menu" onClick={() => setShowMenuOpen(!showMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={showMenuOpen ? "navMenu" : ""}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setShowMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShowMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShowMenuOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShowMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShowMenuOpen(false)}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
