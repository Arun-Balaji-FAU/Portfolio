const skills = {
  "Programming Languages": ["Java", "Python", "C++", "JavaScript", "C"],
  "Frameworks & Technologies": ["Spring Boot", "React", "REST APIs", "Microservices", "Hibernate"],
  Databases: ["MySQL", "Redis"],
  "AI / Machine Learning": ["TensorFlow", "Keras", "OpenCV", "CNN", "YOLOv3"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Google Colab", "XAMPP"],
};

const experiences = [
  {
    company: "Cognizant Technology Solutions",
    client: "Bayer",
    role: "Software Engineer",
    period: "Feb 2024 – Nov 2024",
    points: [
      "Provided L2/L3 production support for enterprise Java applications with 95%+ SLA compliance.",
      "Debugged application issues, performed code-level analysis, and worked with development teams on fixes.",
      "Supported UI issues, validated frontend functionality, and resolved frontend-backend integration issues.",
      "Worked with MySQL queries, data validation, backend data flows, and application workflow troubleshooting.",
      "Performed post-deployment validation, health checks, release support, and production monitoring.",
      "Collaborated in Agile teams using ServiceNow and IntelliJ IDEA for issue tracking and debugging.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    client: "VMware",
    role: "Software Engineer",
    period: "Jul 2022 – Jan 2024",
    points: [
      "Developed and maintained HelpNow+, an internal helpdesk portal using Java, Spring Boot, and REST APIs.",
      "Implemented backend logic, handled debugging, and supported production issues to improve performance.",
      "Built responsive UI components using React, HTML, and CSS.",
      "Integrated frontend interfaces with backend APIs for smooth service-request workflows.",
      "Managed MySQL data operations including query execution, validation, storage, and retrieval.",
      "Supported deployment, testing, validation, sprint-based development, and continuous delivery processes.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    client: "Internship",
    role: "Software Engineer Intern",
    period: "Jan 2022 – Jul 2022",
    points: [
      "Developed backend services using Java and Spring Boot with business logic and REST APIs.",
      "Built UI components using React, HTML, and CSS to improve usability and user experience.",
      "Integrated frontend pages with backend services for dynamic application functionality.",
      "Worked with XAMPP and local deployment environments for testing and validation.",
      "Supported deployment, debugging, structured reviews, and team-based project delivery.",
    ],
  },
];

const projects = [
  {
    title: "Cloud-Based Fire Detection System",
    period: "Aug 2021 – Apr 2022",
    description:
      "Developed a real-time object detection system using YOLOv3, Java, Darknet, LabelImg, and Google Colab to detect fire in complex scenes.",
    tags: ["YOLOv3", "Java", "Darknet", "Google Colab"],
  },
  {
    title: "CNN-Based Music Notation Conversion System",
    period: "Sep 2019 – Mar 2020",
    description:
      "Created a CNN model to convert Western musical notation into Carnatic notation using Python, TensorFlow, Keras, NumPy, and OpenCV.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
  },
  {
    title: "Certification Management System",
    period: "Aug 2020 – Jun 2021",
    description:
      "Built a web-based certificate storage and retrieval system using PHP, MySQL, HTML, CSS, and XAMPP for secure document management.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
  },
];

const certifications = [
  "IoT and Drones workshop from leadingindia.ai and Bennett University",
  "Hands-on Augmented and Virtual Reality workshop",
  "Udemy certifications in Java 8, Highly Scalable Systems, HTML5, and CSS3",
];

function Chip({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">{children}</span>;
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight">Arun Balaji</a>
          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="flex min-h-screen items-center justify-center px-6 pt-20 text-center">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-blue-300">Software Engineer • Backend Developer • AI Enthusiast</p>
          <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">Building Scalable Java Applications and AI-Driven Software</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
            Software Engineer with 2+ years of experience in Java, Spring Boot, REST APIs, MySQL, React, production support, and enterprise software solutions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#experience" className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-400">View Experience</a>
            <a href="#contact" className="rounded-2xl border border-white/15 px-8 py-4 font-semibold text-gray-200 transition hover:bg-white/10">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">About Me</p>
            <h2 className="mb-6 text-4xl font-bold">Software Engineer with enterprise support and development experience</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              I have hands-on experience in Java-based application development, production support, backend debugging, REST API development, MySQL data validation, and frontend integration. I am currently pursuing a Master of Science in Computer Science at Florida Atlantic University with AI-focused coursework in Machine Learning, Deep Learning, NLP, and Data Mining.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-6 text-2xl font-bold">Education</h3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-white">Master of Science in Computer Science</p>
                <p className="text-gray-300">Florida Atlantic University</p>
                <p className="text-sm text-gray-400">2025 – Present</p>
                <p className="mt-2 text-sm text-gray-300">AI-focused coursework: Machine Learning, Deep Learning, NLP, Data Mining</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-white">Bachelor’s in Computer Science</p>
                <p className="text-gray-300">Sri Ramakrishna Engineering College</p>
                <p className="text-sm text-gray-400">2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Skills</p>
          <h2 className="mb-12 text-center text-4xl font-bold">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <h3 className="mb-5 text-xl font-semibold text-blue-300">{category}</h3>
                <div className="flex flex-wrap gap-3">{items.map((item) => <Chip key={item}>{item}</Chip>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Experience</p>
        <h2 className="mb-12 text-center text-4xl font-bold">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((job) => (
            <article key={`${job.client}-${job.period}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="text-2xl font-bold">{job.role}</h3>
                  <p className="text-blue-300">{job.company} — {job.client}</p>
                </div>
                <p className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">{job.period}</p>
              </div>
              <ul className="grid gap-3 text-gray-300 md:grid-cols-2">
                {job.points.map((point) => <li key={point} className="leading-relaxed">• {point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Projects</p>
          <h2 className="mb-12 text-center text-4xl font-bold">Academic Projects</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-black/30 p-8">
                <p className="mb-3 text-sm text-gray-400">{project.period}</p>
                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 md:p-10">
          <h2 className="mb-6 text-3xl font-bold">Certifications & Workshops</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-5 text-gray-300">{item}</div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-3 text-3xl font-bold">Let’s Connect</h2>
            <p className="text-gray-300">Open to software engineering, backend development, production support, and AI-driven application roles.</p>
          </div>
          <div className="space-y-2 text-gray-300 md:text-right">
            <p><a className="hover:text-white" href="mailto:arunbalaji1200@gmail.com">arunbalaji1200@gmail.com</a></p>
            <p><a className="hover:text-white" href="tel:+14846920141">+1 (484) 692-0141</a></p>
            <p><a className="hover:text-white" href="https://www.linkedin.com/in/arun-balaji-ravichandran/" target="_blank">LinkedIn Profile</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
