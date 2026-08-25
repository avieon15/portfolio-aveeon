function About() {
  const cards = [
    {
      number: "1",
      title: "Frontend Developer",
      description: "3+ Projects",
    },
    {
      number: "2",
      title: "UI/UX Design",
      description: "6+ Projects",
    },
    {
      number: "3",
      title: "Problem Solving",
      description: "Ongoing Learning",
    },
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-20 items-center justify-center bg-slate-950 px-4 py-20 sm:px-6 md:px-16"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-16 grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-sky-500">
              About
            </p>

            <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-3xl">
              Get to know me better.
            </h2>

            <p className="mb-6 leading-relaxed text-slate-400">
              I'm Avion Rizki Syafino, a Frontend Developer and UI/UX
              enthusiast who enjoys building modern, responsive, and
              interactive web applications.
            </p>

            <a
              href="mailto:hi@avion.com"
              className="inline-flex items-center gap-2 font-medium text-sky-500 hover:underline"
            >
              hi avion082@gmail.com
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold leading-snug text-white md:text-2xl">
              I turn ideas into clean, functional, and user-friendly
              interfaces.
            </h3>

            <p className="mb-8 leading-relaxed text-slate-400">
              Passionate about learning new technologies and continuously
              improving my skills to build better digital experiences.
            </p>

            <div className="flex gap-10">
              <div>
                <span className="text-3xl font-bold text-sky-500 md:text-4xl">
                  2+
                </span>
                <p className="mt-1 text-sm text-slate-400">Years Learning</p>
              </div>

              <div>
                <span className="text-3xl font-bold text-sky-500 md:text-4xl">
                  10+
                </span>
                <p className="mt-1 text-sm text-slate-400">Projects Built</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group flex h-40 cursor-pointer flex-col justify-between rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/20 active:-translate-y-1 active:border-sky-400 active:bg-sky-500 focus-within:ring-2 focus-within:ring-sky-500"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 font-bold text-sky-400 transition-colors duration-300 group-hover:bg-white group-hover:text-sky-500">
                {card.number}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white">
                  {card.title}
                </h4>

                <p className="mt-1 text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-100">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 font-semibold text-white">Skills</h3>

          <div className="flex flex-wrap justify-center gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-sky-500 transition-colors hover:border-sky-500 hover:bg-slate-700 active:border-sky-500"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;