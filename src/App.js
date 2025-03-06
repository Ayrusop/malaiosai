
import './App.css';
import Header from './Components/Header';
import "@fontsource-variable/albert-sans"; // Defaults to wght axis
import "@fontsource-variable/albert-sans/wght.css"; // Specify axis
import "@fontsource-variable/albert-sans/wght-italic.css";
import Welcome from './Components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App" >
      <Header/>
      <Welcome/>
    </div>
  );
}

export default App;
