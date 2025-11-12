"use client"

import { useState, useMemo } from 'react'
import { projectsData } from '@/utils/data/projects-data'

"use client";
import { useState, useMemo } from "react";
import { projectsData } from "@/utils/data/projects-data";
import Image from "next/image";

function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="bg-[#181a2a] rounded-xl p-6 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-white text-xl" onClick={onClose}>&times;</button>
        {project.image?.src ? (
          <Image src={project.image.src} alt={project.name} width={400} height={250} className="rounded-lg mb-4 object-cover" />
        ) : project.video ? (
          <video src={project.video} controls className="rounded-lg mb-4 w-full h-auto" />
        ) : null}
        <h3 className="font-bold text-xl text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tools?.map(tool => (
            <span key={tool} className="px-2 py-1 bg-violet-700 text-white rounded text-xs">{tool}</span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-violet-600 rounded">Live</a>}
          {project.code && <a href={project.code} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border rounded">Code</a>}
        </div>
      </div>
    </div>
  );
}

function Card({ project, onClick }) {
  const hasImage = project.image?.src;
  const hasVideo = project.video;
  return (
    <article className="bg-gradient-to-br from-[#07102a] to-[#08102a] rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition transform group">
      <div className="relative h-48 md:h-56 lg:h-44 cursor-pointer" onClick={onClick}>
        {hasImage ? (
          <Image src={project.image.src} alt={project.name} fill className="object-cover rounded-t-xl group-hover:scale-105 transition" />
        ) : hasVideo ? (
          <video className="object-cover w-full h-full rounded-t-xl group-hover:scale-105 transition" muted loop>
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
          <div className="ml-auto text-xs text-gray-400">{project.tools?.slice(0, 3).join(" • ")}</div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { key: "all", label: "All" },
    { key: "images", label: "Images" },
    { key: "videos", label: "Videos" },
    { key: "websites", label: "Websites" },
  ];

  const items = useMemo(() => {
    if (filter === "all") return projectsData;
    if (filter === "images") return projectsData.filter(p => typeof p.image?.src === "string" && p.image?.src.length > 0);
    if (filter === "videos") return projectsData.filter(p => typeof p.video === "string" && p.video.length > 0);
    if (filter === "websites") return projectsData.filter(p => typeof p.demo === "string" && p.demo.length > 0);
    return projectsData;
  }, [filter]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold mb-0 text-white">Portfolio</h2>
          <nav className="flex gap-2">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-1 rounded-full text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-violet-400 hover:bg-violet-400 hover:text-white transition-colors duration-150 border border-dashed border-violet-300 pointer-events-auto ${filter === f.key ? "bg-violet-600 text-white" : "bg-white/5 text-gray-200"}`}
                aria-label={`Show ${f.label} projects`}
                role="button"
              >
                {f.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <Card key={p.id} project={p} onClick={() => handleCardClick(p)} />
          ))}
        </div>
      </div>
      <ProjectModal open={modalOpen} onClose={handleCloseModal} project={selectedProject} />
    </section>
  );
}
