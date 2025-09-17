// ./components/ReviewsSection.jsx

"use client";

import { useState } from "react";
import { FaGoogle, FaStar, FaRegStar } from "react-icons/fa";

// --- JSON Data for Testimonials ---
const testimonialsData = [
  {
    id: 1,
    name: "Daniela Cohen",
    text: "Absolutely loved the customization! Everything was done to perfection, and delivery was fast.",
    rating: 5,
    imageUrl: "ring.png", // place in public/testimonials/
  },
  {
    id: 2,
    name: "Amit Levi",
    text: "Such an amazing product! It was a pleasure working with you, and the result was beyond expectations.",
    rating: 5,
    imageUrl: "ring.png",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    text: "The quality is top-notch, and the customer service team was incredibly helpful throughout the process.",
    rating: 5,
    imageUrl: "ring.png",
  },
  {
    id: 4,
    name: "Daniela Cohen",
    text: "Absolutely loved the customization! Everything was done to perfection, and delivery was fast.",
    rating: 5,
    imageUrl: "ring.png",
  },
  {
    id: 5,
    name: "Amit Levi",
    text: "Such an amazing product! It was a pleasure working with you, and the result was beyond expectations.",
    rating: 5,
    imageUrl: "ring.png",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    text: "The quality is top-notch, and the customer service team was incredibly helpful throughout the process.",
    rating: 5,
    imageUrl: "ring.png",
  },
];

// --- Star Rating Component ---
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-lg ${
            index < rating ? "text-yellow-400" : "text-gray-500"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// --- Testimonial Card Component ---
const TestimonialCard = ({ name, text, rating, imageUrl }) => {
  return (
    <div className="relative flex-shrink-0 w-[340px] md:w-[380px] p-6 pt-12 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl text-white">
      {/* Profile Image */}
      <div className="absolute -top-10 left-6">
        <img
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="rounded-full border-4 border-white/20 object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-2">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <StarRating rating={rating} />
        <p className="mt-3 text-sm text-gray-900 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

// --- Google Review Widget Component ---
const GoogleReviewWidget = () => {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const rating = 4.9;
  const reviewCount = 1081;

  const handleWriteReviewClick = () => {
    setIsWritingReview(!isWritingReview);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() === "") {
      alert("Please write a review before submitting.");
      return;
    }
    alert(`Thank you for your review!\n\n"${reviewText}"`);
    console.log({ review: reviewText });

    setReviewText("");
    setIsWritingReview(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto font-sans p-6 border border-white/20 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl">
      {/* Top section with logo, rating, and button */}
      <div className="flex items-center justify-between">
        {/* Left Side */}
        
        <div className="flex items-center space-x-4">
          {/* <FaGoogle className="text-4xl text-[#4285F4]" /> */}
          <div>
            <img
              src="nav_logo.png" // place this file in public/
              alt="Ranisha The Silver Shine"
              width={120}
              height={40}
              className="object-contain"
            />
            <div className="flex items-center">
              <span className="text-gray-900 font-medium mr-2">{rating}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) =>
                  index < Math.floor(rating) ? (
                    <FaStar key={index} className="text-yellow-400" />
                  ) : index < Math.round(rating) ? (
                    <FaStar key={index} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={index} className="text-gray-300" />
                  )
                )}
              </div>
            </div>
            <p className="text-sm text-gray-700">{reviewCount} Google Reviews</p>
          </div>
        </div>

        {/* Right Side */}
        <button
          onClick={handleWriteReviewClick}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Write Review
        </button>
      </div>

      {/* Review Text Area */}
      {isWritingReview && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <form onSubmit={handleReviewSubmit}>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full h-24 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share details of your own experience..."
              autoFocus
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

// --- Main Reviews Section (Google + Testimonials) ---
const Testimonials = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-rose-300 via-amber-50 to-orange-300">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Google Review */}
        <div className="mb-16">
          <GoogleReviewWidget />
        </div>

        {/* Testimonials */}
        

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center items-center">
          {testimonialsData.map((t) => (
            <TestimonialCard
              key={t.id}
              name={t.name}
              text={t.text}
              rating={t.rating}
              imageUrl={t.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
