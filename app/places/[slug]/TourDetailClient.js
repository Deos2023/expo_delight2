'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function TourDetailClient({ tour }) {
  const images = tour?.images?.length ? tour.images : ['/placeholder.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  // Background change every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Slider image auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const whatsappMessage = `Hello! I'm interested in booking a tour to ${tour.name}. Can you provide more details?`;

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={images[bgImageIndex]}
              alt="Background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-12 max-w-6xl mx-auto space-y-12">
        {/* Slider and Arrows */}
        <div className="flex items-center justify-center gap-4">
          {/* Prev Button (hide on mobile) */}
          {images.length > 1 && (
            <button
              onClick={prevSlide}
              className="hidden sm:block bg-black/40 hover:bg-black/60 p-3 rounded-full text-xl"
            >
              ←
            </button>
          )}

          {/* Image Slider */}
          <div className="relative w-full sm:w-2/3 h-64 sm:h-[400px] rounded-xl overflow-hidden shadow-lg border border-white/20">
            <Image
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Next Button (hide on mobile) */}
          {images.length > 1 && (
            <button
              onClick={nextSlide}
              className="hidden sm:block bg-black/40 hover:bg-black/60 p-3 rounded-full text-xl"
            >
              →
            </button>
          )}
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="mt-3 flex justify-center gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  index === currentImageIndex
                    ? 'bg-white scale-110'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}

        {/* Title + Location */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300">
            {tour.name}
          </h1>
          <p className="text-lg text-gray-200">
            {tour.district}, {tour.country}
          </p>
          <p className="text-sm text-gray-300">{tour.location}</p>
        </div>

        {/* About Section */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About This Place</h2>
            <p className="text-gray-100">{tour.description}</p>
            <p className="text-gray-300 mt-2 text-sm">{tour.details}</p>
          </div>

          {tour.highlights?.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-100">
                {tour.highlights.map((point, index) => (
                  <li key={index}>✅ {point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing and WhatsApp */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-lg text-white">
                Starting from{' '}
                <span className="text-green-400 text-2xl font-bold">
                  ₹{tour.price}
                </span>{' '}
                per person
              </p>
            </div>
            <a
              href={`https://wa.me/916291843112?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition text-center"
            >
              📲 Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Extra Info */}
        <div className="grid md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl text-gray-100">
          <div>
            <h4 className="font-semibold text-white mb-2">🗓 Best Time to Visit</h4>
            <p>{tour.bestTime || 'Year-round destination'}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">💡 Travel Tips</h4>
            <p>{tour.tips || 'Comfortable walking shoes recommended.'}</p>
          </div>
        </div>

        {/* Gallery Section with Modal */}
        {images.length > 1 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Photo Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative h-40 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setModalImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal Viewer */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={modalImage}
              alt="Enlarged"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-0 -right-20 text-white text-2xl bg-black/60 px-4 py-2 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
