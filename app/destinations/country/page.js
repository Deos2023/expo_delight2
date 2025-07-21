'use client';

import Image from 'next/image';
import Link from 'next/link';
import tourData from '../../lib/tour-data';

const getUniqueCountries = () => {
  const allTours = [
    ...(tourData.national || []),
    ...(tourData.international || []),
    ...(tourData.jungle || []),
  ];

  const countryMap = {};

  allTours.forEach((tour) => {
    const country = tour.country;
    if (country && !countryMap[country]) {
      countryMap[country] = tour;
    }
  });

  return Object.values(countryMap);
};

const CountryCard = ({ tour }) => {
  const image =
    tour.images?.[Math.floor(Math.random() * tour.images.length)] || '/placeholder.jpg';

  return (
    <Link href={`/search?query=${encodeURIComponent(tour.country)}`} className="block">
      <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
        <div className="relative h-80 w-full">
          <Image
            src={image}
            alt={tour.country}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
          <h3 className="text-xl md:text-2xl font-bold">{tour.country}</h3>
          <p className="text-sm italic">Just Beautiful</p>
        </div>
      </div>
    </Link>
  );
};

export default function DestinationsPage() {
  const countries = getUniqueCountries();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed h-[60vh] w-full"
        style={{ backgroundImage: "url('/beautiful.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Destinations by Country</h1>
          <p className="mt-2 text-lg md:text-xl italic">
            Discover travel experiences across different nations
          </p>
        </div>
      </div>

      {/* Destination Cards Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {countries.map((tour) => (
            <CountryCard key={tour.country} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
}
