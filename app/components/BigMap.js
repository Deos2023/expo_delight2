'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix default marker icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

export default function BigMap() {
  useEffect(() => {
    // Optional: Any map-related side effects
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', zIndex: 0 }}>
      <MapContainer
        center={[22.4809, 88.3192]} // Centered on Kolkata
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Delhi Marker */}
        <Marker position={[28.6139, 77.209]}>
          <Popup>
            Delhi Office<br /> Gateway to North Tours.
          </Popup>
        </Marker>

        {/* Bangalore Marker */}
        <Marker position={[12.9716, 77.5946]}>
          <Popup>
            Bangalore Base<br /> South Adventures HQ.
          </Popup>
        </Marker>

        {/* Kolkata Marker */}
        <Marker position={[22.4809, 88.3192]}>
          <Popup>
            Kolkata Office<br /> Min - 2, Phase 2, Golfgreen Urban Complex
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
