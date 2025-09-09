// components/Newsletter.jsx

"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // React icon instead of custom SVG

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <section
      className="relative flex items-center justify-center py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1756908604030-04861dc79820?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // <-- put image in /public folder
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative text-center w-full max-w-2xl text-white">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl mb-8">
          Get the Best Blog Stories into Your Inbox!
        </h2>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto mb-4"
        >
          <div className="flex items-center bg-white/90 border border-gray-200 p-2 rounded-lg">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
              className="w-full bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-500 px-4 py-2"
            />
            <button
              type="submit"
              className="flex items-center text-gray-700 font-medium whitespace-nowrap px-4 py-2 transition-colors hover:text-black"
            >
              <FaPaperPlane className="mr-2" />
              Subscribe
            </button>
          </div>
        </form>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-center justify-center text-white">
          <input
            type="checkbox"
            id="privacyPolicy"
            className="w-4 h-4 text-gray-200 bg-transparent border-gray-300 rounded focus:ring-gray-400"
          />
          <label
            htmlFor="privacyPolicy"
            className="ml-2 text-sm text-gray-200"
          >
            I agree to the{" "}
            <a href="#" className="underline hover:text-white">
              Privacy Policy.
            </a>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
