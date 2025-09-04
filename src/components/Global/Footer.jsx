"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaFacebook, FaPinterest, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" relative bottom-0 left-0 w-full bg-[#f6f6f6] border-t border-gray-300 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-800">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          
          <img
            src="nav_logo.png"
            alt="140 Years of Creations"
            className="mt-6 rounded-md"
          />
          
          
          
        </div>

        {/* Contact Hub */}
        <div>
          <h3 className="font-medium text-lg mb-4">Contact Hub</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Store locator</a></li>
            <li><a href="#">Contact & Appointments</a></li>
            <li><a href="#">Book an appointment</a></li>
          </ul>
          <h3 className="font-medium text-lg mt-6 mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Services</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-medium text-lg mb-4">About Bvlgari</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Brand protection</a></li>
            <li><a href="#">Ethics & Compliance</a></li>
            <li><a href="#">People & Careers</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Fondazione Bvlgari</a></li>
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="font-medium text-lg mb-4">Privacy & Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Cookies Settings</a></li>
            <li><a href="#">Privacy center</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>

          {/* Social icons */}
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaPinterest /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f6f6f6] text-center text-xs py-3 border-t border-gray-200">
        BVLGARI® Official Website India
      </div>
    </motion.footer>
  );
}
