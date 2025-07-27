"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Mail, Sparkles, ExternalLink, Award } from "lucide-react"

const technologies = [
  { name: "Python", logo: "/logos/python.svg", color: "from-blue-400 to-yellow-400" },
  { name: "Pandas", logo: "/logos/pandas.svg", color: "from-purple-400 to-pink-400" },
  { name: "NumPy", logo: "/logos/numpy.svg", color: "from-blue-500 to-cyan-400" },
  { name: "Scikit-learn", logo: "/logos/scikit-learn.svg", color: "from-orange-400 to-red-400" },
  { name: "PyTorch", logo: "/logos/pytorch.svg", color: "from-red-500 to-orange-500" },
  { name: "Jupyter", logo: "/logos/jupyter.svg", color: "from-orange-400 to-gray-600" },
  { name: "Matplotlib", logo: "/logos/matplotlib.svg", color: "from-green-400 to-blue-500" },
  { name: "C++", logo: "/logos/cpp.svg", color: "from-blue-600 to-purple-600" },
  { name: "C", logo: "/logos/c.svg", color: "from-gray-600 to-blue-600" },
  { name: "JavaScript", logo: "/logos/javascript.svg", color: "from-yellow-400 to-orange-400" },
  { name: "HTML", logo: "/logos/html.svg", color: "from-orange-500 to-red-500" },
  { name: "CSS", logo: "/logos/css.svg", color: "from-blue-400 to-purple-500" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg", color: "from-cyan-400 to-blue-500" },
  { name: "GitHub", logo: "/logos/github.svg", color: "from-gray-700 to-gray-900" },
]

function MarqueeScrollTechLogos() {
  // Split technologies into 2 rows
  const topRowTech = technologies.slice(0, 8) // First 8 technologies
  const bottomRowTech = technologies.slice(8) // Remaining 7 technologies

  return (
    <div className="relative overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-6 h-6 text-emerald-400" />
        Technologies and tools
        <Sparkles className="w-6 h-6 text-emerald-400" />
      </h3>

      {/* Top Row - Marquee scroll left */}
      <div className="marquee-wrapper mb-6">
        <div className="marquee-left">
          {/* First set */}
          {topRowTech.map((tech, index) => (
            <div
              key={`left-1-${index}`}
              className="marquee-item bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-10 h-10 mx-auto mb-2 object-contain"
                />
                <div className="text-slate-300 text-sm font-medium">{tech.name}</div>
              </div>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {topRowTech.map((tech, index) => (
            <div
              key={`left-2-${index}`}
              className="marquee-item bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-10 h-10 mx-auto mb-2 object-contain"
                />
                <div className="text-slate-300 text-sm font-medium">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Marquee scroll right (2x faster) */}
      <div className="marquee-wrapper">
        <div className="marquee-right">
          {/* First set */}
          {bottomRowTech.map((tech, index) => (
            <div
              key={`right-1-${index}`}
              className="marquee-item bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-10 h-10 mx-auto mb-2 object-contain"
                />
                <div className="text-slate-300 text-sm font-medium">{tech.name}</div>
              </div>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {bottomRowTech.map((tech, index) => (
            <div
              key={`right-2-${index}`}
              className="marquee-item bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-10 h-10 mx-auto mb-2 object-contain"
                />
                <div className="text-slate-300 text-sm font-medium">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Overlays for Smooth Edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-800 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-800 to-transparent pointer-events-none z-10"></div>
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-4 h-4 text-teal-400 animate-pulse" />
        <Sparkles className="absolute top-40 right-32 w-3 h-3 text-emerald-400 animate-pulse delay-1000" />
        <Sparkles className="absolute bottom-40 left-32 w-5 h-5 text-teal-300 animate-pulse delay-2000" />
        <Sparkles className="absolute top-60 left-1/2 w-3 h-3 text-emerald-300 animate-pulse delay-500" />
        <Sparkles className="absolute bottom-60 right-20 w-4 h-4 text-teal-400 animate-pulse delay-1500" />
        <div className="absolute top-32 right-1/4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-slate-800/80 backdrop-blur-md rounded-full px-2 py-2 border border-slate-700/50">
          <div className="flex space-x-1">
            {[
              { id: "home", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "certificates", label: "Certificates" },
              { id: "about", label: "About" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-white text-slate-900"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Avatar with Real Profile Picture */}
          <div className="mb-8">
            <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-teal-400/20">
              <AvatarImage src="/profile.png" alt="Tsang Cahya Muharam" />
              <AvatarFallback className="bg-teal-600 text-white text-2xl">T</AvatarFallback>
            </Avatar>

            {/* Name */}
            <p className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4">Tsang Cahya</p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Certified
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Vibe Coder
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Mathematics student with an interest in machine learning and competitive programming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                View My Projects
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105">
                📊 See My Stats
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-slate-300 text-lg">Coming soon...</p>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Certificates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-emerald-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">HackerRank Certificate</h3>
                      <p className="text-slate-400">Programming & Problem Solving</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                    onClick={() => window.open("https://www.hackerrank.com/certificates/1df07b1ab24b", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
                <p className="text-slate-300">
                  Demonstrates proficiency in programming fundamentals and problem-solving skills through various coding
                  challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a Mathematics student with an interest in machine learning and artificial intelligence. My academic
                background in mathematics provides me with a strong foundation for understanding the theoretical aspects
                of ML algorithms and statistical models.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                In 2023, I explored web development through The Odin Project, learning the fundamentals of frontend and
                backend development. However, I shifted my focus to machine learning due to the massive AI trend and my
                growing fascination with data science applications.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                I actively participate in competitive programming to sharpen my problem-solving skills, which directly
                translates to better algorithmic thinking in machine learning projects.
              </p>

              {/* Competitive Programming Stats with Real Logos */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-4 text-center">
                    <img
                      src="/logos/leetcode.svg"
                      alt="LeetCode"
                      className="w-8 h-8 mx-auto mb-2 cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => window.open("https://leetcode.com/u/tsangcahya/", "_blank")}
                    />
                    <div className="text-2xl font-bold text-teal-400">1,586</div>
                    <div className="text-slate-400 text-sm">LeetCode Rating</div>
                    <div className="text-xs text-slate-500 mt-1">45 Problems Solved</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-4 text-center">
                    <img
                      src="/logos/codeforces.svg"
                      alt="Codeforces"
                      className="w-8 h-8 mx-auto mb-2 cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => window.open("https://codeforces.com/profile/ONIK_K4NGKUNG", "_blank")}
                    />
                    <div className="text-2xl font-bold text-emerald-400">1290</div>
                    <div className="text-slate-400 text-sm">Codeforces Rating</div>
                    <div className="text-xs text-slate-500 mt-1">Highest Rating</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              {/* Marquee Scrolling Tech Logos */}
              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
                <CardContent className="p-6">
                  <MarqueeScrollTechLogos />
                </CardContent>
              </Card>

              {/* Honest Assessment */}
              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Areas for Growth</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-amber-400">Web Development Team Experience:</strong> While I have learned
                    web development fundamentals, I haven't had the opportunity to work in a collaborative web
                    development team environment. I'm eager to gain experience in team-based projects, version control
                    workflows, and agile development practices.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                  <p className="text-slate-300 mb-4 text-sm">
                    Interested in discussing machine learning projects, competitive programming strategies, or potential
                    collaboration opportunities? I'd love to hear from you!
                  </p>
                  <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 w-full">
                    <Mail className="mr-2 w-4 h-4" />
                    Get In Touch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4">Learning Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Projects & Achievements</h2>
        </div>
      </section>
    </div>
  )
}
