import React from 'react';
import SingleProject from '../components/homepage/projects/single-project';
import { projectsData } from '@/utils/data/projects-data';

export const metadata = {
  title: 'Projects — Portfolio',
  description: 'A list of projects and case-studies',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <p className="text-gray-400 mb-8">A curated selection of projects, demos and case studies.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((proj) => (
            <SingleProject key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </main>
  );
}
