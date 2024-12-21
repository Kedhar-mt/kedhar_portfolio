import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Projects from "./components/Projects"; // New Projects page
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section id="about">
                  <About />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="works">
                  <Works />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />

          {/* Projects Page */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
