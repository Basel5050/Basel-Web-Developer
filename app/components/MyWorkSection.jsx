'use client'
import React, { useState } from 'react';
import { FaArrowRight, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiNextdotjs, SiReactrouter } from 'react-icons/si';
import { IoClose } from 'react-icons/io5';

const techIcons = {
  react: <FaReact className="text-cyan-400" title="React" />,
  tailwind: <SiTailwindcss className="text-sky-400" title="Tailwind CSS" />,
  redux: <SiRedux className="text-purple-400" title="Redux" />,
  next: <SiNextdotjs className="text-white" title="Next.js" />,
  reactrouter: <SiReactrouter className="text-red-400" title="React Router" />,
};

const projects = [
  {
    name: 'TrendX',
    link: 'https://trendx.co/',
    image: '/trendx.png',
    description: 'Saudi research platform for AI, economics, and tourism insights with a modern UX.',
    tech: ['react', 'tailwind', 'reactrouter'],
  },
   {
    name: 'So3ody.com',
    link: 'https://www.so3ody.com/',
    image: '/so3ody.png',
    description: 'Saudi sports hub delivering real-time football news and match coverage.',
    tech: ['react', 'tailwind', 'redux'],
  },
  {
    name: 'Alelm.net',
    link: 'https://alelm.net/',
    image: '/alelm.png',
    description: 'Saudi Arabic media platform blending articles with visual storytelling.',
    tech: ['react', 'tailwind', 'redux'],
  },
  {
    name: 'Omar Portfolio',
    link: 'https://omarabdalaziz.com/',
    image: '/omar-portfolio.png',
    description: 'Next.js-powered portfolio showcasing frontend expertise.',
    tech: ['react', 'tailwind', 'next'],
  },
  
  {
    name: 'Movie Website',
    link: 'https://movie-show-blond.vercel.app/',
    image: '/movie-website.png',
    description: 'Sleek movie streaming UI with smooth navigation and responsive design.',
    tech: ['react', 'tailwind', 'reactrouter'],
  },
 
];

const MyWorkSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="mywork" className="bg-black font-outfit py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl sm:text-5xl font-bold text-center mb-16">
          My Latest Work
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg max-w-sm w-full hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-full h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed min-h-[48px]">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-blue-400 transition">
                    View Project <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-[#1a1a1a] text-white rounded-xl p-6 max-w-md w-full relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-white hover:text-red-400 transition"
              >
                <IoClose size={24} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{selectedProject.description}</p>

              <div className="flex gap-4 flex-wrap items-center mb-6">
                {selectedProject.tech.map((tech, idx) => (
                  <div key={idx} className="text-2xl">{techIcons[tech]}</div>
                ))}
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWorkSection;
