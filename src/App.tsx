import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  FloatingProfile,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
// Feedbacks (testimonials) is intentionally not rendered below — re-add it
// from ./components once you have a real quote (e.g. a professor or
// project-team recommendation). Fake client testimonials don't fit here.
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <FloatingProfile />
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
