import { useState } from "react"
import React from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"
import RevealOnScroll from "../animations/RevealOnScroll"
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "../animations/animations"
import chatImage from "../assets/projects/chat.png";
import portImage from "../assets/projects/po.jpg"
import deliImage from "../assets/projects/delicacy.png"


const MyProject = () => {
    const [activeTab, setActiveTab] = useState('web')
    const headerRef = useRef(null)
    const tabsRef = useRef(null)
    const projectsRef = useRef(null)
    const statsRef = useRef(null)
    
    const headerControls = useAnimation()
    const tabsControls = useAnimation()
    const projectsControls = useAnimation()
    const statsControls = useAnimation()
    
    const headerInView = useInView(headerRef, { once: true, threshold: 0.3 })
    const tabsInView = useInView(tabsRef, { once: true, threshold: 0.3 })
    const projectsInView = useInView(projectsRef, { once: true, threshold: 0.2 })
    const statsInView = useInView(statsRef, { once: true, threshold: 0.3 })
    
    
    React.useEffect(() => {
        if (headerInView) headerControls.start("visible")
        if (tabsInView) tabsControls.start("visible")
        if (projectsInView) projectsControls.start("visible")
        if (statsInView) statsControls.start("visible")
    }, [headerInView, tabsInView, projectsInView, statsInView, headerControls, tabsControls, projectsControls, statsControls])
    
    const projectData = {
        web: [
            {
                id: 1,
                title: "CHAT-APP",
                description: "A real-time chat application that allows users to send and receive messages and images instantly",
                technologies: ["React", "Node.js", "MongoDB", "Zustand" , "Socket.io"],
                image: chatImage,
                demoLink: "#",
                githubLink: "https://github.com/lephu2k6/CHAT-APP/",
                featured: true
            },
            {
                id: 2,
                title: "Portfolio",
                description: "A personal portfolio website showcasing my projects, skills, and experience, built with React and Tailwind CSS.",
                technologies: ["React" , "Tailwind CSS"],
                image: portImage,
                demoLink: "#",
                githubLink: "#",
                featured: false
            },
            {
                id: 3,
                title: "Delicary Website ",
                description: "Delicary Website is a responsive landing page designed for a modern food and restaurant brand",
                technologies: ["HTML", "CSS", "JS"],
                image: deliImage,
                demoLink: "#",
                githubLink: "#",
                featured: true
            }
        ],
        mobile: [
            {
                id: 1,
                title: "Fitness Tracking App",
                description: "Ứng dụng theo dõi thể hình với workout plans, nutrition tracking và progress analytics",
                technologies: ["React Native", "Redux", "Firebase", "Chart.js", "Health Kit"],
                image: "/api/placeholder/400/250",
                demoLink: "#",
                githubLink: "#",
                featured: true
            },
            {
                id: 2,
                title: "Language Learning App",
                description: "Ứng dụng học ngôn ngữ với interactive lessons, speech recognition và gamification",
                technologies: ["Flutter", "Dart", "SQLite", "Google ML Kit", "Audio Players"],
                image: "/api/placeholder/400/250",
                demoLink: "#",
                githubLink: "#",
                featured: false
            },
            {
                id: 3,
                title: "Delicacy",
                description: "A mobile application for discovering and sharing delicious food recipes from around the world.",
                technologies: ["React Native", "Firebase", "Redux"],
                image: deliImage,
                demoLink: "#",
                githubLink: "#",
                featured: true
            }
            
        ],
        ai: [
            {
                id: 1,
                title: "AI Image Generator",
                description: "Công cụ tạo hình ảnh AI với style transfer, image editing và batch processing",
                technologies: ["Python", "TensorFlow", "FastAPI", "React", "Cloud Storage"],
                image: "/api/placeholder/400/250",
                demoLink: "#",
                githubLink: "#",
                featured: true
            },
            {
                id: 2,
                title: "Sentiment Analysis Tool",
                description: "Công cụ phân tích sentiment cho social media và customer feedback với real-time dashboard",
                technologies: ["Python", "NLTK", "React", "WebSocket", "MongoDB"],
                image: "/api/placeholder/400/250",
                demoLink: "#",
                githubLink: "#",
                featured: false
            },
            {
                id: 3,
                title: "Chatbot Platform",
                description: "Platform xây dựng chatbot đa kênh với NLP và integration various APIs",
                technologies: ["Node.js", "Dialogflow", "React", "MongoDB", "REST APIs"],
                image: "/api/placeholder/400/250",
                demoLink: "#",
                githubLink: "#",
                featured: true
            }
        ]
    }

    const currentData = projectData[activeTab]

    return (
        <RevealOnScroll>
            <div id="Project" className="w-full mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-gray-50">
                <motion.div 
                    ref={headerRef}
                    initial="hidden"
                    animate={headerControls}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore the innovative projects and technology solutions I have developed
                    </p>
                </motion.div>
                
                <div className="max-w-7xl mx-auto">
                    {/* Tab buttons */}
                    <motion.div 
                        ref={tabsRef}
                        initial="hidden"
                        animate={tabsControls}
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {[
                            { key: 'web', label: 'Web Development' },
                            { key: 'mobile', label: 'Mobile Apps'  },
                            { key: 'ai', label: 'AI & Machine Learning' }
                        ].map((tab) => (
                            <motion.button
                                key={tab.key}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    activeTab === tab.key 
                                    ? 'bg-black text-white shadow-lg' 
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="min-h-96">
                        <motion.div 
                            ref={projectsRef}
                            initial="hidden"
                            animate={projectsControls}
                            variants={staggerContainer}
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {currentData.map((project, index) => (
                                <motion.div 
                                    key={project.id}
                                    variants={staggerItem}
                                    custom={index}
                                    whileHover={cardHover.hover}
                                    className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border relative ${
                                        project.featured ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-gray-200'
                                    }`}
                                >
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                                                ⭐ Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Project Image */}
                                    <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 relative overflow-hidden">
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                            {project.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                        
                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                                Technologies:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, index) => (
                                                    <span 
                                                        key={index}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3 pt-4 border-t border-gray-200">
                                            <a
                                                href={project.demoLink}
                                                className="flex-1 bg-black text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                                            >
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        {currentData.length === 0 && (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4"></div>
                                <p className="text-gray-500 text-lg mb-4">
                                    No projects found in this category.
                                </p>
                                <p className="text-gray-400">
                                    Coming soon...
                                </p>
                            </div>
                        )}
                    </div>
    
                </div>
            </div>
        </RevealOnScroll>
    )
}

export default MyProject
