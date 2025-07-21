'use client';

import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'Domestic Tour',
    subtitle: 'Incredible India',
    image: '/img/nat.webp',
  },
  {
    title: 'International Tour',
    subtitle: 'Explore the World',
    image: '/img/int.webp',
  },
  {
    title: 'Jungle Safari',
    subtitle: 'Into the Wild',
    image: '/img/jung.webp',
  },
];

export default function TypesOfTour() {
  return (
    <section className="bg-gray-100 m-0 p-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="relative h-[700px] overflow-hidden group cursor-pointer"
            style={{ fontFamily: 'var(--font-great-vibes)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />

            {/* Black Overlay with smooth transition */}
            <div className="absolute inset-0 bg-black/20 bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-500 z-10" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-4">
              <h3 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-md">{card.title}</h3>
              <p className="italic text-lg drop-shadow-md">{card.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
