import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectPresentation from '../components/ProjectPresentation';
import ImageCollage from '../components/ImageCollage';
import Footer from '../components/Footer';

// ─── Residential Images ───────────────────────────────────────────────────────
// To swap a photo, replace the filename below with your new file (keep it in src/assets/Residential/).
// Naming convention:
//   houserender{N}  → 3D render photo for house N
//   houseactual{N}  → actual build photo for house N
//   house{N}extra{M} → extra thumbnail M for house N

import houserender1 from '../assets/Residential/houserender/houserender1.png';
import houseactual1 from '../assets/Residential/houseactual/houseactual1.png';

import houserender2 from '../assets/Residential/houserender/houserender2.png';
import houseactual2 from '../assets/Residential/houseactual/houseactual2.jpg';
import house2extra1 from '../assets/Residential/extra/house2extra1.jpg';
import house2extra2 from '../assets/Residential/extra/house2extra2.png';

import houserender3 from '../assets/Residential/houserender/houserender3.jpg';
import houseactual3 from '../assets/Residential/houseactual/houseactual3.jpg';
import house3extra1 from '../assets/Residential/extra/house3extra1.png';
import house3extra2 from '../assets/Residential/extra/house3extra2.png';
import house3extra3 from '../assets/Residential/extra/house3extra3.png';
import house3extra4 from '../assets/Residential/extra/house3extra4.png';
import house3extra5 from '../assets/Residential/extra/house3extra5.png';
import house3extra6 from '../assets/Residential/extra/house3extra6.png';
import house3extra7 from '../assets/Residential/extra/house3extra7.png';
import house3extra8 from '../assets/Residential/extra/house3extra8.png';
import house3extra9 from '../assets/Residential/extra/house3extra9.png';

import houserender4 from '../assets/Residential/houserender/houserender4.png';
import houseactual4 from '../assets/Residential/houseactual/houseactual4.png';
import house4extra01 from '../assets/Residential/extra/house4extra01.png';
import house4extra02 from '../assets/Residential/extra/house4extra02.png';
import house4extra03 from '../assets/Residential/extra/house4extra03.png';
import house4extra04 from '../assets/Residential/extra/house4extra04.png';
import house4extra05 from '../assets/Residential/extra/house4extra05.png';
import house4extra06 from '../assets/Residential/extra/house4extra06.png';

import houserender5 from '../assets/Residential/houserender/houserender5.png';
import houseactual5 from '../assets/Residential/houseactual/houseactual5.png';
import house5extra1 from '../assets/Residential/extra/house5extra1.png';
import house5extra2 from '../assets/Residential/extra/house5extra2.png';
import house5extra3 from '../assets/Residential/extra/house5extra3.png';
import house5extra4 from '../assets/Residential/extra/house5extra4.png';
import house5extra5 from '../assets/Residential/extra/house5extra5.png';
import house5extra6 from '../assets/Residential/extra/house5extra6.png';
import house5extra7 from '../assets/Residential/extra/house5extra7.png';
import house5extra8 from '../assets/Residential/extra/house5extra8.png';
import house5extra9 from '../assets/Residential/extra/house5extra9.png';

import houserender6 from '../assets/Residential/houserender/houserender6.png';
import houseactual6 from '../assets/Residential/houseactual/houseactual6.png';
import house6extra1 from '../assets/Residential/extra/house6extra1.png';
import house6extra2 from '../assets/Residential/extra/house6extra2.png';
import house6extra3 from '../assets/Residential/extra/house6extra3.png';

import houserender7 from '../assets/Residential/houserender/houserender7.png';
import houseactual7 from '../assets/Residential/houseactual/houseactual7.png';
import house7extra1 from '../assets/Residential/extra/house7extra1.png';
import house7extra2 from '../assets/Residential/extra/house7extra2.png';
import house7extra3 from '../assets/Residential/extra/house7extra3.png';

