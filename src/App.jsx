// import React from "react";
// import Navbar from "./sections/navbar";
// import Hero from "./sections/Hero";

// const App = () => {
//   return (
//     <div className="container mx-auto max-w-7xl">
//       <Navbar />
//       <Hero />
//     </div>
//   );
// };

// export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AvatarPlayground from "./pages/AvatarPlayground";

const App = () => {
  const [currentView, setCurrentView] = useState("portfolio");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#play") {
        setCurrentView("play");
      } else {
        setCurrentView("portfolio");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentView === "play") {
    return <AvatarPlayground onBack={() => { window.location.hash = "#home"; }} />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
