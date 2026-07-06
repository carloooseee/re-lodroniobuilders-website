import React, { useState, useEffect } from 'react';
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
import placeholderImg from '../assets/placeholder.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    houseImg1,
    houseImg2,
    houseImg3,
    houseImg4,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // cycle every 6 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Navbar />

      <header className="relative w-full min-h-screen pt-28 pb-10 flex flex-col justify-between overflow-hidden">

        <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/60 after:to-transparent overflow-hidden">
          {slides.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                opacity: idx === activeSlide ? 1 : 0,
                transform: idx === activeSlide ? 'scale(1.08)' : 'scale(1)',
                transition: 'opacity 1.5s ease-in-out, transform 6.0s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            />
          ))}
        </div>

        {/* Top Spacer to balance the layout with header/navbar */}
        <div className="h-20"></div>

        {/* Centered but Left-Aligned Bible Verse */}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary flex flex-col items-start justify-center flex-grow">
          <div className="max-w-4xl text-left">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
              Every house is built by someone, but <em className="italic">God</em> is the builder of everything
            </h1>
            <p className="font-label-sm text-label-sm mt-4 opacity-80 uppercase tracking-wider">Hebrews 3:4</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary">
          <div className="flex items-end justify-between border-b border-on-primary/30 pb-4">
            <h2 className="font-headline-md text-headline-md italic">Residence project</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {slides.map((_, idx) => {
                  const isActive = idx === activeSlide;
                  const isPrevious = idx < activeSlide;
                  return (
                    <div
                      key={idx}
                      className="h-1 w-12 bg-on-primary/30 relative overflow-hidden rounded-full"
                    >
                      <div
                        key={isActive ? 'active' : 'inactive'}
                        className={`h-full bg-on-primary absolute top-0 left-0 ${isActive ? 'animate-progress-bar' : ''}`}
                        style={{
                          width: isPrevious ? '100%' : '0%',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <span className="font-label-caps text-label-caps ml-4">{activeSlide + 1}/4</span>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-surface relative z-20 pb-0">

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8">

          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-16 border-b border-outline-variant/30 pb-4 gap-8 md:gap-0">
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group uppercase tracking-widest"
              href="https://www.canva.com/design/DAHCMP8YuQ4/ns4gpTaWhngEH-_kbo6pmg/view?utm_content=DAHCMP8YuQ4&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to view all Project Interiors
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
            <h2 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-primary text-right w-full md:w-auto">Interiors Designs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div className="md:col-span-4 flex justify-end text-right">
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
                  Maximizing vertical space with custom cabinetry, integrated reading nooks, and playful structural elements designed to grow with the family.
                </p>
              </div>
              <div className="md:col-span-8">
                <img className="w-full h-auto object-cover aspect-video bg-surface-container" data-alt="A warmly lit, modern children's bedroom interior. The room features a custom-built, multi-level wooden bed structure with integrated shelving and a cozy reading nook below. A father and son are sitting on the lower level reading a book. The color palette is natural wood, soft whites, and muted blues and greens. High-end interior design photography, emphasizing functional and playful design." src={interiorImg1} />
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col gap-6 mt-16 md:mt-0">
              <img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A sophisticated dining room interior showcasing a study in texture. A large, dark vertical wood paneled wall serves as a dramatic backdrop. A minimalist wooden dining table with elegant, curved wooden chairs sits in the center. A sleek, linear black pendant light hangs above. Soft, flowing beige drapery frames a large window, softening the stark lines. The lighting is moody and elegant." src={interiorImg2} />
              <p className="font-body-md text-body-md text-on-surface-variant">
                A study in texture. Vertical wood paneling creates a dramatic backdrop for an intimate dining experience, balanced by soft, flowing drapery.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col gap-6 mt-16 md:mt-0">
              <img className="w-full h-auto object-cover aspect-[3/4] bg-surface-container" data-alt="A cozy yet sophisticated living room corner. A large, floor-to-ceiling custom wooden bookshelf filled with books and curated objects dominates the right side. A comfortable, olive green armchair sits in the foreground with soft, neutral textured pillows. A modern black floor lamp arches over the chair. The walls are a soft, muted sage green. The atmosphere is quiet, intellectual, and inviting." src={interiorImg3} />
              <p className="font-body-md text-body-md text-on-surface-variant text-right md:text-left">
                Floor-to-ceiling shelving meets soft, neutral textiles to create a sophisticated yet cozy corner dedicated to literature and relaxation.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-surface-container-low pt-8 pb-8 px-margin-mobile md:px-margin-desktop" style={{ backgroundColor: 'rgb(29, 29, 29)' }}>
          <div className="max-w-container-max mx-auto">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-outline-variant/30 pb-4 gap-8 md:gap-0">
              <h2 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-on-primary">Exteriors Designs</h2>
              <a
                className="font-label-caps text-label-caps hover:text-primary transition-colors flex items-center gap-2 group uppercase tracking-widest text-on-primary/70"
                href="https://www.canva.com/design/DAHB8G8LzEw/jDs9cAsiaYO-PZRkk2z2Bw/view?utm_content=DAHB8G8LzEw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8330579d52"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to view all Project Exteriors
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </a>
            </div>

            <div className="mb-8">
              <img className="w-full h-auto object-cover aspect-video md:aspect-[21/9] bg-surface-container" data-alt="A striking modern exterior of a multi-story home during daylight. The facade features bold, geometric shapes with a mix of raw, off-form concrete and warm, vertical wooden slats. Large rectangular windows puncture the concrete walls. Two luxury SUVs are parked in the open carport on the ground level. Lush green trees frame the upper portion of the house. The aesthetic is contemporary, structural, and luxurious." src={exteriorImg2} />
              <p className="font-body-lg text-body-lg mt-6 max-w-3xl text-on-primary/70">
                Bold geometries. The raw texture of off-form concrete finds balance against the rhythmic warmth of vertical wooden slats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-8">
              <div className="flex flex-col gap-6">
                <img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A three-story modern urban home exterior. The design is a study in contrast, featuring rich, dark textured stone on the lower levels and smooth, light plaster on the upper levels. Organic greenery cascades from built-in planters on the balconies, softening the hard architectural lines. Two cars are parked in the driveway behind a sleek metal gate. The lighting suggests early evening." src={exteriorImg1} />
                <p className="font-body-md text-body-md text-on-primary/70">
                  A study in contrast. Rich stone textures and organic greenery layer together to create a dynamic, multi-tiered urban facade.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A sleek, expansive modern home exterior featuring dramatic structural cantilevers. The house has a wide, horizontal profile with extensive use of glass, steel, and light gray stone cladding. The cantilevered rooflines provide deep overhangs, blurring the lines between indoor and outdoor living spaces. Three luxury cars are parked in the spacious driveway. The scene is bright and airy, emphasizing seamless design." src={exteriorImg3} />
                <p className="font-body-md text-body-md text-right md:text-left text-on-primary/70">
                  Sleek architectural lines and expansive structural cantilevers define a residence built for seamless indoor-outdoor cohesion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 px-margin-mobile md:px-margin-desktop w-full bottom-0" style={{ backgroundColor: 'rgb(29, 29, 29)' }}>
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
