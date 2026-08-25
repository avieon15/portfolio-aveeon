import profilePhoto from '../assets/profile.png'

const Home = () => {
  return (
    <section id="home" className="flex min-h-screen scroll-mt-20 items-center bg-slate-950 px-4 pb-16 pt-28 sm:px-6 md:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        <div className="flex flex-col gap-5 text-center md:text-left">
          <p className="text-sky-500 font-medium">Hello, introduce</p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            I am <span className="text-sky-500">Avion Rizki Syafino</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-400 font-medium">
            Frontend Developer & UI/UX Enthusiast
          </h2>

          <p className="text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0">
            I'm a student/developer who enjoys building modern, responsive, and interactive websites. I'm interested in technology, interface design, and web application development.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center md:justify-start">
            <a href="#contact" className="rounded-lg bg-sky-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-sky-700 active:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
              Contact Me
            </a>
            <a href="#projects" className="rounded-lg border border-slate-700 px-6 py-3 text-center font-medium text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-500 active:border-sky-500 active:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
              View Project
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-sky-600/20 blur-3xl rounded-full"></div>
            <img src={profilePhoto} alt="Foto Profil" className="relative h-54 w-54 rounded-full border-4 border-sky-600/30 object-cover shadow-xl transition-transform duration-500 hover:scale-105 active:scale-105 sm:h-64 sm:w-64 md:h-70 md:w-70" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home