import "./Services.css";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

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
              Develop new user-facing features, determine the structure and
              design of web pages, building reusable codes, optimizing page
              loading times.
            </p>
          </div>
          <div className="services-list">
            <FaReact className="fa-icon" />
            <h2>React Developer</h2>
            <p>
              Design and implement user interfaces (UIs) and UI components using
              React. Develop and manitain UIs for web and mobile apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
