// app/product/page.jsx
"use client";

import { useState } from "react";
import { Minus, Plus, Truck, RefreshCcw, ShieldCheck, CheckCircle } from "lucide-react";
import { HiOutlineHeart } from "react-icons/hi";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [backgroundPos, setBackgroundPos] = useState("50% 50%");

  const thumbnails = ["/hand.png", "/Men.png", "/Necklace.png", "/Men1.png"];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPos(`${x}% ${y}%`);
  };

  return (
    <div className="font-sans mt-26 bg-white text-black">
      {/* Top Offer Bar */}
      <div className="bg-[#582434] text-white text-center py-2 text-sm">
        GET FLAT 10% OFF | CODE: WELCOME10
      </div>

      {/* Product Section */}
      <div className="container mx-auto text-black py-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
        {/* Left: Product Image + Thumbnails */}
        <div className="flex gap-5">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3 mt-4">
            {thumbnails.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i + 1}`}
                className="w-20 h-20 rounded cursor-pointer"
              />
            ))}
          </div>

          {/* Main Image + Zoom Effect */}
          <div
            className="relative w-full"
            onMouseEnter={() => setZoomVisible(true)}
            onMouseLeave={() => setZoomVisible(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Normal Image */}
            <img
              src="/earRing.png"
              alt="Celeste Heart Bolo Bracelet"
              className="w-full rounded"
            />

            {/* Wishlist Button */}
            <button className="absolute top-2 right-2 p-2 text-gray-900 bg-white rounded-full hover:text-red-700 shadow-md">
              <HiOutlineHeart size={18} />
            </button>

            {/* Zoomed Image */}
            {zoomVisible && (
              <div
                className="hidden lg:block absolute top-0 left-[105%] w-[700px] h-[600px] rounded bg-no-repeat bg-cover z-20"
                style={{
                  backgroundImage: "url(/earRing.png)",
                  backgroundPosition: backgroundPos,
                  backgroundSize: "200%", // zoom level
                }}
              />
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-2 text-[#582434]">
            CELESTE HEART BOLO BRACELET
          </h1>
          <p className="text-gray-500 mb-4">B1569-20-014-127</p>
          <p className="text-2xl font-semibold text-[#cd8f7d] mb-6">₹12,999.00</p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="border p-2 rounded"
            >
              <Minus size={16} />
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border p-2 rounded"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-[#582434] text-white py-3 rounded">
              ADD TO CART
            </button>
            <button className="flex-1 border py-3 rounded hover:bg-gray-100">
              BUY NOW
            </button>
          </div>

          {/* Features */}
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <Truck size={16} /> Free Shipping
            </li>
            <li className="flex items-center gap-2">
              <RefreshCcw size={16} /> Easy 15 day Returns & Exchange
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} /> One Year Repair Warranty
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} /> Hypoallergenic | Tarnish Free
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
