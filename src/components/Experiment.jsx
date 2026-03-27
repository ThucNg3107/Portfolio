import { useState } from "react"
import React from "react"
import RevealOnScroll from "../animations/RevealOnScroll"
import { FaGraduationCap } from "react-icons/fa"

const Experiment = () => {
    const [activeTab, setActiveTab] = useState('work')
    const experimentData = {
        work: [
            {
                id: 1,
                title: "Freelance Developer",
                description: "Build and develop website functions, Implement website deployment in real environment",
                technologies: ["Php" , "MySql"]
            },
            {
                id: 2,
                title: "Backend Developer",
                description: "Take on the role of coordinating with the Frontend team in building and developing the system, including database design and implementing the e-commerce platform in the logistics field.",
                technologies: ["Nodejs" , "Expressjs" , "Mongodb" , "Socketio"]
            }
            
        ],
        education: [
            {
                id: 1,
                school: "Ho Chi Minh City University of Transport",
                major: "Information technology",
                description: "The Bachelor of Information Technology program focuses on software development, artificial intelligence and cybersecurity.",
                period: "2024-2028",
                location: "Ho Chi Minh City, Vietnam"
            }
        ]
    }

    const currentData = experimentData[activeTab]

    return (
        <RevealOnScroll>
            <div id="Experience" className="w-full mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            My Experience
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore the practical experiences I have accumulated
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Tab buttons */}
                        <div className="flex justify-center space-x-4 mb-8">
                            <button
                                onClick={() => setActiveTab('work')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === 'work' 
                                    ? 'bg-black text-white shadow-md' 
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                Work Experience
                            </button>
                            <button
                                onClick={() => setActiveTab('education')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === 'education' 
                                    ? 'bg-black text-white shadow-md' 
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                Education
                            </button>
                        </div>

                        {/* Content */}
                        <div className="min-h-96">
                            <div className={activeTab === 'work' ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "w-full flex flex-col gap-6"}>
                                {currentData.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
                                    >
                                        {activeTab === 'work' ? (
                                            <>
                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                    {item.title}
                                                </h3>
                                                
                                                {/* Description */}
                                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                                
                                                {/* Technologies */}
                                                <div className="mt-4">
                                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                                        Công nghệ sử dụng:
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.technologies.map((tech, index) => (
                                                            <span 
                                                                key={index}
                                                                className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full font-medium"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="relative flex items-start space-x-6 pl-10">
                                                <div className="absolute left-0 top-1 flex flex-col items-center">
                                                    <div className="text-3xl text-black">
                                                        <FaGraduationCap />
                                                    </div>
                                                    <div className="mt-2 w-0.5 h-full bg-gray-300"></div>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex flex-col sm:flex-row justify-between items-start">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900">
                                                                {item.major}
                                                            </h3>
                                                            <p className="text-gray-700 font-semibold mt-1">
                                                                {item.school}
                                                            </p>
                                                        </div>
                                                        <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                                                            <p>{item.period}</p>
                                                            <p>{item.location}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {currentData.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">
                                        No {activeTab} experiments found.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    )
}

export default Experiment