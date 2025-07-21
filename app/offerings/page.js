"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHiking, FaHotel, FaUtensils, FaBusAlt, FaLeaf } from "react-icons/fa";
import PopularAdventures from "../components/PopularAdventures";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const offerFeatures = [
  {
    icon: <FaHiking size={30} />,
    title: "Guided Adventures",
    desc: "Expert-led tours with experienced guides who know every trail, tale, and treasure.",
  },
  {
    icon: <FaHotel size={30} />,
    title: "Handpicked Stays",
    desc: "Curated boutique stays and eco-resorts that reflect local character and comfort.",
  },
  {
    icon: <FaUtensils size={30} />,
    title: "Local Cuisine",
    desc: "Authentic culinary experiences with regional specialties and food trails.",
  },
  {
    icon: <FaBusAlt size={30} />,
    title: "All-Inclusive Travel",
    desc: "Worry-free itineraries with transport, stays, and activities planned for you.",
  },
  {
    icon: <FaLeaf size={30} />,
    title: "Eco-Conscious Options",
    desc: "Low-impact travel choices that support communities and protect ecosystems.",
  },
];

export default function WhatWeOfferPage() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/tur.jpg')" }}
      >
        <div className="bg-black/60 absolute inset-0" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            What We Offer
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our curated services designed to turn your trips into timeless memories.
          </p>
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <section className="py-16 px-4 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerFeatures.map((item, index) => (
              <motion.div
                key={index}
                className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="text-yellow-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Descriptions */}
      <section className="py-20 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-16">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h2 className="text-3xl font-bold mb-4">Tailored Experiences</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We understand that every traveler is different. That's why we offer fully customizable itineraries—from solo retreats to family vacations and corporate getaways. Whether you're seeking a spiritual Himalayan escape, a food and culture trail across Rajasthan, or an offbeat island adventure in the Andamans, our team works with you to craft the perfect plan.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h2 className="text-3xl font-bold mb-4">Immersive Cultural Travel</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Travel isn't just about seeing new places—it's about becoming part of them. From learning traditional art forms, participating in village festivals, to staying with local families in homestays, we ensure you don’t just visit a destination, you live it.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h2 className="text-3xl font-bold mb-4">Eco-Friendly Adventures</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sustainability is at the heart of our philosophy. Our trips are designed to minimize environmental impact and maximize community benefit. We partner with local guides, use eco-certified accommodations, and support wildlife conservation efforts wherever we go.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <h2 className="text-3xl font-bold mb-4">24/7 Personalized Support</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              You're never alone on your journey. Our customer support team is available around the clock to assist with any need—big or small. Whether you're rescheduling a tour or needing restaurant recommendations, we're just a call away.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Adventure Cards */}
      <PopularAdventures />

      {/* CTA */}
      <section className="bg-yellow-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience It All?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Discover handcrafted journeys that blend comfort, culture, and a dash of wild adventure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/tours"
            className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            View All Tours
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-yellow-600 transition"
          >
            Plan My Trip
          </a>
        </div>
      </section>
    </div>
  );
}
