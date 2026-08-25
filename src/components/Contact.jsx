function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen scroll-mt-20 items-center justify-center bg-[#0a0f1c] px-4 py-20 sm:px-6 md:px-16"
    >
      <div className="w-full max-w-2xl text-center">
        <p className="mb-2 font-medium text-sky-400">Get In Touch</p>

        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Contact
        </h2>

        <p className="mb-10 leading-relaxed text-slate-400">
          Do you have a project you'd like to work on or just want to say hello?
          Don't hesitate to contact me.
        </p>

        <form
          action="https://formsubmit.co/roxiyt082@gmail.com"
          method="POST"
          className="grid grid-cols-1 gap-4 text-left"
        >
          <input type="hidden" name="_subject" value="Pesan Baru dari Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="mb-1 block text-sm text-slate-400">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-slate-800 bg-[#111827] px-4 py-3 text-white transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full rounded-lg border border-slate-800 bg-[#111827] px-4 py-3 text-white transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-400">
              Message
            </label>

            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="w-full rounded-lg border border-slate-800 bg-[#111827] px-4 py-3 text-white transition-colors focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-sky-500 py-3 font-medium text-white transition hover:bg-sky-600 active:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;