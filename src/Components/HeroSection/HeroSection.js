import "./HeroSection.css";
import myPhoto from "../Image/inn.png";

const HeroSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="home-text">
          <p>Frontend Developer</p>
          <h1>
            Hi, I'm <span>Innocent</span> <br />
            Emeka From Nigeria
          </h1>
        </div>
        <div className="img-section">
          <img src={myPhoto} />
        </div>
      </div>

      <div className="small-screen">
        <div className="img-section">
          <img src={myPhoto} />
        </div>
        <div>
          <div className="home-text">
            <div>
              <p>Frontend Developer</p>
              <h1>
                Hi, I'm <span>Innocent</span> <br />
                Emeka From Nigeria
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
