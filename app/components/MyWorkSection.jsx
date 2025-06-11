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
    name: 'Movie Website',
    link: 'https://movie-show-blond.vercel.app/',
    image: '/Capture.PNG',
    description: 'A modern UI for browsing and watching movies online.',
    tech: ['react', 'tailwind', 'reactrouter'],
  },
  {
    name: 'Omar Portfolio',
    link: 'https://omarabdalaziz.com/',
    image: '/Capture03.PNG',
    description: 'A personal portfolio for a frontend developer built with Next.js.',
    tech: ['react', 'tailwind', 'next'],
  },
  {
    name: 'Jewellery Ecommerce',
    link: 'https://my-web-two-snowy-78.vercel.app/',
    image: '/Capture02.PNG',
    description: 'Elegant e-commerce store for a luxury jewelry brand.',
    tech: ['react', 'tailwind', 'redux'],
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
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg max-w-sm w-full hover:shadow-2xl transition duration-300 cursor-pointer"
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

              <div className="p-5 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
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
