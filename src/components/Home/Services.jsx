// components/Services.jsx
"use client";

import React from 'react';
import { FaRegGem } from 'react-icons/fa';
import { BsCreditCard, BsHeadset } from 'react-icons/bs';
import { MdOutlineVerifiedUser } from 'react-icons/md';

const services = [
  { icon: FaRegGem, title: 'VAULT REWARDS', description: 'Join Vault Rewards free today and enjoy exclusive member-only benefits' },
  { icon: BsCreditCard, title: 'CREDIT & FINANCING', description: 'Expressing love should be stressful. That\'s why we offer several ways to pay' },
  { icon: BsHeadset, title: 'JEWELRY EXPERT', description: 'Personalize your jewelry online selecting stone type' },
  { icon: MdOutlineVerifiedUser, title: 'PROTECTION PLANS', description: 'Our protection plans make it easy to keep your precious jewelry safe' },
];

const Services = () => (
  <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative ">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-3xl tracking-widest text-[#3A3A3A] mb-12">
        LUMILUX AT YOUR SERVICE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
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
