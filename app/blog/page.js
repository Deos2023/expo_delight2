'use client';

import Image from 'next/image';
import { Eye, MessageSquare } from 'lucide-react';

const blogPosts = [
  {
    slug: 'island',
    title: 'Island',
    date: '08 August',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas...',
    image: '/forest.jpg',
    views: 30,
    comments: 3,
    category: 'Holidays',
    type: 'image',
  },
  {
    slug: 'sea',
    title: 'Sea',
    date: '08 August',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas...',
    video: '/ocean2.mp4',
    views: 40,
    comments: 2,
    category: 'Adventure',
    type: 'video',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white text-neutral-700 pt-12 pb-16 px-4 md:px-12 lg:px-20">
      {/* Hero Section */}
      <section className="relative mb-12">
  <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/vid2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Welcome to Our Travel Blog
        </h1>
        <p className="text-white mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Discover beautiful destinations, unique experiences, and travel tips to inspire your next adventure.
        </p>
      </div>
    </div>
  </div>
</section>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Blog Posts */}
        <section className="lg:col-span-8 space-y-12">
          {blogPosts.map((post) => (
            <div key={post.slug} className="space-y-4 border-b pb-6">
              <div className="relative">
                {post.type === 'image' && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1000}
                    height={600}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                )}
                {post.type === 'video' && (
                  <video controls className="rounded-lg w-full">
                    <source src={post.video} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="flex gap-4 items-start">
                {/* Date Badge */}
                <div className="text-center bg-orange-500 text-white px-3 py-1 rounded text-xs font-bold">
                  <div>{post.date.split(' ')[0]}</div>
                  <div className="uppercase text-[10px] tracking-widest">{post.date.split(' ')[1]}</div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-600 my-2 text-sm">{post.excerpt}</p>

                  {/* Icons */}
                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <Eye size={14} /> {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={14} /> {post.comments}
                    </span>
                    <span className="text-sky-500 font-medium">{post.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded px-4 py-2 text-sm"
            />
            <button className="absolute right-2 top-2 text-orange-500 font-bold">🔍</button>
          </div>

          {/* About Author */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">About Author</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sollicitudin tellus vitae condimentum egestas.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Categories</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Exploring (3)</li>
              <li>Holidays (5)</li>
              <li>Travel (16)</li>
              <li>Videos (2)</li>
            </ul>
          </div>

          {/* Ad / Promo */}
          <div className="relative">
            <Image
              src="/bgStatic.webp"
              alt="Promo"
              width={300}
              height={400}
              className="rounded"
            />
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 font-bold rounded-full">
              $1295 Last Minute
            </div>
          </div>

          {/* Latest Posts */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Latest Posts</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-sky-600 hover:underline">Exotic beaches – August 7, 2025</li>
              <li className="text-sky-600 hover:underline">Beautiful nature – August 2, 2025</li>
              <li className="text-sky-600 hover:underline">City experience – August 1, 2025</li>
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Tags</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-100 px-2 py-1 rounded">Adventure</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Exotic</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Last Minute</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Tips & Tricks</span>
            </div>
          </div>

          {/* Instagram Gallery Placeholder */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Instagram Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 h-20 rounded" />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
