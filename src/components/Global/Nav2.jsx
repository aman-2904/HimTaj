"use client";

import React, { useState } from "react";
import Navbar from "@/components/Global/Navbar";
import Drawer from "./../Home/Drawer";


function Nav2() {
       const [isHovered, setIsHovered] = useState(false);
         const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
           <Navbar
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
              />
                    <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}

export default Nav2