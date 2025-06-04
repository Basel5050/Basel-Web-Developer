import React from 'react'
const projects = [
    {
    name: 'Movie website',
    link: 'https://movie-show-blond.vercel.app/',
  },
  {
    name: 'Omar Portfolio',
    link: 'https://omarabdalaziz.com/',
  },
  {
    name: 'Jewellery Collection Ecommerce',
    link: 'https://my-web-two-snowy-78.vercel.app/',
  },
];
const MyWorkSection = () => {
  return (
  <section id="mywork" className="bg-black font-outfit py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12 text-center">
          latest Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] border border-white/10 bg-[#0d0d0d]"
            >
              <div className="relative w-full h-56 bg-white overflow-hidden">
                <iframe
                  src={project.link}
                  title={project.name}
                  className="w-[150%] h-[600px] scale-[0.5] md:scale-[0.7] origin-top-left pointer-events-none border-none"
                  style={{ transformOrigin: 'top left' }}
                />
              </div>

              <div className="p-3 text-center bg-black text-white">
                <h3 className="text-sm font-semibold">{project.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWorkSection