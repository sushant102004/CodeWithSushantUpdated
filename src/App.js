import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import About from "./components/about";
import Achievements from "./components/achievements";
import Skills from "./components/skills";
import Project from "./components/projects";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <div className="mt-16 lg:flex mx-6 lg:mx-24 lg:mt-24" id="about-section">
        <About />
        <Achievements />
      </div>
      <Skills />
      <p className="text-center text-xl font-medium mt-8">Projects</p>
      <hr
        className="mx-auto w-1/6 bg-yellow-400 rounded-md mt-2 lg:w-12"
        style={{ height: "0.3rem" }}
      />
      <Project />
    </>
  );
}

export default App;
