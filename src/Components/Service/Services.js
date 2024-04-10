import "./Services.css";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section id="service" className="services">
      <div className="services-container">
        <h1>
          <span>My</span> Services
        </h1>
        <div className="services-list-container">
          <div className="services-list">
            <FaCode className="fa-icon" />
            <h2>Frontend Developer</h2>
            <p>
              I am a frontend developer with a passion for buildind beautiful
              and functional web applications.
            </p>
            <Link>Learn more</Link>
          </div>
          <div className="services-list">
            <FaReact className="fa-icon" />
            <h2>React Native Developer</h2>
            <p>
              I am a React Native developer with a passion for creating
              beautiful and functional web applications.
            </p>
            <Link>Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
