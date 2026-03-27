import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolder,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import RevealOnScroll from "../animations/RevealOnScroll";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "Experience", "Project", "skill", "contact"];
    const sections = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((s) => s.el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Experience", href: "#Experience", icon: <FaBriefcase /> },
    { name: "Project", href: "#Project", icon: <FaFolder /> },
    { name: "Skill", href: "#skill", icon: <FaCode /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <RevealOnScroll>
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center items-center gap-6 font-medium text-gray-600 text-sm">
            {menuItems.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
                  active.toLowerCase() === name.toLowerCase()
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-900 hover:text-white"
                }`}
              >
                {icon}
                {name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-xl text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden animate-fadeIn">
            <ul className="flex flex-col items-center py-3 space-y-3 text-gray-700 font-medium">
              {menuItems.map(({ name, href, icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                      active.toLowerCase() === name.toLowerCase()
                        ? "bg-gray-900 text-white"
                        : "hover:bg-gray-900 hover:text-white"
                    }`}
                  >
                    {icon}
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}
