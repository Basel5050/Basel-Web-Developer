import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Name / Logo */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Basel Ashraf</h3>
          <p className="text-gray-400 text-sm mt-1">Frontend Developer</p>
        </div>

        {/* Center - Social Links */}
        <div className="flex gap-4 text-white text-lg">
          <a
            href="https://wa.me/201061720600"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/basel-ashraf-a047b1208/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/basel_ashraf0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Basel5050"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-center md:text-right text-sm text-gray-500">
          © {new Date().getFullYear()} Basel Ashraf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
