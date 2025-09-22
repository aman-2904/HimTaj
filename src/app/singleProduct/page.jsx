// app/product/page.tsx (Next.js 13+ with App Router)
"use client";

import { useState } from "react";
import { Minus, Plus, Truck, RefreshCcw, ShieldCheck, CheckCircle } from "lucide-react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    "/hand.png",
    "/Men.png",
    "/Necklace.png",
    "/Men1.png",
  ];

  const products = [
    {
      id: 1,
      title: "BOUGIE INFINITY CUT CRYSTAL STUDS",
      price: "₹5,999.00",
      image: "/hand.png", // replace with real
    },
    {
      id: 2,
      title: "BANGER MULTI-COLOURED LAYERED NECKLACE",
      price: "₹12,299.00",
      image: "/HeroS.png",
      bestseller: true,
    },
    {
      id: 3,
      title: "BOW SPIKED NECKLACE",
      price: "₹2,999.00",
      image: "/ring.png",
      bestseller: true,
    },
    {
      id: 4,
      title: "MARQUISE MIRROR STUDS",
      price: "₹2,999.00",
      image: "/Men.png",
      bestseller: true,
    },
    {
      id: 5,
      title: "LIMELIGHT MIRROR & METAL PYRAMID HOOP EARRINGS",
      price: "₹4,999.00",
      image: "/unisex.png",
      bestseller: true,
    },
  ];

  return (
    <div className="font-sans mt-26 bg-white text-black">
      {/* Top Offer Bar */}
      <div className="bg-[#582434] text-white text-center py-2 text-sm">
        GET FLAT 10% OFF | CODE: WELCOME10
      </div>

      {/* Product Section */}
      <div className="container mx-auto text-black  py-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
        {/* Left: Product Image + Thumbnails */}
        <div className="flex gap-5 ">
          <div className="flex flex-col gap-3 mt-4">
            {thumbnails.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i + 1}`}
                className="w-20 h-20 border rounded cursor-pointer"
              />
            ))}
          </div>
          <img
            src="/earRing.png" // Replace with main product image
            alt="Celeste Heart Bolo Bracelet"
            className="w-full rounded"
          />

        </div>

        {/* Right: Product Info */}
        <div className="">
          <h1 className="text-4xl font-bold mb-2 text-[#582434]">CELESTE HEART BOLO BRACELET</h1>
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
            <button className="flex-1 bg-[#582434] text-white py-3 rounded ">
              ADD TO CART
            </button>
            <button className="flex-1 border py-3 rounded hover:bg-gray-100">
              BUY NOW
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            The Celeste Heart Bolo Bracelet is a timeless statement piece,
            designed with high-quality crystal zirconia stones and crafted in
            rhodium-plated brass. Inspired by classic tennis jewellery, this
            heart-shaped bolo bracelet radiates luxury, making it perfect for
            parties, cocktail events, and festive occasions.
          </p>

          {/* Dropdowns */}
          <div className="border-t border-b py-4 mb-6">
            <details>
              <summary className="cursor-pointer py-2 font-medium text-[#582434]">
                PRODUCT CARE
              </summary>
              <p className="text-sm text-gray-600 mt-2">
                Store in a dry place and avoid moisture.
              </p>
            </details>
            <details>
              <summary className="cursor-pointer py-2 font-medium text-[#582434]">
                SHIPPING INFORMATION
              </summary>
              <p className="text-sm text-gray-600 mt-2">
                Free shipping on all orders.
              </p>
            </details>
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

      {/* Recommended Products */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((p) => (
            <div key={p.id} className="text-center">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 object-cover rounded"
                />
                {p.bestseller && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    Bestseller
                  </span>
                )}
              </div>
              <h3 className="text-sm font-medium mt-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.price}</p>
              <button className="mt-2 w-full border py-2 rounded hover:bg-gray-100 ">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <button className="border px-6 py-2 rounded hover:bg-gray-100">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
}
