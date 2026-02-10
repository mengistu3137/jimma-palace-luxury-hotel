"use client";

import { FEATURED_ROOMS } from "@/app/constants";
import RoomCard from "@/app/components/ui/RoomCard"; // Ensure this uses the modern RoomCard we designed earlier
import { Clock, Sparkles, Headphones, ArrowRight, MessageCircle } from "lucide-react";

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with slow zoom */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-100 animate-slow-zoom"
          style={{ 
    // Paste the new URL here:
    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661962769148-fbe587e60fb8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  }}
        >
          {/* Refined Gradient Overlay */}
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in-down">
            <div className="h-[1px] w-8 bg-emerald-400" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400">
              Accommodations
            </span>
            <div className="h-[1px] w-8 bg-emerald-400" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight animate-fade-in-up">
           <span className="text-emerald-200">Rooms</span>  <span className="italic font-light text-emerald-200">&</span> <span className="text-emerald-200">Suites</span> 
          </h1>
          
          <p className="text-emerald-50/70 text-sm md:text-base uppercase tracking-widest max-w-xl mx-auto font-light">
            An Unparalleled Sanctuary of Elegance in the Heart of Jimma
          </p>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-slate-900 font-serif mb-8 leading-tight">
              A Symphony of Modern Luxury <br /> 
              <span className="italic font-light text-slate-500">and Ethiopian Heritage</span>
            </h2>
            <div className="w-16 h-[1px] bg-emerald-600 mx-auto mb-8" />
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Each sanctuary at Jimma Palace is a masterpiece of design. We have 
              harmonized contemporary comfort with subtle Ethiopian accents to 
              ensure your stay is not just a visit, but a gateway to the soul of 
              our historic region.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ROOMS GRID SECTION */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {FEATURED_ROOMS.map((room) => (
              <div 
                key={room.id} 
                className="group transition-all duration-500"
              >
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODERN SERVICE BENTO GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Check-in/Out Card */}
            <div className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-4">Timings</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 uppercase font-bold tracking-tighter">Check-in</span>
                  <span className="text-slate-900 font-bold">14:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 uppercase font-bold tracking-tighter">Check-out</span>
                  <span className="text-slate-900 font-bold">12:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Services Card */}
            <div className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-4">Included Services</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light">
                <li className="flex items-center gap-2">• Daily Royal Housekeeping</li>
                <li className="flex items-center gap-2">• Laundry & Dry Cleaning</li>
                <li className="flex items-center gap-2">• 24/7 Personal Dining</li>
              </ul>
            </div>

            {/* Help Desk Card */}
            <div className="p-10 rounded-[2rem] bg-slate-900 text-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Headphones size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">Concierge Desk</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Our dedicated staff is available 24/7 for transportation, 
                  private tours, and personalized requests.
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-emerald-400 transition-colors">
                  Contact Now <ArrowRight size={14} />
                </button>
              </div>
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px]" />
            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CONCIERGE CTA */}
      <section className="py-24 bg-slate-50 text-center border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-8">
            <MessageCircle size={14} />
            Reservation Assistance
          </div>
          <h4 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6">Not sure which room to choose?</h4>
          <p className="text-slate-500 mb-10 max-w-lg mx-auto font-light leading-relaxed">
            Our reservation specialists are here to help you find the perfect accommodation tailored to your needs.
          </p>
          <button className="relative px-10 py-5 bg-transparent text-emerald-700 font-bold text-sm uppercase tracking-widest border-2 border-emerald-700 rounded-full hover:bg-emerald-700 hover:text-white transition-all active:scale-95">
            Chat with our Reservation Team
          </button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}