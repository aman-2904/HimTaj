"use client";
import React from 'react';

// You can replace this with your actual image data
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    instagramUrl: 'https://www.instagram.com/',
    alt: 'Fashion model wearing jewelry',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instagramUrl: 'https://www.instagram.com/',
    alt: 'Close up of a woman wearing earrings',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instagramUrl: 'https://www.instagram.com/',
    alt: 'Woman in a white shirt looking down',
  },
  {
    id: 4,
    src: 'https://plus.unsplash.com/premium_photo-1680181362119-5c9bf196805f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instagramUrl: 'https://www.instagram.com/',
    alt: 'Profile view of a model with elegant makeup',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1651395835317-d2868e8ebcac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5rbGV0fGVufDB8fDB8fHww',
    instagramUrl: 'https://www.instagram.com/',
    alt: 'Woman leaning forward with a gentle expression',
  },
];

// A simple component for the Instagram Icon SVG
const InstagramIcon = () => (
  <svg
    className="w-12 h-12 text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const InstagramGallery = () => {
  return (
    <section className="bg-gray-50   z-30 relative">
      <div className=" ">
        {/* Section Header */}
        

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
          {galleryImages.map((image) => (
            <a
              key={image.id}
              href={image.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block overflow-hidden"
            >
              {/* Image with hover effects */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[350px] object-cover aspect-square transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50"
              />
              {/* Overlay with Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <InstagramIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
