import { useState } from "react";
import tourData from "../lib/tour-data"; // adjust path if needed

// Flatten all tours for easy filtering
const allTours = [
  ...tourData.national.map(t => ({ ...t, type: "National" })),
  ...tourData.international.map(t => ({ ...t, type: "International" })),
  ...tourData.jungle.map(t => ({ ...t, type: "Jungle" })),
];

export default function TravelSearchBar() {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = allTours.filter(tour =>
      tour.name.toLowerCase().includes(place.toLowerCase()) &&
      (type ? tour.type.toLowerCase() === type.toLowerCase() : true)
    );
    setResults(filtered);
  };

  return (
    <>
      {/* Updated Search Bar */}
      <div className="w-full bg-gradient-to-r from-white via-blue-50 to-white py-8 flex justify-center items-center border-b border-blue-200">
        <div className="flex gap-4 flex-wrap md:flex-nowrap px-4">
          <input
            type="text"
            placeholder="Where to?"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-64 px-4 py-3 bg-white text-blue-900 border border-blue-300 rounded-md placeholder-blue-400 focus:outline-none"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-64 px-4 py-3 bg-white text-blue-900 border border-blue-300 rounded-md placeholder-blue-400 focus:outline-none"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-64 px-4 py-3 bg-white text-blue-900 border border-blue-300 rounded-md"
          >
            <option value="">Travel Type</option>
            <option value="National">National</option>
            <option value="International">International</option>
            <option value="Jungle">Jungle</option>
          </select>
          <button
            onClick={handleSearch}
            className="w-40 px-4 py-3 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            FIND NOW
          </button>
        </div>
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="px-4 py-6 bg-white text-blue-900">
          <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
          <ul className="grid md:grid-cols-3 gap-4">
            {results.map((tour, i) => (
              <li key={i} className="border border-blue-200 rounded-md p-4 shadow-sm">
                <h3 className="text-lg font-bold">{tour.name}</h3>
                <p className="text-sm mt-1">{tour.type} Tour</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