import houserender8 from '../assets/Residential/houserender/Houserender8.png';
import houseactual8 from '../assets/Residential/houseactual/Houseactual8.png';
import house8extra1 from '../assets/Residential/extra/house8extra1.png';
import house8extra2 from '../assets/Residential/extra/house8extra2.png';
import house8extra3 from '../assets/Residential/extra/house8extra3.png';

import houserender9 from '../assets/Residential/houserender/Houserender9.png';
import houseactual9 from '../assets/Residential/houseactual/Houseactual9.png';
import house9extra1 from '../assets/Residential/extra/house9extra1.png';
import house9extra2 from '../assets/Residential/extra/house9extra2.png';
import house9extra3 from '../assets/Residential/extra/house9extra3.png';

import houserender10 from '../assets/Residential/houserender/houserender10.png';
import houseactual10 from '../assets/Residential/houseactual/House10actual1.png';
import house10extra1 from '../assets/Residential/extra/House10extra1.png';

import houserender11 from '../assets/Residential/houserender/houserender11.png';
import houseactual11 from '../assets/Residential/houseactual/houseactual11.png';
import house11extra1 from '../assets/Residential/extra/house11extra1.png';
import house11extra2 from '../assets/Residential/extra/house11extra2.png';
import house11extra3 from '../assets/Residential/extra/house11extra3.png';
import house11extra4 from '../assets/Residential/extra/house11extra4.png';
import house11extra5 from '../assets/Residential/extra/house11extra5.png';
import house11extra6 from '../assets/Residential/extra/house11extra6.png';
import house11extra7 from '../assets/Residential/extra/house11extra7.png';
import house11extra8 from '../assets/Residential/extra/house11extra8.png';

import houserender12 from '../assets/Residential/houserender/houserender12.png';
import houseactual12 from '../assets/Residential/houseactual/houseactual12.png';
import house12extra1 from '../assets/Residential/extra/house12extra1.png';
import house12extra2 from '../assets/Residential/extra/house12extra2.png';
import house12extra3 from '../assets/Residential/extra/house12extra3.png';
import house12extra4 from '../assets/Residential/extra/house12extra4.png';

import houserender13 from '../assets/Residential/houserender/houserender13.png';
import houseactual13 from '../assets/Residential/houseactual/houseactual13.png';
import house13extra1 from '../assets/Residential/extra/house13extra1.png';
import house13extra2 from '../assets/Residential/extra/house13extra2.png';
import house13extra3 from '../assets/Residential/extra/house13extra3.png';

// ─── Commercial Images ────────────────────────────────────────────────────────
// Naming convention:
//   commercialrender{N}  → 3D render photo for commercial project N
//   commercialactual{N}  → actual build photo for commercial project N
//   commercial{N}extra{M} → extra thumbnail M for commercial project N

import commercialrender1 from '../assets/Commercial/commercialrender1.png';
import commercialactual1 from '../assets/Commercial/commercialactual1.png';
import commercial1extra1 from '../assets/Commercial/commercial1extra1.png';
import commercial1extra2 from '../assets/Commercial/commercial1extra2.png';

import commercialrender2 from '../assets/Commercial/commercialrender2.png';
import commercialactual2 from '../assets/Commercial/commercialactual2.png';

import commercialrender3 from '../assets/Commercial/commercialrender3.png';
import commercialactual3 from '../assets/Commercial/commercialactual3.png';
import commercial3extra1 from '../assets/Commercial/commercial3extra1.png';

import commercialrender4 from '../assets/Commercial/commercialrender4.png';
import commercialactual4 from '../assets/Commercial/commercialactual4.png';
import commercial4extra1 from '../assets/Commercial/commercial4extra1.png';

import commercialrender5 from '../assets/Commercial/commercialrender5.png';
import commercialactual5 from '../assets/Commercial/commercialactual5.png';


