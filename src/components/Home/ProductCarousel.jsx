"use client";

import React, { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Card Data (move outside so it doesn't reinitialize each render) ---
const cardData = [
  {
    id: 1,
    title: "Divas' Dream Earrings",
    image: "https://media.bulgari.com/image/upload/c_pad,h_1874,w_2400/q_auto/f_auto/470205.png",
    tag: "Popular",
  },
  {
    id: 2,
    title: "Divas' Dream Necklace",
    image: "https://media.bulgari.com/image/upload/c_pad,h_1874,w_2400/q_auto/f_auto/1365170.png",
    tag: null,
  },
  {
    id: 3,
    title: "Divas' Dream Necklace",
    image: "https://media.bulgari.com/image/upload/c_pad,h_1874,w_2400/q_auto/f_auto/1365170.png",
    tag: null,
  },
  {
    id: 4,
    title: "Divas' Dream Single Earring",
    image: "https://media.bulgari.com/image/upload/c_pad,h_1874,w_2400/q_auto/f_auto/1668685.png",
    tag: "New",
  },
  {
    id: 5,
    title: "Divas' Dream Necklace",
    image: "https://media.bulgari.com/image/upload/c_pad,h_1874,w_2400/q_auto/f_auto/1365170.png",
    tag: null,
  },
  {
    id: 6,
    title: "Serpenti Viper Ring",
    image: "https://media.bulgari.com/image/upload/c_pad,h_1874,w_2400/q_auto/f_auto/1365170.png",
    tag: null,
  },
  {
    id: 7,
    title: "B.zero1 Bracelet",
    image: "https://media.bulgari.com/image/upload/c_pad,h_1874,w_2400/q_auto/f_auto/1365170.png",
    tag: "Popular",
  },
];

// --- Star Icon for Pagination ---
const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2 L14.2 7.8 L20 10 L14.2 12.2 L12 18 L9.8 12.2 L4 10 L9.8 7.8 Z" transform="rotate(22.5 12 12)" />
    <path d="M12 2 L14.2 7.8 L20 10 L14.2 12.2 L12 18 L9.8 12.2 L4 10 L9.8 7.8 Z" transform="rotate(-22.5 12 12)" />
  </svg>
);


// --- Carousel Card Component ---
const CarouselCard = ({ title, image, tag, isCenter }) => {
  return (
    <div className="relative flex-shrink-0 w-[285px] md:w-[320px] bg-white shadow-lg p-6 text-center">
      {tag && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded ${tag === "New"
            ? "bg-cyan-100 text-cyan-800"
            : "bg-pink-100 text-pink-800"
            }`}
        >
          {tag}
        </span>
      )}
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-contain mb-4"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x500/f8f0e3/7c6c5a?text=Image+Not+Found";
        }}
      />
      <h3
        className={` text-sm ${isCenter ? "text-gray-800" : "text-gray-500"
          } transition-colors duration-300`}
      >
        {title}
      </h3>
    </div>
  );
};

// --- Main Carousel Component ---
const ProductCarousel = () => {
  const items = cardData;
  const extendedItems = useMemo(() => [...items, ...items, ...items], [items]);
  const [currentIndex, setCurrentIndex] = useState(items.length);

  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => setCurrentIndex((prev) => prev - 1);



  useEffect(() => {
    if (currentIndex >= items.length * 2) {
      setTimeout(() => {
        setCurrentIndex(items.length);
      }, 500);
    } else if (currentIndex < items.length) {
      setTimeout(() => {
        setCurrentIndex(items.length * 2 - 1);
      }, 500);
    }
  }, [currentIndex, items.length]);

  return (
    
    <div className=" sticky top-0 left-0 relative  bg-gradient-to-tr from-rose-300 via-amber-50 to-orange-300 min-h-screen flex items-center justify-center font-sans">
      <div
        className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden pt-16" // Added padding-top to avoid overlap
      >
        {/* Navigation */}
        <div className="absolute top-1 right-4 md:top-2 md:right-8 z-50 flex space-x-3">
          <button
            onClick={handlePrev}
            className="bg-white/50 backdrop-blur-sm rounded-full p-4 hover:bg-white/80 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/50 backdrop-blur-sm rounded-full p-4 hover:bg-white/80 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${currentIndex * 340}px - 160px))`,
          }}
        >
          {extendedItems.map((item, index) => {
            const isCenter = index === currentIndex;
            const offset = index - currentIndex;

            const transformStyle = {
              transform: `scale(${isCenter ? 1.1 : 0.9})`,
              zIndex: extendedItems.length - Math.abs(offset),
              transition:
                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              opacity: Math.abs(offset) > 2 ? 0 : 1,
              margin: "0 10px",
            };

            return (
              <div key={index} style={transformStyle}>
                <CarouselCard {...item} isCenter={isCenter} />
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-2">
          {[-2, -1, 0, 1, 2].map(offset => {
            if (offset === 0) {
              return <StarIcon key={offset} className="w-7 h-7 text-gray-900" />;
            }
            const size = Math.abs(offset) === 1 ? 'w-2 h-2' : 'w-1 h-1';
            return <div key={offset} className={`${size} bg-gray-400 rounded-full transition-all duration-300`} />;
          })}
        </div>
      </div>
    </div>
    
  );
};

export default ProductCarousel;

