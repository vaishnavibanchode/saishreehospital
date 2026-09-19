import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, GraduationCap, Stethoscope, UserCheck, CheckCircle2 } from 'lucide-react';
import DoctorAvatar from './DoctorAvatar';

export const doctorsData = [
  {
    id: 'dr-suraj-deshmukh',
    name: 'Dr. Suraj Deshmukh',
    degrees: 'MBBS, M.S Ortho',
    title: 'Consultant Orthopedic Surgeon',
    opd: '4:00 PM – 6:00 PM',
    isFemale: false,
    specialty: 'Orthopedics',
  },
  {
    id: 'dr-ajit-boraste',
    name: 'Dr. Ajit Boraste',
    degrees: 'MBBS, MS (Obgy)',
    title: 'Gynecologist & Obstetrician',
    opd: 'By Appointment',
    isFemale: false,
    specialty: 'Gynecology & Obstetrics',
  },
  {
    id: 'dr-sudarshan-deshmukh',
    name: 'Dr. Sudarshan Deshmukh',
    degrees: 'MBBS, MS General Surgery',
    title: 'Endoscopic & Laparoscopic Surgeon',
    opd: '6:00 PM – 8:00 PM',
    isFemale: false,
    specialty: 'Laparoscopic Surgery',
  },
  {
    id: 'dr-nikhil-patel',
    name: 'Dr. Nikhil Patel',
    degrees: 'MBBS, MD, DM Cardiology, FASN',
    title: 'Consultant Interventional Cardiologist',
    opd: '7:00 PM – 9:00 PM',
    isFemale: false,
    specialty: 'Cardiology',
  },
  {
    id: 'dr-abhinav-gade',
    name: 'Dr. Abhinav Gade',
    degrees: 'MBBS, MS, MCh Urology',
    title: 'Urologist & Kidney Transplant Specialist',
    opd: '2:00 PM – 4:00 PM',
    isFemale: false,
    specialty: 'Nephrology & Kidney Care',
  },
  {
    id: 'dr-sheetal-bharsat',
    name: 'Dr. Sheetal Bharsat',
    degrees: 'MBBS, MD General Medicine',
    title: 'Consultant Physician, Critical Care Specialist',
    opd: '10:00 AM – 5:00 PM',
    isFemale: true,
    specialty: 'General Medicine',
  },
  {
    id: 'dr-bhushan-lohokare',
    name: 'Dr. Bhushan Lohokare',
    degrees: 'MBBS, MD Anaesthesia',
    title: 'Anesthesiologist, Intensive Care Specialist',
    opd: 'By Appointment',
    isFemale: false,
    specialty: 'Critical Care',
  },
];

export default function Doctors({ onBookDoctor }) {
  return (
    <section id="doctors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 text-navy-800 text-xs font-extrabold uppercase tracking-wider">
            <UserCheck className="w-4 h-4 text-gold-500" />
            <span>Expert Medical Panel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight">
            Our Senior Specialist Doctors
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Renowned consultants with 15+ years of clinical excellence, dedicated to providing compassionate expert care in Ozar.
          </p>
        </div>

        {/* 7 Doctors Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctorsData.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/70 shadow-md hover:shadow-2xl hover:border-navy-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Avatar */}
                <div className="mb-4">
                  <DoctorAvatar name={doc.name} isFemale={doc.isFemale} />
                </div>

                {/* Name */}
                <h3 className="text-lg font-extrabold text-navy-800 text-center group-hover:text-navy-900 leading-tight">
                  {doc.name}
                </h3>

                {/* Degrees */}
                <div className="flex items-center justify-center gap-1.5 mt-1 mb-3">
                  <GraduationCap className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="text-xs font-bold text-navy-600 tracking-wide text-center">
                    {doc.degrees}
                  </span>
                </div>

                {/* Specialty Title */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/80 mb-4 text-center shadow-xs">
                  <span className="text-xs font-extrabold text-slate-800 block">
                    {doc.title}
                  </span>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-navy-50 text-navy-700 border border-navy-100">
                    {doc.specialty}
                  </span>
                </div>

                {/* OPD Timing Pill */}
                <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gold-50 border border-gold-300/60 text-navy-900 text-xs font-bold mb-4">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>OPD: {doc.opd}</span>
                </div>
              </div>

              {/* Book with this Doctor CTA Button */}
              <button
                onClick={() => {
                  if (onBookDoctor) onBookDoctor(doc.name, doc.specialty);
                  const el = document.getElementById('appointment');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-navy-800 hover:bg-navy-900 text-white rounded-xl text-xs font-extrabold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <Calendar className="w-4 h-4 text-gold-400 group-hover/btn:scale-110 transition-transform" />
                <span>Book with this Doctor</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
