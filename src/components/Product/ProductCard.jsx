// components/ProductCard.tsx
"use client";

import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="text-center group">
      {/* Image Section */}
     <div className="relative group">
  <img
    src={product.image}
    alt={product.title}
    className="w-full h-90 object-cover rounded"
  />
  <a href="/singleProduct" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded">
  <div className="absolute bottom-4 left-0 w-full bg-black bg-opacity-80 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-b">
    Quick View
  </div>
  </a>

        {/* Heart Icon */}
        <button className="absolute top-2 left-2 bg-white rounded-full p-1 shadow hover:scale-110 transition">
          <Heart size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-lg text-gray-800 font-medium group-hover:underline">
          {product.title}
        </h3>
        <p className="text-[#d47d5f] font-semibold mt-1">{product.price}</p>
        <p className="text-gray-600 text-sm">{product.material}</p>
      </div>
    </div>
  );
}
