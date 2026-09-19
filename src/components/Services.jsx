import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Bone, 
  Baby, 
  Activity, 
  Scissors, 
  Stethoscope, 
  Brain, 
  Droplet,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'general-medicine',
      title: 'General Medicine',
      icon: Stethoscope,
      color: 'bg-blue-500',
      description: 'Comprehensive diagnosis and treatment for infectious diseases, diabetes, hypertension, lifestyle disorders, and routine healthcare.',
    },
    {
      id: 'cardiology',
      title: 'Cardiology',
      icon: Heart,
      color: 'bg-red-500',
      description: 'Advanced interventional cardiac care, ECG, 2D Echo, angiography, preventive heart checkups, and coronary emergency management.',
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      icon: Bone,
      color: 'bg-amber-500',
      description: 'Expert joint replacements, complex fracture surgeries, spine care, trauma management, and pediatric orthopedic care.',
    },
    {
      id: 'gynecology',
      title: 'Gynecology & Obstetrics',
      icon: Baby,
      color: 'bg-pink-500',
      description: 'High-risk pregnancy care, painless deliveries, laparoscopic gynecological surgeries, and comprehensive women health care.',
    },
    {
      id: 'critical-care',
      title: 'Critical Care',
      icon: Activity,
      color: 'bg-rose-600',
      description: 'Round-the-clock ICU, ventilator support, multipara monitoring, and emergency life-support managed by critical care specialists.',
    },
    {
      id: 'nephrology',
      title: 'Nephrology & Kidney Care',
      icon: Droplet,
      color: 'bg-cyan-500',
      description: 'Dialysis facility, acute renal failure treatment, chronic kidney disease care, and renal hypertension management.',
    },
    {
      id: 'neurology',
      title: 'Neurology',
      icon: Brain,
      color: 'bg-purple-500',
      description: 'Treatment for stroke, epilepsy, migraines, neuropathies, neuro-degenerative diseases, and head injury rehabilitation.',
    },
    {
      id: 'laparoscopic-surgery',
      title: 'Laparoscopic Surgery',
      icon: Scissors,
      color: 'bg-teal-500',
      description: 'Minimally invasive keyhole surgeries for appendix, gallbladder, hernia, and complex abdominal procedures with faster recovery.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Specialist Departments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight">
            Key Services & Specialist Departments
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Providing round-the-clock specialized healthcare with cutting-edge medical diagnostic & therapeutic facilities in Ozar.
          </p>
        </div>

        {/* Card Grid with Staggered Framer Motion Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl ${service.color} text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-navy-800 mb-3 group-hover:text-navy-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(service.title);
                      const el = document.getElementById('appointment');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-navy-800 hover:text-emergency-600 flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Book Department</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] font-semibold text-slate-400">24/7 Support</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
