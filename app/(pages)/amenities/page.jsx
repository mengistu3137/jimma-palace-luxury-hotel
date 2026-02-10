"use client";

import { 
  Waves, 
  Users, 
  Wifi, 
  Coffee, 
  ShieldCheck, 
  Car, 
  Utensils, 
  Dumbbell,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { AMENITIES } from "@/app/constants";

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* --- 1. IMMERSIVE HERO --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center" 
          style={{ 
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D')" 
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-6">
             <Sparkles size={14} className="text-emerald-400" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">The Royal Standard</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-4">
              <span className="text-emerald-200">Palace</span> <span className="italic font-light text-emerald-200">Amenities</span>
          </h1>
          <p className="text-emerald-50/70 uppercase tracking-[0.4em] text-xs md:text-sm font-bold">
            Beyond the Room Experience
          </p>
        </div>
      </section>

      {/* --- 2. SIGNATURE EXPERIENCES (STAGGERED) --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="space-y-32">
          
          {/* Wellness Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
                  alt="Spa" 
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-100 rounded-[2.5rem] -z-10" />
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 text-emerald-600">
                <Waves size={32} strokeWidth={1.5} />
                <span className="h-px w-12 bg-emerald-200"></span>
              </div>
              <h3 className="text-4xl md:text-5xl text-slate-900 font-serif">Royal Wellness <span className="italic text-slate-500">Spa</span></h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Unwind with our signature traditional Ethiopian treatments or modern clinical therapies. 
                Our sanctuary is designed to harmonize the senses through organic elements and ancient wisdom.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {["Steam & Sauna", "Organic Essential Oils", "Couple's Rituals", "Skin Rejuvenation"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
                  alt="Conference" 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-emerald-100 rounded-[2.5rem] -z-10" />
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 text-emerald-600">
                <Users size={32} strokeWidth={1.5} />
                <span className="h-px w-12 bg-emerald-200"></span>
              </div>
              <h3 className="text-4xl md:text-5xl text-slate-900 font-serif">State Events <span className="italic text-slate-500">& Halls</span></h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                From high-level diplomatic summits to grand weddings, our venues are 
                equipped with world-class AV technology and managed by professional event curators.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {["500+ Seat Capacity", "Fiber-Optic Wi-Fi", "Dedicated Catering", "Translation Booths"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. BENTO GRID QUICK VIEW --- */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Facilities at a Glance</h2>
            <p className="text-slate-500 font-light">Everything you need for a seamless stay.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  {/* Map icons dynamically or use placeholders */}
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {/* If item.icon is an emoji, keep it; if it's a Lucide name, use icon component */}
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PREMIUM CTA --- */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-white">Need <span className="italic font-light text-emerald-200">Something Special?</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            Our 24/7 Royal Concierge is trained to anticipate your needs, from 
            private city tours to personalized dining arrangements.
          </p>
          <button className="group relative inline-flex items-center gap-3 bg-emerald-600 text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all active:scale-95">
            Contact Concierge
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}