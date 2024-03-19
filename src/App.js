// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar/Navbar';
import HeroSection from './Components/HomeSection/HeroSection';
import AboutMe from './Components/About/AboutMe';
import MyWork from './Components/MyWork/MyWork';
import MyServices from './Components/Service/MyServices';
import Contact from './Components/Contact/Contact';
import CopyRight from './Components/CopyRight/CopyRight';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <HeroSection/>
    <AboutMe/>
    <MyWork/>
    <MyServices/>
    <Contact/>
    <CopyRight/>
    </div>
  );
}

export default App;
