'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "About Me", link: "/aboutme" },
    { label: "Contact Me", link: "/contactme" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-outfit border-b border-white/10
        ${scrolled ? "bg-black/80 shadow-md backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="flex w-full items-center justify-center py-3 px-5 sm:px-7 md:px-9 lg:px-12">
        {/* Navigation Links in center */}
        <div className="flex items-center gap-x-6">
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Link
                href={item.link}
                className="text-white font-medium text-sm sm:text-base hover:text-gray-300 transition-colors duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}
