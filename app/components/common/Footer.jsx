"use client";

import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  ChevronRight 
} from "lucide-react";
import { NAV_LINKS } from "@/app/constants";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* --- 4-COLUMN GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="group">
              <span className="block text-2xl font-black tracking-tighter text-white leading-none">
                JIMMA
              </span>
              <span className="block text-[10px] font-bold tracking-[0.5em] uppercase text-emerald-500 mt-1">
                Palace Hotel
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-light">
              Redefining luxury in the heart of the coffee region. Experience 
              unmatched comfort, heritage-inspired suites, and world-class hospitality.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-500 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">
             <span className="text-xs">Quick Links</span> 
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <ChevronRight size={12} className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services / Rooms */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">
             <span className="text-xs">Accommodations</span> 
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">Presidential Suite</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">Royal Garden Rooms</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">Executive Business Suite</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">Heritage Twin Room</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">
             <span className="text-xs">Contact Us</span> 
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-1" />
                <span className="text-sm text-slate-400">
                  Avenue of Saints, <br />
                  Jimma, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-400">+251 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-slate-400">info@jimmapalace.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            &copy; {new Date().getFullYear()} Jimma Palace Hotel. All Rights Reserved.
          </p>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Stay</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;