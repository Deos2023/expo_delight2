'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import tourData from '../lib/tour-data';
import Image from 'next/image';
import Link from 'next/link';

const flattenTours = () => {
  const allTours = [];
  Object.entries(tourData).forEach(([category, tours]) => {
    tours.forEach((tour) => {
      allTours.push({ ...tour, category });
    });
  });
  return allTours;
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const initialQuery = searchParams?.get('query')?.toLowerCase() || '';
  const [query, setQuery] = useState(initialQuery);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // Only run this effect on client side
    if (typeof window !== 'undefined') {
      setIsLoading(false);
      const allTours = flattenTours();
      const results = allTours.filter((tour) => {
        return (
          tour.name.toLowerCase().includes(initialQuery) ||
          tour.district.toLowerCase().includes(initialQuery) ||
          tour.location.toLowerCase().includes(initialQuery) ||
          tour.country.toLowerCase().includes(initialQuery)
        );
      });
      setFilteredResults(results);
    }
  }, [initialQuery]);

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);

    const allTours = flattenTours();
    const results = allTours.filter((tour) => {
      return (
        tour.name.toLowerCase().includes(input) ||
        tour.district.toLowerCase().includes(input) ||
        tour.location.toLowerCase().includes(input) ||
        tour.country.toLowerCase().includes(input)
      );
    });

    setFilteredResults(results);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <p>Loading search results...</p>
        </div>
      </div>
    );
  }

  return (
     <div className="relative min-h-screen sm:pt-0 pt-24 overflow-hidden">
      {/* Fixed Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="fixed inset-0 bg-black/50 z-[-1] pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 p-6 max-w-5xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">
          {query ? `Search Results for "${query}"` : 'Search Tour Destinations'}
        </h1>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by name, district, location, or country..."
          className="w-full p-3 border border-white/30 bg-white/10 text-white placeholder-white/60 rounded-lg mb-8 shadow"
        />

        {query && filteredResults.length === 0 && (
          <p className="text-gray-300">No results found.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((tour, index) => (
            <Link
              key={index}
              href={`/places/${tour.slug}`}
              className="block bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg shadow hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src={tour.images[0]}
                alt={tour.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-white">
                <h2 className="text-xl font-semibold">{tour.name}</h2>
                <p className="text-sm text-white/80">
                  {tour.district}, {tour.location}, {tour.country}
                </p>
                <p className="mt-2 text-sm text-white/70">{tour.description}</p>
                <p className="mt-2 font-bold">₹{tour.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;