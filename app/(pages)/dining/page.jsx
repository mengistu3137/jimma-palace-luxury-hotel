"use client";

import { Clock, Utensils, Coffee, ArrowRight, Star } from "lucide-react";
import { DINING_VENUES } from "@/app/constants";

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* --- CINEMATIC HERO --- */}
      <section className="h-[80vh] relative flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110 animate-ken-burns" 
          style={{ 
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')" 
          }}
        >
          {/* Multi-layered overlay for professional depth */}
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <div className="h-[1px] w-12 bg-emerald-400" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-emerald-400">Epicurean Journey</span>
            <div className="h-[1px] w-12 bg-emerald-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
            <span className="text-emerald-200">Culinary</span> <span className="italic font-light text-emerald-200">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-200 font-light leading-relaxed">
            From the historic birthplace of coffee to refined global flavors, 
            discover a symphony of taste at Jimma Palace.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* --- VENUES SECTION --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="space-y-40">
          {DINING_VENUES.map((venue, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-16 lg:items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side with Decorative Element */}
              <div className="flex-1 relative group">
                <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl">
                  <img 
                    src={venue.image || "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop"} 
                    alt={venue.title} 
                    className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Abstract Background Decoration */}
                <div className={`absolute -inset-4 bg-emerald-50 rounded-[2.5rem] -z-10 transition-transform duration-500 group-hover:scale-105 ${index % 2 !== 0 ? 'rotate-2' : '-rotate-2'}`} />
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700">
                  <Star size={14} className="fill-emerald-700" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Fine Dining Experience</span>
                </div>

                <h2 className="text-4xl md:text-6xl text-slate-900 font-serif leading-tight">
                  {venue.title}
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  {venue.desc}
                </p>

                {/* Opening Hours Info Card */}
                <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-600">
                    <Clock size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Operating Hours</p>
                    <p className="text-slate-900 font-bold">{venue.hours}</p>
                  </div>
                </div>

                {/* Modern Button */}
                <button className="group flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-emerald-600 active:scale-95 shadow-xl shadow-slate-900/10">
                  View Menu 
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SPECIAL FEATURE: COFFEE CEREMONY --- */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
            <Coffee size={400} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-serif mb-6 italic">The Soul of Ethiopia</h3>
            <p className="max-w-2xl mx-auto text-slate-400 font-light text-lg mb-10 leading-relaxed">
                No visit to Jimma is complete without our traditional coffee ceremony. 
                Experience the heritage of the bean that conquered the world, prepared 
                with royal precision.
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-emerald-400">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-serif mb-2">100%</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Organic Arabica</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-serif mb-2">3x</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Daily Ceremonies</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-serif mb-2">Royal</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Traditional Roast</span>
                </div>
            </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
        .animate-ken-burns {
          animation: ken-burns 30s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}