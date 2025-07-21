// app/places/[slug]/page.js

import tourData from '../../lib/tour-data';
import { notFound } from 'next/navigation';
import TourDetailClient from './TourDetailClient';

export function generateStaticParams() {
  const allTours = [
    ...(tourData.national || []),
    ...(tourData.international || []),
    ...(tourData.jungle || []),
  ];
  return allTours.map((tour) => ({ slug: tour.slug }));
}

export default function PlaceDetailPage({ params }) {
  const { slug } = params;

  const allTours = [
    ...(tourData.national || []),
    ...(tourData.international || []),
    ...(tourData.jungle || []),
  ];

  const tour = allTours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return <TourDetailClient tour={tour} />;
}