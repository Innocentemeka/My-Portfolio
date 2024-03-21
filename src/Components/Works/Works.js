import "./Works.css";
import Myportfolio1 from "../Image/web-1.png";
import Myportfolio2 from "../Image/web-2.png";
import Myportfolio3 from "../Image/web-3.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Works = () => {
  return (
    <section className="works" id="works">
      <div className="works-container">
        <h1>
          My <span>Work</span>
        </h1>
        <div className="works-list-container">
          <div className="work-list">
            <img src={Myportfolio1} alt="work-img" />
            <div className="layer">
              <h3>my portfolio</h3>
              <p>
                I am a skilled web designer with over 1 year of experience in
                the industry. My passion lies in creating captivating website
                designs
              </p>
              <Link>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio2} alt="work-img" />
            <div className="layer">
              <h3>my portfolio</h3>
              <p>
                I am a skilled web designer with over 1 year of experience in
                the industry. My passion lies in creating captivating website
                designs
              </p>
              <Link>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio3} alt="work-img" />
            <div className="layer">
              <h3>my portfolio</h3>
              <p>
                I am a skilled web designer with over 1 year of experience in
                the industry. My passion lies in creating captivating website
                designs
              </p>
              <Link>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