// ─── Project Data ─────────────────────────────────────────────────────────────
// Edit titles, locations, descriptions, and swap image imports here.
// additionalImages: extra thumbnail images shown below the two main photos.
//   Remove items to hide thumbnails; add new imports above and list them here.
const PROJECT_DATA = {
  residential: [
    {
      id: 'res-4',
      title: 'Two-storey Residence',
      location: 'Ayala, Alabang',
      description: 'AA luxurious contemporary residence featuring clean architectural lines, expansive glass elements, and refined finishes that create a seamless blend of elegance, comfort, and modern living.',
      renderImage: houserender4,
      actualImage: houseactual4,
      additionalImages: [
        house4extra01, house4extra02, house4extra03, house4extra04,
        house4extra05, house4extra06
      ],
    },
    {
      id: 'res-3',
      title: 'Two-storey Residence',
      location: 'Sta. Rosa, Laguna',
      description: 'A contemporary family home designed with refined architectural details, premium exterior finishes, and spacious interiors, creating a perfect balance of luxury, functionality, and everyday living.',
      renderImage: houserender3,
      actualImage: houseactual3,
      additionalImages: [
        house3extra1,
        house3extra2,
        house3extra3,
        house3extra4,
        house3extra5,
        house3extra6,
        house3extra7,
        house3extra8,
        house3extra9
      ],
    },
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
      title: 'Two-storey Residence',
      location: 'Magallanes, Cavite',
      description: 'A contemporary two-story residence showcasing clean architectural lines, expansive glazing, and a seamless blend of indoor and outdoor spaces, designed to deliver comfort, elegance, and timeless functionality.',
      renderImage: houserender2,
      actualImage: houseactual2,
      additionalImages: [house2extra1, house2extra2],
    },
    {
      id: 'res-5',
      title: 'Three-storey Residence',
      location: 'Las Pinas, Metro Manila',
      description: 'A modern three-story corner residence with wood-panel accents, dark stone cladding, planted balconies, and a rooftop deck framed by slender steel railings.',
      renderImage: houserender5,
      actualImage: houseactual5,
      additionalImages: [
        house5extra1, house5extra2, house5extra3, house5extra4, house5extra5,
        house5extra6, house5extra7, house5extra8, house5extra9
      ],
    },
    {
      id: 'res-6',
      title: 'Two-storey residence',
      location: 'Carmona Cavite',
      description: 'A twilight-lit modern villa with warm timber cladding, a colonnaded veranda, solar-paneled hip roof, and manicured gardens set against a wooded backdrop.',
      renderImage: houserender6,
      actualImage: houseactual6,
      additionalImages: [
        house6extra1, house6extra2, house6extra3
      ],
    },
    {
      id: 'res-7',
      title: 'Two-Storey Residence',
      location: 'Las Pinas, Metro Manila',
      description: 'A textured concrete facade with vertical timber slat screening, an angular covered entryway, and a cantilevered carport wide enough for two vehicles.',
      renderImage: houserender7,
      actualImage: houseactual7,
      additionalImages: [
        house7extra1, house7extra2, house7extra3
      ],
    },
    {
      id: 'res-8',
      title: 'Two-storey Residence',
      location: 'Paranaque, Metro Manila',
      description: 'A Mediterranean-style estate with terracotta tile roofs, exposed wood rafter tails, arched colonnades, and decorative fretwork screens surrounding a fountain courtyard.',
      renderImage: houserender8,
      actualImage: houseactual8,
      additionalImages: [
        house8extra1, house8extra2, house8extra3
      ],
    },
    {
      id: 'res-9',
      title: 'One-Storey Residence',
      location: 'Tagaytay City, Cavite',
      description: 'A single-story indoor-outdoor pavilion with floor-to-ceiling glass walls, an extended timber-lined roof overhang, and a covered patio dining area opening onto the lawn.',
      renderImage: houserender9,
      actualImage: houseactual9,
      additionalImages: [
        house9extra1, house9extra2, house9extra3
      ],
    },
    {
      id: 'res-10',
      title: 'Modern Residence',
      location: 'Metro Manila',
      description: 'An expansive residential project featuring clean lines, premium outdoor spaces, and thoughtfully designed living areas.',
      renderImage: houserender10,
      actualImage: houseactual10,
      additionalImages: [
        house10extra1
      ],
    },
    {
      id: 'res-11',
      title: 'Two-Storey Residence with Roof Deck',
      location: 'Ayala, Alabang',
      description: 'A contemporary two-storey residence featuring a spacious roof deck, seamlessly blending modern aesthetics with functional outdoor living areas.',
      renderImage: houserender11,
      actualImage: houseactual11,
      additionalImages: [
        house11extra1, house11extra2, house11extra3, house11extra4,
        house11extra5, house11extra6, house11extra7, house11extra8
      ],
    },
    {
      id: 'res-12',
      title: 'Two-Storey Residence',
      location: 'Punta Fuego, Batangas',
      description: 'A luxurious two-storey modern residence showcasing refined architectural elements and seamlessly integrated indoor-outdoor spaces for sophisticated coastal living.',
      renderImage: houserender12,
      actualImage: houseactual12,
      additionalImages: [
        house12extra1, house12extra2, house12extra3, house12extra4
      ],
    },
    {
      id: 'res-13',
      title: 'Three-Storey Residence',
      location: 'Silang, Cavite',
      description: 'A contemporary three-storey residence set amidst lush greenery, featuring expansive balconies and large windows that seamlessly blend modern design with its serene natural surroundings.',
      renderImage: houserender13,
      actualImage: houseactual13,
      additionalImages: [
        house13extra1, house13extra2, house13extra3
      ],
    },
  ],
  commercial: [
    {
      id: 'comm-1',
      title: 'One-Storey Skin and Laser Center',
      location: 'Las Piñas City',
      description: 'A modern, state-of-the-art commercial skin and laser clinic featuring clean, minimalist architectural design and clinical workspaces optimized for client comfort.',
      renderImage: commercialrender1,
      actualImage: commercialactual1,
      additionalImages: [commercial1extra1, commercial1extra2],
    },
    {
      id: 'comm-2',
      title: 'Four-Storey Commercial Building',
      location: 'Las Piñas City',
      description: 'A four-story commercial building with a dark cantilevered upper facade, ribbon windows with warm accent lighting, and a ground-floor retail storefront wrapped in glass and stone tile.',
      renderImage: commercialrender2,
      actualImage: commercialactual2,
      additionalImages: [],
    },
    {
      id: 'comm-3',
      title: 'Two-Storey Commercial Building',
      location: 'Las Piñas City',
      description: 'A boxy modern townhouse duplex with vertical wood-slat and stone-panel facades, twin street-level carports, and slatted steel gates enclosing the driveway.',
      renderImage: commercialrender3,
      actualImage: commercialactual3,
      additionalImages: [commercial3extra1],
    },
    {
      id: 'comm-4',
      title: 'Two-Storey Commercial Building Renovation',
      location: 'Las Piñas City',
      description: 'A two-story commercial storefront with bold geometric mural cladding, blank signage panels above a full-glass ground floor, and a wraparound balcony with steel railings.',
      renderImage: commercialrender4,
      actualImage: commercialactual4,
      additionalImages: [commercial4extra1],
    },
    {
      id: 'comm-5',
      title: 'Monterey Community Market',
      location: 'Las Piñas City',
      description: 'A two-story corner retail building with a bold red canopy and storefront, wood-slat cladding above, and a winged metal roof overhang shading the sidewalk signage.',
      renderImage: commercialrender5,
      actualImage: commercialactual5,
      additionalImages: [],
    },
  ],
};

const galleryModules = import.meta.glob('../assets/Gallery/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const galleryImagesFromFolder = Object.keys(galleryModules).map((path, index) => ({
  id: `gallery-img-${index}`,
  image: galleryModules[path].default,
  title: `Gallery Image ${index + 1}`
}));

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

          {/* Shuffle Gallery Area */}
          {activeCategory !== 'commercial' && (
            <div className="border-t border-outline-variant/20 pt-16 mt-16">
              <h2 className="font-display-md text-display-md text-primary mb-8 text-center uppercase tracking-widest">( Project Gallery )</h2>
              <ImageCollage projects={galleryImagesFromFolder} />
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
