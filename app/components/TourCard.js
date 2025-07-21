'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TourCard({ tour }) {
  return (
    <motion.div
      className="relative w-[400px] h-[350px] overflow-hidden rounded-lg shadow-lg"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="relative w-full h-full">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full px-5 pb-5 text-white z-10">
        <h2
          className="text-2xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          {tour.title}
        </h2>

        {tour.subTitle && (
          <p
            className="text-yellow-400 text-lg italic"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
          >
            {tour.subTitle}
          </p>
        )}

        <div className="flex gap-2 items-center mt-1">
          {tour.oldPrice && (
            <span className="line-through text-gray-300 text-sm">
              ${tour.oldPrice}
            </span>
          )}
          <span className="text-yellow-400 font-bold text-lg">
            ${tour.price}
          </span>
        </div>

        <p
          className="text-sm mt-1"
          style={{ fontFamily: 'var(--font-great-vibes)' }}
        >
          {tour.description?.slice(0, 70)}...
        </p>

        <Link
          href={`/places/${tour.slug}`}
          className="text-yellow-300 text-sm underline mt-2 inline-block"
        >
          Explore Tour
        </Link>
      </div>
    </motion.div>
  );
}
