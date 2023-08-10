import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="inner-header flex">
          <NavigationBar/>
          <Home />
          <About />
        </div>
        
      </div>
      <div className="content flex">
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
