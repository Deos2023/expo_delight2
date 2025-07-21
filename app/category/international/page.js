'use client';

import React from 'react';
import tourData from '../../lib/tour-data'; // Adjust path if needed
import Image from 'next/image';

const InternationalToursPage = () => {
  const internationalTours = tourData.international;

  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background Video Fixed */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-[-1]" />

      {/* Content */}
      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">International Tours</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalTours.map((tour) => (
            <div
              key={tour.slug}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={tour.images[0]}
                  alt={tour.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-1">{tour.name}</h2>
              <p className="text-sm text-gray-200">{tour.location}, {tour.district}</p>
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">{tour.description}</p>
              <p className="mt-3 font-medium text-sky-400">₹{tour.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalToursPage;
