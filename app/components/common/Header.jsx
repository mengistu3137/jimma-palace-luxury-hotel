"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ChevronRight } from "lucide-react";
import { NAV_LINKS } from "@/app/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Small offset for better UX
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // PAGES THAT HAVE A HERO SECTION (Should be transparent at top)
  const transparentPages = ["/", "/rooms", "/dining", "/gallery", "/amenities", "/contact","/book"];
  const isTransparentPage = transparentPages.includes(pathname);

  // LOGIC: Show solid background if:
  // 1. User scrolled down OR
  // 2. Mobile menu is open OR
  // 3. We are on a page that DOES NOT have a hero (like a policy page)
  const showSolidHeader = isScrolled || mobileMenuOpen || !isTransparentPage;

  return (
    <>
      {/* --- HEADER --- */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div 
          className={`container mx-auto px-4 md:px-8 transition-all duration-500 ${
            isScrolled ? "max-w-6xl" : "max-w-7xl"
          }`}
        >
          <nav 
            className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
              showSolidHeader 
                ? "bg-white/90 backdrop-blur-md shadow-lg border border-white/20" 
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo Section */}
            <Link href="/" className="flex items-center group no-underline">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className={`text-xl md:text-2xl font-extrabold tracking-tighter transition-colors duration-300 ${
                    showSolidHeader ? "text-slate-900" : "text-white"
                  }`}>
                    JIMMA
                  </span>
                  <span className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${
                    showSolidHeader ? "text-emerald-600" : "text-emerald-300"
                  }`}>
                    Palace
                  </span>
                </div>
                <span className={`text-[8px] md:text-[9px] font-bold tracking-[0.6em] uppercase leading-none mt-0.5 transition-colors duration-300 ${
                  showSolidHeader ? "text-slate-400 text-center" : "text-white/60"
                }`}>
                  Hotel
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={`relative text-xs font-bold uppercase tracking-widest transition-colors duration-300 group ${
                        showSolidHeader
                          ? isActive ? "text-emerald-700" : "text-slate-600 hover:text-slate-900"
                          : isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {/* Animated Underline */}
                      <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${isActive ? "w-full left-0" : ""}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right Side Action */}
            <div className="flex items-center gap-4">
              <Link
                href="/book"
                className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 active:scale-95 ${
                  showSolidHeader
                    ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
                    : "bg-white text-emerald-900 hover:bg-emerald-50 shadow-xl"
                }`}
              >
                <Calendar size={14} />
                <span>Book Now</span>
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  showSolidHeader ? "bg-slate-100 text-slate-900" : "bg-white/10 text-white backdrop-blur-md"
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[90] bg-slate-900/60 backdrop-blur-xl lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="p-8 border-b border-slate-100">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-2">Navigation</p>
            <h2 className="text-2xl font-black text-slate-900">JIMMA PALACE</h2>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 px-4 py-8 overflow-y-auto">
            <ul className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <li 
                  key={link.key}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`transition-all duration-500 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-colors ${
                      pathname === link.href 
                        ? "bg-emerald-50 text-emerald-700" 
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={18} className={pathname === link.href ? "opacity-100" : "opacity-0"} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-8 bg-slate-50">
            <Link
              href="/book"
              className="flex items-center justify-center gap-3 w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-transform"
            >
              <Calendar size={20} />
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;