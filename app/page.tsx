"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

const scrollToSection = (sectionId: string): void => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-red-500 animate-pulse">
              Duong Phu Dong
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors duration-300 hover:text-red-500 ${
                      activeSection === item.toLowerCase()
                        ? "text-red-500"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-black"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Duong</span>{" "}
              <span className="text-red-500 animate-pulse">Phu Dong</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6 animate-slide-up">
              Software Engineering Student
            </div>
            <div className="text-lg text-gray-400 max-w-2xl mx-auto animate-slide-up-delay">
              Fourth Year Student at RMIT University, passionate about creating
              innovative software solutions
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-up-delay-2">
            <a
              href="https://github.com/F4P1E"
              title="GitHub"
              className="p-3 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 group-hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/dương-phú-đông-820481147"
              title="LinkedIn"
              className="p-3 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 group-hover:text-black" />
            </a>
            <a
              href="mailto:dongduong840@gmail.com"
              title="Email"
              className="p-3 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:text-black" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce"
            title="Scroll to About section"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-8 h-8 text-red-500" />
          </button>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-12">
              <User className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-4xl font-bold">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I&apos;m a passionate software engineering student with a strong
                  foundation in modern web technologies. Currently in my fourth
                  year at RMIT University, I&apos;m dedicated to creating efficient,
                  scalable, and user-friendly applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in software development has equipped me with
                  expertise in various programming languages and frameworks,
                  with a particular focus on full-stack development and emerging
                  technologies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    Current Focus
                  </h3>
                  <p className="text-gray-300">
                    Full-stack web development, cloud technologies, and software
                    architecture
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    Interests
                  </h3>
                  <p className="text-gray-300">
                    AI/ML integration, DevOps practices, and open-source
                    contributions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-6 bg-gradient-to-r from-red-900/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.education
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-12">
              <GraduationCap className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-500"></div>

              {/* Current Education - RMIT */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float">
                  <h3 className="text-2xl font-bold text-red-500 mb-2 group-hover:text-red-400 transition-colors duration-300">
                    Bachelor of Software Engineering
                  </h3>
                  <p className="text-xl text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                    RMIT University, Vietnam
                  </p>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    Fourth Year Student • Expected Graduation 2026
                  </p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Comprehensive study of software development methodologies,
                    algorithms, data structures, system design, and modern
                    programming paradigms. Focus on practical application
                    through industry-relevant projects and collaborative
                    development.
                  </p>
                </div>
              </div>

              {/* High School - Canada */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float animate-delay-200">
                  <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
                    High School Diploma
                  </h3>
                  <p className="text-xl text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                    Urban International School
                  </p>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    Toronto, Ontario, Canada
                  </p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Completed high school education in an international
                    environment in Canada. Gained valuable cross-cultural
                    experience, developed strong English proficiency, and built
                    a solid academic foundation that prepared me for
                    university-level software engineering studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.skills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-4xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 group animate-card-float">
                <h3 className="text-xl font-bold text-red-500 mb-4 group-hover:text-red-400 transition-colors duration-300">
                  Frontend
                </h3>
                <div className="space-y-3">
                  {[
                    "React/Next.js",
                    "JavaScript/TypeScript",
                    "HTML5/CSS3",
                    "Tailwind CSS",
                  ].map((skill, i) => (
                    <div
                      key={skill}
                      className={`flex items-center group-hover:translate-x-2 transition-transform duration-300 transition-delay-${i}`}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 group animate-card-float"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-bold text-red-500 mb-4 group-hover:text-red-400 transition-colors duration-300">
                  Backend
                </h3>
                <div className="space-y-3">
                  {[
                    "Node.js/Express",
                    "Python/Django",
                    "Java/Spring",
                    "Database Design",
                  ].map((skill, i) => (
                    <div
                      key={skill}
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 group animate-card-float"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-xl font-bold text-red-500 mb-4 group-hover:text-red-400 transition-colors duration-300">
                  Tools & Others
                </h3>
                <div className="space-y-3">
                  {["Git/GitHub", "Docker", "AWS/Azure", "Agile/Scrum"].map(
                    (skill, i) => (
                      <div
                        key={skill}
                        className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 bg-gradient-to-l from-red-900/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-12">
              <Briefcase className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-4xl font-bold">Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Syntax Society Studio */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float">
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
                  <a
                    href="https://syntax-society-studio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group-hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:text-black" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors duration-300">
                  Syntax Society Studio
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  A modern web development studio showcase featuring
                  contemporary design and interactive elements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Web Design
                  </span>
                </div>
              </div>

              {/* AI Voice Assistant */}
              <div
                className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
                  <a
                    href="https://github.com/F4P1E/AI-Voice-Assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group-hover:scale-110"
                  >
                    <Github className="w-4 h-4 group-hover:text-black" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors duration-300">
                  AI Voice Assistant
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  An intelligent voice assistant application with AI integration
                  for natural language processing and speech recognition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Voice Recognition
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Python
                  </span>
                </div>
              </div>

              {/* Meta Frontend Developer Project */}
              <div
                className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
                  <a
                    href="https://meta-frontend-developer-project.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group-hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:text-black" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors duration-300">
                  Meta Frontend Developer
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  A comprehensive frontend project showcasing modern React
                  development practices and responsive design principles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Frontend
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Responsive
                  </span>
                </div>
              </div>

              {/* MERN Note App */}
              <div
                className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
                  <a
                    href="https://mern-note-app-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group-hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:text-black" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors duration-300">
                  MERN Note App
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  A full-stack note-taking application built with the MERN
                  stack, featuring user authentication and CRUD operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Express
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>

              {/* Coursera Project API */}
              <div
                className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
                  <a
                    href="https://f4p1e.github.io/Coursera-Project-API/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group-hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:text-black" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors duration-300">
                  Coursera Project API
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  An API integration project demonstrating data fetching,
                  processing, and display with modern JavaScript techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    API
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Web Dev
                  </span>
                </div>
              </div>

              {/* Culture Canvas */}
              <div
                className="bg-gray-900/50 p-6 rounded-lg border border-red-900/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group animate-card-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-red-500 group-hover:animate-pulse" />
                  <a
                    href="https://github.com/F4P1E/Culture-Canvas-COSC2769-Full-Stack-Development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group-hover:scale-110"
                  >
                    <Github className="w-4 h-4 group-hover:text-black" />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors duration-300">
                  Culture Canvas
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  A full-stack development project for COSC2769, showcasing
                  comprehensive web application development skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Full-Stack
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    RMIT Project
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                    Web App
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-12">
              <Mail className="w-8 h-8 text-red-500 mr-4" />
              <h2 className="text-4xl font-bold">Get In Touch</h2>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities, collaborations,
                or just having a chat about technology. Feel free to reach out!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center px-8 py-4 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    title="GitHub"
                    className="p-3 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group"
                  >
                    <Github className="w-6 h-6 group-hover:text-black" />
                  </a>
                  <a
                    href="#"
                    className="p-3 border border-red-500 rounded-full hover:bg-red-500 transition-colors duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 group-hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-red-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Duong Phu Dong. Built with React & Tailwind CSS.
          </p>
        </div>
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          @keyframes card-float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }

          .animate-slide-up {
            animation: slide-up 1s ease-out 0.2s both;
          }

          .animate-slide-up-delay {
            animation: slide-up 1s ease-out 0.4s both;
          }

          .animate-slide-up-delay-2 {
            animation: slide-up 1s ease-out 0.6s both;
          }

          .animate-float {
            animation: float linear infinite;
          }

          .animate-card-float {
            animation: card-float 3s ease-in-out infinite;
          }

          .animate-delay-200 {
            animation-delay: 0.2s !important;
          }

          .transition-delay-0 {
            transition-delay: 0ms !important;
          }
          .transition-delay-1 {
            transition-delay: 50ms !important;
          }
          .transition-delay-2 {
            transition-delay: 100ms !important;
          }
          .transition-delay-3 {
            transition-delay: 150ms !important;
          }
          .transition-delay-4 {
            transition-delay: 200ms !important;
          }
          .transition-delay-5 {
            transition-delay: 250ms !important;
          }
          .transition-delay-6 {
            transition-delay: 300ms !important;
          }
          .transition-delay-7 {
            transition-delay: 350ms !important;
          }
          .transition-delay-8 {
            transition-delay: 400ms !important;
          }
          .transition-delay-9 {
            transition-delay: 450ms !important;
          }
          .transition-delay-10 {
            transition-delay: 500ms !important;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Portfolio;
