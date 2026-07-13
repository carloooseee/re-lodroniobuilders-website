import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectPresentation from '../components/ProjectPresentation';
import Footer from '../components/Footer';

// ─── Residential Images ───────────────────────────────────────────────────────
// To swap a photo, replace the filename below with your new file (keep it in src/assets/Residential/).
// Naming convention:
//   houserender{N}  → 3D render photo for house N
//   houseactual{N}  → actual build photo for house N
//   house{N}extra{M} → extra thumbnail M for house N

import houserender1 from '../assets/Residential/houserender1.png';
import houseactual1 from '../assets/Residential/houseactual1.png';

import houserender2 from '../assets/Residential/houserender2.jpg';
import houseactual2 from '../assets/Residential/houseactual2.jpg';
import house2extra1 from '../assets/Residential/house2extra1.jpg';
import house2extra2 from '../assets/Residential/house2extra2.jpg';
import house2extra3 from '../assets/Residential/house2extra3.jpg';

import houserender3 from '../assets/Residential/houserender3.jpg';
import houseactual3 from '../assets/Residential/houseactual3.jpg';
import house3extra1 from '../assets/Residential/house3extra1.jpg';
import house3extra2 from '../assets/Residential/house3extra2.jpg';
import house3extra3 from '../assets/Residential/house3extra3.jpg';
import house3extra4 from '../assets/Residential/house3extra4.jpg';

import houserender4 from '../assets/Residential/houserender4.jpg';
import houseactual4 from '../assets/Residential/houseactual4.jpg';
import house4extra1 from '../assets/Residential/house4extra1.jpg';
import house4extra2 from '../assets/Residential/house4extra2.jpg';
import house4extra3 from '../assets/Residential/house4extra3.jpg';

import houserender5 from '../assets/Residential/houserender5.jpg';
import houseactual5 from '../assets/Residential/houseactual5.jpg';
import house5extra1 from '../assets/Residential/house5extra1.jpg';
import house5extra2 from '../assets/Residential/house5extra2.jpg';
import house5extra3 from '../assets/Residential/house5extra3.jpg';
import house5extra4 from '../assets/Residential/house5extra4.jpg';

// ─── Commercial Images ────────────────────────────────────────────────────────
// Naming convention:
//   commercialrender{N}  → 3D render photo for commercial project N
//   commercialactual{N}  → actual build photo for commercial project N
//   commercial{N}extra{M} → extra thumbnail M for commercial project N

import commercialrender1 from '../assets/Commercial/commercialrender1.png';
import commercialactual1 from '../assets/Commercial/commercialactual1.png';
import commercial1extra1 from '../assets/Commercial/commercial1extra1.png';
import commercial1extra2 from '../assets/Commercial/commercial1extra2.png';
import commercial1extra3 from '../assets/Commercial/commercial1extra3.png';

import commercialrender2 from '../assets/Commercial/commercialrender2.png';
import commercialactual2 from '../assets/Commercial/commercialactual2.png';
import commercial2extra1 from '../assets/Commercial/commercial2extra1.png';
import commercial2extra2 from '../assets/Commercial/commercial2extra2.png';
import commercial2extra3 from '../assets/Commercial/commercial2extra3.png';
import commercial2extra4 from '../assets/Commercial/commercial2extra4.png';

import commercialrender3 from '../assets/Commercial/commercialrender3.png';
import commercialactual3 from '../assets/Commercial/commercialactual3.png';
import commercial3extra1 from '../assets/Commercial/commercial3extra1.png';
import commercial3extra2 from '../assets/Commercial/commercial3extra2.png';
import commercial3extra3 from '../assets/Commercial/commercial3extra3.png';

