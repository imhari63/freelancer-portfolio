export default function Testimonials(){
  const data = [
    {id:1, name:'Dinesh', text:'Delivered an excellent website and great communication.'},
    {id:2, name:'Narayana', text:'Amazing video edits and fast turnaround.'},
    {id:3, name:'Client C', text:'Branding work exceeded expectations.'}
  ]

  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-white">What clients say</h2>
          <div className="text-sm text-gray-400">Trusted by small businesses & creators</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((t, idx) => (
            <div key={t.id} className="relative rounded-2xl p-6 bg-gradient-to-br from-[#061026] to-[#07102a] shadow-lg overflow-hidden">
              <div className="absolute left-4 -top-6 w-20 h-20 rounded-full bg-white/5 blur-2xl opacity-60"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/6 flex items-center justify-center text-xl">{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-400">Verified client</div>
                  </div>
                </div>

                <p className="mt-4 text-gray-200 italic">“{t.text}”</p>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex text-yellow-400">{Array.from({length:5}).map((_,i)=> <span key={i}>★</span>)}</div>
                  <div className="text-xs text-gray-400">Rated 5/5</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
