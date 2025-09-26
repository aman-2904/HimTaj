// components/ProductCard.tsx
"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="text-center group">
      {/* Image Section */}
      <div
        className="relative group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? product.image2 : product.image}
          alt={product.title}
          className={`w-full h-96 object-cover transition-all duration-300 ${
            hovered ? "rounded-t-full" : "rounded-none"
          }`}
        />

        {/* Overlay link */}
        <a
          href="/singleProduct"
          className="absolute bottom-0 mx-auto items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded"
        >      <div className="mt-4">
        <h3 className="text-lg text-gray-800 font-medium group-hover:underline">
          {product.title}
        </h3>
        <p className="text-[#d47d5f] font-semibold mt-1">{product.price}</p>
        <p className="text-gray-600 text-sm">{product.material}</p>
      </div>  </a>

        {/* Heart Icon */}
        <button className="absolute top-2 left-2 bg-white rounded-full p-1 shadow hover:scale-110 transition">
          <Heart size={18} className="text-gray-600" />
        </button>
      </div>
       

      {/* Product Info */}
   

    </div>
  );
}
