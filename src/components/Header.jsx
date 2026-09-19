import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, HeartPulse } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'services', 'doctors', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav py-2.5 shadow-md border-b border-slate-100' 
        : 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
    }`}>
      {/* Top emergency strip bar for extra clarity */}
      <div className="hidden lg:block bg-navy-900 text-white text-xs py-1 px-4 mb-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📍 R.K. Plaza, Saikheda Phata, Ozar MIDC</span>
            <span>🕐 OPD: Mon–Sat, 10:00 AM – 9:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-400 font-medium">Empanelled with PMJAY & Cashless Mediclaim</span>
            <a href="mailto:info@saishreehospital.com" className="hover:text-gold-400 transition-colors">
              ✉️ info@saishreehospital.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 bg-navy-800 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <HeartPulse className="w-7 h-7 text-gold-400" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emergency-600 rounded-full border-2 border-white pulse-emergency" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-navy-800 text-lg sm:text-xl tracking-tight leading-tight group-hover:text-navy-900">
                SAI SHREE
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                Super Speciality Hospital & Research Centre
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-navy-800 bg-navy-50 font-bold'
                      : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Top-Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Click-to-call Emergency Phone */}
            <a
              href="tel:8551921222"
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border-2 border-emergency-600 text-emergency-600 font-bold text-sm hover:bg-emergency-600 hover:text-white transition-all duration-300 shadow-sm group"
            >
              <div className="relative">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emergency-600 rounded-full pulse-emergency" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] uppercase font-bold tracking-wider opacity-80">24/7 Emergency</span>
                <span className="font-extrabold tracking-wide">85519 21222</span>
              </div>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                const el = document.getElementById('appointment');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-navy-800 text-white rounded-xl font-bold text-sm hover:bg-navy-900 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:8551921222"
              className="p-2 rounded-lg text-emergency-600 bg-emergency-50 border border-emergency-200 flex items-center justify-center"
              aria-label="Call Emergency"
            >
              <Phone className="w-5 h-5 pulse-emergency" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] z-40 bg-slate-900/60 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation Menu</span>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-navy-50 hover:text-navy-800 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onBookClick) onBookClick();
                  const el = document.getElementById('appointment');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-navy-800 text-white rounded-xl font-bold shadow-md"
              >
                <Calendar className="w-5 h-5 text-gold-400" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:8551921222"
                className="w-full flex items-center justify-center gap-2 py-3 border-2 border-emergency-600 text-emergency-600 rounded-xl font-bold hover:bg-emergency-600 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency: 85519 21222</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
