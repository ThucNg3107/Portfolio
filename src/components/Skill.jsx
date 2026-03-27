import { useState } from "react"
import React from "react"
import RevealOnScroll from "../animations/RevealOnScroll"
const MySkill = () => {
    const [activeCategory, setActiveCategory] = useState('frontend')
    const [hoveredSkill, setHoveredSkill] = useState(null)
    
    const skillsData = {
        frontend: [
            { name: "React.js", level: 70, icon: "⚛️", color: "from-blue-400 to-blue-600" },
            { name: "JavaScript", level: 80, icon: "🟨", color: "from-yellow-400 to-yellow-600" },
            { name: "HTML/CSS", level: 95, icon: "🎨", color: "from-orange-400 to-orange-600"},
            { name: "Tailwind CSS", level: 75, icon: "💨", color: "from-teal-400 to-teal-600" }
        ],
        backend: [
            { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-green-700" },
            { name: "Express.js", level: 80, icon: "🚂", color: "from-gray-500 to-gray-700" },
            { name: "MongoDB", level: 80, icon: "🍃", color: "from-green-400 to-green-600"}
        ],
        mobile: [
            { name: "React Native", level: 60, icon: "📱", color: "from-purple-400 to-purple-600" },
            { name: "Flutter", level: 60, icon: "🎯", color: "from-blue-400 to-cyan-500"}
        ],
        tools: [
            { name: "Git/GitHub", level: 90, icon: "📚", color: "from-gray-600 to-gray-800"},
            { name: "Docker", level: 70, icon: "🐳", color: "from-blue-500 to-blue-700"},
            { name: "VS Code", level: 95, icon: "💻", color: "from-blue-400 to-blue-600" }
        ]
    }

    const currentSkills = skillsData[activeCategory]

    const SkillCard = ({ skill }) => (
        <div 
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
        >
            
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-6">
                {/* Header with Icon and Level */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">
                            {skill.name}
                        </h3>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                        {skill.level}%
                    </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <div 
                        className="absolute inset-y-0 left-0 bg-black rounded-full transition-all duration-700 ease-out"
                        style={{ 
                            width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                        }}
                    />
                </div>
                
                {/* Skill Level Badge */}
                <div className="text-xs text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.level >= 90 && '⭐ Expert'}
                    {skill.level >= 80 && skill.level < 90 && '🔥 Advanced'}
                    {skill.level >= 70 && skill.level < 80 && '💪 Proficient'}
                    {skill.level < 70 && '📚 Intermediate'}
                </div>
            </div>
        </div>
    )

    return (
        <RevealOnScroll>
         <div id="skill" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-gray-50">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                 <div className="text-center mb-16" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
                     <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 mb-4">
                        My Skills
                    </h1>
                     <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                     Synthesis of skills and technologies that I have accumulated through many real projects
                    </p>
                    
                    {/* Decorative Line */}
                     <div className="flex items-center justify-center gap-2 mt-8">
                         <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded"></div>
                         <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                         <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded"></div>
                    </div>
                </div>

                {/* Category Tabs */}
                 <div 
                     className="flex flex-wrap justify-center gap-3 mb-16"
                    style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
                >
                     {[
                         { key: 'frontend', label: 'Frontend' },
                         { key: 'backend', label: 'Backend' },
                         { key: 'mobile', label: 'Mobile' },
                         { key: 'tools', label: 'Dev Tools' }
                     ].map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setActiveCategory(category.key)}
                             className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                                 activeCategory === category.key 
                                 ? 'bg-black text-white shadow-lg' 
                                 : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                             }`}
                        >

                             {category.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    {currentSkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>

                {/* Bottom Section */}
                 <div className="grid lg:grid-cols-2 gap-8" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
                    {/* Programming Languages */}
                     <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                                Programming Languages
                            </span>
                        </h3>
                        <div className="space-y-5">
                            {[
                                 { name: "JavaScript/TypeScript", level: 80 },
                                 { name: "Python", level: 60 },
                                 { name: "SQL", level: 60 },
                                 { name: "HTML/CSS", level: 95 }
                            ].map((lang) => (
                                <div key={lang.name} className="group">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                            {lang.name}
                                        </span>
                                        <span className="text-sm font-bold text-gray-500">
                                            {lang.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                         <div className="h-full bg-black rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg" style={{ width: `${lang.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                     <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                                Soft Skills
                            </span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { skill: "Problem Solving" },
                                { skill: "Team Leadership" },
                                { skill: "Agile Methodology" },
                                { skill: "Communication"},
                                { skill: "Project Management" },
                                { skill: "Creative Thinking" },
                                { skill: "Time Management" },
                                { skill: "Mentoring" }
                            ].map((item) => (
                                 <div 
                                     key={item.skill}
                                     className="group relative bg-gray-50 px-4 py-4 rounded-xl text-center font-medium transition-all duration-300 cursor-pointer border border-gray-200 hover:bg-gray-100 hover:shadow-lg overflow-hidden"
                                 >
                                    <div className="relative z-10">
                                        
                                         <div className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                                            {item.skill}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
        
    )
}

export default MySkill

