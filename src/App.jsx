import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <div >
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div id="inicio">
        <Hero />
      </div>
      <div id="habilidades">
        <Skills />
      </div>
      <div id="servicios">
        <Service />
      </div>
      <div id="proyectos">
        <Projects />
      </div>
      <div id="testimonios">
        <Testimonials />
      </div>
      <div id="contacto">
        <Hireme />
        <Contact />
      </div>
    </div>
  );
};

export default App;
