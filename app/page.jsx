"use client";
import Hero from "./components/homepage/Hero";
import BookingWidget from "./components/common/BookingWidget";
import FeaturedRooms from "./components/homepage/FeaturedRooms";
import Amenities from "./components/homepage/Amenities";
import { MapPin, Coffee, Sparkles ,ArrowRight,  CalendarCheck,  ShieldCheck, Star, Zap} from "lucide-react";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="pb-0">
      <Hero />
      <BookingWidget />

      {/* 1. Introduction */}
      <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <span className="text-[200px] font-black tracking-tighter uppercase select-none">
          Jimma
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Kicker */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-emerald-200" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-600">
              The Jimma Experience
            </span>
            <div className="h-[1px] w-8 bg-emerald-200" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
            A Sanctuary of <span className="italic font-light text-slate-500">Refined</span> Comfort
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-16 font-light max-w-3xl mx-auto">
            Located in the lush, emerald heart of Jimma, our palace offers a unique 
            symphony of modern luxury and traditional Ethiopian warmth. We don't just 
            offer a room; we provide a gateway to the soul of the coffee region.
          </p>

          {/* Feature Highlights - Adds visual depth and UX value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors duration-500">
                <MapPin className="text-emerald-600" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Prime Location</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Situated in the most vibrant and secure district of Jimma.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors duration-500">
                <Coffee className="text-emerald-600" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Heritage Coffee</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Experience authentic Ethiopian ceremonies in our garden.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors duration-500">
                <Sparkles className="text-emerald-600" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Royal Service</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Personalized hospitality that anticipates your every need.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* 2. Featured Rooms Section */}
      <FeaturedRooms />

      {/* 3. Amenities Section */}
      <Amenities />

{/* 4. Modern CTA Section - Refined for White Background Consistence */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white border-t border-slate-50">
        
        {/* --- DECORATIVE ARCHITECTURE --- */}
        <div className="absolute inset-0 z-0">
          {/* Very subtle Emerald Glow - Softened for light mode */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Subtle Watermark */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
             <span className="text-[300px] font-serif font-bold text-emerald-900 italic">J</span>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          
          {/* Kicker */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-px bg-emerald-200" />
            <span className="text-emerald-600 uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">
              Limited Availability
            </span>
            <div className="w-10 h-px bg-emerald-200" />
          </div>

          {/* Heading - Changed to Slate-900 for legibility on White */}
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1]">
            Ready to Experience <br />
            <span className="relative inline-block mt-2">
              <span className="italic font-light text-emerald-600">Jimma Palace HOTEL?</span>
              <svg className="absolute -bottom-4 left-0 w-full h-3 text-emerald-100" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>

          {/* Paragraph - Changed to Slate-600 for high-end readability */}
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Immerse yourself in a sanctuary where traditional Ethiopian warmth 
            meets world-class luxury. Your extraordinary stay is just a click away.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link href="/book" className="group relative">
              {/* Outer Glow - Subtle Green */}
              <div className="absolute -inset-1 bg-emerald-100 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <button className="relative flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-emerald-700 active:scale-95 shadow-lg shadow-emerald-200">
                Book Your Stay Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>

            <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
              Best Price Guaranteed • Free Cancellation • 24/7 Concierge
            </p>
          </div>

          {/* Trust Badges - Refined for White Background */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-20">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
              <Star size={16} className="text-emerald-600 fill-emerald-600" />
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">5-Star Luxury</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Secure Booking</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors">
              <Zap size={16} className="text-emerald-600" />
              <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}