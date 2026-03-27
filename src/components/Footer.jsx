import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaCoffee } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub className="text-lg" />, href: "https://github.com/ThucNg3107", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <FaLinkedin className="text-lg" />, href: "https://www.linkedin.com/in/ThucNg3107", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <FaFacebook className="text-lg" />, href: "https://facebook.com/minhphu", label: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaTwitter className="text-lg" />, href: "https://twitter.com/minhphu", label: "Twitter", color: "hover:text-sky-400" },
    { icon: <FaInstagram className="text-lg" />, href: "https://instagram.com/minhphu", label: "Instagram", color: "hover:text-pink-500" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#Project" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "API Development",
    "System Architecture",
    "Consulting"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Nguyen Hien Thuc
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              Full-stack developer passionate about crafting digital experiences that make a difference. 
              Turning ideas into reality through code and creativity.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color} border border-gray-700`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mt-1 group-hover:bg-blue-500 transition-colors">
                  <FaEnvelope className="text-gray-400 group-hover:text-white text-sm" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                  thucnguyenhien102@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mt-1 group-hover:bg-green-500 transition-colors">
                  <FaPhone className="text-gray-400 group-hover:text-white text-sm" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                  +84 981 460 071
                </span>
              </div>
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mt-1 group-hover:bg-purple-500 transition-colors">
                  <FaMapMarkerAlt className="text-gray-400 group-hover:text-white text-sm" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                  Binh Thanh District, Ho Chi Minh City
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm flex items-center">
              © {currentYear} Nguyen Hien Thuc. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Crafted with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>and</span>
              <FaCoffee className="text-amber-600" />
              <span>in Ho Chi Minh City</span>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;


