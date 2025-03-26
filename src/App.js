import './App.css';
import Header from './Components/Header';
import "@fontsource-variable/albert-sans";
import "@fontsource-variable/albert-sans/wght.css";
import "@fontsource-variable/albert-sans/wght-italic.css";
import Welcome from './Components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HomeVideo from './Components/HomeVideo';
import Experience from './Components/Experience';
import Gallery from './Components/Gallery';
import Surrounding from './Components/Surrounding';
import Footer from './Components/Footer';
import { Element } from "react-scroll";
import ReachOut from './Components/ReachOut';
// import  FontAwesomeIcon  from '@fortawesome/react-fontawesome';
import { FaWhatsapp } from "react-icons/fa";
// import StickyTextWithImages from './Components/trst';

function App() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+919360713003", "_blank"); 
  };

  return (
    <div className="App">
      <Header />
      <HomeVideo id="home-video" />
      <Element name="wel-come">
        <Welcome />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Surrounding id="surrounding" />
      <Element name="reach-out">
        <ReachOut />
      </Element>
      {/* <StickyTextWithImages/> */}
      <Footer id="footer" />

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
        <FaWhatsapp className="text-green-600" />
        </button>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  );
}

export default App;
