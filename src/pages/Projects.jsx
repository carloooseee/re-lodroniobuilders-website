import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Import images
import houseImg1 from '../assets/houseImage/HouseImage1.png';
import houseImg2 from '../assets/houseImage/HouseImage2.png';
import houseImg3 from '../assets/houseImage/HouseImage3.png';
import houseImg4 from '../assets/houseImage/HouseImage4.png';
import interiorImg1 from '../assets/Interior/Interior1.png';
import interiorImg2 from '../assets/Interior/Interior2.png';
import interiorImg3 from '../assets/Interior/Interior3.png';
import exteriorImg1 from '../assets/Exterior/Exterior1.png';
import exteriorImg2 from '../assets/Exterior/Exterior2.png';
import exteriorImg3 from '../assets/Exterior/Exterior3.png';

const PROJECT_DATA = [
  // Residential Projects
  {
    id: 'res-1',
    title: 'The Heights Residence',
    category: 'residential',
    location: 'Antipolo, Rizal',
    year: '2024',
    description: 'A three-story modern house featuring sweeping views, off-form concrete structures, and custom hardwood paneling designed for family comfort.',
    image: houseImg1,
    tags: ['Architecture', 'Interior', 'Design-Build']
  },
  {
    id: 'res-2',
    title: 'Minimalist Cuboid Home',
    category: 'residential',
    location: 'Alabang, Muntinlupa',
    year: '2023',
    description: 'A study in geometric balance. Open floor planning combined with raw exterior concrete walls and floor-to-ceiling glass screens.',
    image: houseImg2,
    tags: ['Architecture', 'Modernist']
  },
  {
    id: 'res-3',
    title: 'Green Meadows Villa',
    category: 'residential',
    location: 'Quezon City',
    year: '2023',
    description: 'Blending sustainability with luxury, this villa integrates passive cooling systems, pocket garden spaces, and sustainable materials.',
    image: houseImg3,
    tags: ['Eco-Friendly', 'Construction']
  },
  {
    id: 'res-4',
    title: 'Cavite Modern Homestead',
    category: 'residential',
    location: 'Silang, Cavite',
    year: '2022',
    description: 'A family compound built for seamless transition between spacious indoor entertainment areas and sprawling outdoor yards.',
    image: houseImg4,
    tags: ['Residential', 'Build']
  },
  {
    id: 'res-5',
    title: 'Warm Timber Sanctuary',
    category: 'residential',
    location: 'Las Piñas, Metro Manila',
    year: '2024',
    description: 'Using premium local timber accents and custom shelving solutions to maximize vertical space while retaining a cozy, warm feel.',
    image: interiorImg1,
    tags: ['Interior', 'Furniture']
  },

  // Commercial Projects
  {
    id: 'com-1',
    title: 'LGP Corporate Pavilion',
    category: 'commercial',
    location: 'Taguig, Metro Manila',
    year: '2024',
    description: 'High-end retail and office headquarters showing bold cantilevered concrete roofs, linear steel panels, and double-height structural glass.',
    image: exteriorImg2,
    tags: ['Commercial', 'Corporate']
  },
  {
    id: 'com-2',
    title: 'Boutique Office Plaza',
    category: 'commercial',
    location: 'Makati City',
    year: '2023',
    description: 'A modern design-build office spaces project focusing on daylight optimization, green balconies, and a stunning architectural facade.',
    image: exteriorImg1,
    tags: ['Design-Build', 'Office']
  },
  {
    id: 'com-3',
    title: 'The Atrium Hub',
    category: 'commercial',
    location: 'Pasig City',
    year: '2023',
    description: 'An architectural statement featuring wide spans, glass bridges, and open-plan shared workspaces for next-generation tech startups.',
    image: exteriorImg3,
    tags: ['Commercial', 'Structural']
  },
  {
    id: 'com-4',
    title: 'Metropolitan Co-Working Space',
    category: 'commercial',
    location: 'Mandaluyong, Metro Manila',
    year: '2024',
    description: 'A premium co-working interior featuring dramatic vertical wood panel walls, minimal pendant lighting, and structured private cabins.',
    image: interiorImg2,
    tags: ['Interior', 'Fit-out']
  }
];

export default function Projects() {
  const { category } = useParams();
  const activeCategory = category === 'commercial' ? 'commercial' : 'residential';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category]);

  const filteredProjects = PROJECT_DATA.filter(p => p.category === activeCategory);

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
                  className={`font-label-caps text-label-caps uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${
                    activeCategory === 'residential'
                      ? 'bg-primary text-on-primary border-primary font-semibold'
                      : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50'
                  }`}
                >
                  Residential
                </Link>
                <Link
                  to="/projects/commercial"
                  className={`font-label-caps text-label-caps uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${
                    activeCategory === 'commercial'
                      ? 'bg-primary text-on-primary border-primary font-semibold'
                      : 'bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-primary/50'
                  }`}
                >
                  Commercial
                </Link>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-gutter border-t border-outline-variant/20 pt-16">
            {filteredProjects.map((project, idx) => {
              // Alternating layout sizes for standard premium architectural grid style
              const isLarge = idx % 3 === 0;
              const gridSpan = isLarge ? 'md:col-span-12' : 'md:col-span-6';
              const imgAspect = isLarge ? 'aspect-video md:aspect-[21/9]' : 'aspect-[4/3]';

              return (
                <div key={project.id} className={`${gridSpan} flex flex-col gap-6 group`}>
                  <div className="relative overflow-hidden bg-surface-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-auto object-cover ${imgAspect} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                    />
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="font-label-caps text-[9px] uppercase tracking-wider bg-black/70 text-white px-2 py-1 backdrop-blur-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary transition-colors duration-300 group-hover:text-secondary-fixed-dim">
                        {project.title}
                      </h3>
                      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                        {project.location} &middot; {project.year}
                      </p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl md:text-right md:ml-auto">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 px-margin-mobile md:px-margin-desktop w-full" style={{ backgroundColor: 'rgb(29, 29, 29)' }}>
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-label-caps text-label-caps text-white/70 tracking-widest uppercase">
            © 2024 RE Lodronio Builders Inc.
          </div>
          <div className="font-label-caps text-label-caps text-white/70 tracking-widest uppercase text-right">
            Building with purpose.
          </div>
        </div>
      </footer>
    </>
  );
}
