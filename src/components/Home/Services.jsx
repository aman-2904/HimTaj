// components/Services.jsx
"use client";

import React from 'react';
import { FaRegGem,FaTruck,FaRupeeSign  } from 'react-icons/fa';



const services = [
  { icon: FaRegGem, title: 'PREMIUM PRODUCTS', description: 'Top-notch quality for all your needs.' },
  { icon: FaTruck, title: 'FREE DELIVERY', description: 'Fast and free delivery, always on time!' },
  { icon: FaRupeeSign , title: 'BEST VALUE', description: 'Unbeatable deals that fit your budget.' },
  
];

const Services = () => (
  <section className="bg-white py-40 px-4 sm:px-6 lg:px-8 relative ">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-3xl tracking-widest text-[#3A3A3A] mb-20">
        HIMTAJ AT YOUR SERVICE
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl text-gray-700 mb-4">
                <Icon />
              </div>
              <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
