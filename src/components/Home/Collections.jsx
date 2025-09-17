"use client";
import React, { useState, useRef } from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { FaRupeeSign  } from 'react-icons/fa';
import { HiOutlineHeart } from "react-icons/hi";
import { motion } from "framer-motion";

// --- DATA ---
const allProducts = [
  {
    id: 1,
    name: "Modern Study Table",
    category: "Earrings",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1714733831162-0a6e849141be?q=80&w=1070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "New",
    hoverimg:"https://images.unsplash.com/photo-1615854430736-c9fae5a95083?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Aesthetic Bed Side Table",
    category: "Earrings",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1701777892740-88419a701472?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Sale",
    hoverimg:"https://images.unsplash.com/photo-1723986071829-42d53407ae38?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Nature Loft Sofa",
    category: "Earrings",
    price: 1300,
    image:
      "https://images.unsplash.com/photo-1716461534906-d31a17008801?q=80&w=1310&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Hot",
    hoverimg:"https://images.unsplash.com/photo-1656109801168-699967cf3ba9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Velvet Green Armchair",
    category: "Earrings",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    badge: "New",
    hoverimg:"https://images.unsplash.com/photo-1656109801168-699967cf3ba9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Classic Wooden Chair",
    category: "Necklaces",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0b8cfc22a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    badge: "Sold Out",
    hoverimg:"https://images.unsplash.com/photo-1656109801168-699967cf3ba9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: 'Comfy Gray Sofa',
    category: 'Necklaces',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1540574163024-58eab325209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Best Seller',
    hoverimg:"https://images.unsplash.com/photo-1656109801168-699967cf3ba9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: 'Round Marble Coffee Table',
    category: 'Studs',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1616401784845-180844d18706?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'Limited',
  },
  {
    id: 8,
    name: 'Modern Study Table',
    category: 'Studs',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'New',
  },
  {
    id: 9,
    name: 'Aesthetic Bed Side Table',
    category: 'Studs',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1594026112274-b3524b2725a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    badge: 'Sale',
  },
  {
    id: 10,
    name: 'Nature Loft Sofa',
    category: 'Bracelets',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Hot',
  },
  {
    id: 11,
    name: 'Velvet Green Armchair',
    category: 'Bracelets',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'New',
  },
  {
    id: 12,
    name: 'Classic Wooden Chair',
    category: 'Bracelets',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1506439773649-6e0b8cfc22a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'Sold Out',
  },
  {
    id: 13,
    name: 'Comfy Gray Sofa',
    category: 'Anklets',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1540574163024-58eab325209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Best Seller',
  },
  {
    id: 14,
    name: 'Round Marble Coffee Table',
    category: 'Anklets',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1616401784845-180844d18706?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'Limited',
  },
  {
    id: 15,
    name: 'Modern Study Table',
    category: 'Anklets',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'New',
  },
  {
    id: 16,
    name: 'Aesthetic Bed Side Table',
    category: 'Idols and Coins',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1594026112274-b3524b2725a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    badge: 'Sale',
  },
  {
    id: 17,
    name: 'Nature Loft Sofa',
    category: 'Idols and Coins',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Hot',
  },
  {
    id: 18,
    name: 'Velvet Green Armchair',
    category: 'Idols and Coins',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'New',
    
  },
  {
    id: 19,
    name: 'Classic Wooden Chair',
    category: 'Mens Jewellry',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1506439773649-6e0b8cfc22a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'Sold Out',
  },
  {
    id: 20,
    name: 'Comfy Gray Sofa',
    category: 'Mens Jewellry',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1540574163024-58eab325209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Best Seller',
  },
  {
    id: 21,
    name: 'Round Marble Coffee Table',
    category: 'Mens Jewellry',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1616401784845-180844d18706?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'Limited',
  },
  {
    id: 22,
    name: 'Modern Study Table',
    category: 'Bridal Jewellry',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'New',
  },
  {
    id: 23,
    name: 'Aesthetic Bed Side Table',
    category: 'Bridal Jewellry',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1594026112274-b3524b2725a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    badge: 'Sale',
  },
  {
    id: 24,
    name: 'Nature Loft Sofa',
    category: 'Bridal Jewellry',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Hot',
  },
  {
    id: 25,
    name: 'Velvet Green Armchair',
    category: 'Gold Jewellry',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'New',
  },
  {
    id: 26,
    name: 'Classic Wooden Chair',
    category: 'Gold Jewellry',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1506439773649-6e0b8cfc22a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    badge: 'Sold Out',
  },
  {
    id: 27,
    name: 'Comfy Gray Sofa',
    category: 'Gold Jewellry',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1540574163024-58eab325209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Best Seller',
  },
  {
    id: 28,
    name: 'Comfy Gray Sofa',
    category: 'Gold Jewellry',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1540574163024-58eab325209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    badge: 'Best Seller',
  },
  // ... rest of your product list unchanged
];

// List of categories for the filter tabs
const categories = [
  "Earrings",
  "Necklaces",
  "Studs",
  "Bracelets",
  "Anklets",
  "Idols and Coins",
  "Mens Jewellry",
  "Bridal Jewellry",
  "Gold Jewellry",
];

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

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("Earrings");
  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory
  );

  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      className="relative bg-gradient-to-br from-rose-300 via-amber-50 to-orange-300 font-sans text-gray-800 min-h-screen overflow-hidden"
    >
      {/* Draggable Lines */}
      <DraggableLine initialLeft="25%" constraintsRef={constraintsRef} />
      <DraggableLine initialLeft="50%" constraintsRef={constraintsRef} />
      <DraggableLine initialLeft="75%" constraintsRef={constraintsRef} />

      <div className="px-4 sm:px-6 lg:px-24 py-20 relative z-10">
        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-colors duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-[#582434] text-white"
                  : "bg-[#582434] text-white  hover:text-gray-400 border border-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
          <button className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#582434] backdrop-blur-sm rounded-full text-white transform hover:scale-110  transition-all duration-300">
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-[421px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                src={product.hoverimg}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
                <span className="absolute top-2 right-4 text-white text-xs font-semibold rounded-full">
                  <button className="p-2 text-red-500 hover:text-red-700">
                    <HiOutlineHeart size={28} />
                  </button>
                </span>
                {/* Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {product.name}
                      </h3>
                      <div className="flex items-center mt-1 text-white">
                        <FaRupeeSign className="w-4 h-4 fill-current" />
                        <span className="text-white text-sm ml-1 font-medium">
                          {product.price}
                        </span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-16">
          <button className="bg-[#582434] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-300">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;

