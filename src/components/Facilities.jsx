import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CreditCard, 
  Activity, 
  Microscope, 
  Siren, 
  Ambulance,
  CheckCircle 
} from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: 'Free Treatment under PMJAY',
      subtitle: 'Ayushman Bharat Beneficiary Cover',
      icon: ShieldCheck,
      badge: 'GOVT SCHEME',
      color: 'bg-gold-500 text-navy-900',
    },
    {
      title: 'Cashless Mediclaim',
      subtitle: 'All Major Health Insurance Accepted',
      icon: CreditCard,
      badge: 'CASHLESS',
      color: 'bg-navy-800 text-gold-400',
    },
    {
      title: 'State-of-the-Art OT',
      subtitle: 'Ultra-Clean Laminar Air Operation Theatre',
      icon: Activity,
      badge: 'ADVANCED',
      color: 'bg-navy-800 text-white',
    },
    {
      title: 'CT Scan & Modern Pathology',
      subtitle: 'Fast, Accurate In-House Diagnostics',
      icon: Microscope,
      badge: '24/7 LAB',
      color: 'bg-navy-800 text-white',
    },
    {
      title: '24/7 Emergency & Trauma',
      subtitle: 'Immediate Specialist Critical Response',
      icon: Siren,
      badge: 'CRITICAL CARE',
      color: 'bg-emergency-600 text-white',
    },
    {
      title: '24/7 Ambulance Service',
      subtitle: 'Fully Equipped Advanced ICU Ambulance',
      icon: Ambulance,
      badge: 'RAPID RESPONSE',
      color: 'bg-emergency-600 text-white',
    },
  ];

  return (
    <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emergency-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
            Why Choose Sai Shree Hospital
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Facilities & Patient Support Services
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-gold-400/50 hover:bg-white/10 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-extrabold text-white truncate group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-slate-300">
                    {item.subtitle}
                  </p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-white/10 text-gold-300 border border-white/10">
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
