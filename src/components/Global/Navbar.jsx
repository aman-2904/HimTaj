"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi";
import Login from "../../app/login/page"; // import your Login component

export default function Navbar({
  isHovered,
  setIsHovered,
  isDrawerOpen,
  setIsDrawerOpen,
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false); // NEW state for login drawer

  const isHeaderActive = isHovered || isDrawerOpen || isSearchOpen || isLoginOpen;
  const iconColor = isHeaderActive ? "black" : "white";

  return (
    <>
      {/* --- NAVBAR HEADER --- */}
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
          {/* Left Section - Menu */}
          <div className="flex-1 flex justify-start items-center">
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

          {/* Center Section - Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src="/nav_logo.png"
              alt="Brand Logo"
              style={{ width: "250px", height: "60px" }}
            />
          </div>

          {/* Right Section - Icons */}
          <div className="flex-1 flex justify-end items-center gap-6">
            {/* --- Search --- */}
            <div className="flex items-center relative">
              <button
                onClick={() => setIsSearchOpen((prev) => !prev)}
                style={{ color: iconColor }}
                aria-label="Search"
                className="p-2 rounded-full hover:bg-gray-200 transition"
              >
                <HiOutlineSearch className="h-6 w-6" />
              </button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    key="search-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute right-12 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* --- Wishlist --- */}
            <button
              onClick={() => alert("Wishlist Clicked")}
              style={{ color: iconColor }}
              aria-label="Wishlist"
            >
              <HiOutlineHeart className="h-6 w-6" />
            </button>

            {/* --- User (Open Login Drawer) --- */}
            <button
              onClick={() => setIsLoginOpen(true)}
              style={{ color: iconColor }}
              aria-label="User"
            >
              <HiOutlineUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* --- LOGIN DRAWER --- */}
      <AnimatePresence>
        {isLoginOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)} // close on click outside
            />

            {/* Sliding Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsLoginOpen(false)}
              >
                <HiOutlineX className="h-6 w-6" />
              </button>

              {/* Login Component */}
              <Login />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
