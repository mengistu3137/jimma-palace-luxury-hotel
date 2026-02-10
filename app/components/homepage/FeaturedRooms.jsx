"use client";

import Link from "next/link";
import { FEATURED_ROOMS } from '@/app/constants';
import { ArrowRight, BedDouble, Maximize2, Star } from "lucide-react";

export default function FeaturedRooms() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-emerald-600"></span>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
                Accommodations
              </h4>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Our Signature <span className="italic font-light text-slate-500">Suites</span>
            </h2>
          </div>
          
          <Link 
            href="/rooms" 
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-emerald-600 transition-colors"
          >
            Explore All Rooms
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED_ROOMS.map((room) => (
            <EnhancedRoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Inner Component for the Card to keep code clean
function EnhancedRoomCard({ room }) {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={room.image} 
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Top Badges */}
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
          <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Star size={12} className="fill-emerald-500 text-emerald-500" />
            <span className="text-[10px] font-bold text-slate-900">TOP RATED</span>
          </div>
          
          <div className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-2xl text-center">
            <span className="block text-[10px] font-light tracking-widest uppercase opacity-70">From</span>
            <span className="text-sm font-bold">${room.price}</span>
            <span className="text-[10px] opacity-70">/night</span>
          </div>
        </div>

        {/* Content Overlay - Always visible but expands on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          <h3 className="text-2xl font-serif text-white mb-2">{room.title}</h3>
          
          {/* Subtle Room Specs */}
          <div className="flex items-center gap-6 text-white/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-2">
              <BedDouble size={16} className="text-emerald-400" />
              <span className="text-xs uppercase tracking-wider font-medium">{room.beds || "King Bed"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize2 size={16} className="text-emerald-400" />
              <span className="text-xs uppercase tracking-wider font-medium">{room.sqft || "45m²"}</span>
            </div>
          </div>

          <Link 
            href={`/rooms/${room.id}`}
            className="inline-block w-full text-center py-4 bg-white text-slate-900 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 hover:text-white transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}