"use client"

import { useState, useMemo } from "react"
import { projectsData } from "@/utils/data/projects-data"
import Image from "next/image"

function Card({ project }) {
  const hasImage = project.image && project.image.src
  const hasVideo = project.video

  return (
    <article className="bg-gradient-to-br from-[#07102a] to-[#08102a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition transform group">
      <div className="relative h-48 md:h-56 lg:h-44">
        {hasImage ? (
          <Image
            src={project.image.src}
            alt={project.name}
            fill
            className="object-cover w-full h-full cursor-pointer"
            priority
          />
        ) : hasVideo ? (
          <video
            className="object-cover w-full h-full cursor-pointer"
            muted
            loop
            autoPlay
            playsInline
          >
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet-700 to-cyan-500 flex items-center justify-center text-white text-lg font-medium">
            {project.name}
          </div>
        )}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-white mb-1">{project.name}</h3>
        <p className="text-sm text-gray-300 mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex items-center gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-2 bg-violet-600 hover:bg-violet-700 rounded transition-colors"
            >
              Live
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-2 border border-gray-500 hover:bg-gray-700 rounded transition-colors"
            >
              Code
            </a>
          )}
          <div className="ml-auto text-xs text-gray-400">
            {project.tools?.slice(0, 3).join(" • ")}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState("all")
  const filters = ["all", "images", "videos", "websites"]

  const items = useMemo(() => {
    if (filter === "all") return projectsData
    if (filter === "images") return projectsData.filter((p) => p.image && p.image.src)
    if (filter === "videos") return projectsData.filter((p) => p.video)
    if (filter === "websites") return projectsData.filter((p) => p.demo)
    return projectsData
  }, [filter])

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-semibold text-white">Portfolio</h2>
          <nav className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-sm border border-dashed border-violet-300 transition-colors duration-150 ${
                  filter === f
                    ? "bg-violet-600 text-white"
                    : "bg-white/5 text-gray-200 hover:bg-violet-400 hover:text-white"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
