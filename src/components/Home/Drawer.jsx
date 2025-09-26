"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus, HiChevronRight } from "react-icons/hi";
import Image from "next/image";

// --- Structured Dummy Data (Updated for multi-level dropdown) ---
const menuData = {
  women: {
    subCategories: {
      "Necklace": {
        collections: [
          { name: "All Necklaces", href: "#", imgSrc: "/MENU/2.png" },
          { name: "Chain", href: "#", imgSrc: "/MENU/3.png" },
          { name: "Tennis", href: "#", imgSrc: "/MENU/4.png" },
          { name: "Party Collections", href: "#", imgSrc: "/MENU/5.png" },
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Octo Watch Collection",
          href: "#",
        },
      },
      "Bracelet": {
        collections: [
          { name: "All Bracelets", href: "#", imgSrc: "/MENU/7.png" },
          { name: "Chain Bracelets", href: "#", imgSrc: "/MENU/8.png" },
          { name: "Cuffs + Bangle Bracelets", href: "#", imgSrc: "/MENU/9.png" },
          { name: "Tennis Bracelets", href: "#", imgSrc: "/MENU/10.png" },
       
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Iconic Jewellery",
          href: "#",
        },
      },
      "Ring": {
        collections: [
          { name: "All Rings", href: "#", imgSrc: "/MENU/12.png" },
          { name: "Stackable Rings", href: "#", imgSrc: "/MENU/13.png" },
          { name: "Statement Rings", href: "#", imgSrc: "/MENU/14.png" },
          { name: "Wedding Bands", href: "#", imgSrc: "/MENU/15.png" },
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Iconic Jewellery",
          href: "#",
        },
      },
      "Earring": {
        collections: [
          { name: "All Earrings", href: "#", imgSrc: "/MENU/17.png" },
          { name: "Studs", href: "#", imgSrc: "/MENU/18.png" },
          { name: "Hoops", href: "#", imgSrc: "/MENU/19.png" },
          { name: "Party Collections", href: "#", imgSrc: "/MENU/20.png" },
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Iconic Jewellery",
          href: "#",
        },
      },
        "All Jewellery": {
        collections: [
          { name: "Earrings", href: "#", imgSrc: "/MENU/22.png" },
          { name: "Necklaces", href: "#", imgSrc: "/MENU/23.png" },
          { name: "Bracelets", href: "#", imgSrc: "/MENU/24.png" },
          { name: "Rings", href: "#", imgSrc: "/MENU/24.png" },
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Unisex Collection",
          href: "#",
        },
      },

    },
  },
  men: {
    subCategories: {
      "Necklaces": {
        collections: [
          { name: "All Necklaces", href: "#", imgSrc: "/MENU/23.png" },
          { name: "Chains", href: "#", imgSrc: "/MENU/24.png" },
          { name: "Chain + Pendent", href: "#", imgSrc: "/MENU/25.png" },
          { name: "Party Collections", href: "#", imgSrc: "/MENU/26.png" },
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Unisex Collection",
          href: "#",
        },
      },
      "Bracelets": {
        collections: [
          { name: "All Bracelets", href: "#", imgSrc: "/MENU/28.png" },
          { name: "Minimalists", href: "#", imgSrc: "/MENU/29.png" },
          { name: "Cuffs", href: "#", imgSrc: "/MENU/30.png" },
          { name: "Party collections", href: "#", imgSrc: "/MENU/31.png" },
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Unisex Collection",
          href: "#",
        },
      },
      "Ring": {
        collections: [
          { name: "All Rings", href: "#", imgSrc: "/MENU/33.png" },
          { name: "Solitaire", href: "#", imgSrc: "/MENU/34.png" },
          { name: "Stackable", href: "#", imgSrc: "/MENU/35.png" },
       
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Unisex Collection",
          href: "#",
        },
      },
    },
  },
  others: {
    subCategories: {
      "Idols & Coins": {
        collections: [
          { name: "Murti", href: "#", imgSrc: "/MENU/37.png" },
          { name: "Coins", href: "#", imgSrc: "/MENU/38.png" },

        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Premium Collection",
          href: "#",
        },
      },
      "Anklet": {
        collections: [
          { name: "All Anklet", href: "#", imgSrc: "/MENU/40.png" },
          { name: "Minimalist", href: "#", imgSrc:  "/MENU/41.png" },
          { name: "Heavy", href: "#", imgSrc: "/MENU/42.png" },
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Premium Collection",
          href: "#",
        },
      },
      "Kid's Jewellery": {
        collections: [
          { name: "Cuffs", href: "#", imgSrc: "/MENU/45.png" },
          { name: "Necklaces", href: "#", imgSrc: "/MENU/46.png" },
          
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Premium Collection",
          href: "#",
        },
      },
      "Gold Jewellery": {
        collections: [
          { name: "MENS", href: "#", imgSrc: "/MENU/48.png" },
          { name: "WOMENS", href: "#", imgSrc: "/MENU/49.png" },
         
        ],
        feature: {
          imgSrc: "/final.mp4",
          title: "Premium Collection",
          href: "#",
        },
      },
    },
  },
  gift: {
    subCategories: {
      "Under 5k": {
        collections: [
          { name: "Luxury Earrings", href: "#", imgSrc: "/earRing.png" },
          { name: "Luxury Necklaces", href: "#", imgSrc: "/Necklace.png" },
          { name: "Luxury Bracelets", href: "#", imgSrc: "/ring.png" },
          { name: "Luxury Rings", href: "#", imgSrc: "/ring.png" },
        ],
        feature: {
          imgSrc: "/NeckPotrait.avif",
          title: "Premium Collection",
          href: "#",
        },
      },
      "Between 5k-15k": {
        collections: [
          { name: "Luxury Earrings", href: "#", imgSrc: "/earRing.png" },
          { name: "Luxury Necklaces", href: "#", imgSrc: "/Necklace.png" },
          { name: "Luxury Bracelets", href: "#", imgSrc: "/ring.png" },
          { name: "Luxury Rings", href: "#", imgSrc: "/ring.png" },
        ],
        feature: {
          imgSrc: "/NeckPotrait.avif",
          title: "Premium Collection",
          href: "#",
        },
      },
      "Between 15k-25k": {
        collections: [
          { name: "Luxury Earrings", href: "#", imgSrc: "/earRing.png" },
          { name: "Luxury Necklaces", href: "#", imgSrc: "/Necklace.png" },
          { name: "Luxury Bracelets", href: "#", imgSrc: "/ring.png" },
          { name: "Luxury Rings", href: "#", imgSrc: "/ring.png" },
        ],
        feature: {
          imgSrc: "/NeckPotrait.avif",
          title: "Premium Collection",
          href: "#",
        },
      },
      "25k & Above": {
        collections: [
          { name: "Luxury Earrings", href: "#", imgSrc: "/earRing.png" },
          { name: "Luxury Necklaces", href: "#", imgSrc: "/Necklace.png" },
          { name: "Luxury Bracelets", href: "#", imgSrc: "/ring.png" },
          { name: "Luxury Rings", href: "#", imgSrc: "/ring.png" },
        ],
        feature: {
          imgSrc: "/NeckPotrait.avif",
          title: "Premium Collection",
          href: "#",
        },
      },
    },
  },
};

