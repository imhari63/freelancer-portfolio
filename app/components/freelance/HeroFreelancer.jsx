import Link from 'next/link'

export default function HeroFreelancer(){
  return (
    <section id="hero" className="relative overflow-hidden py-16 md:py-28 lg:py-36">
      {/* decorative gradient blobs */}
      <div className="absolute -left-24 -top-24 w-72 h-72 bg-gradient-to-br from-pink-500 to-violet-600 rounded-full opacity-30 blur-3xl transform rotate-12" aria-hidden />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full opacity-20 blur-3xl" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">Hi, I'm Hari —<span className="text-violet-300"> Freelance Designer</span> & <span className="text-cyan-300">Developer</span></h1>

        <p className="mt-4 text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">I craft memorable brands, edit engaging video content, and build performant websites — helping creators and small businesses stand out online.</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="#projects" className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            View My Work
          </Link>

          <Link href="#contact" className="inline-flex items-center gap-3 border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/5 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8V6a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Hire Me
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-300">
          <span>Available for</span>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">Short Term Projects</div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">Long Term Collaborations</div>
        </div>
      </div>
    </section>
  )
}
