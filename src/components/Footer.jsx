import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-margin-mobile md:px-margin-desktop w-full text-white" style={{ backgroundColor: 'rgb(29, 29, 29)' }}>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-gutter">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-sm text-headline-sm tracking-tight text-white uppercase font-bold">
              RE Lodronio Builders Inc.
            </h3>
            <p className="font-body-md text-white/50 max-w-sm">
              Formerly REL Builders and Design. Architect and contractor offering full design-build services, delivering excellence across high-end residences and commercial structures.
            </p>
          </div>
          <div className="font-label-caps text-[10px] text-white/30 tracking-wider uppercase mt-8 md:mt-0">
            © {new Date().getFullYear()} RE Lodronio Builders Inc. All rights reserved.
          </div>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-label-caps text-label-caps text-white/40 tracking-widest uppercase">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3 font-body-md text-white/70">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/projects/residential" className="hover:text-white transition-colors">Residential Projects</Link>
            </li>
            <li>
              <Link to="/projects/commercial" className="hover:text-white transition-colors">Commercial Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-label-caps text-label-caps text-white/40 tracking-widest uppercase">
            Contact
          </h4>
          <div className="flex flex-col gap-4">
            {/* Phone Numbers */}
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[10px] text-white/40 tracking-wider uppercase">Phone</span>
              <a href="tel:872-4338" className="font-body-md text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-white/40">call</span>
                872-4338
              </a>
              <a href="tel:0995-975-7401" className="font-body-md text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-white/40">call</span>
                0995-975-7401
              </a>
              <a href="tel:0949-892-5217" className="font-body-md text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-white/40">call</span>
                0949-892-5217
              </a>
            </div>

            {/* Email Addresses */}
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[10px] text-white/40 tracking-wider uppercase">Email</span>
              <a href="mailto:rocolodronio@hotmail.com" className="font-body-md text-white/70 hover:text-white transition-colors flex items-center gap-2 break-all">
                <span className="material-symbols-outlined text-[18px] text-white/40">mail</span>
                rocolodronio@hotmail.com
              </a>
              <a href="mailto:relbuildersanddesign@gmail.com" className="font-body-md text-white/70 hover:text-white transition-colors flex items-center gap-2 break-all">
                <span className="material-symbols-outlined text-[18px] text-white/40">mail</span>
                relbuildersanddesign@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Socials & Office Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <h4 className="font-label-caps text-label-caps text-white/40 tracking-widest uppercase">
            Office & Socials
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[10px] text-white/40 tracking-wider uppercase">Social</span>
              <a href="https://www.facebook.com/RELBuildersDesign" target="_blank" rel="noopener noreferrer" className="font-body-md text-white/70 hover:text-white transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-white/40">public</span>
                Facebook Page
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[10px] text-white/40 tracking-wider uppercase">Office Address</span>
              <a href="https://maps.app.goo.gl/3DUzmKCFrcS7fTPs9" target="_blank" rel="noopener noreferrer" className="font-body-md text-white/70 hover:text-white transition-colors flex flex-col">
                <span className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[18px] text-white/40">location_on</span>
                  <span>Visit Map</span>
                </span>
                <span className="text-[12px] text-white/50 leading-relaxed pl-6">
                  No. 2 M. Santos Avenue, Santos Village Phase 3, Barangay Zapote, Las Piñas City, Philippines
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
