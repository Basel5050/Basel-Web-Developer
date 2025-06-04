'use client'
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center font-outfit overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/omarA.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-2xl px-6 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Basel Ashraf
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white text-sm sm:text-base md:text-lg mb-8"
        >
          Creative Front-End Developer | Passionate About UX/UI & Performance
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 animate-bounce z-10"
      >
        <a href="#aboutme">
          <svg
            className="w-6 h-6 text-white mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
