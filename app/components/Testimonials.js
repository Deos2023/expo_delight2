'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    quote: "This trip was life-changing. The views were stunning and the guides were amazing!",
    name: "Samantha R.",
    role: "Traveler from Canada",
  },
  {
    quote: "Booking was easy, and the jungle tour exceeded all expectations.",
    name: "Liam T.",
    role: "Backpacker from UK",
  },
  {
    quote: "A magical experience. I'll definitely travel with them again.",
    name: "Aisha K.",
    role: "Photographer from UAE",
  },
  {
    quote: "Flawless planning from start to finish. The team truly cares about your journey.",
    name: "Carlos M.",
    role: "Adventurer from Brazil",
  },
  {
    quote: "The desert safari was unforgettable — great service and even better memories.",
    name: "Noura F.",
    role: "Travel Blogger from Egypt",
  },
  {
    quote: "Highly professional staff and breathtaking locations. Worth every penny!",
    name: "Yuki S.",
    role: "Explorer from Japan",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-blue-200 h-[700px]">
      {/* Background Image */}
      <img
        src="/tesImg.webp" // Replace with actual path
        alt="Testimonial Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Swiper Testimonial Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl w-full text-center text-white">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="px-4"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <p className="text-xl  italic mb-4">"{t.quote}"</p>
                <h4 className="text-lg font-semibold mb-2">{t.name}</h4>
                <span className="text-sm text-gray-300">{t.role}</span>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination (lowered) */}
          <div className="custom-pagination mt-6"></div>
        </div>
      </div>
    </section>
  );
}
