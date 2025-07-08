"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Brain,
  Trophy,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: ["JavaScript","Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3","Bootstrap","Material UI","Figma"],
    backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "PostgreSQL", "REST APIs","JWT","Stripe","NextAuth"],
    dataScience: ["Python", "Pandas", "NumPy", "Data Analysis", "Machine Learning","Keras","TensorFlow"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Vercel","Tableplus","Windsurf","Cursor","Trae"],
  }

  const projects = [
    {
      title: "AI-Powered Crud Agent",
      description: "A full-stack task management application with AI-powered task prioritization and smart scheduling.",
      tech: ["Python", "FastAPI", "MongoDB", "OpenAI API"],
      status: "Featured",
      link: "https://github.com/bilal-157/mongo_crud_agent"
    },
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Express.js", "MongoDB", "Node.js", "Stripe", "JWT"],
      status: "Live",
      link: "https://exommer.netlify.app",
      Github: "https://github.com/bilal-157/SA-final-year-project"
    },
    {
      title: "Code Documentation Generator",
      description: " AI-powered tool that automatically generates comprehensive documentation for codebases.",
      tech: ["Python", "FastAPI", "OpenAI API", "TRAE-IDE"],
      status: "Live",
      link: "https://code-documentation-generator-dusky.vercel.app",
      Github: "https://github.com/bilal-157/Code-Documentation-Generator"
    },
    {
      title: "Inquisitor AI",
      description: " AI-powered interview simulator that generates personalized technical questions, evaluates responses in real-time, and provides actionable feedback to help  candidates master technical interviews.",
      tech: ["Next.js", "OpenAI API", "HuggingFace API"],
      status: "Live",
      link: "https://inquisitorai.netlify.app",
      Github: "https://github.com/bilal-157/question-quest-ai-forge"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive hospital administration solution featuring patient records management, doctor scheduling, appointment systems, and medical inventory tracking with SQL database integration and Windows Forms UI.",
      tech: ["C#", "PostgreSQL", "Windows Forms", "SDK", ".Net", "win-Forms"],
      status: "Featured",
      Github: "https://github.com/bilal-157/Hospital-management-csharp"
    },
    {
      title: "UI Basket Dreams - Modern E-Commerce Platform",
      description: "A full-featured e-commerce application developed in collaboration with Lovable.tool, showcasing a complete shopping experience with product browsing, cart functionality, and seamless checkout flow. Built with modern UI/UX principles, this platform demonstrates my ability to implement complex e-commerce functionality while maintaining an intuitive user interface.",
      tech: ["Typescript","Nextjs","Loveable"],
      status: "Live",
      link: "https://preview--ui-basket-dreams.lovable.app/",
      Github: "https://github.com/bilal-157/ui-basket-dreams"
    },

    {
      title: "Number Guessing Game",
      description: "A simple yet engaging C# console game where players guess a randomly generated number between 1 and 15. Features score tracking, hints (higher/lower), and replayability with a clean, user-friendly interface. Built to demonstrate core programming concepts like loops, conditionals, and random number generation. (I kept it concise while highlighting the game mechanics, educational purpose, and technical implementation.) ",
      tech: ["C#","Win-Forms",".Net"],
      status: "Featured",
      Github: "https://github.com/bilal-157/csharp-number-guessing-game"
    },
    

  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-indigo-900">Bilal Rafique</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Experience", "Education", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${activeSection === item.toLowerCase() ? "text-indigo-600" : "text-gray-700"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {["Home", "About", "Skills", "Experience", "Education", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                      ? "text-indigo-600 bg-indigo-50 rounded-md"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
                BR
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Bilal Rafique</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">Full-Stack Developer & AI Enthusiast</p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
                19-year-old BSCS student passionate about building intelligent, scalable, and impactful tech solutions.
                Exploring Agentic AI and solving 100+ LeetCode challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg transition-all hover:shadow-xl"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/muhammadbilal711" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-indigo-600">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://github.com/bilal-157" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-indigo-600">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:rafiqueb087@gmail.com">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-indigo-600">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-indigo-400" />
        </div>
      </section>
{/* About Section */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Passionate about creating innovative solutions that bridge technology and real-world problems
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
        <p className="text-gray-600 mb-4">
          I'm a dedicated Full-Stack Web Developer and Computer Science student at Government College University,
          Faisalabad. My passion lies in building intelligent, scalable applications that make a real impact.
        </p>
        <p className="text-gray-600 mb-4">
          With expertise in modern web technologies like Next.js, Node.js, and MongoDB, I focus on creating
          applications with clean architecture and optimal performance. I'm currently exploring the fascinating
          world of Agentic AI and how autonomous agents can perceive, reason, and act.
        </p>
        <p className="text-gray-600 mb-6">
          When I'm not coding, you'll find me solving algorithmic challenges on LeetCode (100+ problems solved!)
          or participating in hackathons where I love the thrill of rapid prototyping and collaborative
          innovation.
        </p>
        
        {/* Coding Profile Links */}
        <div className="flex flex-wrap gap-3 mt-6">
          <a href="https://leetcode.com/u/Bilal157/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-full transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
            </svg>
            LeetCode
          </a>
          <a href="https://cses.fi/user/340387" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 rounded-full transition-all shadow-sm">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
              </svg>
              CSES
            </a>
          
          <a href="https://codeforces.com/profile/bilal_rafi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
            </svg>
            Codeforces
          </a>
          
          <a href="https://github.com/bilal-157" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full transition-colors">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="hover:shadow-md transition-shadow border-gray-100 group">
          <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
            <CardContent className="p-6 text-center hover:bg-indigo-50 transition-colors rounded-lg">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">100+</h4>
              <p className="text-sm text-gray-600 flex items-center justify-center">
                LeetCode Problems
                <ExternalLink className="w-3 h-3 ml-1 text-indigo-500" />
              </p>
            </CardContent>
          </a>
        </Card>

        <Card className="hover:shadow-md transition-shadow border-gray-100">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Multiple</h4>
            <p className="text-sm text-gray-600">Hackathons</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow border-gray-100">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">AI & ML</h4>
            <p className="text-sm text-gray-600">Enthusiast</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow border-gray-100 group">
          <a href="https://github.com/bilal-157" target="_blank" rel="noopener noreferrer">
            <CardContent className="p-6 text-center hover:bg-indigo-50 transition-colors rounded-lg">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Full-Stack</h4>
              <p className="text-sm text-gray-600 flex items-center justify-center">
                Developer
                <ExternalLink className="w-3 h-3 ml-1 text-indigo-500" />
              </p>
            </CardContent>
          </a>
        </Card>
      </div>
    </div>
  </div>
</section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">Technologies and tools I use to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-indigo-600" />
                  </div>
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
                    <Database className="w-4 h-4 text-indigo-600" />
                  </div>
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-indigo-600" />
                  </div>
                  Data Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.dataScience.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-indigo-600" />
                  </div>
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">Professional journey and internships</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                      Intern - DevelopersHub Corporation©
                    </CardTitle>
                    <CardDescription className="mt-2">
                      March 2025 - Present (5 months) • Punjab, Pakistan
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Current</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Currently working as an intern at DevelopersHub Corporation, gaining hands-on experience in full-stack
                  development, collaborating with senior developers, and contributing to real-world projects using
                  modern web technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">Academic background and qualifications</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  Bachelor of Computer Science
                </CardTitle>
                <CardDescription>
                  Government College University, Faisalabad • October 2023 - October 2027
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Currently pursuing BSCS with focus on software engineering, data structures, algorithms, and
                  artificial intelligence. Actively participating in coding competitions and tech events.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">GPA: 3.8</Badge>
                  <Badge variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">Dean's List</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  FSC Pre-Engineering
                </CardTitle>
                <CardDescription>Govt Municipal Graduate College • April 2021 - April 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">GPA: 3.9</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" />
                  Matriculation
                </CardTitle>
                <CardDescription>Govt Boys High School 209 RB FSD • January 2019 - February 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700 bg-indigo-50 border-indigo-100">GPA: 4.0</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">Some of my recent work and side projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-gray-100 group overflow-hidden"
              >
                <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Code className="w-12 h-12 text-indigo-400" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge
                      variant={project.status === "Featured" ? "default" : "secondary"}
                      className={
                        project.status === "Featured"
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                          : "bg-indigo-100 text-indigo-800"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
  <div className="flex flex-wrap gap-2 mb-4">
    {project.tech.map((tech) => (
      <Badge key={tech} variant="outline" className="text-xs text-gray-700 bg-indigo-50 border-indigo-100">
        {tech}
      </Badge>
    ))}
  </div>
  
  <div className="flex gap-3">
    {/* Demo Link Button - only shows if demoLink exists */}
    {project.link && (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          {project.link.includes('github') ? 'View Code' : 'Live Demo'}
        </Button>
      </a>
    )}
    
    {/* GitHub Link Button - only shows if githubLink exists */}
    {project.Github && (
      <a href={project.Github} target="_blank" rel="noopener noreferrer" className="flex-1">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
      </a>
    )}
    
    {/* Private Project - shows if no links exist */}
    {!project.link && !project.Github && (
      <Button
        variant="outline"
        size="sm"
        className="w-full border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        disabled
      >
        <Code className="w-4 h-4 mr-2" />
        Private Project
      </Button>
    )}
  </div>
</CardContent>             </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600">Let's connect and discuss opportunities for collaboration</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-md transition-shadow border-gray-100">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <a
                      href="mailto:rafiqueb087@gmail.com"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      rafiqueb087@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <a
                      href="tel:+923117299191"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      +92 311 7299191
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-600">Chak No 209 RB Lower Canal Road, Faisalabad, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-indigo-600" />
                    </div>
                    <a
                      href="https://www.linkedin.com/in/muhammadbilal711"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      linkedin.com/in/muhammadbilal711
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-gray-100">
                <CardHeader>
                  <CardTitle>Let's Work Together</CardTitle>
                  <CardDescription>I'm always open to discussing new opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Whether you're looking for a developer for your next project, want to collaborate on something
                    exciting, or just want to chat about technology and AI, I'd love to hear from you!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:rafiqueb087@gmail.com">
                      <Button
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg transition-all hover:shadow-xl w-full"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammadbilal711" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Bilal Rafique</h3>
            <p className="text-indigo-200 mb-6">Full-Stack Developer & AI Enthusiast</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/in/muhammadbilal711" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-indigo-200 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://github.com/bilal-157" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-indigo-200 hover:text-white">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="mailto:rafiqueb087@gmail.com">
                <Button variant="ghost" size="sm" className="text-indigo-200 hover:text-white">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
            <Separator className="bg-indigo-700 mb-6" />
            <p className="text-indigo-300 text-sm">© 2025 Bilal Rafique. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}