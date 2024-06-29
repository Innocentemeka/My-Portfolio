import Navbar from "./Components/NavBar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Works from "./Components/Works/Works";
import Services from "./Components/Service/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
