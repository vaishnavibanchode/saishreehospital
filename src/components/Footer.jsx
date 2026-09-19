import React from 'react';
import { HeartPulse, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 relative overflow-hidden">
      
      {/* Floating WhatsApp CTA Button (Bottom Right with continuous bounce animation) */}
      <a
        href="https://wa.me/918551921222"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300 animate-bounce group"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          className="w-8 h-8 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="absolute -top-9 right-0 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Chat with Us
        </span>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500 text-navy-900 rounded-xl flex items-center justify-center font-extrabold shadow-md">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg tracking-tight">SAI SHREE</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold">Super Speciality Hospital & Research Centre</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Bringing specialist doctors, advanced operation theatres, 24/7 emergency care, PMJAY scheme, and cashless mediclaim services under one roof in Ozar.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center text-slate-300 transition-colors">
                FB
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center text-slate-300 transition-colors">
                IG
              </a>
              <a href="https://wa.me/918551921222" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-slate-300 transition-colors">
                WA
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-gold-400 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#doctors" className="hover:text-gold-400 transition-colors">Doctors</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services List (Short) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-gold-400 tracking-wider">
              Specialist Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li>Cardiology & Heart Care</li>
              <li>Orthopedic & Joint Surgeries</li>
              <li>Laparoscopic & Endoscopic Surgery</li>
              <li>Urology & Kidney Care</li>
              <li>Gynecology & High-Risk Pregnancy</li>
              <li>24/7 Critical Care & Trauma ICU</li>
            </ul>
          </div>

          {/* Address & Emergency Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-gold-400 tracking-wider">
              Emergency Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>R.K. Plaza, Saikheda Phata, Ozar MIDC, Dist. Nashik</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emergency-500 shrink-0" />
                <a href="tel:8551921222" className="text-sm font-extrabold text-white hover:text-gold-400">85519 21222</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:info@saishreehospital.com" className="hover:text-gold-400">info@saishreehospital.com</a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-slate-400 font-medium">
          <p>© 2026 Sai Shree Super Speciality Hospital & Research Centre. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
