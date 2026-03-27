import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { containerVariants, itemVariants, imageVariants } from "../animations/animations";
import img from "../assets/img/thuc.jpg.jpg";

const TO_ROTATE = ["Backend Developer", "Student"];

const Header = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const i = loopNum % TO_ROTATE.length;
    const fullText = TO_ROTATE[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    const timer = setTimeout(() => {
      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed((prevSpeed) => Math.max(60, prevSpeed / 2));
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(150);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(150);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const quickActions = [
    {
      label: "Projects",
      href: "#Project",
      className: "text-cyan-700 border-cyan-300 hover:bg-cyan-50",
    },
    {
      label: "GitHub",
      href: "https://github.com/ThucNg3107",
      className: "text-slate-700 border-slate-300 hover:bg-slate-50",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ThucNg3107",
      className: "text-sky-700 border-sky-300 hover:bg-sky-50",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:thucnguyenhien102@gmail.com",
      className: "text-cyan-700 border-cyan-300 hover:bg-cyan-50",
      external: true,
    },
  ];

  return (
    <div id="home" className="bg-gradient-to-br from-background to-gray-50 mb-30">
      <Navbar />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-20 md:pt-28 px-6 md:px-8 max-w-6xl mx-auto pb-16"
      >
        <div className="md:w-1/2 p-4 md:p-8 space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
              Hi, I'm Nguyen Hien Thuc
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl text-gray-700 font-medium">
              {text}
              <span className="border-r-2 border-gray-700 animate-pulse"></span>
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-lg">
            I am a fourth-year software engineering student at Ho Chi Minh City University of Technology, with a strong passion for software development. My goal is to become a skilled full-stack software engineer capable of building innovative and impactful applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-500">
            <FaLocationDot className="text-red-500 text-lg" />
            <span>Binh Thanh District, Ho Chi Minh City</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-nowrap gap-2 bg-white p-2 rounded-xl border border-gray-200 w-fit max-w-full overflow-x-auto shadow-sm"
          >
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={`min-w-[102px] text-center px-3 py-2 rounded-md font-semibold text-sm border transition-all duration-200 ${action.className}`}
              >
                {action.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={imageVariants} className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute inset-2 bg-gray-50 rounded-full" />

            <motion.div
              className="relative p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img src={img} alt="Hero" className="w-full h-full object-cover rounded-full shadow-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;

