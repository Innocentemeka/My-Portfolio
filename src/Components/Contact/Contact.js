import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import PopUp from "../PopUp/PopUp";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b7c6l4p", "template_7ivff15", form.current, {
        publicKey: "c1kthd_KNed27c7J0",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    setSuccess(true);
  };

  // hide result

  // setTimeout(() => {
  //   setSuccess(false);
  // }, 5000);

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
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
            <div>{success ? <PopUp /> : null}</div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
