import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, UserCheck, ShieldCheck, HeartHandshake, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hospital Facility Image & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 group">
              <img
                src="/about-facility.jpg"
                alt="Sai Shree Hospital Advanced Facility"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              
              {/* Highlight Badge */}
              <div className="absolute top-6 left-6 bg-navy-800 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <Building2 className="w-8 h-8 text-gold-400 shrink-0" />
                <div>
                  <div className="text-sm font-extrabold">Multi-Specialty Center</div>
                  <div className="text-xs text-slate-300">Ozar MIDC, Saikheda Phata</div>
                </div>
              </div>
            </div>

            {/* Badges overlay strip */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Badge 1: PMJAY */}
              <div className="p-4 rounded-2xl bg-gold-50 border-2 border-gold-400/40 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold-500 text-navy-900 flex items-center justify-center font-extrabold shrink-0 shadow-sm">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-navy-900">PMJAY Empanelled</h4>
                  <p className="text-xs font-semibold text-slate-600">Ayushman Bharat Scheme Accepted</p>
                </div>
              </div>

              {/* Badge 2: Cashless Mediclaim */}
              <div className="p-4 rounded-2xl bg-navy-50 border-2 border-navy-200 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-navy-900">Cashless Mediclaim</h4>
                  <p className="text-xs font-semibold text-slate-600">All Major Insurance Supported</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Story & Leadership */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 text-navy-800 text-xs font-extrabold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-gold-500" />
              <span>About Our Hospital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 leading-tight">
              Advanced, Affordable & Compassionate Care in Ozar
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong className="text-navy-800">Sai Shree Super Speciality Hospital & Research Centre</strong> is a premier multi-specialty healthcare institution located at Saikheda Phata, Ozar MIDC. We were founded with a single mission: bringing world-class specialist care directly to the people of Ozar and surrounding regions.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Our team brings together renowned specialists with over <strong>15+ years of combined experience</strong> across Cardiology, Orthopedics, Urology, Laparoscopic Surgery, Gynecology, Critical Care, Nephrology, and General Medicine. Equipped with state-of-the-art operation theatres, modern ICU setups, 24/7 pathology, and emergency trauma units, we ensure top-tier treatment under one roof.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Full Multi-Specialty Department Hub',
                'Advanced 24/7 ICU & Critical Care Unit',
                'Empanelled for PMJAY Free Treatment',
                'Cashless Mediclaim & Insurance Desk',
                'State-of-the-Art Operation Theatres',
                '24/7 Emergency & Ambulance Service',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emergency-600 shrink-0" />
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Leadership Spotlight */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">
                Hospital Leadership
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* CEO */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-navy-800 text-white flex items-center justify-center font-extrabold text-lg shrink-0 shadow-md">
                    RS
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-navy-800">Dr. Rahul Shinde</h4>
                    <p className="text-xs font-bold text-emergency-600">Chief Executive Officer (CEO)</p>
                  </div>
                </div>

                {/* Marketing Head */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-900 flex items-center justify-center font-extrabold text-lg shrink-0 shadow-md">
                    RP
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-navy-800">Mr. Rushikesh Parmar</h4>
                    <p className="text-xs font-bold text-navy-600">Marketing Head</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
