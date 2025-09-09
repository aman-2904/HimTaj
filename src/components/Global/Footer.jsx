// components/Footer.jsx
"use client";

import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaPinterestP 
} from 'react-icons/fa';
import { BsChatDotsFill, BsArrowRight } from 'react-icons/bs';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaPinterestP />, href: '#' },
  ];

  return (
    <>
      <footer className=" relative bottom-0 left-0 bg-[#212121] text-gray-400 pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Column 1: Store Information */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">Store Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-white mt-1 mr-3 flex-shrink-0" />
                  <span>60, 29th Street, San Francisco, CA 94110, United States</span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-white mr-3" />
                  <span>(+00) 123-456-789</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-white mr-3" />
                  <span>demo@example.com</span>
                </li>
              </ul>
              <div className="flex space-x-3 mt-6">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Information */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">Information</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Return</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Term & conditions</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">My account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shopping Cart</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
                
              </ul>
            </div>

            {/* Column 4: Let's Get in Touch */}
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">Let's Get in Touch</h3>
              <p className="mb-4">Subscribe to our latest newsletter to get news about special discounts.</p>
              <form action="#">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="w-full bg-white text-black placeholder-gray-500 px-4 py-2.5 pr-12 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button type="submit" className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-600 hover:text-black">
                    <BsArrowRight />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </footer>
      
      
    </>
  );
};

export default Footer;

