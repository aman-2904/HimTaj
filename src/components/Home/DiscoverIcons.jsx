"use client";

import React, { useState, useEffect, useRef } from "react";

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const categories = [
  { name: "Women", imageUrl: "Woman.png", href: "/collection/serpenti" },
  { name: "Men", imageUrl: "Men.png", href: "/collection/b-zero1" },
  { name: "Others", imageUrl: "unisex.png", href: "/collection/divas-dream" },
  
];

export default function DiscoverIcons() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 md:w-[90vw] max-w-sm flex flex-col-reverse items-center gap-3 z-30 font-sans"
    >
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className="bg-stone-200/90 backdrop-blur-sm text-stone-600 w-full h-20 flex items-center p-2.5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="w-24 h-full rounded-lg overflow-hidden ">
          <img src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/375x375/Sumangali-Jewellery-Collection-o1.jpg" alt="Discover Icons Preview" className="w-full h-full object-cover" />
        </div>

        <span className="flex-grow text-center text-lg font-light tracking-[0.2em]">COLLECTIONS</span>

        <div className="h-8 w-px bg-stone-400/60 mx-4"></div>

        <div className={`text-stone-500 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          {isOpen ? <XIcon /> : <ChevronUpIcon />}
        </div>
      </button>

      {/* Animated Category Menu */}
      {/* Animated Category Menu */}
<div
  className={`
    absolute bottom-24 w-full 
    transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
    ${isOpen ? "opacity-100 pointer-events-auto translate-y-0" 
             : "opacity-0 pointer-events-none translate-y-2"}
  `}
>
  {isOpen && (
    <div className="bg-stone-200/90 rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden">
      <ul className="flex flex-col">
        {categories.map((category, index) => (
          <li key={category.name}>
            <a
              href={category.href}
              className="flex items-center p-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-14 h-14 object-contain rounded-md mr-4"
              />
              <span className="text-md font-medium tracking-wider">
                {category.name}
              </span>
            </a>
            {index < categories.length - 1 && (
              <div className="h-px bg-gray-200/90 w-full ml-20"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

      
    </div>
  );
}
