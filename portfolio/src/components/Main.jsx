import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Home from "./Home";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import { motion, useScroll } from "framer-motion";
const Main = () => {
  const { scrollYProgress } = useScroll();
  console.log("scrollYProgress:", scrollYProgress);
  return (
    <div className="container-with-scrollbar ">
      <motion.div
        className="progress-bar bg-orange-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <NavBar />

      <Home />
      <About />
      <Portfolio />
      <Skills />

      <Contact />
    </div>
  );
};

export default Main;
