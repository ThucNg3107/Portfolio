import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img/thuc.jpg.jpg";
import { FaUser, FaLocationDot, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa6";
import { FaUniversity, FaDownload } from "react-icons/fa";
import RevealOnScroll from "../animations/RevealOnScroll";
import { imageAnim , itemSlide,buttonAnim,containerSlide} from "../animations/animations";

const About = () => {
  return (
    <RevealOnScroll>
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerSlide}
      className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto px-4 py-12 mt-30"
    >
      {/* Image Section */}
      <motion.div 
        variants={imageAnim}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div id="about" className="relative group w-full max-w-md">
          <img 
            src={img} 
            alt="About me" 
            className="rounded-xl shadow-2xl w-full h-[480px] object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-gray-200 -z-10 group-hover:-bottom-2 group-hover:-right-2 group-hover:border-black transition-all duration-300" />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        variants={containerSlide}
        className="w-full md:w-1/2 space-y-6"
      >
        <motion.h1 variants={itemSlide} className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
          About Me
        </motion.h1>
        
        <motion.p variants={itemSlide} className="text-gray-600 leading-relaxed text-lg">
          I am a fourth-year student at Ho Chi Minh City University of Technology. I have a passion for building
          innovative and impactful applications, and my goal is to become a
          skilled full-stack software engineer.
        </motion.p>

        <motion.div 
          variants={containerSlide}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          
          {[
  { icon: <FaUser className="text-xl text-gray-700" />, title: "Name", content: "Nguyen Hien Thuc" },
  { icon: <FaLocationDot className="text-xl text-gray-700" />, title: "Location", content: "Binh Thanh District, Ho Chi Minh City" },
  { icon: <FaEnvelope className="text-xl text-gray-700" />, title: "Email", content: "thucnguyenhien102@gmail.com" },
  { icon: <FaUniversity className="text-xl text-gray-700" />, title: "Studying At", content: "University of Transport, Ho Chi Minh City" },
  { icon: <FaPhone className="text-xl text-gray-700" />, title: "Phone", content: "0981 46 0071" },
  { icon: <FaBriefcase className="text-xl text-gray-700" />, title: "Profession", content: "Student" }
].map((card, index) => (
  <motion.div 
    key={index}
    variants={itemSlide}
    whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
    className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3 transition-all hover:bg-gray-50 border-2"
  >
    {card.icon}
    <div>
      <span className="text-sm font-bold text-gray-900">{card.title}</span>
      <p className="text-gray-500 text-sm">{card.content}</p>
    </div>
  </motion.div>
))}
        </motion.div>

        {/* Button nhó */}
        <motion.div variants={itemSlide} className="flex gap-4 mt-8">
          <motion.button
            variants={buttonAnim}
            whileHover="hover"
            whileTap="tap"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg"
          >
            <FaDownload />
            Download My CV
          </motion.button>
          <motion.button
            variants={buttonAnim}
            whileHover="hover"
            whileTap="tap"
            className="bg-white text-black border border-gray-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-gray-50"
          >
            Hire Me Now
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
    </RevealOnScroll>
  );
};

export default About;



