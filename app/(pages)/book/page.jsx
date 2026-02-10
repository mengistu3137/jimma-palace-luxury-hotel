"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  User, 
  BedDouble, 
  Users, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles,
  Mail,
  Phone
} from "lucide-react";
import { FEATURED_ROOMS } from "@/app/constants";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "1 Guest",
    fullName: "",
    email: "",
    phone: "",
    requests: "",
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20">
      
      {/* --- 1. MINIMAL HERO --- */}
      <section className="bg-slate-900 pt-32 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-emerald-400" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400">Reservations</span>
            <div className="h-[1px] w-8 bg-emerald-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif text-emerald-200">Book Your <span className="italic font-light text-emerald-200">Palace Experience</span></h1>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-5xl -mt-16 relative z-20">
        
        {/* --- 2. REFINED PROGRESS TRACKER --- */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-12">
            {[
              { id: 1, label: "Stay", icon: Calendar },
              { id: 2, label: "Details", icon: User },
              { id: 3, label: "Confirm", icon: Sparkles },
            ].map((s) => (
              <div key={s.id} className="flex items-center gap-3 group">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                  step >= s.id ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-slate-100 text-slate-400"
                }`}>
                  {step > s.id ? <CheckCircle2 size={16} /> : s.id}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? "text-slate-900" : "text-slate-400"}`}>
                  {s.label}
                </span>
                {s.id < 3 && <div className="hidden md:block w-12 h-px bg-slate-200 ml-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* --- 3. MAIN BOOKING CARD --- */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 min-h-[500px]">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row h-full">
            
            {/* Sidebar Information (Visible on Desktop) */}
            <div className="hidden lg:flex w-1/3 bg-slate-900 p-12 flex-col justify-between text-white">
              <div>
                <h3 className="text-2xl font-serif mb-6 text-emerald-200">Your Sanctuary Awaits</h3>
                <p className="text-slate-400 font-light leading-relaxed mb-8">
                  Step into a world of refined Ethiopian elegance. Our reservation specialists are standing by to curate your perfect stay.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span>Best Rate Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span>Complimentary Coffee Ceremony</span>
                  </div>
                </div>
              </div>
              <div className="pt-10 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-2">Need Help?</p>
                <p className="text-sm">+251 471 112 233</p>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 p-8 md:p-16 relative">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Stay Details */}
                {step === 1 && (
                  <motion.div 
                    key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <header>
                      <h2 className="text-3xl font-serif text-slate-900">Select Your Dates</h2>
                      <p className="text-slate-400 text-sm">When would you like to experience the palace?</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                          <Calendar size={12} /> Check-In
                        </label>
                        <input required type="date" className="w-full border-b border-slate-200 py-3 focus:border-emerald-600 outline-none transition-colors bg-transparent font-medium" 
                          onChange={(e) => setFormData({...formData, checkIn: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                          <Calendar size={12} /> Check-Out
                        </label>
                        <input required type="date" className="w-full border-b border-slate-200 py-3 focus:border-emerald-600 outline-none transition-colors bg-transparent font-medium" 
                          onChange={(e) => setFormData({...formData, checkOut: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                          <BedDouble size={12} /> Suite Type
                        </label>
                        <select required className="w-full border-b border-slate-200 py-3 focus:border-emerald-600 outline-none transition-colors bg-white font-medium appearance-none"
                          onChange={(e) => setFormData({...formData, roomType: e.target.value})}>
                          <option value="">Choose a Suite</option>
                          {FEATURED_ROOMS.map(room => (
                            <option key={room.id} value={room.title}>{room.title}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                          <Users size={12} /> Guests
                        </label>
                        <select className="w-full border-b border-slate-200 py-3 focus:border-emerald-600 outline-none transition-colors bg-white font-medium appearance-none"
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}>
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>Family (4+)</option>
                        </select>
                      </div>
                    </div>

                    <button type="button" onClick={nextStep} className="w-full group bg-emerald-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/10">
                      View Next Step <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Personal Details */}
                {step === 2 && (
                  <motion.div 
                    key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <header>
                      <h2 className="text-3xl font-serif text-slate-900">Personal Details</h2>
                      <p className="text-slate-400 text-sm">Almost there. Tell us a bit about yourself.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Full Name</label>
                        <input required type="text" placeholder="e.g. John Doe" className="w-full border-b border-slate-200 py-3 focus:border-emerald-600 outline-none bg-transparent font-medium" 
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Email Address</label>
                        <input required type="email" placeholder="john@example.com" className="w-full border-b border-slate-200 py-3 focus:border-emerald-600 outline-none bg-transparent font-medium" 
                          onChange={(e) => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Special Requests (Optional)</label>
                      <textarea rows="2" placeholder="Dietary needs, airport pickup, anniversary..." className="w-full border-b border-slate-200 py-3 focus:border-emerald-600 outline-none bg-transparent font-medium resize-none" 
                        onChange={(e) => setFormData({...formData, requests: e.target.value})}></textarea>
                    </div>

                    <div className="flex gap-4">
                      <button type="button" onClick={prevStep} className="w-1/3 border border-slate-200 text-slate-400 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button type="submit"
                  className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/10 active:scale-95"
                      >
                        Confirm Reservation <CheckCircle2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Success Message */}
                {step === 3 && (
                  <motion.div 
                    key="step3" 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 flex flex-col items-center"
                  >
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 relative">
                      <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <CheckCircle2 size={48} className="text-emerald-600" />
                      </motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-emerald-400 rounded-full -z-10"
                      />
                    </div>

                    <h2 className="text-4xl font-serif text-slate-900 mb-4">Request Received</h2>
                    <p className="text-slate-500 font-light max-w-sm mb-10 leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. 
                      Our concierge is reviewing your request for the <span className="font-bold text-slate-900">{formData.roomType}</span>.
                    </p>

                    {/* Summary Card */}
                    <div className="w-full bg-slate-50 rounded-3xl p-6 mb-10 border border-slate-100 text-left space-y-3">
                       <div className="flex justify-between text-xs">
                          <span className="text-slate-400 uppercase tracking-widest font-bold">Confirmation Sent To</span>
                          <span className="text-slate-900 font-medium">{formData.email}</span>
                       </div>
                       <div className="flex justify-between text-xs">
                          <span className="text-slate-400 uppercase tracking-widest font-bold">Stay Dates</span>
                          <span className="text-slate-900 font-medium">{formData.checkIn} — {formData.checkOut}</span>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                       <button 
                        onClick={() => window.location.href = '/'} 
                        className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all"
                       >
                        Return to Home
                       </button>
                       <button 
                        onClick={() => window.print()}
                        className="flex-1 border border-slate-200 text-slate-600 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all"
                       >
                        Download PDF
                       </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

        {/* --- 4. TRUST INDICATORS --- */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
               <Mail size={18} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Email Confirmation</p>
               <p className="text-xs text-slate-500">Sent within minutes of booking.</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
               <Phone size={18} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">24/7 Support</p>
               <p className="text-xs text-slate-500">Call us anytime for changes.</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
               <Sparkles size={18} />
             </div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">No Prepayment</p>
               <p className="text-xs text-slate-500">Pay securely at the front desk.</p>
             </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        /* Custom date picker styling for modern look */
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(0.5);
          opacity: 0.5;
        }
        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}