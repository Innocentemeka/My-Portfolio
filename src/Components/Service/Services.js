import "./Services.css";
import { FaCode } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
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
            <h2>Web Design</h2>
            <p>
              A personal portfolio website is a professional website that
              provides information about what you do, what services you may
              offer, and how to contact you or your company. Portfolio websites
              are an easy way to promote yourself, your brand, or your business.
            </p>
            <Link>Learn more</Link>
          </div>
          <div className="services-list">
            <FaAppStore className="fa-icon" />
            <h2>App Design</h2>
            <p>
              A personal portfolio website is a professional website that
              provides information about what you do, what services you may
              offer, and how to contact you or your company. Portfolio websites
              are an easy way to promote yourself, your brand, or your business.
            </p>
            <Link>Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
