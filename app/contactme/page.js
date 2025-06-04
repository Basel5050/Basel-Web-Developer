"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const page = () => {
 const contacts = [
    {
      icon: <FaWhatsapp className="text-3xl text-green-500" />,
      label: "WhatsApp",
      value: "+20 106 172 0600",
      link: "https://wa.me/201061720600",
    },
    {
      icon: <FaEnvelope className="text-3xl text-red-500" />,
      label: "Email",
      value: "baselashraf1@gmail.com",
      link: "mailto:baselashraf1@gmail.com",
    },
    {
      icon: <MdPhoneIphone className="text-3xl text-blue-400" />,
      label: "Phone",
      value: "+20 106 172 0600",
      link: "tel:+201061720600",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-32 px-6 sm:px-8 flex flex-col items-center text-white font-outfit">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-6xl font-bold text-center mb-6"
      >
        Contact{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Me
        </span>
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-1 bg-white rounded-full mb-14"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {contacts.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 transition rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
            <p className="text-sm break-words">{item.value}</p>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default page