"use client";
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

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
    <footer className="bg-[#F8F5F2] text-gray-700 font-sans relative overflow-hidden py-20 z-70 ">
      {/* Background Scrolling Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none">
        <h2 
          className="text-5xl md:text-9xl font-serif text-gray-300/50 whitespace-nowrap transition-transform duration-200 ease-out"
          style={{ transform: `translateX(${scrollOffset}px)` }}
        >
          Your Story,
        </h2>
        <h2 
          className="text-5xl md:text-9xl font-serif text-gray-300/50 whitespace-nowrap transition-transform duration-200 ease-out mt-4 ml-28"
          style={{ transform: `translateX(-${scrollOffset}px)` }}
        >
          Our Jewellery
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
            <h3 className="font-semibold tracking-widest text-lg mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/delivery-info" className="hover:text-gray-900 transition-colors">Delivery Information</a></li>
              <li><a href="/return-exchange" className="hover:text-gray-900 transition-colors">Return & Exchange</a></li>
              <li><a href="/delivery-info" className="hover:text-gray-900 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-widest text-lg mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="/cancellation-policy" className="hover:text-gray-900 transition-colors">Cancellation Policy</a></li>
              <li><a href="/help" className="hover:text-gray-900 transition-colors">Help & FAQ</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-widest text-lg mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">+91 9773690444</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Chat With Us</a></li>
              
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
          <a href="‪+91 97736 90444‬" aria-label="Facebook">
            <FaWhatsapp className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors mt-20" />
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
