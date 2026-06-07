import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Play } from 'lucide-react';

export default function PortfolioView() {
  const [activeTab, setActiveTab] = useState<'all' | 'weddings' | 'pre-weddings' | 'engagements' | 'birthdays'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    // Simulating luxurious dusty rose shimmer lazy load
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const filteredItems = portfolioData.filter(item => 
    activeTab === 'all' ? true : item.category === activeTab
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setZoomLevel(1);
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    setZoomLevel(1);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    setZoomLevel(1);
  };

  // Mobile Touch Swipe Handlers for Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { // Swipe threshold
      if (diff > 0) {
        handleNextImage(); // Swiped left
      } else {
        handlePrevImage(); // Swiped right
      }
    }
  };

  const categories: { code: typeof activeTab; label: string }[] = [
    { code: 'all', label: 'All Plates' },
    { code: 'weddings', label: 'Weddings' },
    { code: 'pre-weddings', label: 'Pre-Wedding' },
    { code: 'engagements', label: 'Engagements' },
    { code: 'birthdays', label: 'Birthdays' },
  ];

  return (
    <div id="portfolio-section" className="bg-charcoal text-ivory py-16 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="film-grain" />
      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2 font-semibold">Our Created Archive</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-light text-ivory tracking-wide uppercase gold-glow">
            The Portfolios
          </h2>
          <div className="h-[1px] bg-gold/30 w-16 mx-auto mt-4" />
        </div>

        {/* Horizontal scrollable tabs container for mobile */}
        <div className="flex justify-start md:justify-center items-center overflow-x-auto gap-2 sm:gap-6 pb-4 border-b border-gold/15 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.code}
              onClick={() => {
                setActiveTab(cat.code);
                setZoomLevel(1);
              }}
              className={`font-montserrat text-xs uppercase tracking-widest py-2 px-3 sm:px-4 cursor-pointer whitespace-nowrap transition-all duration-300 relative ${
                activeTab === cat.code 
                  ? 'text-gold font-semibold' 
                  : 'text-zinc-500 hover:text-gold'
              }`}
            >
              {cat.label}
              {activeTab === cat.code && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Layout Grid */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div id="shimmer-placeholders" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-rose/15 animate-pulse rounded aspect-[3/4] flex items-center justify-center border border-rose/10"
                >
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-ivory/5 to-transparent shimmer-btn opacity-10" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="group relative cursor-pointer overflow-hidden rounded bg-night border border-mutedgold/10 aspect-[3/4]"
                >
                  {/* Image */}
                  <img
                    src={item.youtubeId ? `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg` : item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (item.youtubeId && img.src.includes('maxresdefault')) {
                        img.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                      }
                    }}
                  />

                  {/* Play badge for video items */}
                  {item.youtubeId && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <div className="w-12 h-12 bg-charcoal/80 text-gold rounded-full flex items-center justify-center transition-all duration-500 shadow-xl border border-gold/35 group-hover:scale-110 group-hover:bg-gold group-hover:text-charcoal group-hover:border-gold">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* High contrast overlay vignette on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Golden border flash on hover */}
                  <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/35 transition-all duration-500 pointer-events-none" />

                  {/* Content details overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 flex flex-col gap-1">
                    <span className="font-montserrat text-[9px] uppercase tracking-widest text-gold font-semibold">
                      {item.category}
                    </span>
                    <h4 className="font-playfair text-lg text-ivory leading-tight font-medium">
                      {item.title}
                    </h4>
                    <p className="font-lora text-[11px] text-zinc-400 italic flex items-center gap-1">
                      <span className="w-1 h-1 bg-gold rounded-full" /> {item.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen Lightbox Frame */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/98 z-[120] flex flex-col justify-between select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Film grain effect */}
            <div className="film-grain" />

            {/* Top Toolbar */}
            <div className="p-4 sm:p-6 flex justify-between items-center bg-gradient-to-b from-charcoal/95 to-transparent z-[130]">
              <div className="text-left">
                <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gold">
                  {filteredItems[selectedImageIndex].category}
                </span>
                <h3 className="font-cormorant text-2xl text-ivory tracking-wide font-light">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="font-lora text-xs text-ash italic">
                  {filteredItems[selectedImageIndex].location} · Photo by {filteredItems[selectedImageIndex].photographer}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center bg-night/80 border border-mutedgold/20 rounded px-2 py-1 gap-2 text-gold">
                  <button 
                    onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.2))} 
                    className="p-1 hover:text-ivory cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-xs w-10 text-center">{Math.round(zoomLevel * 100)}%</span>
                  <button 
                    onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.2))} 
                    className="p-1 hover:text-ivory cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 sm:p-3 bg-night/80 border border-mutedgold/20 text-gold hover:text-ivory rounded-full hover:scale-105 transition-all cursor-pointer"
                  title="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Slider Area */}
            <div className="relative flex-1 flex items-center justify-center px-4 sm:px-12">
              {/* Left Arrow */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 sm:left-8 p-3 bg-night/50 border border-mutedgold/10 hover:border-gold/30 text-gold hover:text-ivory rounded-full transition-all cursor-pointer z-[130] hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Media Container */}
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl max-h-[70vh] rounded overflow-hidden shadow-2xl relative z-[125] flex items-center justify-center bg-black"
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.1s ease-out' }}
              >
                {filteredItems[selectedImageIndex].youtubeId ? (
                  <div className="w-full aspect-[16/9] max-h-[70vh]">
                    <iframe
                      src={`https://www.youtube.com/embed/${filteredItems[selectedImageIndex].youtubeId}?autoplay=1`}
                      title={filteredItems[selectedImageIndex].title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={filteredItems[selectedImageIndex].url}
                    alt={filteredItems[selectedImageIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[70vh] object-contain mx-auto"
                  />
                )}
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 sm:right-8 p-3 bg-night/50 border border-mutedgold/10 hover:border-gold/30 text-gold hover:text-ivory rounded-full transition-all cursor-pointer z-[130] hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom bar & Indicators */}
            <div className="p-4 bg-gradient-to-t from-charcoal/95 to-transparent flex flex-col items-center gap-3 z-[130]">
              <div className="flex gap-1">
                {filteredItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      selectedImageIndex === i ? 'w-6 bg-gold' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                  />
                ))}
              </div>
              <p className="font-mono text-[10px] text-ash uppercase tracking-widest">
                Swipe left / right or use ← → arrow keys to navigate · Pinch / Drag zoom enabled
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
