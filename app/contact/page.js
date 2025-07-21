"use client";
import { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import BigMap to fix SSR
const BigMap = dynamic(() => import("../components/BigMap"), { ssr: false });

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const encodedMessage = encodeURIComponent(
      `Hello! 👋\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    );
    window.open(`https://wa.me/916291843112?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero */}
      <div
        className="relative h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/for1.jpg')" }}
      >
        <div className="bg-black/30 absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Feel Free to Contact Us</h1>
          <p className="text-xl mt-4">For Help or Additional Info</p>
        </motion.div>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <p className="italic text-lg leading-relaxed">
            <strong>name:</strong> Expo Delight<br />
            <strong>mail:</strong> expodelight@gmail.com<br />
            <strong>web:</strong> www.example.com<br />
            <strong>phone:</strong> +91 6291843112<br />
            <strong>address:</strong> Min - 2, 2/8, Phase - 2, Golfgreen - Urban Complex,<br />
            Kolkata - 700095
          </p>

          <div className="flex justify-center md:justify-start gap-4 text-xl mt-4 text-gray-700">
            <a href="#" aria-label="Twitter" className="hover:text-yellow-600">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-600">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 border border-gray-300 p-6 bg-white shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="border px-3 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              className="border px-3 py-2 w-full"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="border w-full px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="border w-full px-3 py-2"
          />
          <button
            type="submit"
            className="uppercase font-semibold text-orange-600 tracking-wide w-full py-2 border border-orange-600 hover:bg-orange-600 hover:text-white transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="relative z-0 w-full h-[400px] md:h-[500px]">
        <BigMap />
      </div>
    </div>
  );
}
