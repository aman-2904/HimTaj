"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus, HiChevronRight } from "react-icons/hi";
import Image from "next/image";

// --- Structured Dummy Data (Replace with your real data) ---
const menuData = {
  forHim: {
    collections: [
      { name: "Earrings", href: "#", imgSrc: "/ring.png" },
      
      { name: "Bracelets", href: "#", imgSrc: "/earRing.png" },
      { name: "Rings", href: "#", imgSrc: "/Necklace.png" },
      { name: "Others", href: "#", imgSrc: "/earRing.png" },
      
    ],
    feature: {
      imgSrc: "/NeckPotrait.avif",
      title: "Iconic Jewellery",
      href: "#",
    },
  },
  forHer: {
    collections: [
      { name: "Earrings", href: "#", imgSrc: "/earRing.png" },
      { name: "Necklaces", href: "#", imgSrc: "/Necklace.png" },
      { name: "Bracelets", href: "#", imgSrc: "/ring.png" },
      { name: "Rings", href: "#", imgSrc: "/ring.png" },
      { name: "Anklets", href: "#", imgSrc: "/ring.png" },
      { name: "Others", href: "#", imgSrc: "/ring.png" },
    ],
    feature: {
      imgSrc: "/NeckPotrait.avif",
      title: "Octo Watch Collection",
      href: "#",
    },
  },
  unisex: {
    collections: [
      { name: "Earrings", href: "#", imgSrc: "/earRing.png" },
      { name: "Necklaces", href: "#", imgSrc: "/Necklace.png" },
      { name: "Bracelets", href: "#", imgSrc: "/ring.png" },
      { name: "Rings", href: "#", imgSrc: "/ring.png" },
      { name: "Anklets", href: "#", imgSrc: "/ring.png" },
      { name: "Others", href: "#", imgSrc: "/ring.png" },
    ],
    feature: {
      imgSrc: "/NeckPotrait.avif",
      title: "Octo Watch Collection",
      href: "#",
    },
  },
  
};

const mainCategories = [
  { id: "forHim", name: "For Him" },
  { id: "forHer", name: "For Her" },
  { id: "unisex", name: "For Both (Unisex)" },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const featureVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
  },
};

export default function Drawer({ isOpen, onClose }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

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

  // Reset when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setExpandedSection(null);
        setActiveCategory(null);
      }, 350);
    }
  }, [isOpen]);

  const handleCategoryClick = (catId) => {
    setActiveCategory((prev) => (prev === catId ? null : catId));
  };

  const activeData =
    (activeCategory && menuData[activeCategory]) || { collections: [], feature: {} };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 top-[81px] bg-black z-40"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed left-0 top-[81px] h-[calc(100vh-81px)] w-full bg-white shadow-lg z-50 overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="h-full flex">
              {/* LEFT SMALL DRAWER */}
              <div className="w-1/4 border-r border-gray-200 p-6 pl-18 overflow-y-auto text-black">
                {/* Collections Accordion */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection("collections")}
                    className="flex justify-between items-center w-full text-lg"
                  >
                    <span>Collections</span>
                    {expandedSection === "collections" ? <HiMinus /> : <HiPlus />}
                  </button>
                  {expandedSection === "collections" && (
                    <ul className="mt-2 pl-4 space-y-2 text-base">
                      {mainCategories.map((cat) => (
                        <li
                          key={cat.id}
                          onClick={() => handleCategoryClick(cat.id)}
                          className={`flex items-center justify-between cursor-pointer ${
                            activeCategory === cat.id
                              ? "font-semibold"
                              : "hover:text-gray-500"
                          }`}
                        >
                          {cat.name}
                          {activeCategory === cat.id && <HiChevronRight />}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* About */}
                <div className="mb-6">
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
              </div>

              {/* RIGHT BIG DRAWER */}
              <AnimatePresence>
                {activeCategory && menuData[activeCategory] && (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex overflow-hidden bg-white"
                  >
                    {/* MIDDLE COLUMN with stagger */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-9/12 p-8 grid grid-cols-2 gap-x-6 gap-y-8 overflow-y-auto"
                    >
                      {activeData.collections.map((item) => (
                        <motion.a
                          variants={itemVariants}
                          href={item.href}
                          key={item.name}
                          className="group block text-center text-black"
                        >
                          <div className="aspect-square bg-gray-100 overflow-hidden">
                            <Image
                              src={item.imgSrc}
                              alt={item.name}
                              width={300}
                              height={300}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <p className="mt-2 text-sm group-hover:underline">
                            {item.name}
                          </p>
                        </motion.a>
                      ))}
                    </motion.div>

                    {/* FEATURE IMAGE (appears after collection images) */}
                    <motion.div
                      variants={featureVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-10/12 relative overflow-hidden bg-gray-100"
                    >
                      {activeData.feature.imgSrc && (
                        <Image
                          src={activeData.feature.imgSrc}
                          alt={activeData.feature.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
