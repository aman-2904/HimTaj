"use client";
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaEtsy } from "react-icons/fa";

export default function Footer() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // Calculate scroll percentage relative to the document height
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollY / docHeight) * 100;
      setScrollOffset(percentage * 2); // Adjust multiplier for more/less movement
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="bg-[#F8F5F2] text-gray-700 font-sans relative overflow-hidden py-20 z-70">
      {/* Background Scrolling Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none">
        <h2 
          className="text-6xl md:text-9xl font-serif text-gray-300/50 whitespace-nowrap transition-transform duration-200 ease-out"
          style={{ transform: `translateX(${scrollOffset}px)` }}
        >
          Anything less is
        </h2>
        <h2 
          className="text-6xl md:text-9xl font-serif text-gray-300/50 whitespace-nowrap transition-transform duration-200 ease-out mt-4 ml-28"
          style={{ transform: `translateX(-${scrollOffset}px)` }}
        >
          Simply unacceptable
        </h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Logo Image */}
        <div className="text-center mb-16">
          <img 
            src="nav_logo.png" 
            alt="HIMTAJ Logo" 
            className="mx-auto w-70 h-20" 
          />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-center mb-16">
          <div>
            <h3 className="font-semibold tracking-widest text-lg mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">our story</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">journal</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">our materials</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-widest text-lg mb-4">STORE</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">collections</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">gift cards</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">customer reviews</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">retail store</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">etsy shop</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-widest text-lg mb-4">CARE</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">delivery</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">return & cancellations</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">faq</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mb-16">
          <a href="#" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors mt-20" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors mt-20" />
          </a>
          <a href="#" aria-label="Etsy">
            <FaEtsy className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors mt-20" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-xs text-gray-500">
          <p>Designed and developed in India by <span><a href='https://rbshstudio.com/'>RBSH Studio</a></span></p>
        </div>
      </div>
    </footer>
  );
}
