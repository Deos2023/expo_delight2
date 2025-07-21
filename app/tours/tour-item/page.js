'use client';

import { useState } from 'react';
import Image from 'next/image';
import tourData from '../../lib/tour-data';

const TOURS_PER_PAGE = 6;

const TourCard = ({ tour }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 ">
    <div className="bg-white rounded-lg overflow-hidden  shadow hover:shadow-lg transition-shadow relative">
      <div className="relative w-full h-64">
        <Image
          src={tour.images?.[1] || '/placeholder.jpg'}
          alt={tour.name}
          fill
          className="object-cover"
        />
        {tour.special && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            Special Offer
          </div>
        )}
      </div>
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-base md:text-lg font-semibold text-gray-800">{tour.name}</h3>
        <p className="text-orange-500 font-bold text-sm">${tour.price}</p>
      </div>
    </div>
  </div>
);

const FilterSidebar = ({
  selectedLocation,
  setSelectedLocation,
  locations,
  priceRange,
  setPriceRange,
  searchTerm,
  setSearchTerm,
  selectedMonth,
  setSelectedMonth,
  categories,
  selectedCategories,
  toggleCategory,
  selectedTourType,
  setSelectedTourType
}) => (
  <aside className="w-full md:w-72 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg h-fit sticky top-4 text-black relative z-20">
    <h2 className="text-xl font-bold mb-4">Travel Destination</h2>

    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-700 mb-1">Tour Type</label>
      <select
        value={selectedTourType}
        onChange={(e) => setSelectedTourType(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded"
      >
        <option value="all">All Tours</option>
        <option value="national">National</option>
        <option value="international">International</option>
        <option value="jungle">Jungle</option>
      </select>
    </div>

    <input
      type="text"
      placeholder="Search Tour"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded"
    />

    <input
      type="text"
      placeholder="Where To?"
      value={selectedLocation}
      onChange={(e) => setSelectedLocation(e.target.value)}
      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded"
    />

    <input
      type="month"
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
      className="w-full border border-gray-300 mb-3 px-3 py-2 rounded"
    />

    <div className="mb-3">
      <label className="text-sm text-gray-600">Price Range</label>
      <input
        type="range"
        min="500"
        max="3000"
        step="50"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        className="w-full"
      />
      <div className="text-xs text-gray-500">₹780 – ₹{priceRange}</div>
    </div>

    <div className="mb-3">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
      {categories.map((cat) => (
        <label key={cat} className="flex items-center mb-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={selectedCategories.includes(cat)}
            onChange={() => toggleCategory(cat)}
            className="mr-2"
          />
          {cat}
        </label>
      ))}
    </div>

    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4 py-2 rounded">
      SEARCH
    </button>
  </aside>
);

const HeroSearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="w-full max-w-4xl mx-auto mb-12 relative z-20">
    <div className="relative">
      <input
        type="text"
        placeholder="Search for tours, destinations, or experiences..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white/90 backdrop-blur-md text-gray-800 text-lg py-5 px-6 rounded-xl shadow-lg border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none"
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
        Search
      </button>
    </div>
  </div>
);

const Page = () => {
  const [visibleCount, setVisibleCount] = useState(TOURS_PER_PAGE);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [priceRange, setPriceRange] = useState(3000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTourType, setSelectedTourType] = useState('all');

  const categories = [
    'Explore',
    'Vacation',
    'Destination',
    'Romantic',
    'Adventure',
    'On budget',
    'Popular',
    'Holidays'
  ];

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const getTours = () => {
    if (selectedTourType === 'all') {
      return [
        ...(tourData.national || []),
        ...(tourData.international || []),
        ...(tourData.jungle || [])
      ];
    }
    return tourData[selectedTourType] || [];
  };

  const allTours = getTours();
  const locations = Array.from(new Set(allTours.map((t) => t.location)));

  const filteredTours = allTours.filter((tour) => {
    const matchesLocation =
      selectedLocation === '' ||
      tour.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesSearch =
      searchTerm === '' ||
      tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.slug.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = tour.price <= priceRange;
    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) =>
        Array.isArray(tour.tags) ? tour.tags.includes(cat) : false
      );
    return matchesLocation && matchesSearch && matchesPrice && matchesCategories;
  });

  const visibleTours = filteredTours.slice(0, visibleCount);

  return (
    <div className="p-6 min-h-screen relative py-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/beautiful.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-blue-300/40 opacity-80" />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Ideal Travel Adventure
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Search by location, category, or explore top-rated destinations
          </p>
          <HeroSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 container mx-auto px-10">
        {/* Left: Tours */}
        <div className="flex-1">
          <div className="flex flex-wrap -mx-2">
            {visibleTours.length > 0 ? (
              visibleTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)
            ) : (
              <div className="w-full bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-md text-center text-white">
                <p>No tours found matching your filters</p>
              </div>
            )}
          </div>

          {visibleTours.length < filteredTours.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleCount((c) => c + TOURS_PER_PAGE)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Right: Filter Sidebar */}
        <FilterSidebar
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          locations={locations}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          categories={categories}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          selectedTourType={selectedTourType}
          setSelectedTourType={setSelectedTourType}
        />
      </div>
    </div>
  );
};

export default Page;
