import "./HeroSection.css";
import { Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="home-container" id="home">
      <div className="text-center">
        <div className="col-lg-7">
          <h1>
            I AM
            <span>INNOCENT</span>
            EMEKA
          </h1>
          <p>I'am a Web Developer from Nigeria</p>
          <div className="links mt-2 mb-4">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaWhatsapp />
            </Link>
          </div>
          <Link to="contact"><button className="hire-button">Hire Me Now</button></Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
