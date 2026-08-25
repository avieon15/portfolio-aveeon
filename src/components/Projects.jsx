const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my projects and skills.",
    tags: ["React", "Tailwind CSS", "Vite"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "A short description of your second project goes here. Explain what it does and the tech used.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "A short description of your third project goes here. Explain what it does and the tech used.",
    tags: ["React", "API"],
    link: "#",
  },
  {
    title: "Project Four",
    description:
      "A short description of your fourth project goes here. Explain what it does and the tech used.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen scroll-mt-20 items-center justify-center bg-slate-950 px-4 py-20 sm:px-6 md:px-16"
    >
      <div className="max-w-6xl w-full">
        <p className="text-sky-500 font-medium mb-2 text-center">
          My Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20 active:-translate-y-1 active:border-sky-500 active:shadow-lg active:shadow-sky-500/20"
            >
              <div className="flex h-40 w-full items-center justify-center bg-linear-to-br from-slate-800 to-slate-900 transition-colors duration-300 group-hover:from-sky-500 group-hover:to-sky-600">
                <span className="text-4xl font-bold text-sky-400 opacity-30 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-sky-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-slate-800 text-sky-400 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-sm font-medium text-sky-400 transition-colors group-hover:text-sky-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;