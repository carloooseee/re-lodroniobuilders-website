import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === '/';

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showTransparent = isHome && !isScrolled;

  const linkClass = (targetPath) => {
    const isActive = path === targetPath;
    if (showTransparent) {
      return `font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-300 pb-1 border-b-2 ${
        isActive
          ? 'text-white border-white font-semibold'
          : 'text-white/70 border-transparent hover:text-white hover:border-white/30'
      }`;
    } else {
      return `font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-300 pb-1 border-b-2 ${
        isActive
          ? 'text-primary border-primary font-semibold'
          : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary/30'
      }`;
    }
  };

  const headerClass = `w-full fixed top-0 left-0 z-50 transition-all duration-300 border-b ${
    showTransparent
      ? 'bg-transparent text-white border-transparent'
      : 'bg-surface text-primary border-outline-variant/20 shadow-sm'
  }`;

  const logoClass = `font-headline-sm text-headline-sm tracking-tight transition-colors duration-300 ${
    showTransparent ? 'text-white' : 'text-primary'
  }`;

  return (
    <>
      <header className={headerClass}>
        <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link className={logoClass} to="/">
            RE Lodronio Builders Inc.
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link className={linkClass('/')} to="/">Home</Link>
            <Link className={linkClass('/about')} to="/about">About Us</Link>
            <Link className={linkClass('/contact')} to="/contact">Contact</Link>
          </div>

          <button className={`md:hidden ${showTransparent ? 'text-white' : 'text-primary'}`}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>
      {/* Spacer to push content down on pages with a solid navbar */}
      {!isHome && <div className="h-20" />}
    </>
  );
}
