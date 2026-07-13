import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectPresentation({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [activeModalImageIndex, setActiveModalImageIndex] = useState(null);

  // Reset index when category/projects list changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
    setActiveModalImageIndex(null);
  }, [projects]);

  // Reset modal when slide index changes
  useEffect(() => {
    setActiveModalImageIndex(null);
  }, [currentIndex]);

  if (!projects || projects.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center text-on-surface-variant border border-dashed border-outline-variant/30 rounded-lg">
        <span className="material-symbols-outlined text-4xl mb-4">folder_open</span>
        <p className="font-body-md">No projects found in this category.</p>
      </div>
    );
  }

  const activeProject = projects[currentIndex];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Variants for sliding transition
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : dir < 0 ? -80 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : dir < 0 ? 80 : 0,
      opacity: 0,
    }),
  };

  const hasAdditional = activeProject.additionalImages && activeProject.additionalImages.length > 0;

  // Build list of all images for the current active project
  const projectImages = [];
  if (activeProject.renderImage) {
    projectImages.push({ src: activeProject.renderImage, label: '3D Render' });
  }
  if (activeProject.actualImage) {
    projectImages.push({ src: activeProject.actualImage, label: 'Actual Build' });
  }
  if (activeProject.additionalImages) {
    activeProject.additionalImages.forEach((img, idx) => {
      projectImages.push({ src: img, label: `Additional Detail ${idx + 1}` });
    });
  }

  const handleModalNext = () => {
    if (projectImages.length <= 1) return;
    setActiveModalImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  const handleModalPrev = () => {
    if (projectImages.length <= 1) return;
    setActiveModalImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const openModalWithImage = (imgSrc) => {
    const idx = projectImages.findIndex((img) => img.src === imgSrc);
    if (idx !== -1) {
      setActiveModalImageIndex(idx);
    }
  };

  // Keyboard navigation & scroll locking for modal
  useEffect(() => {
    if (activeModalImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalImageIndex(null);
      } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        handleModalNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        handleModalPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalImageIndex, projectImages.length]);

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Active Project Slide Area */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeProject.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="w-full flex flex-col gap-5"
          >
            {/* Two Main Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Slot: 3D Render */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/20 rounded-lg group shadow-sm">
                <div className="absolute top-4 left-4 z-10 bg-black/75 text-white text-[10px] md:text-[11px] font-label-caps uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 select-none">
                  3D Render
                </div>
                {activeProject.renderImage ? (
                  <img
                    src={activeProject.renderImage}
                    alt={`${activeProject.title} Render`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-zoom-in"
                    onClick={() => openModalWithImage(activeProject.renderImage)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/60 gap-3 p-6 text-center select-none bg-surface-container-low">
                    <span className="material-symbols-outlined text-3xl opacity-60">architecture</span>
                    <span className="font-label-caps text-xs tracking-wider">No Render Image Available</span>
                  </div>
                )}
              </div>

              {/* Right Slot: Actual Build */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container border border-outline-variant/20 rounded-lg group shadow-sm">
                <div className="absolute top-4 left-4 z-10 bg-primary text-on-primary text-[10px] md:text-[11px] font-label-caps uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md select-none">
                  Actual Build
                </div>
                {activeProject.actualImage ? (
                  <img
                    src={activeProject.actualImage}
                    alt={`${activeProject.title} Actual Build`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-zoom-in"
                    onClick={() => openModalWithImage(activeProject.actualImage)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant/60 gap-3 p-6 text-center select-none bg-surface-container-low">
                    <span className="material-symbols-outlined text-3xl opacity-60">photo_camera</span>
                    <span className="font-label-caps text-xs tracking-wider">No Actual Image Available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Thumbnail Strip — only renders when additionalImages is non-empty */}
            {hasAdditional && (
              <div className="flex flex-row gap-3 overflow-x-auto pb-1">
                {activeProject.additionalImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative flex-shrink-0 w-24 h-20 md:w-32 md:h-24 overflow-hidden rounded-md border border-outline-variant/20 bg-surface-container shadow-sm group cursor-pointer"
                    onClick={() => openModalWithImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${activeProject.title} photo ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 cursor-zoom-in"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 rounded-md pointer-events-none" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation & Project Metadata Footer */}
      <div className="border-t border-outline-variant/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
        {/* Project Details */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              {activeProject.location || 'Project Location'}
            </span>
          </div>
          <h2 className="font-display-sm text-display-sm text-primary tracking-tight leading-tight mt-1">
            {activeProject.title}
          </h2>
          {activeProject.description && (
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
              {activeProject.description}
            </p>
          )}
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center gap-6 self-end md:self-auto">
          {/* Pagination Counter */}
          <div className="font-label-caps text-label-caps tracking-widest text-on-surface-variant select-none">
            <span className="font-semibold text-primary">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="mx-2 text-outline-variant">/</span>
            <span>{String(projects.length).padStart(2, '0')}</span>
          </div>

          {/* Left/Right Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300 group shadow-sm hover:shadow"
              aria-label="Previous Project"
            >
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-0.5">
                arrow_back
              </span>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300 group shadow-sm hover:shadow"
              aria-label="Next Project"
            >
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {activeModalImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setActiveModalImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalImageIndex(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-all duration-200 cursor-pointer shadow-lg"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Left Arrow Button */}
            {projectImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleModalPrev();
                }}
                className="absolute left-4 md:left-6 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-all duration-200 cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-2xl">arrow_back</span>
              </button>
            )}

            {/* Right Arrow Button */}
            {projectImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleModalNext();
                }}
                className="absolute right-4 md:right-6 z-[60] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-all duration-200 cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
              </button>
            )}

            {/* Image Container */}
            <div
              className="relative max-w-[90%] max-h-[80%] flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={activeModalImageIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                src={projectImages[activeModalImageIndex]?.src}
                alt={projectImages[activeModalImageIndex]?.label}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl select-none"
              />

              {/* Text info */}
              <div className="text-center text-white/80 max-w-xl px-4">
                <h3 className="font-label-caps text-xs md:text-sm tracking-wider uppercase text-white font-semibold">
                  {activeProject.title}
                </h3>
                <p className="font-body-md text-[10px] md:text-xs text-white/60 mt-1 uppercase tracking-widest">
                  {projectImages[activeModalImageIndex]?.label} &bull; {activeModalImageIndex + 1} of {projectImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
