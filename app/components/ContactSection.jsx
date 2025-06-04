"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <section className="relative bg-black py-24 flex flex-col items-center justify-center font-outfit overflow-hidden">
    
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/50 to-black/90 z-0"></div>

    
    <div className="relative z-10 mb-8 animate-3d">
      <Image 
        src="https://media.licdn.com/dms/image/v2/D4D03AQG6BW-EqIJyyg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724927060975?e=1754524800&v=beta&t=HbW2ASO1LTxUODnfpOxvhqvYvagX0bsBx3KUz63NJao" 
        alt="Basel"
        width={192}
        height={192}
       className="rounded-full shadow-lg object-cover"
       
      />
    </div>

    
    <div className="relative z-10 text-center">
      <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
        Let's talk about<br /> your project
      </h2>
      <p className="text-gray-400 text-sm md:text-base mb-8">
        Could you send me a message below?
      </p>

      
      <Link  href="https://wa.me/201061720600">
        <button className="bg-gradient-to-r from-white to-gray-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          Contact Me
        </button>
      </Link>
    </div>
  </section>
  )
}

export default ContactSection