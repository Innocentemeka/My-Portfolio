import "./About.css";
import aboutMe from "../Image/inn.png";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h1>
          <span>ABOUT</span> ME
        </h1>
        <div className="title-container">
          <img src={aboutMe} alt="about-icon" />

          <div className="title">
            <h2>INN0CENT EMEKA</h2>
            <p>
              I am a skilled web designer with over 1 year of experience in the
              industry. My passion lies in creating captivating website designs
              and implementing them through frontend development. I take pride
              in staying up-to-date with current design trends and leveraging my
              creativity to produce visually appealing and user-friendly
              websites. Throughout my career, I have developed a deep
              understanding of user experience (UX) and user interface (UI)
              principles. By putting myself in the shoes of the end-users, I
              strive to create intuitive and seamless browsing experiences. I
              believe that a well-designed website should not only look visually
              appealing but also provide a smooth and enjoyable interaction for
              visitors. When starting a new project, I thoroughly research and
              analyze the target audience and the client's specific
              requirements. This enables me to tailor my designs to meet their
              expectations and deliver a unique online presence that aligns with
              their brand identity..
            </p>
            <div className="button-container">
              <Link href="Image/innocent_CV" download className="btn">
                Download CV <FaDownload className="fa-download" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
