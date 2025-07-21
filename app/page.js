'use client'

import tourData from "./lib/tour-data";
import TourSlider from "../app/components/TourSlider";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TourImageGrid from "./components/TourImageGrid";
import OfferBanner from "./components/OfferBanner";
import TypesOfTour from "./components/TypesOfTour";
import StatsBar from "./components/StatsBar";
import SearchAndFilter from "./components/SearchAndFilter";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

const typingText = 'Travel with greatness';
const allTours = [
  ...tourData.national.slice(0, 3),
  ...tourData.international.slice(0, 3),
  ...tourData.jungle.slice(0, 3),
].map((tour) => ({
  ...tour,
  title: tour.name,
  image: tour.images[0], // use the first image
}));

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      <div className="relative min-h-screen flex overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Hero Image with Animated Text */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Content */}
  <div
    className="absolute inset-0 flex items-center justify-center bg-black/30 z-10"
    style={{ fontFamily: 'var(--font-great-vibes)' }}
  >
    <motion.h1
      className="text-white text-3xl md:text-7xl font-ephesis px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="ml-1 inline-block h-8 w-1 bg-white"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.h1>
  </div>
</div>


          {/* Right Section - Three Auto Sliding Services */}
          <div className="w-full font-bold text-lg md:w-1/2 grid grid-rows-3 h-[50vh] md:h-screen"
          style={{ fontFamily: 'var(--font-great-vibes)' }}>
            <SliderSection 
              images={tourData.international.map(t => t.images[0])} 
              label="International Tour" 
              direction="right" 
              bg="bg-sky-100" 
              delay={0}
            />
            <SliderSection 
              images={tourData.national.map(t => t.images[0])} 
              label="Domestic Tour" 
              direction="left" 
              bg="bg-blue-200" 
              delay={1}
            />
            <SliderSection 
              images={tourData.jungle.map(t => t.images[0])} 
              label="Jungle Safari" 
              direction="right" 
              bg="bg-green-200" 
              delay={2}
            />
          </div>
        </div>
      </div>

      {/* Travel Search Bar Section */}
      {/* <div className="w-full bg-neutral-900 py-6 flex justify-center items-center">
        <div className="flex gap-4 flex-wrap md:flex-nowrap px-4">
          <input type="text" placeholder="Where to?" className="w-64 px-4 py-4 bg-neutral-900 text-white border border-white focus:outline-none placeholder-white" />
          <input type="text" placeholder="When?" className="w-64 px-4 py-4 bg-neutral-900 text-white border border-white focus:outline-none placeholder-white" />
          <input type="text" placeholder="Travel Type" className="w-64 px-4 py-4 bg-neutral-900 text-white border border-white focus:outline-none placeholder-white" />
          <button className="w-40 px-4 py-4 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition duration-300">FIND NOW</button>
        </div>
      </div> */}
      <SearchAndFilter />


      <div className="">
        <TourSlider data={allTours} basePath="tours" />
        <OfferBanner />
        <TourImageGrid
          data={[
            ...tourData.national,
            ...tourData.international,
            ...tourData.jungle,
          ]}
          basePath="/explore"
        />
        <StatsBar />
        <TypesOfTour />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
}

function SliderSection({ images, label, direction = 'left', bg, delay }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000 + delay * 1000);

    return () => clearInterval(interval);
  }, [current, images.length, delay, isHovered]);

  const variants = {
    enter: (direction) => ({
      x: direction === 'left' ? '100%' : '-100%',
      opacity: 0.5,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
    exit: (direction) => ({
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0.5,
      scale: 0.95,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <div 
      className={`relative ${bg} overflow-hidden h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={images[current]} 
            alt={label} 
            layout="fill" 
            objectFit="cover" 
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.h2 
          className="text-white text-xl md:text-3xl font-ephesis drop-shadow-lg mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {label}
        </motion.h2>

        {/* Dots indicator */}
        <div className="flex gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
