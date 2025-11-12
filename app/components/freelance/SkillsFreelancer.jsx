const SkillCard = ({title, items, color}) => (
  <div className="relative p-6 rounded-xl overflow-hidden group hover:shadow-xl transition">
    <div className={`absolute inset-0 transform -translate-y-6 group-hover:translate-y-0 transition duration-700 opacity-30 bg-gradient-to-br ${color}`} aria-hidden />
    <div className="relative">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {items.slice(0,5).map((i, idx) => (
          <span key={idx} className="text-xs bg-white/6 px-2 py-1 rounded">{i}</span>
        ))}
      </div>

      <div className="space-y-3">
        {items.map((s, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="w-2/5 text-gray-200">{s}</div>
            <div className="w-3/5 ml-3 bg-white/5 h-2 rounded overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-violet-400 to-cyan-300 rounded" style={{ width: `${60 + (i * 5) % 35}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function SkillsFreelancer(){
  const graphic = ['Logo Design','Branding','Poster & Flyer','Social Media Assets','Figma/Illustrator','Layout','Typography']
  const video = ['Video Editing','Color Grading','Motion Graphics','YouTube/Shorts','Premiere Pro','After Effects']
  const web = ['Responsive Websites','Next.js','React','Tailwind CSS','Accessibility','Performance']

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
        <p className="text-gray-300 mb-6">Design, video and web skills tailored for freelance projects — presented with quick-read visuals so clients can scan your strengths.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard title="Graphic Design" items={graphic} color="from-pink-500 to-violet-500" />
          <SkillCard title="Video Editing" items={video} color="from-yellow-400 to-orange-500" />
          <SkillCard title="Web Development" items={web} color="from-cyan-400 to-blue-600" />
        </div>
      </div>
    </section>
  )
}
