import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact Me</h1>
          <p>
            <FaPaperPlane className="fa-icon" /> innocent7932@gmail.com
          </p>
          <p>
            <FaPhoneSquareAlt className="fa-icon" /> +2348108358516
          </p>
          <div className="social-icons">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaWhatsapp />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
