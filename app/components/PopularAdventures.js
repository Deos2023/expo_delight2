'use client';

import Image from 'next/image';
import { FaClock, FaUser } from 'react-icons/fa';

const popularAdventures = [
  {
    title: 'Discover Costa Rica',
    price: 2830,
    rating: '7.4 Superb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id ligula aliquam.',
    image: '/images/costa-rica.jpg',
    duration: '10 Days',
    age: '16+',
  },
  {
    title: 'India Is For Everyone',
    price: 1350,
    rating: '7.0 Superb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id ligula aliquam.',
    image: '/images/india.jpg',
    duration: '18 Days',
    age: '1+',
  },
  {
    title: 'Thai Island To Visit',
    price: 1870,
    rating: '7.8 Superb',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id ligula aliquam.',
    image: '/images/thailand.jpg',
    duration: '15 Days',
    age: '20+',
  },
];

export default function PopularAdventures() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-orange-500 font-semibold italic">
          Modern & Beautiful
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-1 mb-4">
          Most Popular Adventures We Have
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          posuere tempor mauris, nec imperdiet mi rutrum eget.
        </p>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {popularAdventures.map((tour, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border"
            >
              <div className="relative h-56">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-500">{tour.rating}</p>
                <p className="text-sm text-gray-600">{tour.description}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-orange-600 font-bold text-lg">
                    ${tour.price}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-orange-500 text-white text-sm px-4 py-3">
                <span className="flex items-center gap-1">
                  <FaClock /> {tour.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FaUser /> {tour.age}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
