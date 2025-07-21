'use client';

export default function CTA() {
  return (
    <section className="bg-cyan-400 py-16 px-6 text-center text-white relative overflow-hidden">
      {/* Background Accent (Optional Wave or Pattern) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.svg')] bg-cover bg-center pointer-events-none"></div>

      {/* CTA Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready for your next adventure?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Discover hidden gems, breathtaking views, and unforgettable memories. Let’s plan your journey today!
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white font-semibold py-4 px-8 rounded-full hover:bg-neutral-800 transition duration-300"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}
