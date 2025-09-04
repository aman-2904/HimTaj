"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi";

export default function Navbar({
  isHovered,
  setIsHovered,
  isDrawerOpen,
  setIsDrawerOpen,
}) {
  const isHeaderActive = isHovered || isDrawerOpen;
  const iconColor = isHeaderActive ? "black" : "white";

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 w-full p-6 md:px-10 z-30 transition-colors duration-300 ease-in-out ${
        isHeaderActive
          ? "bg-white text-black border-b border-gray-200"
          : "bg-transparent text-black"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="flex-1 flex justify-start items-center">
          {/* Animated Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: iconColor }}
            aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDrawerOpen ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {isDrawerOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </motion.div>
            <span>{isDrawerOpen ? "Close" : "Menu"}</span>
          </button>
        </div>

        <div className="flex-1 flex justify-center ">
          <img
            src="/nav_logo.png"
            alt="Brand Logo"
            style={{ width: "250px", height: "60px" }}
          />
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          <button
            onClick={() => alert("Search Clicked")}
            style={{ color: iconColor }}
            aria-label="Search"
          >
            <HiOutlineSearch className="h-6 w-6" />
          </button>
          <button
            onClick={() => alert("Wishlist Clicked")}
            style={{ color: iconColor }}
            aria-label="Wishlist"
          >
            <HiOutlineHeart className="h-6 w-6" />
          </button>
          <button
            onClick={() => alert("User Clicked")}
            style={{ color: iconColor }}
            aria-label="User"
          >
            <HiOutlineUser className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
