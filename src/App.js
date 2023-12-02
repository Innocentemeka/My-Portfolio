import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import MyPortfolio from './Components/MyPortfolio';
import MyServices from './Components/MyServices';
import ContantMe from './Components/ContantMe';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutMe />
    <MyPortfolio />
    <MyServices />
    <ContantMe />
    </>
  );
}

export default App;
