import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div>
      <BackToTopButton />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <div className="pt-40">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
