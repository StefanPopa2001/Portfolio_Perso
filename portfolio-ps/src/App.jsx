"use client"

import { useState } from "react"
import {
  Mail,
  MapPin,
  Phone,
  Car,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Globe,
  Menu,
  X,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react"

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold tracking-tight">Stefan Popa</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]">
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left text-gray-400 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Industrial Computing
            <br />
            <span className="text-gray-400">Specialist</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Bridging technology and industrial automation through innovative solutions. Specializing in system
            integration, PLC programming, and full-stack development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="px-8 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors"
            >
              View Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Motivated industrial computing specialist with a proven track record in system administration, software
                development, and automation solutions. Currently pursuing advanced studies in industrial computing with
                a focus on systems and networks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionate about leveraging technology to solve complex industrial challenges, with hands-on experience
                in PLC programming, SCADA systems, and full-stack development. Committed to delivering scalable,
                efficient solutions that drive operational excellence.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Globe size={18} />
                  Languages
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "French", level: "Native", width: "100%" },
                    { name: "Romanian", level: "Native", width: "100%" },
                    { name: "English", level: "Professional (C1)", width: "85%" },
                    { name: "Dutch", level: "Basic (A1)", width: "25%" },
                  ].map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-gray-500">{lang.level}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all duration-1000"
                          style={{ width: lang.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
              <Briefcase size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "System Administrator & Webmaster",
                company: "Code it Bryan!",
                period: "Nov 2023 - Present",
                description:
                  "Architected and maintained comprehensive digital infrastructure for an educational institution serving 200+ students and faculty. Implemented scalable systems for enhanced operational efficiency.",
                tag: "Current",
                tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
              },
              {
                title: "Computer Science Instructor",
                company: "Logiscool",
                period: "Nov 2021 - Present",
                description:
                  "Delivered engaging instruction in computer science fundamentals and AI technologies. Developed curriculum materials and mentored students in programming concepts.",
                tag: "Part-time",
                tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
              },
              {
                title: "R&D Software Development Intern",
                company: "Aproove",
                period: "Feb 2023 - Jun 2023",
                description:
                  "Engineered Adobe plugin for real-time geometric data communication. Prototyped innovative 3D web proofing system, demonstrating strong problem-solving and technical skills.",
                tag: "Internship",
                tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
              },
              {
                title: "Software Development Intern",
                company: "AGC Moustier",
                period: "Jun 2022 - Jul 2022",
                description:
                  "Expanded data analytics capabilities across multiple AGC facilities in Belgium. Created executive dashboards for commercial operations, improving data-driven decision making.",
                tag: "Internship",
                tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="group p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-gray-400">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 text-xs font-medium border rounded-full ${job.tagColor}`}>
                      {job.tag}
                    </span>
                    <span className="text-sm text-gray-500">{job.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
              <Code size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Industrial Computing</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "PLC Programming",
                    "SCADA Systems",
                    "Industrial Networks",
                    "Automation",
                    "IoT",
                    "Embedded Systems",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Programming & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "Java",
                    "C++",
                    "React",
                    "Node.js",
                    "Express",
                    "Django",
                    "Spring Boot",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Databases & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Azure", "Linux", "Windows Server"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Soft Skills & Tools */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Project Management</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git/GitLab", "Agile", "Scrum", "Kanban", "Jira", "Trello", "Notion"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-300">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Team Collaboration",
                    "Technical Communication",
                    "Adaptability",
                    "Project Leadership",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap size={18} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium">Bachelor in Industrial Computing</div>
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs">
                        Current
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 mb-1">Haute École Louvain en Hainaut</div>
                    <div className="text-xs text-gray-500">Expected 2026</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="font-medium mb-2">Bachelor in Management Computing</div>
                    <div className="text-sm text-gray-400 mb-1">Haute École Louvain en Hainaut</div>
                    <div className="text-xs text-gray-500">Graduated 2023 - Upper Class Honors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
              <Award size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                year: "2025",
                title: "WorldSkills Industry 4.0 Championship",
                description:
                  "Selected for prestigious international competition showcasing industrial automation expertise",
                icon: "🏆",
              },
              {
                year: "2024",
                title: "Tech Goes Wild Hackathon",
                description: "Podium finish and Microsoft Jury's Award for innovative technical solution",
                icon: "🥇",
              },
              {
                year: "2023",
                title: "Student Entrepreneur",
                description:
                  "Established freelance software development practice, delivering solutions to multiple clients",
                icon: "🚀",
              },
              {
                year: "2023",
                title: "Dev vs Wild Hackathon",
                description: "Competed at Microsoft Innovation Center, demonstrating rapid prototyping skills",
                icon: "💻",
              },
              {
                year: "2022",
                title: "Space Office Hackathon",
                description: "Participated in Microsoft Innovation Center innovation challenge",
                icon: "🌌",
              },
              {
                year: "2022",
                title: "Academic Recognition",
                description: "Project selected for implementation in HELHa Mons accounting department",
                icon: "⭐",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-400">{achievement.year}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Open to discussing opportunities in industrial computing, automation, and software development. Let's
              connect and explore how we can collaborate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <a
              href="mailto:popa.stefan.pro@gmail.com"
              className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div className="font-medium">popa.stefan.pro@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+32486065045"
              className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:bg-white/[0.04] hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Phone</div>
                <div className="font-medium">+32 486 06 50 45</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-lg">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Location</div>
                <div className="font-medium">Soignies, Belgium</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-lg">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <Car size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Mobility</div>
                <div className="font-medium">Driver's License + Vehicle</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:popa.stefan.pro@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              Send Message
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© 2025 Stefan Popa. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
