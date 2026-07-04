import React from 'react';
import placeholderImg from '../assets/placeholder.jpg';
import placeholderImg1 from '../assets/placeholder1.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="relative w-full h-auto pt-20 pb-20 flex items-end justify-start overflow-hidden">

        <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/60 after:to-transparent">
          <div className="w-full h-full bg-cover bg-center object-cover" data-alt="A stunning modern architectural home at sunset. The house features large floor-to-ceiling windows illuminated warmly from within, showcasing a sleek interior. The exterior is composed of clean lines, dark wood paneling, and off-form concrete. The sky is a dramatic gradient of deep oranges and purples, reflecting off a calm, dark water feature in the foreground. High-end real estate photography style, emphasizing light, structure, and luxury." style={{ backgroundImage: `url(${placeholderImg1})` }}></div>
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl leading-tight">
            Every house is built by someone, but <em className="italic">God</em> is the builder of everything
          </h1>
          <p className="font-label-sm text-label-sm mt-4 opacity-80 uppercase tracking-wider">Hebrews 3:4</p>
          <div className="mt-12 flex items-end justify-between border-b border-on-primary/30 pb-4">
            <h2 className="font-headline-md text-headline-md italic">Residence project</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="h-1 w-12 bg-on-primary"></div>
                <div className="h-1 w-12 bg-on-primary/30"></div>
                <div className="h-1 w-12 bg-on-primary/30"></div>
                <div className="h-1 w-12 bg-on-primary/30"></div>
              </div>
              <span className="font-label-caps text-label-caps ml-4">1/4</span>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-surface relative z-20 pb-0">

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8">

          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-16 border-b border-outline-variant/30 pb-4 gap-8 md:gap-0">
            <Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group uppercase tracking-widest" to="/">
              Click to view all Project Interiors
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </Link>
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
                <img className="w-full h-auto object-cover aspect-video bg-surface-container" data-alt="A warmly lit, modern children's bedroom interior. The room features a custom-built, multi-level wooden bed structure with integrated shelving and a cozy reading nook below. A father and son are sitting on the lower level reading a book. The color palette is natural wood, soft whites, and muted blues and greens. High-end interior design photography, emphasizing functional and playful design." src={placeholderImg1} />
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col gap-6 mt-16 md:mt-0">
              <img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A sophisticated dining room interior showcasing a study in texture. A large, dark vertical wood paneled wall serves as a dramatic backdrop. A minimalist wooden dining table with elegant, curved wooden chairs sits in the center. A sleek, linear black pendant light hangs above. Soft, flowing beige drapery frames a large window, softening the stark lines. The lighting is moody and elegant." src={placeholderImg1} />
              <p className="font-body-md text-body-md text-on-surface-variant">
                A study in texture. Vertical wood paneling creates a dramatic backdrop for an intimate dining experience, balanced by soft, flowing drapery.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col gap-6 mt-16 md:mt-0">
              <img className="w-full h-auto object-cover aspect-[3/4] bg-surface-container" data-alt="A cozy yet sophisticated living room corner. A large, floor-to-ceiling custom wooden bookshelf filled with books and curated objects dominates the right side. A comfortable, olive green armchair sits in the foreground with soft, neutral textured pillows. A modern black floor lamp arches over the chair. The walls are a soft, muted sage green. The atmosphere is quiet, intellectual, and inviting." src={placeholderImg1} />
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
              <Link className="font-label-caps text-label-caps hover:text-primary transition-colors flex items-center gap-2 group uppercase tracking-widest text-on-primary/70" to="/">
                Click to view all Project Exteriors
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </Link>
            </div>

            <div className="mb-8">
              <img className="w-full h-auto object-cover aspect-video md:aspect-[21/9] bg-surface-container" data-alt="A striking modern exterior of a multi-story home during daylight. The facade features bold, geometric shapes with a mix of raw, off-form concrete and warm, vertical wooden slats. Large rectangular windows puncture the concrete walls. Two luxury SUVs are parked in the open carport on the ground level. Lush green trees frame the upper portion of the house. The aesthetic is contemporary, structural, and luxurious." src={placeholderImg} />
              <p className="font-body-lg text-body-lg mt-6 max-w-3xl text-on-primary/70">
                Bold geometries. The raw texture of off-form concrete finds balance against the rhythmic warmth of vertical wooden slats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-8">
              <div className="flex flex-col gap-6">
                <img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A three-story modern urban home exterior. The design is a study in contrast, featuring rich, dark textured stone on the lower levels and smooth, light plaster on the upper levels. Organic greenery cascades from built-in planters on the balconies, softening the hard architectural lines. Two cars are parked in the driveway behind a sleek metal gate. The lighting suggests early evening." src={placeholderImg} />
                <p className="font-body-md text-body-md text-on-primary/70">
                  A study in contrast. Rich stone textures and organic greenery layer together to create a dynamic, multi-tiered urban facade.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A sleek, expansive modern home exterior featuring dramatic structural cantilevers. The house has a wide, horizontal profile with extensive use of glass, steel, and light gray stone cladding. The cantilevered rooflines provide deep overhangs, blurring the lines between indoor and outdoor living spaces. Three luxury cars are parked in the spacious driveway. The scene is bright and airy, emphasizing seamless design." src={placeholderImg} />
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
