"use client"

import { useState, useMemo } from 'react'
import { projectsData } from '@/utils/data/projects-data'
import Image from 'next/image'

function Card({project}){
  const hasImage = project.image 
  const hasVideo = project.video

  return (
    <article className="bg-gradient-to-br from-[#07102a] to-[#08102a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition transform">
      <div className="relative h-48 md:h-56 lg:h-44">
        {hasImage ? (
          <Image  className="object-cover w-full h-full cursor-pointer" />
            <
        ) : hasVideo ? (
          <video className="object-cover w-full h-full cursor-pointer" muted loop>
            <source src={project.video} />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet-700 to-cyan-500 flex items-center justify-center text-white">{project.name}</div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-white mb-1">{project.name}</h3>
        <p className="text-sm text-gray-300 mb-3 line-clamp-3">{project.description}</p>
        <div className="flex items-center gap-2">
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-violet-600 rounded">Live</a>}
          {project.code && <a href={project.code} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border rounded">Code</a>}
          <div className="ml-auto text-xs text-gray-400">{project.tools?.slice(0,3).join(' • ')}</div>
        </div>
      </div>
    </article>
  )
}

export default function PortfolioShowcase(){
  const [filter, setFilter] = useState('all')

  const filters = ['all','images','videos','websites']

  const items = useMemo(() => {
    if(filter === 'all') return projectsData
    if(filter === 'images') return projectsData.filter(p => p.image)
    if(filter === 'videos') return projectsData.filter(p => p.video)
    if(filter === 'websites') return projectsData.filter(p => p.demo)
    return projectsData
  }, [filter])

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold mb-0 text-white">Portfolio</h2>
          <nav className="flex gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-violet-400 hover:bg-violet-400 hover:text-white transition-colors duration-150 border border-dashed border-violet-300 pointer-events-auto ${filter===f? 'bg-violet-600 text-white' : 'bg-white/5 text-gray-200'}`}
                aria-label={`Show ${f} projects`}
                role="button"
              >
                {f.charAt(0).toUpperCase()+f.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
