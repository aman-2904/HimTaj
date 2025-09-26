"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- DraggableLine Component ---
const DraggableLine = ({ initialLeft, constraintsRef }) => {
  return (
    <motion.div
      drag="x"
      dragConstraints={constraintsRef}
      dragElastic={0}
      dragMomentum={false}
      className="absolute top-0 h-full w-[1px] bg-yellow-400 cursor-ew-resize opacity-30"
      style={{ left: initialLeft }}
      whileDrag={{ scaleY: 1.05, opacity: 0.8 }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-4" />
    </motion.div>
  );
};

// --- Main Hero Component ---
const Hand = ({ setIsWhite }) => {
  const constraintsRef = useRef(null);
  const handRef = useRef(null); // Ref to track Hand component's position

  // Scroll-based animation
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [180, -1000]);

  // Track scroll position to toggle navbar color
  useEffect(() => {
    const handleScroll = () => {
      if (handRef.current) {
        const handRect = handRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const handTop = handRect.top;

        if (handTop <= windowHeight * 3) {
          setIsWhite(true);
        } else {
          setIsWhite(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsWhite]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <div
        ref={handRef}
        className="relative flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-tr from-rose-300 via-amber-50 to-orange-300 overflow-hidden font-sans text-center text-[#bca896] p-4"
      >
        {/* Draggable Lines */}
        <DraggableLine initialLeft="25%" constraintsRef={constraintsRef} />
        <DraggableLine initialLeft="50%" constraintsRef={constraintsRef} />
        <DraggableLine initialLeft="75%" constraintsRef={constraintsRef} />

        {/* Text Content */}
        <div className=" relative">
          <div className=" z-10 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-playfair text-6xl sm:text-7xl md:text-9xl lg:text-[15.2rem] mt-20 md:mt-40 tracking-wider leading-none"
          >
            <div className="flex items-center justify-center">
            c<span><img src="/ring1.png" alt="" className="w-50 mt-10"/></span>llecti<span><img src="/ring1.png" alt=""  className="w-50 mt-10"/></span>ns
            </div>
          </motion.h1>
          </div>
         
      <div className="relative z-30 mt-50">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-sm sm:max-w-md mx-auto mr-100 text-xl sm:text-sm md:text-xl mt-6 md:mt-12 relative z-20"
          >
            From effortless everyday wear to bold statement pieces, discover collections designed for every moment
          </motion.p>
          </div>
          
        </div>

        {/* Bottom Center Image */}
        

        <motion.img
          src="/hand1.png"
          alt="Scroll Effect"
          style={{ y }}
          className="absolute -mb-30 -mr-40 w-[130px] sm:w-[150px] md:w-[480px]  z-20 "
        />
       
      </div>
    </>
  );
};

export default Hand;
