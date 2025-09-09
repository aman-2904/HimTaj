"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- DraggableLine Component ---
const DraggableLine = ({ initialLeft, constraintsRef }) => {
  return (
    <motion.div
      drag="x"
      dragConstraints={constraintsRef}
      dragElastic={0}
      dragMomentum={false}
      className="absolute top-0 h-full w-[1px] bg-gray-300 cursor-ew-resize"
      style={{ left: initialLeft }}
      whileDrag={{ scaleY: 1.05, opacity: 0.8 }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-4" />
    </motion.div>
  );
};

// --- Main Hero Component ---
const Hand = () => {
  const constraintsRef = useRef(null);

  // scroll-based animation
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [200, -800]); // adjust values as needed

  return (
    <>
      {/* Inject Google Font properly */}
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
        ref={constraintsRef}
        className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-rose-300 via-amber-50 to-orange-300 overflow-hidden font-sans text-center text-[#bca896] p-4"
      >
        {/* Draggable Lines */}
        <DraggableLine initialLeft="25%" constraintsRef={constraintsRef} />
        <DraggableLine initialLeft="50%" constraintsRef={constraintsRef} />
        <DraggableLine initialLeft="75%" constraintsRef={constraintsRef} />

        {/* Text Content */}
        <div className="z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-playfair text-8xl mt-40 md:text-9xl lg:text-[12rem] tracking-wider leading-none"
          >
            collections
          </motion.h1>

          
        </div>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md mx-auto  text-sm md:text-base mt-50"
          >
            Inspired by our multi-ethnic life, we create fine jewelry to share
            our wonderful tales...
          </motion.p>

        {/* Bottom Center Image */}
        <motion.img
          src="Hand.png" // replace with your image
          alt="Scroll Effect"
          style={{ y }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[150px] object-contain z-50"
        />
        
      </div>
    </>
  );
};

export default Hand;
