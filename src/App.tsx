import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Homeroom from "./components/Homeroom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navigation />

      <section id="home">
        <Home />
      </section>

      <section id="homeroom">
        <Homeroom />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

    </>
  );
}

export default App;