import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Clock, Mail, ShieldAlert, Award, UserCheck, Stethoscope } from 'lucide-react';

export default function Hero({ onBookClick }) {
  // Typewriter / Animated headline logic
  const fullText = "For the First Time in Ozar — Specialist Doctors, Now Available Near You";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Animated counters logic
  const [expCount, setExpCount] = useState(0);
  const [docCount, setDocCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setExpCount(Math.min(15, Math.ceil((15 / steps) * step)));
      setDocCount(Math.min(7, Math.ceil((7 / steps) * step)));
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 bg-gradient-to-b from-navy-50/60 via-white to-slate-50 overflow-hidden">
      
      {/* Decorative background blur shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-navy-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-400/40 text-navy-900 text-xs sm:text-sm font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              <span>Multi-Specialty Care in Ozar MIDC</span>
            </div>

            {/* Headline with Typewriter */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-800 leading-tight tracking-tight min-h-[120px] sm:min-h-[100px]">
              {displayText}
              <span className="text-emergency-600 animate-pulse">|</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
              A team of expert doctors with <span className="text-navy-800 font-bold">15+ years of experience</span> providing advanced, affordable, and compassionate medical care right near your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (onBookClick) onBookClick();
                  const el = document.getElementById('appointment');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 bg-navy-800 hover:bg-navy-900 text-white rounded-xl font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="tel:8551921222"
                className="px-7 py-3.5 bg-white border-2 border-emergency-600 text-emergency-600 hover:bg-emergency-600 hover:text-white rounded-xl font-bold text-base shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Call Now: 85519 21222</span>
              </a>
            </div>

            {/* Animated Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              <div className="bg-white/80 p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-800">{expCount}+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">Years Experience</div>
              </div>

              <div className="bg-white/80 p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-800">{docCount}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">Specialist Doctors</div>
              </div>

              <div className="bg-white/80 p-3.5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emergency-600 flex items-center justify-center gap-1">
                  <span>24/7</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">Emergency Care</div>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Hospital Building Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/hero-building.jpg"
                alt="Sai Shree Super Speciality Hospital Building"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
              
              {/* Floating hospital badge over image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-800 text-gold-400 rounded-xl">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-navy-900">Sai Shree Super Speciality</h4>
                    <p className="text-xs font-semibold text-slate-500">Saikheda Phata, Ozar MIDC</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emergency-50 text-emergency-600 border border-emergency-200 text-[11px] font-bold rounded-lg pulse-emergency">
                  OPEN 24/7
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Sub-Header Info Bar with 3 Animated Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Pill 1: OPD Hours */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-navy-50/60 border border-navy-100 hover:border-navy-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-navy-800 uppercase tracking-wider block">OPD Hours</span>
              <span className="text-sm font-semibold text-slate-700">Mon–Sat: 10:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Pill 2: Email */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-navy-50/60 border border-navy-100 hover:border-navy-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Mail className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-navy-800 uppercase tracking-wider block">Email Us</span>
              <a href="mailto:info@saishreehospital.com" className="text-sm font-semibold text-slate-700 hover:text-navy-800 transition-colors">
                info@saishreehospital.com
              </a>
            </div>
          </div>

          {/* Pill 3: 24/7 Emergency */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-emergency-50 border border-emergency-200 hover:border-emergency-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emergency-600 text-white flex items-center justify-center shrink-0 shadow-sm pulse-emergency">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-emergency-600 uppercase tracking-wider block">24/7 Emergency</span>
              <a href="tel:8551921222" className="text-base font-extrabold text-slate-900 hover:text-emergency-600 transition-colors">
                85519 21222
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
