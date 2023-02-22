import NavBar from "./components/navbar";
import HeroSection from "./components/hero-section";
import About from "./components/about";
import Achievements from "./components/achievements";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <div className="mt-16 lg:flex mx-6 lg:mx-20 lg:mt-24">
        <About />
        <Achievements />
      </div>
    </>
  );
}

export default App;
