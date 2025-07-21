"use client";
import Link from "next/link";

export default function TourImageGrid({ data = [], basePath = "" }) {
  if (!Array.isArray(data)) return null;

  const imageEntries = data
    .map((tour) =>
      (tour?.images || []).map((img) => ({ img, slug: tour.slug }))
    )
    .flat();

  const shuffled = imageEntries.sort(() => 0.5 - Math.random()).slice(0, 5);

  const [bigImage, ...smallImages] = shuffled;

  return (
    <div className="flex flex-col md:flex-row h-[600px] ">
      {/* Left: One Big Image */}
      <Link
        href={`${basePath}/tours/${bigImage?.slug}`}
        className="flex-1 relative overflow-hidden"
      >
        <img
          src={bigImage?.img}
          alt={`Tour ${bigImage?.slug}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0  hover:bg-black/40 transition" />
      </Link>

      {/* Right: 2x2 Grid of Small Images */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 ">
        {smallImages.map((entry, index) => (
          <Link
            key={index}
            href={`${basePath}/tours/${entry.slug}`}
            className="relative overflow-hidden"
          >
            <img
              src={entry.img}
              alt={`Tour ${entry.slug}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0  hover:bg-black/40 transition" />
          </Link>
        ))}
      </div>
    </div>
  );
}
