"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Navigation,
  Globe
} from "lucide-react";

export default function ContactPage() {
  // Your direct Google Maps mobile-friendly link
  const googleMapsUrl = "https://maps.app.goo.gl/7MT5VofAgq9y3Ejb8";

  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      
      {/* --- 1. CINEMATIC HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-fixed bg-center scale-100 animate-slow-zoom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1578991624414-276ef23a534f?w=1200&auto=format&fit=crop&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none z-0">
          <span className="text-[150px] md:text-[220px] font-black uppercase tracking-tighter text-white">JIMMA</span>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-emerald-400" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400">Concierge Service</span>
            <div className="h-[1px] w-8 bg-emerald-400" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif text-emerald-100 mb-8"
          >
            Get In <span className="italic font-light text-emerald-200">Touch</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-50/70 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold"
          >
            Your Gateway to Royal Ethiopian Hospitality
          </motion.p>
        </div>
      </section>

      {/* --- 2. CONTACT CONTENT SECTION --- */}
      <section className="container mx-auto px-6 -mt-24 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: INFORMATION TILES */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Address */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <h3 className=""><span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Location</span></h3>
                <p className="text-slate-900 font-bold text-sm leading-relaxed">
                  Near Jimma University,<br />Jimma City, Ethiopia
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <h3 className=""><span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Reservations</span></h3>
                <p className="text-slate-900 font-bold text-sm">
                  +251 471 112 233 <br />
                  +251 471 112 244
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <h3 className=""><span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Email</span></h3>
                <p className="text-slate-900 font-bold text-sm truncate">
                  concierge@jimmapalace.com
                </p>
              </div>

              {/* Timing */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <h3 className=""><span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Reception</span></h3>
                <p className="text-slate-900 font-bold text-sm leading-relaxed">
                  Available 24/7 <br />
                  365 Days a Year
                </p>
              </div>
            </div>

            {/* INTERACTIVE GOOGLE MAP */}
            <div className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl h-96 bg-slate-200 border border-white">
                {/* Visual tint overlay */}
                <div className="absolute inset-0 bg-emerald-900/5 pointer-events-none z-10" />
                
                {/* The pinned location iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.382098484196!2d36.8322!3d7.6698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1655021966085a13%3A0xc07a4a984422941b!2sJimma%20Palace%20Hotel!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jimma Palace Hotel Location"
                  className="group-hover:grayscale-0 transition-all duration-700"
                ></iframe>

                {/* Floating Directions Button using your short link */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                    <a 
                      href={googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-white/95 backdrop-blur-md py-4 rounded-2xl text-slate-900 font-bold text-xs uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 hover:bg-emerald-600 hover:text-white transition-all active:scale-95 border border-white/50"
                    >
                       <Navigation size={16} className="text-emerald-600 group-hover:text-white transition-colors" /> 
                       Open Navigation
                    </a>
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MODERN CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white px-8  pt-2 mt-0 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p- opacity-[0.03] pointer-events-none">
                <MessageSquare size={150} />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif text-emerald-700 mb-4">
                  <span className="text-3xl md:text-5xl font-serif text-emerald-600 mb-4 ">Send us a Message</span>
                </h2>
              

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-emerald-500 transition-all outline-none text-slate-900 text-sm font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-emerald-500 transition-all outline-none text-slate-900 text-sm font-medium" 
                        placeholder="john@palace.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 ml-1">Inquiry Type</label>
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-emerald-500 transition-all outline-none text-slate-900 text-sm font-medium appearance-none">
                       <option>Room Reservation</option>
                       <option>Traditional Coffee Ceremony</option>
                       <option>Event & Wedding Hosting</option>
                       <option>Other Services</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 ml-1">Message</label>
                    <textarea 
                      rows="5" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-emerald-500 transition-all outline-none text-slate-900 text-sm font-medium resize-none" 
                      placeholder="How can we assist you today?"
                    ></textarea>
                  </div>

                  <button className="group relative w-full bg-emerald-600 text-white font-bold py-5 rounded-2xl hover:bg-emerald-700 transition-all active:scale-95 flex items-center justify-center gap-3 overflow-hidden shadow-xl">
                    <span className="relative z-10 text-xs uppercase tracking-[0.2em]">Send Inquiry</span>
                    <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </form>
              </div>
            </div>
          </div>
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
      `}</style>
    </div>
  );
}