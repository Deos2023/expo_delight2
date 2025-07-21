'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const counters = [
  { label: 'Happy Travelers', value: 120000, suffix: '+' },
  { label: 'Destinations Covered', value: 85 },
  { label: 'Years of Experience', value: 20, suffix: '+' },
  { label: 'Awards Won', value: 35 },
  { label: 'Successful Tours', value: 10000, suffix: '+' },
];

const Counter = ({ value, label, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 10);

    const interval = setInterval(() => {
      start += Math.ceil(end / (duration / stepTime));
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(interval);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-4xl md:text-7xl font-bold text-white"
        style={{ fontFamily: 'var(--font-great-vibes)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {count.toLocaleString()}
        {suffix}
      </motion.div>
      <div className="text-white mt-2 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

export default function StatsBar() {
  return (
    <section className="relative py-20  bg-cover bg-center bg-no-repeat bg-fixed"
    style={{
        backgroundImage: "url('/beautiful.jpg')", // Adjust path based on your `public` folder
      }}
      >

        <div className="absolute inset-0 bg-black/10 opacity-80 z-10" />
        <div className="absolute inset-0  opacity-80 z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 z-20 justify-items-center">
          {counters.map((item, i) => (
            <Counter key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
