import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import About from "./components/about";
import Achievements from "./components/achievements";
import Skills from "./components/skills";

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
    </>
  );
}

export default App;
