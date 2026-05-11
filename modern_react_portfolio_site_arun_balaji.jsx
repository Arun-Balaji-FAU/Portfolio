export default function Portfolio() {
  const skills = {
    Languages: ["Java", "Python", "C++", "JavaScript", "C"],
    Backend: ["Spring Boot", "REST APIs", "Microservices", "Hibernate"],
    Frontend: ["React", "HTML", "CSS"],
    Databases: ["MySQL", "Redis"],
    AI: ["TensorFlow", "Keras", "OpenCV", "YOLOv3"],
    Tools: ["Git", "GitHub", "Postman", "IntelliJ", "VS Code"]
  };

  const projects = [
    {
      title: "Cloud-Based Fire Detection System",
      tech: "YOLOv3 • Java • OpenCV",
      description:
        "Developed a real-time fire detection system using object detection models for complex scene analysis.",
    },
    {
      title: "CNN Music Notation Conversion",
      tech: "TensorFlow • Keras • Python",
      description:
        "Built a CNN-based system to convert Western musical notation into Carnatic notation.",
    },
    {
      title: "Certification Management System",
      tech: "PHP • MySQL • XAMPP",
      description:
        "Designed a secure web-based platform for certificate storage, retrieval, and management.",
    },
  ];

  const experience = [
    {
      company: "Cognizant – Bayer",
      role: "Software Engineer",
      duration: "Feb 2024 – Nov 2024",
      points: [
        "Provided L2/L3 support for enterprise Java applications with 95%+ SLA compliance.",
        "Debugged backend systems and analyzed production incidents.",
        "Validated MySQL workflows and supported deployment health checks.",
      ],
    },
    {
      company: "Cognizant – VMware",
      role: "Software Engineer",
      duration: "Jul 2022 – Jan 2024",
      points: [
        "Developed HelpNow+ internal helpdesk portal using Spring Boot and React.",
        "Integrated REST APIs and improved backend functionality.",
        "Worked in Agile teams supporting enterprise software delivery.",
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Arun Balaji</h1>
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/20 blur-3xl"></div>

        <div className="relative text-center max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-5">
            Software Engineer • AI Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building <span className="text-blue-400">Scalable</span>
            <br />
            Software & Intelligent Systems
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Java backend engineer with enterprise experience at Cognizant,
            currently pursuing a Master’s in Computer Science at Florida Atlantic University with a focus on AI and machine learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold shadow-2xl"
            >
              View Projects
            </a>

            <a
              href="https://www.linkedin.com/in/arun-balaji-ravichandran/"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">About Me</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Enterprise Software Engineer with AI-Focused Vision
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in backend development, enterprise application support,
              REST API integration, and scalable software systems. My experience includes
              production support, debugging large-scale Java applications, and developing
              full-stack enterprise portals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400">2+</h3>
              <p className="text-gray-300 mt-2">Years Experience</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400">Java</h3>
              <p className="text-gray-300 mt-2">Backend Development</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400">AI</h3>
              <p className="text-gray-300 mt-2">ML & Deep Learning</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400">FAU</h3>
              <p className="text-gray-300 mt-2">MS Computer Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white/[0.03] py-24 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4 text-center">
            Technical Expertise
          </p>

          <h2 className="text-4xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-black/40 border border-white/10 rounded-3xl p-8 hover:border-blue-400/40 transition"
              >
                <h3 className="text-xl font-semibold mb-5 text-blue-300">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4 text-center">
          Featured Work
        </p>

        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:translate-y-[-5px] transition duration-300"
            >
              <div className="h-2 w-16 bg-blue-400 rounded-full mb-6"></div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition">
                {project.title}
              </h3>

              <p className="text-blue-300 text-sm mb-5">{project.tech}</p>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white/[0.03] py-24 px-6 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-4 text-center">
            Career Journey
          </p>

          <h2 className="text-4xl font-bold text-center mb-16">
            Professional Experience
          </h2>

          <div className="space-y-10">
            {experience.map((job) => (
              <div
                key={job.company}
                className="bg-black/40 border border-white/10 rounded-3xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{job.company}</h3>
                    <p className="text-blue-300 mt-1">{job.role}</p>
                  </div>

                  <p className="text-gray-400 mt-3 md:mt-0">{job.duration}</p>
                </div>

                <ul className="space-y-3 text-gray-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-blue-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
          Let’s Connect
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Ready to Build Something Great?
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Open to software engineering opportunities, backend development roles,
          and AI-focused projects.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <a
            href="mailto:arunbalaji1200@gmail.com"
            className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold"
          >
            arunbalaji1200@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/arun-balaji-ravichandran/"
            target="_blank"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition font-semibold"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © 2026 Arun Balaji Ravichandran. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
