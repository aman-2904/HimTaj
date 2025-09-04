"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";

export default function Drawer({ isOpen, onClose }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionName) => {
    setExpandedSection((prev) => (prev === sectionName ? null : sectionName));
  };

  // Close on ESC key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay (below navbar) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed left-0 right-0 bottom-0 bg-black z-40 top-[81px]"
          />
        )}
      </AnimatePresence>

      {/* Drawer (below navbar) */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed left-0 h-[calc(100%-81px)] w-full max-w-sm bg-white shadow-lg z-50 top-[81px]"
            role="dialog"
            aria-modal="true"
          >
            {/* Drawer Header */}
            
            {/* Drawer Content */}
            <nav className="p-6 text-gray-800 font-light overflow-y-auto h-[calc(100%-81px)] space-y-6">
              {/* Collections */}
              <div>
                <button
                  onClick={() => toggleSection("collections")}
                  className="flex justify-between items-center w-full text-lg"
                >
                  <span>Collections</span>
                  {expandedSection === "collections" ? <HiMinus /> : <HiPlus />}
                </button>
                {expandedSection === "collections" && (
                  <ul className="mt-2 pl-4 space-y-2 text-base text-gray-600">
                    <li><a href="#">Spring Collection</a></li>
                    <li>Summer Collection</li>
                    <li>Winter Collection</li>
                  </ul>
                )}
              </div>

              {/* Categories */}
              <div>
                <button
                  onClick={() => toggleSection("categories")}
                  className="flex justify-between items-center w-full text-lg"
                >
                  <span>Categories</span>
                  {expandedSection === "categories" ? <HiMinus /> : <HiPlus />}
                </button>
                {expandedSection === "categories" && (
                  <ul className="mt-2 pl-4 space-y-2 text-base text-gray-600">
                    <li>Stationery</li>
                    <li>Notebooks</li>
                    <li>Pens</li>
                  </ul>
                )}
              </div>

              {/* About */}
              <div>
                <button
                  onClick={() => toggleSection("about")}
                  className="flex justify-between items-center w-full text-lg"
                >
                  <span>About</span>
                  {expandedSection === "about" ? <HiMinus /> : <HiPlus />}
                </button>
                {expandedSection === "about" && (
                  <ul className="mt-2 pl-4 space-y-2 text-base text-gray-600">
                    <li>Our Story</li>
                    <li>Mission</li>
                    <li>Team</li>
                  </ul>
                )}
              </div>

              {/* Contact */}
              <div>
                <button
                  onClick={() => toggleSection("contact")}
                  className="flex justify-between items-center w-full text-lg"
                >
                  <span>Contact</span>
                  {expandedSection === "contact" ? <HiMinus /> : <HiPlus />}
                </button>
                {expandedSection === "contact" && (
                  <ul className="mt-2 pl-4 space-y-2 text-base text-gray-600">
                    <li>Email</li>
                    <li>Phone</li>
                    <li>Location</li>
                  </ul>
                )}
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
