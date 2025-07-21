"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TourCard from "./TourCard";

export default function TourSlider({ data, basePath = "" }) {
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const currentIndex = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector("div > div");
    if (firstCard) {
      setCardWidth(firstCard.offsetWidth);
    }

    const interval = setInterval(() => {
      if (!slider || !cardWidth) return;

      currentIndex.current = (currentIndex.current + 1) % data.length;
      const newScrollLeft = currentIndex.current * cardWidth;

      slider.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }, 2500); // Slide every 2.5s

    return () => clearInterval(interval);
  }, [cardWidth, data.length]);

  return (
    <motion.div
      ref={sliderRef}
      className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {data.map((tour) => (
        <div className="snap-center shrink-0" key={tour.slug}>
          <TourCard tour={tour} basePath={basePath} />
        </div>
      ))}
    </motion.div>
  );
}
