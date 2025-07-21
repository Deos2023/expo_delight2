"use client";
import Image from "next/image";
import Link from "next/link";
// import bgImage from "../../public/bgStatic.js"; // Still used for build validation if needed

export default function OfferBanner() {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center text-white bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/bgStatic.webp')", // Adjust path based on your `public` folder
      }}
    >
      {/* Yellow overlay */}
      <div className="absolute inset-0 bg-yellow-400/40 opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left - Big Discount */}
          <div className="w-[400px] h-[400px] -mt-10 relative">
    <Image 
      src="/fift.png" 
      alt="OFF"
      layout="fill"
      objectFit="contain"
    />
  </div>


        {/* Right - Offer Details */}
        <div className="max-w-xl text-right">
          <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-great-vibes)' }}>Last Minute Offer For You</h2>
          <h3 className="italic text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-great-vibes)' }}>
            Aerial view of Cape Town with Cape Town Stadium
          </h3>
          <p className="text-sm mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            hendrerit felis sit amet turpis vehicula convallis. Ut ac tellus velit.
            Nulla mollis sollicitudin lacus id ornare.
          </p>
          <Link
            href="#"
            className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-100 transition"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
