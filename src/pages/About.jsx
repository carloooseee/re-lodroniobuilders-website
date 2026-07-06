import React from 'react';
import arPicture from '../assets/ARPicture.png';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-6">
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-6 block">( About )</span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
                A firm built on <br /><em className="italic">purpose</em><br /> and <em className="italic">craft.</em>
              </h1>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center mt-12 md:mt-0">
              <p className="font-body-lg text-body-lg text-primary font-medium mb-6">
                R.E. Lodronio Builders Inc. (formerly REL Builders and Design) is a design-build firm led by Ar. Roco E. Lodronio, serving residential, commercial, and interior projects across the Philippines.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From full renovations to ground-up construction, we bring the same standard to every project — a single team, a single point of accountability, and a commitment to building spaces that are as honest as they are beautiful.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 leading-tight">
              “For every house is built by someone, but <em className="italic">God</em> is the builder of everything”
            </h2>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">-HEBREWS 3:4</span>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-12 block">( MEET THE ARCHITECT )</span>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-5">
              <div className="relative w-full aspect-[4/5] bg-surface-variant overflow-hidden group">
                <img alt="Ar. Roco E. Lodronio" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src={arPicture} />
              </div>
              <div className="flex justify-between items-center mt-4 font-label-caps text-label-caps uppercase text-on-surface-variant text-[10px]">
                <span>LAS PINAS, PH</span>
                <span>EST. PRACTICE</span>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0 pt-8">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Ar. Roco E. <em className="italic">Lodronio</em></h2>
              <p className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-10 tracking-widest">ARCHITECT · CONTRACTOR · FOUNDER</p>
              <div className="space-y-6 mb-12">
                <p className="font-body-lg text-body-lg text-primary">
                  Architect Roco leads every project personally — from first sketch to final walkthrough. His practice blends architectural discipline with hands-on construction experience, giving clients a rare single point of accountability across design and build.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Trained as an architect and working as a contractor for over two decades, he has led residential, commercial, and interior projects across the Philippines. His approach is quiet, methodical, and deeply personal — grounded in faith, family, and a belief that a well-built home outlasts its builder.
                </p>
              </div>
              <div className="border-t border-outline-variant/20 pt-8 grid grid-cols-2 gap-8">
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-2 text-[10px]">DISCIPLINE</span>
                  <strong className="font-body-md text-body-md text-primary block">Registered Architect</strong>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Design-build practice</span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-2 text-[10px]">FOCUS</span>
                  <strong className="font-body-md text-body-md text-primary block">Residential · Commercial · Interior</strong>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Nationwide, Philippines</span>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-2 text-[10px]">PHILOSOPHY</span>
                  <strong className="font-body-md text-body-md text-primary block italic">"Build honestly, build to last."</strong>
                </div>
                <div>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-2 text-[10px]">FIRM</span>
                  <strong className="font-body-md text-body-md text-primary block">R.E. Lodronio Builders Inc.</strong>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Formerly REL Builders and Design</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/20">
          <div className="mb-16">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-4 block">( OUR PRINCIPLES )</span>
            <h2 className="font-headline-md text-headline-md text-primary pb-8 border-b border-outline-variant/20">Seven standards we build by.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface-variant italic block mb-4">1</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Honesty</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Clear, truthful communication from proposal to turnover.</p>
            </div>

            <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface-variant italic block mb-4">2</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Openness</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Transparent processes, no hidden surprises.</p>
            </div>

            <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface-variant italic block mb-4">3</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Professionalism</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Quality craftsmanship, every time.</p>
            </div>

            <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface-variant italic block mb-4">4</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Enthusiasm</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Genuine passion for every build, big or small.</p>
            </div>

            <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface-variant italic block mb-4">5</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Problem-solving</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Practical solutions when challenges arise.</p>
            </div>

            <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
              <span className="font-headline-sm text-headline-sm text-on-surface-variant italic block mb-4">6</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Organization</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Well-managed sites and documentation.</p>
            </div>

            <div className="bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container transition-colors duration-300 md:col-span-2 lg:col-span-1">
              <span className="font-headline-sm text-headline-sm text-on-surface-variant italic block mb-4">7</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Project time management</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Respecting your timeline and budget.</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-4 block tracking-widest">(ACCREDITATION)</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">PCAB Accredited</h2>
          <div className="bg-surface px-8 py-4 flex items-center gap-4 border border-outline-variant/20 max-w-sm w-full shadow-sm">
            <div className="w-12 h-12 bg-surface-variant flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-outline">verified</span>
            </div>
            <div className="text-left">
              <strong className="font-label-sm text-label-sm font-semibold text-primary block">PCAB Accredited Contractor</strong>
              <span className="font-label-caps text-[9px] uppercase text-on-surface-variant block mt-1">Philippine Contractors Accreditation Board</span>
            </div>
          </div>
        </section>

        <section className="text-white py-section-gap px-margin-mobile md:px-margin-desktop" style={{ backgroundColor: 'rgb(29, 29, 29)' }}>
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4 mb-12 md:mb-0">
              <span className="font-label-caps text-label-caps uppercase text-white/70 mb-6 block">( WHAT WE DO )</span>
              <h2 className="font-headline-md text-headline-md">
                Residential,<br />commercial, <em className="italic">interior.</em>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
              <div className="border-b border-white/20 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-white text-[24px]">home</span>
                  <h3 className="font-body-lg text-body-lg">Residential Construction</h3>
                </div>
                <p className="font-label-sm text-label-sm text-white/70">Custom homes, renovations, and extensions designed for the way Filipino families live today.</p>
              </div>
              <div className="border-b border-white/20 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-white text-[24px]">business</span>
                  <h3 className="font-body-lg text-body-lg">Commercial Spaces</h3>
                </div>
                <p className="font-label-sm text-label-sm text-white/70">Offices, retail, and small-scale commercial builds that balance function with lasting presence.</p>
              </div>
              <div className="pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-white text-[24px]">chair</span>
                  <h3 className="font-body-lg text-body-lg">Interior Design</h3>
                </div>
                <p className="font-label-sm text-label-sm text-white/70">Finish-out, material selection, and spatial detailing that turn a structure into a home.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bottom-0 bg-surface dark:bg-surface border-t border-outline-variant/20 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
          <div className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[10px]">
            © 2024 RE Lodronio Builders Inc.
          </div>
          <div className="font-label-caps text-label-caps uppercase text-on-surface-variant text-[10px]">
            Building with purpose, since 2008
          </div>
        </div>
      </footer>

    </>
  );
}
