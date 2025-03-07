
import './App.css';
import Header from './Components/Header';
import "@fontsource-variable/albert-sans"; // Defaults to wght axis
import "@fontsource-variable/albert-sans/wght.css"; // Specify axis
import "@fontsource-variable/albert-sans/wght-italic.css";
import Welcome from './Components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import HomeVideo from './Components/HomeVideo';
import Experience from './Components/Experience';
import Gallery from './Components/Gallery';
import Surrounding from './Components/Surrounding';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App" >
      <Header/>
      <HomeVideo/>
      <Welcome/>
      <Experience/>
      <Gallery/>
      <Surrounding/>  
      <Footer/>
    </div>
  );
}

export default App;