const mainGroups = [
  { id: "women", name: "Women" },
  { id: "men", name: "Men" },
  { id: "others", name: "Other Collection" },
  { id: "gift", name: "Gifts" },

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
  const [expandedSection, setExpandedSection] = useState("collections"); // Keep it open by default
  const [activeGroup, setActiveGroup] = useState(null);
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
        setExpandedSection("collections");
        setActiveGroup(null);
        setActiveCategory(null);
      }, 350);
    }
  }, [isOpen]);

  const handleGroupClick = (groupId) => {
    setActiveGroup((prev) => (prev === groupId ? null : groupId));
    setActiveCategory(null); // reset category when group changes
  };

  const handleCategoryClick = (catId) => {
    setActiveCategory((prev) => (prev === catId ? null : catId));
  };

  const activeData =
    (activeGroup &&
      activeCategory &&
      menuData[activeGroup]?.subCategories[activeCategory]) ||
    { collections: [], feature: {} };

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
            className="fixed left-0 top-[81px] h-[calc(100vh-81px)] w-full shadow-lg z-50 overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="h-full flex">
              {/* LEFT SMALL DRAWER */}
              <div className="w-1/4 border-r border-gray-200 p-6 pl-12 overflow-y-auto text-black bg-white">
                {/* Collections Accordion */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection("collections")}
                    className="flex justify-between items-center w-full text-lg"
                  >
                    <span>Collections</span>
                    {expandedSection === "collections" ? <HiMinus /> : <HiPlus />}
                  </button>

                  {/* ===== CHANGED SECTION START ===== */}
                  <AnimatePresence>
                    {expandedSection === "collections" && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 pl-4 space-y-2 text-base overflow-hidden"
                      >
                        {mainGroups.map((group) => (
                          <li key={group.id}>
                            <div
                              onClick={() => handleGroupClick(group.id)}
                              className={`cursor-pointer py-1 ${
                                activeGroup === group.id
                                  ? "font-semibold"
                                  : "hover:text-gray-500"
                              }`}
                            >
                              {group.name}
                            </div>

                            {/* Conditionally render sub-menu right here */}
                            <AnimatePresence>
                              {activeGroup === group.id && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="pl-4 space-y-2 text-sm overflow-hidden"
                                >
                                  {Object.keys(
                                    menuData[group.id].subCategories
                                  ).map((catId) => (
                                    <li
                                      key={catId}
                                      onClick={() => handleCategoryClick(catId)}
                                      className={`cursor-pointer flex justify-between items-center py-1 ${
                                        activeCategory === catId
                                          ? "font-semibold"
                                          : "hover:text-gray-500"
                                      }`}
                                    >
                                      <span>{catId}</span>
                                      {activeCategory === catId && (
                                        <HiChevronRight />
                                      )}
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  {/* ===== CHANGED SECTION END ===== */}
                </div>
              </div>

              {/* RIGHT BIG DRAWER */}
              <AnimatePresence>
                {activeGroup && activeCategory && activeData && (
                  <motion.div
                    key={`${activeGroup}-${activeCategory}`} // Use a unique key to force re-render on change
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex overflow-hidden bg-white"
                  >
                    {/* MIDDLE COLUMN */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-1/2 p-8 grid grid-cols-2 gap-x-6 gap-y-8 overflow-y-auto"
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

                    {/* FEATURE VIDEO */}
                    <motion.a
                      href={activeData.feature.href}
                      variants={featureVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-1/2 relative overflow-hidden bg-gray-100 block group"
                    >
                      {activeData.feature.imgSrc && activeData.feature.imgSrc.endsWith('.mp4') ? (
                        <video
                          src={activeData.feature.imgSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        activeData.feature.imgSrc && (
                          <Image
                            src={activeData.feature.imgSrc}
                            alt={activeData.feature.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )
                      )}
                    </motion.a>
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