import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ImageCollage from '../components/ImageCollage';

// Dynamically import images from the new assets folders
const residentialImports = import.meta.glob('../assets/residential/*.*', { eager: true, import: 'default' });
const commercialImports = import.meta.glob('../assets/commercial/*.*', { eager: true, import: 'default' });

const processImages = (importsGlob, category) => {
  return Object.values(importsGlob).map((imgUrl, index) => ({
    id: `${category}-${index + 1}`,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Project ${index + 1}`,
    category: category,
    location: 'Project Location',
    year: '2024',
    description: '',
    image: imgUrl,
    tags: [category.charAt(0).toUpperCase() + category.slice(1)],
    // Mark a few images as high quality to prioritize them in the collage
    isHighQuality: index % 5 === 0 || index % 7 === 0
  }));
};

const PROJECT_DATA = [
  ...processImages(residentialImports, 'residential'),
  ...processImages(commercialImports, 'commercial')
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
          <div className="border-t border-outline-variant/20 pt-16 mt-8">
            <ImageCollage projects={filteredProjects} />
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
