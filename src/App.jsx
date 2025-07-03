// import React from "react";
// import Navbar from "./sections/avbar";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Projects from "./sections/Projects";
// import Experiences from "./sections/Experiences";
// import Testimonial from "./sections/Testimonial";
// import Contact from "./sections/Contact";
// import Footer from './sections/Footer';

// const App = () => {
//   return (
//     <div className="container mx-auto max-w-7xl">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Experiences />
//       <Testimonial />
//       <Contact />
//       <Footer/>
//     </div>
//   );
// };

// export default App;


import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />

        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="work"><Experiences /></section>
        <section id="skills"><Testimonial /></section>
        <section id="contact"><Contact /></section>
      </div>
      <div className="w-full px-10 gap-4">
  <Footer />
</div>


    </>
  );
};

export default App;
