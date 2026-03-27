import { useState, useRef, useEffect } from "react"
import React from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import RevealOnScroll from "../animations/RevealOnScroll"
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from "../animations/animations"
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa"

const MyContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Scroll animation refs
  const headerRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)

  const headerControls = useAnimation()
  const contactInfoControls = useAnimation()
  const formControls = useAnimation()

  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 })
  const contactInfoInView = useInView(contactInfoRef, {
    once: true,
    threshold: 0.3,
  })
  const formInView = useInView(formRef, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (headerInView) headerControls.start("visible")
    if (contactInfoInView) contactInfoControls.start("visible")
    if (formInView) formControls.start("visible")
  }, [
    headerInView,
    contactInfoInView,
    formInView,
    headerControls,
    contactInfoControls,
    formControls,
  ])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      projectType: "",
      message: "",
    })
    setTimeout(() => setIsSubmitted(false), 5000)
  }
  const socialNetworks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ThucNg3107",
      username: "@ThucNg3107",
      icon: <FaLinkedin className="text-3xl" />,
      color: "hover:bg-blue-600 hover:text-white border-blue-300",
    },
    {
      name: "GitHub",
      url: "https://github.com/ThucNg3107",
      username: "@ThucNg3107",
      icon: <FaGithub className="text-3xl" />,
      color: "hover:bg-gray-800 hover:text-white border-gray-300",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/minhphu",
      username: "@ThucNg3107",
      icon: <FaFacebook className="text-3xl" />,
      color: "hover:bg-blue-500 hover:text-white border-blue-300",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/minhphu",
      username: "@ThucNg3107",
      icon: <FaTwitter className="text-3xl" />,
      color: "hover:bg-sky-500 hover:text-white border-sky-300",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/minhphu",
      username: "@ThucNg3107",
      icon: <FaInstagram className="text-3xl" />,
      color: "hover:bg-pink-500 hover:text-white border-pink-300",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/minhphu",
      username: "@ThucNg3107",
      icon: <FaYoutube className="text-3xl" />,
      color: "hover:bg-red-600 hover:text-white border-red-300",
    },
  ]

  return (
    <RevealOnScroll>
      <section
        id="contact"
        className="w-full py-20 px-6 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let’s Connect
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow me on social media or drop me a message — I’d love to
              collaborate and share creative ideas!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT - SOCIAL NETWORKS */}
            <motion.div
              ref={contactInfoRef}
              initial="hidden"
              animate={contactInfoControls}
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6">Social Networks</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {socialNetworks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 border p-4 rounded-xl transition-all duration-300 hover:shadow-lg ${social.color}`}
                  >
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{social.name}</p>
                      <p className="text-sm text-gray-600">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* RIGHT - CONTACT FORM */}
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formControls}
              variants={fadeInRight}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                  <span className="text-xl mr-3">🎉</span>
                  <div>
                    <div className="font-semibold">
                      Thank you for your message!
                    </div>
                    <div className="text-sm">
                      I’ll get back to you soon.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:bg-gray-800 text-white"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}

export default MyContact

