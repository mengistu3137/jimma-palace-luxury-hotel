"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/app/constants";
import { 
  Maximize2, 
  Camera, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download 
} from "lucide-react";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = ["all", ...new Set(GALLERY_IMAGES.map((img) => img.category))];

  const filteredImages = filter === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  // Keyboard navigation for slider
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredImages]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] selection:bg-emerald-100">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center scale-100 animate-slow-zoom"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070')" }}
        >
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none z-0">
          <span className="text-[180px] md:text-[250px] font-black uppercase tracking-tighter text-emerald-100">Jimma</span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6 pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8"
          >
            <span className="text-emerald-200">The Palace</span> <span className="italic font-light text-emerald-200">Gallery</span>
          </motion.h1>
          <p className="text-emerald-50/70 uppercase tracking-[0.4em] text-[10px] font-bold">A Visual Journey Through Heritage</p>
        </div>
      </section>

      {/* --- 2. STICKY FILTERS --- */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-slate-100 mb-12">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  filter === cat ? "text-emerald-700" : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div layoutId="activeFilter" className="absolute inset-0 bg-emerald-50 rounded-full -z-10" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 3. BENTO GRID --- */}
      <section className="max-w-[1400px] mx-auto px-6 pb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[300px] gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                variants={itemVariants} initial="hidden" animate="visible" exit="exit"
                onClick={() => setSelectedIndex(idx)}
                className={`relative group rounded-[2.5rem] overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500
                  ${idx % 7 === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"}`}
              >
                <img 
                  src={`${img.src}?auto=format&fit=crop&w=1200&q=85`} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                        <div className="flex items-center gap-2 text-emerald-400 mb-2 font-black uppercase tracking-widest text-[10px]">
                            <Camera size={12}/> {img.category}
                        </div>
                        <h3 className="text-2xl font-serif text-white">Experience {img.category}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- 4. FULL-SCREEN LIGHTBOX SLIDER --- */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Controls */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-center text-white z-[210]">
               <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-400">
                    {selectedIndex + 1} / {filteredImages.length}
                  </span>
                  <span className="h-4 w-[1px] bg-white/20" />
                  <span className="text-xs font-light tracking-widest uppercase text-white/60">
                    {filteredImages[selectedIndex].category}
                  </span>
               </div>
               <button 
                onClick={() => setSelectedIndex(null)}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
               >
                 <X size={24} />
               </button>
            </div>

            {/* Slider Navigation */}
            <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white hover:bg-white/5 transition-all z-[210]">
                <ChevronLeft size={48} strokeWidth={1}/>
            </button>
            <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white hover:bg-white/5 transition-all z-[210]">
                <ChevronRight size={48} strokeWidth={1}/>
            </button>

            {/* Main Image Slider */}
            <div className="w-full h-full max-w-6xl max-h-[75vh] px-4 flex items-center justify-center relative">
               <AnimatePresence mode="wait">
                  <motion.img
                    key={filteredImages[selectedIndex].id}
                    src={filteredImages[selectedIndex].src}
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full object-contain shadow-2xl rounded-lg"
                  />
               </AnimatePresence>
            </div>

            {/* Bottom Actions */}
            <div className="absolute bottom-10 flex gap-6">
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400 hover:text-white transition-colors">
                    <Download size={14}/> Download Image
                </button>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-emerald-400 transition-colors">
                    <Sparkles size={14}/> Request Info
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .auto-rows-\[300px\] { grid-auto-rows: 300px; }
        @media (max-width: 768px) { .auto-rows-\[300px\] { grid-auto-rows: 400px; } }
      `}</style>
    </div>
  );
}