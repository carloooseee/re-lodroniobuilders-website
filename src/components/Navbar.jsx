import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const isHome = path === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to solid color when we scroll past the first viewport-height section
      if (window.scrollY > window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Run once on mount to set correct initial state
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
    showTransparent && !isOpen
      ? 'bg-transparent text-white border-transparent'
      : 'bg-surface text-primary border-outline-variant/20 shadow-sm'
  }`;

  const logoClass = `font-headline-sm text-headline-sm tracking-tight transition-colors duration-300 ${
    showTransparent && !isOpen ? 'text-white' : 'text-primary'
  }`;

  return (
    <>
      <header className={headerClass}>
        <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link className={logoClass} to="/" onClick={() => setIsOpen(false)}>
            RE Lodronio Builders Inc.
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link className={linkClass('/')} to="/">Home</Link>
            <Link className={linkClass('/about')} to="/about">About Us</Link>
            <Link className={linkClass('/contact')} to="/contact">Contact</Link>
            <Link className={linkClass('/policy')} to="/policy">Policy</Link>
          </div>

          <button 
            className={`md:hidden ${showTransparent && !isOpen ? 'text-white font-medium' : 'text-primary'} cursor-pointer flex items-center justify-center p-3 relative z-50`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[32px] select-none">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden bg-surface text-primary border-t border-outline-variant/20 px-margin-mobile py-6 flex flex-col gap-4 shadow-lg">
            <Link className={`font-label-caps text-label-caps uppercase tracking-widest py-2 border-b border-outline-variant/10 ${path === '/' ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link className={`font-label-caps text-label-caps uppercase tracking-widest py-2 border-b border-outline-variant/10 ${path === '/about' ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link className={`font-label-caps text-label-caps uppercase tracking-widest py-2 border-b border-outline-variant/10 ${path === '/contact' ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link className={`font-label-caps text-label-caps uppercase tracking-widest py-2 ${path === '/policy' ? 'text-primary font-bold' : 'text-on-surface-variant'}`} to="/policy" onClick={() => setIsOpen(false)}>Policy</Link>
          </div>
        )}
      </header>
      {/* Spacer to push content down on pages with a solid navbar */}
      {!isHome && <div className="h-20" />}
    </>
  );
}
