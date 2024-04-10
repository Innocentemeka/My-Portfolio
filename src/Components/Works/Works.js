import "./Works.css";
import Myportfolio1 from "../Image/web-1.png";
import Myportfolio2 from "../Image/web-2.png";
import Myportfolio3 from "../Image/web-3.png";
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
              <h3>VIO Website</h3>
              <p>Lagos State Vehicle Inspection Service</p>
              <a href="https://vio-website-ashy.vercel.app/#" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work-list">
            <img src={Myportfolio2} alt="work-img" />
            <div className="layer">
              <h3>Movie Website</h3>
              <p>
                Movie website allows users to watch different kinds of movies on
                one platform and can also search for their desired movies using
                a search bar.
              </p>
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
              <h3>Weather App</h3>
              <p>
                Use the Weather app to check the weather for your current
                location.
              </p>
              <a
                href="https://weatherapp-beryl-eta.vercel.app/"
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
