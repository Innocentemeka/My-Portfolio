import "./Works.css";
import Myportfolio1 from "../Image/web-1.png";
import Myportfolio2 from "../Image/web-2.png";
import Myportfolio3 from "../Image/web-3.png";
import Myportfolio4 from "../Image/web-4.png";
import Myportfolio5 from "../Image/web-5.png";
import Myportfolio6 from "../Image/web-6.png";
import { FaExternalLinkAlt } from "react-icons/fa";

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
              <h3>LAGOS STATE VEHICLE INSPECTION SERVICE WEBSITE</h3>
              <div>
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <a href="https://vio-website-ashy.vercel.app/#" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio2} alt="work-img" />
            <div className="layer">
              <h3>MOVIE WEBSITE</h3>
              <div>
                <p>REACT.JS</p>
              </div>
              <a
                href="https://movie-app-cyan-pi-36.vercel.app/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio3} alt="work-img" />
            <div className="layer">
              <h3>WEATHER APP</h3>
              <div>
                <p>REACT.JS</p>
              </div>
              <a
                href="https://weatherapp-beryl-eta.vercel.app/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio4} alt="work-img" />
            <div className="layer">
              <h3>CALCULATAR APP</h3>
              <div>
                <p>REACT.JS</p>
              </div>
              <a
                href="https://calculator-six-sable.vercel.app/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio5} alt="work-img" />
            <div className="layer">
              <h3>TODO WEB APP</h3>
              <div>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
              </div>
              <a
                href="https://todo-list-three-tau-85.vercel.app/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio6} alt="work-img" />
            <div className="layer">
              <h3>Star Rating web App</h3>
              <p>REACT.JS</p>
              <a
                href="https://star-rating-mu.vercel.app/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
