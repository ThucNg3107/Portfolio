import { motion } from "framer-motion";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Experiment from "./components/Experiment";
import MyProject from "./components/Project";
import MySkill from "./components/Skill";
import MyContact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header />
      <About />
      <Experiment />
      <MyProject />
      <MySkill />
      <MyContact />
      <Footer />
    </motion.div>
  );
}

export default App;
