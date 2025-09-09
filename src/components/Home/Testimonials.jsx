// components/Testimonials.jsx
"use client";

import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";

// --- JSON Data ---
const testimonialsData = [
  {
    id: 1,
    rating: 5,
    title: "Amazing Product!",
    review: "The jewelry quality exceeded my expectations.",
    authorName: "Alice Johnson",
    authorTitle: "Fashion Blogger",
    productImage: "ring.png",
    productName: "Round Marble Coffee Table",
    productDetails: "Elegant & Modern",
  },
  {
    id: 2,
    rating: 4.5,
    title: "Great Service",
    review: "Fast delivery and excellent customer support.",
    authorName: "Bob Smith",
    authorTitle: "Designer",
    productImage: "earRing.png",
    productName: "Modern Study Table",
    productDetails: "Minimalistic Design",
  },
  {
    id: 3,
    rating: 4,
    title: "Satisfied!",
    review: "Good quality jewelry at a reasonable price.",
    authorName: "Catherine Lee",
    authorTitle: "Stylist",
    productImage: "bracelet.png",
    productName: "Nature Loft Sofa",
    productDetails: "Comfortable & Stylish",
  },
];

// --- Star Rating Component with half stars support ---
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-red-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-red-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-red-400" />);
    }
  }
  return <div className="flex items-center mb-3">{stars}</div>;
};

// --- Testimonial Card Component ---
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative border border-gray-300 bg-white p-6 flex flex-col h-full rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex-grow">
        <StarRating rating={testimonial.rating} />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{testimonial.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.review}"</p>
        <div>
          <p className="font-semibold text-sm tracking-widest text-gray-900">{testimonial.authorName}</p>
          <p className="text-xs text-gray-500 tracking-wider">{testimonial.authorTitle}</p>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={testimonial.productImage}
              alt={testimonial.productName}
              className="w-12 h-12 object-cover border border-gray-200 mr-4 rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/48x48/f0f0f0/ccc?text=??'; }}
            />
            <div>
              <p className="font-semibold text-sm text-gray-800">{testimonial.productName}</p>
              <p className="text-xs text-gray-500">{testimonial.productDetails}</p>
            </div>
          </div>
          <button className="bg-red-400 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-red-500 transition-colors">
            <BsCartPlus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Testimonials Component ---
const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-300 via-amber-50 to-orange-300 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-serif tracking-[0.2em] text-gray-800 mb-12">
          HAPPY CLIENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;