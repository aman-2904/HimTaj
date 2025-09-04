
"use client";

import React from 'react';

// Individual Icon Card Component
const IconCard = ({ imageUrl, title, description }) => (
  <div className="w-full sm:w-1/2 md:w-1/5 p-2 flex flex-col items-center text-center">
    <div className="bg-white rounded-lg overflow-hidden w-full">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 sm:h-56 md:h-64 object-cover" 
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x600/f0f0f0/333?text=Image+Not+Found'; }}
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

// Main Showcase Component
export default function App() {
  const icons = [
    {
      imageUrl: 'https://placehold.co/400x600/f8f8f8/333?text=Serpenti',
      title: 'Serpenti',
      description: 'An icon of infinite transformation, crafted with mastery and reinvented many times over since 1948.',
    },
    {
      imageUrl: 'https://placehold.co/400x600/f8f8f8/333?text=B.zero1',
      title: 'B.zero1',
      description: 'The icon that rewrites the codes of design with an audacious spirit and creative experimentation.',
    },
    {
      imageUrl: 'https://placehold.co/400x600/f8f8f8/333?text=Divas%27+Dream',
      title: "Divas' Dream",
      description: 'A celebration of timeless elegance and joyful femininity captured by an iconic, universal motif.',
    },
    {
      imageUrl: 'https://placehold.co/400x600/f8f8f8/333?text=Bvlgari+Tubogas',
      title: 'Bvlgari Tubogas',
      description: 'Its sinuous twists of gold and versatile design make it an icon of eclectic innovation.',
    },
    {
      imageUrl: 'https://placehold.co/400x600/f8f8f8/333?text=Octo',
      title: 'Octo',
      description: 'Defined by its iconic octagonal case, it blends a resolutely Italian style and mechanical mastery.',
    },
  ];

  return (
    <div className="relative bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-black font-light tracking-[0.2em] text-center uppercase mb-10">
          Discover The Icons
        </h2>
        <div className="flex flex-wrap justify-center -m-2">
          {icons.map((icon, index) => (
            <IconCard
              key={index}
              imageUrl={icon.imageUrl}
              title={icon.title}
              description={icon.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

