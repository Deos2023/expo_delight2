"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaMapMarkedAlt, FaStar, FaGlobeAsia } from 'react-icons/fa';
import PopularAdventures from '../components/PopularAdventures';
import OfferBanner from '../components/OfferBanner';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Nature enthusiast with 15+ years in tourism industry",
      image: "/team/alex.jpg"
    },
    {
      name: "Maria Garcia",
      role: "Head of Operations",
      bio: "Expert in logistics and customer experience",
      image: "/team/maria.jpg"
    },
    {
      name: "Sam Wilson",
      role: "Lead Guide",
      bio: "Certified wilderness first responder and botanist",
      image: "/team/sam.jpg"
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      bio: "Digital strategist and travel blogger",
      image: "/team/priya.jpg"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Happy Travelers" },
    { value: "200+", label: "Destinations" },
    { value: "15", label: "Years Experience" },
    { value: "98%", label: "Positive Reviews" }
  ];

  const items = [
    {
      icon: <FaUsers size={32} />,
      title: '10K+ Happy Travelers',
      subtitle: 'Real stories, real smiles',
    },
    {
      icon: <FaMapMarkedAlt size={32} />,
      title: '150+ Destinations',
      subtitle: 'Across India & Asia',
    },
    {
      icon: <FaStar size={32} />,
      title: '4.9 Star Rated',
      subtitle: 'Based on 2.5k+ reviews',
    },
    {
      icon: <FaGlobeAsia size={32} />,
      title: 'Local + Global',
      subtitle: 'Cultural guides & experiences',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/tesImg.webp')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Crafting unforgettable journeys since 2008
          </motion.p>
        </div>
      </div>

      {/* Section with bg image and overlay */}
      <div className="relative">
        {/* Background image with black overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('/beautiful.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Foreground content */}
        <section className="relative z-10 py-10 px-4 sm:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white/10 hover:bg-white/20 transition rounded-xl shadow-md"
                >
                  <div className="flex items-center justify-center mb-3 text-yellow-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-yellow-100">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <PopularAdventures />

      {/* Main Content */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        {/* Our Story */}
        <motion.div variants={fadeIn} className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/about-story.jpg"
                alt="Founder's first trip"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                How It All Began
              </h2>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  What started as a small group of friends leading weekend hiking trips has blossomed into one of the most trusted adventure travel companies in the region. Our founder, Alex, began with just one backpack and a passion for sharing hidden gems with fellow travelers.
                </p>
                <p className="mb-4">
                  In 2008, we operated our first official tour to [Landmark Name], and the response was overwhelming. Word spread about our unique approach - treating travelers like family rather than tourists.
                </p>
                <p>
                  Today, we're proud to have introduced over 10,000 adventurers to life-changing experiences while maintaining our core values of sustainability, authenticity, and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div variants={fadeIn} className="bg-yellow-50 rounded-xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <blockquote className="text-2xl italic text-gray-700 mb-6">
              "To transform ordinary trips into extraordinary adventures that connect people with nature, culture, and each other."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-yellow-600">Sustainability</h3>
                <p className="text-gray-600">We commit to eco-friendly practices that protect the destinations we love.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-yellow-600">Authenticity</h3>
                <p className="text-gray-600">Genuine experiences that go beyond tourist attractions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-yellow-600">Community</h3>
                <p className="text-gray-600">Supporting local economies and creating meaningful connections.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={fadeIn} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <p className="text-4xl font-bold text-yellow-600 mb-2">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <OfferBanner />

        {/* Team Section */}
        <motion.div variants={fadeIn} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-yellow-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn}
          className="bg-yellow-600 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Ready for Your Adventure?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've experienced the difference with our personalized tours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/tours"
              className="bg-white text-yellow-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
            >
              Explore Tours
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-yellow-700 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
