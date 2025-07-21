'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tourData from '../../lib/tour-data';

const getAllTours = () => {
  return [
    ...(tourData.national || []),
    ...(tourData.international || []),
    ...(tourData.jungle || []),
  ];
};

const shuffleArray = (arr) => {
  return [...arr].sort(() => 0.5 - Math.random());
};

const DestinationCard = ({ tour }) => {
  const image = tour.images?.[2] || '/placeholder.jpg';

  return (
    <Link href={`/places/${tour.slug}`} passHref>
      <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
        <div className="relative h-80 w-full">
          <Image
            src={image}
            alt={tour.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
          <h3 className="text-xl md:text-2xl font-bold">{tour.name}</h3>
          <p className="text-sm italic">Just Beautiful</p>
        </div>
      </div>
    </Link>
  );
};

export default function DestinationsPage() {
  const allTours = shuffleArray(getAllTours());
  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleTours, setVisibleTours] = useState([]);

  useEffect(() => {
    setVisibleTours(allTours.slice(0, visibleCount));
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed h-[60vh] w-full"
        style={{
          backgroundImage: "url('/beautiful.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Destinations List</h1>
          <p className="mt-2 text-lg md:text-xl italic">
            Modern & Beautiful Places for all Kinds of Travel and Tourism
          </p>
        </div>
      </div>

      {/* Destination Cards Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleTours.map((tour) => (
            <DestinationCard key={tour.slug} tour={tour} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < allTours.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
