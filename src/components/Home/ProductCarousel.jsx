"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Card Data (no changes) ---
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
    title: "Divas' Dream Watch",
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
    title: "Serpenti Viper Necklace",
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

// --- Star Icon (no changes) ---
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

// --- Responsive Carousel Card Component ---
// Note: Removed hardcoded widths to allow parent to control sizing.
const CarouselCard = ({ title, image, tag, isCenter }) => {
  return (
    <div className="bg-white shadow-lg p-6 text-center w-[285px] md:w-[320px] flex flex-col justify-between">
      {tag && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded ${
            tag === "New" ? "bg-cyan-100 text-cyan-800" : "bg-pink-100 text-pink-800"
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
          e.target.src = "https://placehold.co/400x500/f8f0e3/7c6c5a?text=Image+Not+Found";
        }}
      />
      <h3
        className={`text-sm font-medium ${
          isCenter ? "text-gray-800" : "text-gray-500"
        } transition-colors duration-300`}
      >
        {title}
      </h3>
    </div>
  );
};

// --- Custom Hook for Window Size ---
const useWindowSize = () => {
    const [size, setSize] = useState({ width: 0, height: 0 });
    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize(); // Set initial size
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return size;
};

// --- Main Responsive Carousel Component ---
const ProductCarousel = () => {
  const items = cardData;
  const { width } = useWindowSize();

  // --- Responsive Settings ---
  const { visibleItems, cardWidth, gap } = useMemo(() => {
    if (width >= 1024) { // Large screens (lg)
      return { visibleItems: 5, cardWidth: 320, gap: 20 };
    }
    if (width >= 768) { // Medium screens (md)
      return { visibleItems: 3, cardWidth: 300, gap: 15 };
    }
    // Small screens (sm)
    return { visibleItems: 1, cardWidth: 285, gap: 10 };
  }, [width]);
  
  const extendedItems = useMemo(() => [...items, ...items, ...items], [items]);
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [isTransitionDisabled, setIsTransitionDisabled] = useState(false);

  // --- Handlers for Next/Prev ---
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // --- Effect for Infinite Loop ---
  useEffect(() => {
    // If we've slid to the clone of the first item at the end,
    // "jump" back to the real first item at the start.
    if (currentIndex >= items.length * 2) {
      setTimeout(() => {
        setIsTransitionDisabled(true);
        setCurrentIndex(items.length);
      }, 500); // Wait for the transition to finish
    } 
    // If we've slid to the clone of the last item at the beginning,
    // "jump" back to the real last item at the end.
    else if (currentIndex < items.length) {
      setTimeout(() => {
        setIsTransitionDisabled(true);
        setCurrentIndex(items.length * 2 - 1);
      }, 500); // Wait for the transition to finish
    }
    // After a jump, re-enable transitions.
    if(isTransitionDisabled) {
        setTimeout(() => {
            setIsTransitionDisabled(false);
        }, 50); // A small delay to allow React to re-render
    }
  }, [currentIndex, items.length, isTransitionDisabled]);

  // --- Dynamic Calculation for Centering ---
  const totalItemWidth = cardWidth + gap;
  const carouselTranslateX = useMemo(() => {
    // We want to center the current card.
    // 50% moves the start of the container to the center of the screen.
    // Then we pull it back by the offset of all previous cards.
    // Finally, we pull it back by half the width of the current card to truly center it.
    return `calc(50% - ${currentIndex * totalItemWidth}px - ${totalItemWidth / 2}px)`;
  }, [currentIndex, totalItemWidth]);

  return (
    <div className="relative bg-gradient-to-tr from-rose-300 via-amber-50 to-orange-300 min-h-screen flex items-center justify-center font-sans overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-center pt-16 pb-12">
        {/* Navigation */}
        <div className="absolute top-1 right-4 md:top-2 md:right-8 z-20 flex space-x-3">
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

        {/* Carousel Track */}
        <div
          className="flex items-center"
          style={{
            transform: `translateX(${carouselTranslateX})`,
            transition: isTransitionDisabled ? 'none' : 'transform 0.5s ease-in-out',
          }}
        >
          {extendedItems.map((item, index) => {
            const isCenter = index === currentIndex;
            const offset = index - currentIndex;
            // Determine visibility based on screen size
            const isVisible = Math.abs(offset) <= Math.floor(visibleItems / 2);

            const transformStyle = {
              width: `${cardWidth}px`,
              margin: `0 ${gap / 2}px`,
              transform: `scale(${isCenter ? 1.1 : 0.9})`,
              zIndex: extendedItems.length - Math.abs(offset),
              transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              opacity: isVisible ? 1 : 0,
              flexShrink: 0,
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
