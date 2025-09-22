"use client";
import React, { useState } from "react";
import Navbar from "@/components/Global/Navbar";
import Drawer from "./../Home/Drawer";
import HeroSection from "../Home/HeroSection";
import Hand from "../Home/Hand";


function Nav2() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isWhite, setIsWhite] = useState(false); 

  return (
    <div>
      <Navbar
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        isWhite={isWhite}
        setIsWhite={setIsWhite}
      />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}

export default Nav2;