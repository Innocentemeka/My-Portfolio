import "./Skills.css";
import { FaDownload } from "react-icons/fa";
import innocentCv from "../Image/innocent_CV.png";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h1>My Skills</h1>
        <div className="skills-list-container">
          <div className="skills-list">
            <div>
              <div>
                <h2>HTML</h2>
                <p>1 Year Experience</p>
              </div>
              <div>
                <h2>Javascript</h2>
                <p>6 Months Experience</p>
              </div>
            </div>
            <div>
              <div>
                <h2>CSS</h2>
                <p>1 Year Experience</p>
              </div>
              <div>
                <h2>React</h2>
                <p>6 Months Experience</p>
              </div>
            </div>
          </div>
          <div className="button-container">
            <a href={innocentCv} download="Innocent_Resume" className="btn">
              Download CV <FaDownload className="fa-download" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
