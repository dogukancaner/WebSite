import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import videoBg from "./assets/videoBg.mp4";


function App() {
  return (
      <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      </div>
  );
}

export default App;
