"use client";

import { 
  Wifi, 
  Coffee, 
  Car, 
  Waves, 
  Utensils, 
  Dumbbell, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

export default function Amenities() {
  // Mapping icons manually to ensure a modern look, 
  // or you can add these to your AMENITIES constant.
  const amenityIcons = {
    "High-Speed Wi-Fi": <Wifi size={28} />,
    "Authentic Coffee": <Coffee size={28} />,
    "Secure Parking": <Car size={28} />,
    "Swimming Pool": <Waves size={28} />,
    "Fine Dining": <Utensils size={28} />,
    "Fitness Center": <Dumbbell size={28} />,
    "24/7 Security": <ShieldCheck size={28} />,
    "Room Service": <Clock size={28} />,
  };

  const AMENITIES = [
    { title: "High-Speed Wi-Fi", desc: "Stay connected with fiber-optic internet throughout the palace." },
    { title: "Authentic Coffee", desc: "Experience the world-renowned Jimma coffee prepared traditionally." },
    { title: "Swimming Pool", desc: "Relax in our temperature-controlled infinity pool overlooking the city." },
    { title: "Fine Dining", desc: "A fusion of international cuisine and traditional Ethiopian flavors." },
    { title: "Fitness Center", desc: "State-of-the-art equipment to keep you active during your stay." },
    { title: "Secure Parking", desc: "Spacious and monitored parking for your peace of mind." },
    { title: "24/7 Security", desc: "Highly trained staff and surveillance ensuring total safety." },
    { title: "Room Service", desc: "Exquisite meals delivered to your door at any hour of the day." },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-emerald-600">
              <span className="w-12 h-[1px] bg-emerald-600"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em]">Guest Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              World-Class <span className="italic font-light text-slate-500">Facilities</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-lg font-light leading-relaxed">
            Every detail is meticulously crafted to ensure your stay in Jimma 
            is as seamless as it is luxurious.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
          {AMENITIES.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 flex flex-col items-start transition-all duration-500 hover:bg-emerald-600 group cursor-default"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                {amenityIcons[item.title] || <Wifi size={28} />}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-emerald-50 transition-colors">
                {item.desc}
              </p>
              
              {/* Decorative Corner Element (Mobile Hidden) */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-6 h-[2px] bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 p-8 rounded-3xl bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Wifi size={120} />
            </div>
            <div className="relative z-10 text-center md:text-left">
                <h4 className="text-xl font-serif mb-2">Need something specific?</h4>
                <p className="text-slate-400 text-sm">Our concierge is available 24/7 to assist with special requests.</p>
            </div>
            <button className="relative z-10 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 rounded-full font-bold text-xs uppercase tracking-widest transition-all active:scale-95">
                Contact Concierge
            </button>
        </div>
      </div>
    </section>
  );
}