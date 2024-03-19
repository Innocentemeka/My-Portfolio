import "./Navbar.css";
import logo from "../Image/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <img src={logo} alt="navbar-icon" />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="my-work">Portfolio</Link>
        </li>
        <li>
          <Link to="service">Services</Link>
        </li>
        <li>
          <Link to="contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
