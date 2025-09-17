"use client";

import React, { useState } from "react";
import Drawer from "./Drawer";


export default function HeroSection() {

   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Navbar (not blurred) */}
   
      {/* Background + Hero Content (blurred when drawer is open) */}
      
      <div
        className={`sticky top-0 left-0 h-screen w-full flex items-end overflow-hidden transition-all duration-500 ${
          isDrawerOpen ? "blur-md" : ""
        }`}
      >
        {/* Replace Image with Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src="head.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/20 -z-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-white p-8 md:p-12 max-w-lg mb-8 ml-8">
          <h1 className="font-serif text-4xl md:text-6xl font-normal drop-shadow-lg">
            Jewellery for Every Chapter
          </h1>
          
          <p className="text-md md:text-xl my-6 drop-shadow-md inline-block text-sm tracking-widest no-underline text-white pb-2 border-b border-white hover:border-gray-300">
            From subtle silver to statement gold, Himtaj creates pieces that celebrate who you are—today and forever.
          </p>
        </div>
      </div>
      

      {/* Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
