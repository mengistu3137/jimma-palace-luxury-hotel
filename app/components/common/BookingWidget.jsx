"use client";

import { Calendar, Users, Search, ChevronDown } from "lucide-react";

export default function BookingWidget() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 -mt-16 md:-mt-20 relative z-30">
      <div className="bg-white/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl p-2 md:p-4 border border-white/50">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
          
          {/* Check In */}
          <div className="flex-1 group relative flex items-center px-6 py-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="mr-4 text-emerald-600">
              <Calendar size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-emerald-600 transition-colors">
                Arrival
              </label>
              <input 
                type="date" 
                className="bg-transparent text-slate-900 font-bold text-sm focus:outline-none cursor-pointer appearance-none"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>
            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-slate-200" />
          </div>

          {/* Check Out */}
          <div className="flex-1 group relative flex items-center px-6 py-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="mr-4 text-emerald-600">
              <Calendar size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-emerald-600 transition-colors">
                Departure
              </label>
              <input 
                type="date" 
                className="bg-transparent text-slate-900 font-bold text-sm focus:outline-none cursor-pointer appearance-none"
                defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
              />
            </div>
            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-slate-200" />
          </div>

          {/* Guests */}
          <div className="flex-1 group relative flex items-center px-6 py-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="mr-4 text-emerald-600">
              <Users size={20} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col flex-1 relative">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-emerald-600 transition-colors">
                Guests
              </label>
              <div className="flex items-center justify-between">
                <select className="bg-transparent text-slate-900 font-bold text-sm focus:outline-none cursor-pointer appearance-none w-full pr-8">
                  <option>01 Adult, 0 Children</option>
                  <option>02 Adults, 0 Children</option>
                  <option>02 Adults, 01 Child</option>
                  <option>Family Suite (4+)</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="lg:w-[220px] bg-emerald-600 hover:bg-emerald-700 text-white p-4 lg:p-6 rounded-2xl lg:rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-xl shadow-emerald-900/10">
            <Search size={18} className="group-hover:scale-110 transition-transform" />
            <span className="uppercase tracking-widest text-xs">Check Rates</span>
          </button>
          
        </div>
      </div>

      {/* Trust Badges below widget */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Best Price Guaranteed
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Free Cancellation
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Secure Payment
        </div>
      </div>
    </div>
  );
}