// ─── Project Data ─────────────────────────────────────────────────────────────
// Edit titles, locations, descriptions, and swap image imports here.
// additionalImages: extra thumbnail images shown below the two main photos.
//   Remove items to hide thumbnails; add new imports above and list them here.
const PROJECT_DATA = {
  residential: [
    {
      id: 'res-1',
      title: 'Two-Storey Apartment Building',
      location: 'Muntinlupa City, Metro Manila',
      description: 'A sophisticated two-story apartment designed to maximize natural light, featuring clean architectural lines, spacious balconies, and thoughtfully planned living spaces for modern urban living.',
      renderImage: houserender1,
      actualImage: houseactual1,
      additionalImages: [],
    },
    {
      id: 'res-2',
      title: 'Glass & Steel Residence',
      location: 'Tagaytay, Cavite',
      description: 'An elegant retreat featuring expansive glass panels, bold steel structural geometries, and scenic views.',
      renderImage: houserender2,
      actualImage: houseactual2,
      additionalImages: [house2extra1, house2extra2, house2extra3],
    },
    {
      id: 'res-3',
      title: 'Contemporary Urban Oasis',
      location: 'Alabang, Metro Manila',
      description: 'A multi-generational home with integrated green spaces, open-concept living, and a private pool area.',
      renderImage: houserender3,
      actualImage: houseactual3,
      additionalImages: [house3extra1, house3extra2, house3extra3, house3extra4],
    },
    {
      id: 'res-4',
      title: 'Sophisticated Suburban Home',
      location: 'Nuvali, Laguna',
      description: 'A beautiful modern home featuring natural stone accents, vertical wood siding, and eco-friendly solar solutions.',
      renderImage: houserender4,
      actualImage: houseactual4,
      additionalImages: [house4extra1, house4extra2, house4extra3],
    },
    {
      id: 'res-5',
      title: 'Minimalist Cuboid Residence',
      location: 'Antipolo, Rizal',
      description: 'A sleek white cuboid design with panoramic city views, cantilevered structures, and custom interior finishes.',
      renderImage: houserender5,
      actualImage: houseactual5,
      additionalImages: [house5extra1, house5extra2, house5extra3, house5extra4],
    },
  ],
  commercial: [
    {
      id: 'comm-1',
      title: 'RE Builders Head Office',
      location: 'Makati, Metro Manila',
      description: 'A modern corporate workspace focusing on open collaboration, ergonomic workspaces, and clean architectural design.',
      renderImage: commercialrender1,
      actualImage: commercialactual1,
      additionalImages: [commercial1extra1, commercial1extra2, commercial1extra3],
    },
    {
      id: 'comm-2',
      title: 'The Apex Executive Offices',
      location: 'BGC, Taguig City',
      description: 'A high-end corporate fit-out showcasing premium materials, custom acoustic paneling, and advanced smart systems.',
      renderImage: commercialrender2,
      actualImage: commercialactual2,
      additionalImages: [commercial2extra1, commercial2extra2, commercial2extra3, commercial2extra4],
    },
    {
      id: 'comm-3',
      title: 'Lakeside Retail Center',
      location: 'Nuvali, Laguna',
      description: 'A modern outdoor shopping complex featuring steel-framed double-height storefronts and landscaped pedestrian pathways.',
      renderImage: commercialrender3,
      actualImage: commercialactual3,
      additionalImages: [commercial3extra1, commercial3extra2, commercial3extra3],
    },
  ],
};

export default function Projects() {
  const { category } = useParams();
  const activeCategory = category === 'commercial' ? 'commercial' : 'residential';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category]);

  const filteredProjects = PROJECT_DATA[activeCategory] || [];

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-surface">
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
            <div className="md:col-span-7">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-6 block">
                ( Portfolio / {activeCategory} )
              </span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary capitalize">
                {activeCategory} <br /><em className="italic">projects.</em>
              </h1>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end mt-8 md:mt-0">
              <p className="font-body-lg text-body-lg text-primary font-medium mb-6">
                R.E. Lodronio Builders Inc. delivers exceptional execution across both high-end private residences and modern commercial developments.
              </p>

              {/* Category Quick Filter */}
              <div className="flex gap-4">
                <Link
                  to="/projects/residential"
                  className={`font-label-caps text-label-caps uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${activeCategory === 'residential'
                    ? 'bg-primary text-on-primary border-primary font-semibold'
                    : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50'
                    }`}
                >
                  Residential
                </Link>
                <Link
                  to="/projects/commercial"
                  className={`font-label-caps text-label-caps uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${activeCategory === 'commercial'
                    ? 'bg-primary text-on-primary border-primary font-semibold'
                    : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50'
                    }`}
                >
                  Commercial
                </Link>
              </div>
            </div>
          </div>

          {/* Project Presentation Area */}
          <div className="border-t border-outline-variant/20 pt-16 mt-8">
            <ProjectPresentation projects={filteredProjects} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
