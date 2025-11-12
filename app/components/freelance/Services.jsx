export default function Services(){
  const services = [
    {id:1, title:'Website Design & Development', desc:'Landing pages, brochure sites, e-commerce (small), fast & accessible.'},
    {id:2, title:'Graphic Design', desc:'Logos, branding, social assets, print-ready artwork.'},
    {id:3, title:'Video Editing', desc:'Shorts, YouTube edits, color grading, motion graphics.'}
  ]

  return (
    <section id="services" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Services</h2>
            <p className="text-gray-300 mt-2 max-w-xl">Premium design, video and web services—crafted for impact. Choose a ready package or request a custom quote.</p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 rounded-full bg-white/6 text-white">Request Quote</button>
            <a href="#contact" className="px-4 py-2 rounded-full bg-violet-600 text-white">Hire Me</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.id} className={`relative overflow-hidden rounded-2xl p-6 text-white transform transition hover:-translate-y-2`}>
              <div className={`absolute -top-8 -right-12 w-56 h-56 rounded-full opacity-20 ${i===0? 'bg-violet-500' : i===1? 'bg-pink-500' : 'bg-cyan-400'}`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center text-2xl">{i===0? '🌐' : i===1? '🎨' : '🎬'}</div>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                  </div>
                  <div className="text-sm text-gray-300">Starting at</div>
                </div>

                <p className="mt-4 text-gray-200">{s.desc}</p>

                <ul className="mt-4 text-sm text-gray-300 space-y-2">
                  <li>• Fast turnaround on small projects</li>
                  <li>• Revisions included</li>
                  <li>• Source files & documentation</li>
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-block bg-white/6 px-3 py-2 rounded-full text-sm">Basic</span>
                  <a href="#contact" className="ml-auto px-4 py-2 rounded-full bg-white text-black font-medium">Get Started</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
