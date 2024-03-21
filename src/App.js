// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/NavBar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/About/About";
import Works from "./Components/Works/Works";
import Services from "./Components/Service/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
