"use client";

import Link from "next/link";
import { ChevronDown, Play, Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 animate-ken-burns"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Modern Gradient Overlay: Darker at bottom and left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/20 md:bg-gradient-to-r md:from-slate-900/80 md:to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-white">
        <div className="max-w-4xl">
          
          {/* Animated Badge */}
       {/*    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6 animate-fade-in-up">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              The Finest Hospitality in Jimma
            </span>
          </div> */}

          {/* Main Heading */}
       
<h1 className="text-4xl md:text-7xl lg:text-8xl font-serif leading-[1.15] mb-8 animate-fade-in-up delay-100 text-white pt-32 md:pt-40 lg:pt-48">
  <span className="text-emerald-300">Where Luxury Meets</span> <br className="hidden md:block" /> 
  <span className="relative inline-block">
    <span className="relative z-10 italic font-light text-emerald-300">Ethiopian</span>
    {/* Adjusted SVG to be more responsive */}
    <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500/30 -z-10" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  </span> 
  <span className="text-emerald-300 ml-3">Heritage</span>
</h1>

          {/* Description */}
          <p className="text-base md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-200">
            Experience an unparalleled sanctuary of elegance. From heritage-inspired suites to world-class flavors, discover the soul of Jimma.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center animate-fade-in-up delay-300">
            <Link 
              href="/rooms" 
              className="group relative bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl shadow-emerald-900/20 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 text-white">Explore Our Suites</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            <Link 
              href="/gallery" 
              className="group flex items-center gap-4 text-white font-bold hover:text-emerald-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:border-emerald-200 group-hover:bg-emerald-300/10 transition-all">
                <Play size={20} className="fill-current ml-1" />
              </div>
              <span className="uppercase tracking-widest text-xs hover:text-emerald-200">Take a Virtual Tour</span>
            </Link>
          </div>
        </div>
      </div>

      {/* --- DECORATIVE / UX ELEMENTS --- */}
      
      {/* Bottom Features Bar */}
      <div className="absolute bottom-0 left-0 w-full hidden lg:block z-20 border-t border-white/10 bg-slate-900/20 backdrop-blur-xl">
        <div className="container mx-auto px-12 py-8 flex justify-between items-center text-white/70">
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">01</span>
            <span className="text-[10px] uppercase tracking-widest">Premium Spa</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">02</span>
            <span className="text-[10px] uppercase tracking-widest">Organic Coffee Bar</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">03</span>
            <span className="text-[10px] uppercase tracking-widest">Royal Suites</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <button className="flex flex-col items-center gap-2 group">
            <span className="text-[10px] uppercase tracking-[0.3em] group-hover:text-white transition-colors">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:hidden text-white/50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}