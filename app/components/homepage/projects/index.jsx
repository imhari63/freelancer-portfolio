"use client"

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaCode, FaPlay, FaTimes, FaEye } from 'react-icons/fa';
import { projectsData } from '@/utils/data/projects-data';

export default function Projects(){
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null) // selected project for modal

  const filters = ['all','images','videos','websites']

  const items = useMemo(() => {
    if(filter === 'all') return projectsData
    if(filter === 'images') return projectsData.filter(p => p.image || p.img)
    if(filter === 'videos') return projectsData.filter(p => p.video)
    if(filter === 'websites') return projectsData.filter(p => p.demo)
    return projectsData
  }, [filter])

  useEffect(() => {
    function onKey(e){
      if(e.key === 'Escape') setActive(null)
    }
    if(active) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">PROJECTS</span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded-full text-sm ${filter===f? 'bg-violet-600 text-white' : 'bg-white/5 text-gray-200'}`}>
                {f.charAt(0).toUpperCase()+f.slice(1)}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-400">Showing {items.length} projects</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 8).map(p => (
            <article key={p.id} onClick={() => setActive(p)} className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1 transition">
              <div className="relative h-52 md:h-44 lg:h-40">
                {p.image || p.img ? (
                  <Image src={p.image?.src || p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition" />
                ) : p.video ? (
                  <video className="object-cover w-full h-full" muted loop>
                    <source src={p.video} />
                  </video>
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-violet-700 to-cyan-500 flex items-center justify-center text-white">{p.name}</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-90" />
                <div className="absolute left-4 bottom-4 z-10">
                  <h3 className="text-lg font-semibold text-white drop-shadow">{p.name}</h3>
                  <div className="text-xs text-gray-300 mt-1 max-w-xs line-clamp-2">{p.description}</div>
                </div>
                <div className="absolute right-4 top-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition">
                  {/* view button opens modal without triggering parent onClick */}
                  <button aria-label="View" onClick={(e)=>{e.stopPropagation(); setActive(p)}} className="px-2 py-1 rounded bg-white/6 text-xs inline-flex items-center gap-2"><FaEye /> View</button>
                  {p.demo && <Link href={p.demo} target="_blank" onClick={(e)=>e.stopPropagation()} className="px-2 py-1 rounded bg-violet-600 text-white text-xs inline-flex items-center gap-2"><FaExternalLinkAlt /> Live</Link>}
                  {p.code && <Link href={p.code} target="_blank" onClick={(e)=>e.stopPropagation()} className="px-2 py-1 rounded bg-white/6 text-xs inline-flex items-center gap-2"><FaCode /> Code</Link>}
                </div>
              </div>

              <div className="p-4 bg-[#061026]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {(p.tools || []).slice(0,3).map((t, i) => (
                      <span key={i} className="text-xs bg-white/6 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400">{p.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative max-w-4xl w-full bg-[#061026] rounded-2xl overflow-hidden">
            <button onClick={() => setActive(null)} className="absolute right-4 top-4 z-20 bg-white/6 p-2 rounded-full"><FaTimes /></button>
            <div className="relative h-96 bg-black">
              {active.image || active.img ? (
                <Image src={active.image?.src || active.img} alt={active.name} fill className="object-contain p-6" />
              ) : active.video ? (
                <video controls className="w-full h-full bg-black">
                  <source src={active.video} />
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl">{active.name}</div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{active.name}</h3>
              <p className="mt-2 text-gray-300">{active.description}</p>
              <div className="mt-4 flex items-center gap-3">
                {active.demo && <a href={active.demo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-violet-600 text-white rounded inline-flex items-center gap-2"><FaExternalLinkAlt /> Live</a>}
                {active.code && <a href={active.code} target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/6 text-white rounded inline-flex items-center gap-2"><FaCode /> Code</a>}
                {active.video && !active.demo && <a href={active.video} target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/6 text-white rounded inline-flex items-center gap-2"><FaPlay /> Demo</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}