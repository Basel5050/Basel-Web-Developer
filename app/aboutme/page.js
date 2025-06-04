

import Image from "next/image";
import { FaCode, FaLaptopCode, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPostman } from "react-icons/si";

export const metadata = {
  title: "About Me | Basel - Frontend Developer",
  description:
    "I'm Basel, a Frontend Developer with 1+ year experience building modern websites using React, Next.js, Tailwind, TypeScript, and Java. Learn why you should work with me.",
  openGraph: {
    title: "About Me | Basel - Frontend Developer",
    description:
      "I'm Basel, a Frontend Developer specialized in React, Next.js, TailwindCSS, TypeScript, and Java. Get to know me better.",
    url: "https://basel-lime.vercel.app/",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQG6BW-EqIJyyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724927060975?e=1754524800&v=beta&t=HbW2ASO1LTxUODnfpOxvhqvYvagX0bsBx3KUz63NJao", // ضع صورتك هنا لو عندك
        width: 1200,
        height: 630,
        alt: "Basel Frontend Developer",
      },
    ],
  },
};

const page = () => {
 return (
    <section className="min-h-screen bg-black text-white px-6 py-24 font-outfit flex flex-col items-center justify-center space-y-28">
      {/* Section: About Me */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I&apos;m <strong>Basel</strong>, a Frontend Developer with <strong>1 year of hands-on experience</strong> in building modern, responsive, and accessible web applications.
            I&apos;ve worked on <strong>8+ real-world projects</strong>, and currently work at <strong>GoWeb</strong>, where I build performant user interfaces with <strong>React</strong>, <strong>Next.js</strong>, and <strong>TailwindCSS</strong>.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-tr from-cyan-500 to-blue-700 rounded-3xl shadow-xl flex items-center justify-center">
            <Image className="w-full h-full" width={150} height={150} alt="basel" src={'https://media.licdn.com/dms/image/v2/D4D03AQG6BW-EqIJyyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724927060975?e=1754524800&v=beta&t=HbW2ASO1LTxUODnfpOxvhqvYvagX0bsBx3KUz63NJao'} />
          </div>
        </div>
      </div>

      {/* Section: Why Basel */}
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why <span className="text-cyan-500">Basel?</span>
        </h2>
        <p className="text-md text-gray-300 leading-relaxed">
          I combine <strong>technical expertise</strong> with a strong sense of design and user experience.
          I care about writing <strong>clean, scalable, and maintainable code</strong> that works across devices and browsers.
          My experience with both frontend frameworks like <strong>React & Next.js</strong>, and backend tools like <strong>Node.js</strong>, helps me build full solutions that are <strong>efficient and production-ready</strong>.
        </p>
      </div>

      {/* Section: Skills */}
      <div className="max-w-6xl w-full">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-white">
          My <span className="text-cyan-500">Skills</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-300 text-center">
          <Skill icon={<FaReact className="text-cyan-400 text-2xl mx-auto" />} label="React.js" />
          <Skill icon={<SiNextdotjs className="text-white text-2xl mx-auto" />} label="Next.js" />
          <Skill icon={<SiTypescript className="text-blue-400 text-2xl mx-auto" />} label="TypeScript" />
          <Skill icon={<SiJavascript className="text-yellow-300 text-2xl mx-auto" />} label="JavaScript" />
          <Skill icon={<SiTailwindcss className="text-cyan-500 text-2xl mx-auto" />} label="TailwindCSS" />
          <Skill icon={<FaGitAlt className="text-red-500 text-2xl mx-auto" />} label="Git & GitHub" />
          <Skill icon={<SiPostman className="text-orange-300 text-2xl mx-auto" />} label="Postman & APIs" />
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, label }) {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-900 p-4 rounded-xl shadow-md hover:scale-105 transition">
      {icon}
      <span className="mt-2">{label}</span>
    </div>
  );
}


export default page