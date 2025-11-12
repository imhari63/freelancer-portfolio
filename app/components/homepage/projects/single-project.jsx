"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay, FaEye, FaTimes } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const { name, description, tags = [], code, demo, image, features, video, img } = project;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e){
      if(e.key === 'Escape') setOpen(false)
    }
    if(open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className='group w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden px-3 md:px-8 py-[1.4rem] bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border border-[#1a1443]'>
      <div className="absolute left-0 top-0 flex justify-center opacity-40">
        {/* decorative svg omitted for brevity; kept for visual parity */}
        <svg width="1170" height="403" viewBox="0 0 1170 403" fill="none" xmlns="http://www.w3.org/2000/svg">{/* paths */}</svg>
      </div>

      <div className='flex flex-col items-center justify-between w-full h-full'>
        <h2 className='text-[#EFF3F4] not-italic font-semibold text-[1.525rem] leading-[110%] text-center capitalize'>
          {name}
        </h2>
        <div className="p-6 relative w-full flex items-center justify-center">
          <Image
            src={image ? image?.src : (img || placeholder)}
            alt={name}
            width={1080}
            height={720}
            className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg"
          />

          {/* overlay controls */}
          <div className="absolute right-4 top-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition">
            <button aria-label="View" onClick={(e)=>{e.stopPropagation(); setOpen(true)}} className="px-2 py-1 rounded bg-white/6 text-xs inline-flex items-center gap-2"><FaEye /> View</button>
            {demo && <Link href={demo} target="_blank" onClick={(e)=>e.stopPropagation()} className="px-2 py-1 rounded bg-violet-600 text-white text-xs inline-flex items-center gap-2"><FaPlay /> Live</Link>}
            {code && <Link href={code} target="_blank" onClick={(e)=>e.stopPropagation()} className="px-2 py-1 rounded bg-white/6 text-xs inline-flex items-center gap-2"><FaCode /> Code</Link>}
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div />
          <div />
        </div>
      </div>

      <p className="absolute w-[90%] md:w-[85%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-[0.9s] p-6 leading-[110%] rounded-[0_20px_20px_0] left-0 top-0 bg-[#0f0b24]  text-[#EFF3F4] translate-y-[25%] md:translate-y-[50%] group-hover:translate-x-[-2%] text-xs md:text-sm">
        {description}
      </p>

      <div className='group-hover:translate-x-0 absolute w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-[0.5s] delay-[0.3s] p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-4 bg-[#0f0b24] text-[#EFF3F4]'>
        {tags.map((tag, id) => (
          <span className='font-medium break-words text-xs' key={id}>
            {tag}
          </span>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" onClick={() => setOpen(false)}>
          <div className="relative max-w-3xl w-full bg-[#061026] rounded-2xl overflow-hidden" onClick={(e)=>e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 z-20 bg-white/6 p-2 rounded-full"><FaTimes /></button>
            <div className="relative h-96 bg-black">
              {image || img ? (
                <Image src={image?.src || img} alt={name} fill className="object-contain p-6" />
              ) : video ? (
                <video controls className="w-full h-full bg-black">
                  <source src={video} />
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl">{name}</div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{name}</h3>
              <p className="mt-2 text-gray-300">{description}</p>
              <div className="mt-4 flex items-center gap-3">
                {demo && <a href={demo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-violet-600 text-white rounded inline-flex items-center gap-2"><FaPlay /> Live</a>}
                {code && <a href={code} target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/6 text-white rounded inline-flex items-center gap-2"><FaCode /> Code</a>}
                {video && !demo && <a href={video} target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/6 text-white rounded inline-flex items-center gap-2"><FaPlay /> Demo</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;