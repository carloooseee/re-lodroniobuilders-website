import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const textBlocks = [
  { id: 'text-1', isText: true, content: 'Form follows function.', spanClass: 'md:col-span-2 md:row-span-1 col-span-2 row-span-1', textClass: 'font-serif italic text-2xl text-primary text-center' },
  { id: 'text-2', isText: true, content: 'Timeless design.', spanClass: 'md:col-span-2 md:row-span-1 col-span-2 row-span-1', textClass: 'font-serif italic text-2xl text-primary text-center' },
  { id: 'text-3', isText: true, content: 'Building with purpose.', spanClass: 'md:col-span-2 md:row-span-1 col-span-2 row-span-1', textClass: 'font-display-sm text-display-sm text-primary text-center uppercase tracking-widest' },
];

const ImageCollage = ({ projects }) => {
  const [shuffledItems, setShuffledItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Initial load combining images and text blocks
  useEffect(() => {
    setShuffledItems([...projects, ...textBlocks]);
  }, [projects]);

  const handleShuffle = () => {
    const shuffled = [...shuffledItems].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled);
  };

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Shuffle Button */}
      <div className="w-full flex justify-end mb-8 px-4 md:px-0">
        <button
          onClick={handleShuffle}
          className="flex items-center gap-2 px-6 py-3 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary/50 font-label-caps uppercase tracking-widest transition-all duration-300"
        >
          <span className="material-symbols-outlined text-[18px]">shuffle</span>
          Shuffle Gallery
        </button>
      </div>

      {/* Organic Collage Grid */}
      <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <AnimatePresence>
          {shuffledItems.map((item, idx) => {
            const isSingleHorizontal = idx === 0; // Always make the first item the single horizontal
            
            if (item.isText) {
              return (
                <motion.div 
                  layout 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  key={item.id} 
                  className={`flex items-center justify-center p-8 bg-surface-container-lowest border border-outline-variant/10 z-10 h-[180px] md:h-[350px] ${item.spanClass}`}
                >
                  <p className={item.textClass}>{item.content}</p>
                </motion.div>
              );
            }

            // 75% Landscape, 25% Semi-Portrait logic
            // We use idx % 4. Since idx=0 is the 4-span horizontal, we calculate for the rest.
            const isHorizontal = idx % 4 !== 3; // 75% landscape

            let colSpanClass = isHorizontal ? 'md:col-span-2' : 'md:col-span-1';
            let rowSpanClass = 'md:row-span-1';
            let heightClass = 'h-[180px] md:h-[350px]';

            if (isSingleHorizontal) {
              colSpanClass = 'md:col-span-4'; // Full desktop width
              heightClass = 'h-[180px] md:h-[400px]'; // Taller height on desktop
            }

            // Mobile logic: 75% full width (span 2), 25% half width (span 1)
            const mobileColSpan = (isHorizontal || isSingleHorizontal) ? 'col-span-2' : 'col-span-1';
            const mobileRowSpan = 'row-span-1';

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                key={item.id}
                onClick={() => openModal(item.image)}
                className={`relative overflow-hidden cursor-pointer group z-10 ${mobileColSpan} ${mobileRowSpan} ${colSpanClass} ${rowSpanClass} ${heightClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 bg-surface-container"
                />
                {/* Optional slight dark overlay on hover to indicate clickability without text */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 drop-shadow-lg text-4xl">
                    zoom_in
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            >
              <span className="material-symbols-outlined text-4xl drop-shadow-md">close</span>
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={selectedImage}
              alt="Fullscreen View"
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent click on image from closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageCollage;
