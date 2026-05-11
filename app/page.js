export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 w-full backdrop-blur-lg bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold">Arun Balaji</h1>

          <nav className="hidden md:flex gap-6 text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-5">
            Software Engineer • AI Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Building Scalable Software
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Java backend engineer with enterprise experience and AI-focused graduate studies.
          </p>

          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold"
          >
            View Projects
          </a>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          Software Engineer with 2+ years of experience in Java-based application development,
          enterprise support, REST APIs, and scalable systems.
        </p>
      </section>

      <section id="skills" className="px-6 py-24 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-5 text-blue-300">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">Java</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">Spring Boot</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">REST APIs</span>
              </div>
            </div>

            <div className="border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-5 text-blue-300">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">React</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">JavaScript</span>
              </div>
            </div>

            <div className="border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-semibold mb-5 text-blue-300">AI/ML</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">TensorFlow</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">YOLOv3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Fire Detection System</h3>
            <p className="text-gray-300">YOLOv3 based real-time fire detection system.</p>
          </div>

          <div className="border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Music Notation CNN</h3>
            <p className="text-gray-300">CNN-based notation conversion system.</p>
          </div>

          <div className="border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-3">Certification Management</h3>
            <p className="text-gray-300">Web-based secure certificate management platform.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
