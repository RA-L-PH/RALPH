import React from "react";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";
import "./App.css";



function App() {

  return (
    <div>
    <Header />
    <main>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
