import React from 'react';
import { User, Stethoscope } from 'lucide-react';

export default function DoctorAvatar({ name, isFemale, specialtyColor }) {
  // Extract initials (e.g. Dr. Suraj Deshmukh -> SD)
  const nameParts = name.replace(/^Dr\.\s+/i, '').split(' ');
  const initials = nameParts.map(p => p[0]).join('').substring(0, 2).toUpperCase();

  const bgGradients = isFemale 
    ? 'from-rose-500 to-purple-600'
    : 'from-navy-800 to-indigo-900';

  return (
    <div className="relative w-28 h-28 mx-auto rounded-3xl p-1 bg-gradient-to-tr from-gold-400 via-navy-800 to-emergency-600 shadow-xl group-hover:scale-105 transition-transform duration-300">
      <div className={`w-full h-full rounded-[22px] bg-gradient-to-br ${bgGradients} flex flex-col items-center justify-center text-white relative overflow-hidden`}>
        
        {/* Decorative background grid effect */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />

        {/* Initials & Icon */}
        <span className="text-2xl font-black tracking-wider text-gold-300 z-10 drop-shadow-md">
          {initials}
        </span>
        <span className="text-[10px] font-bold tracking-widest text-slate-200 uppercase z-10 opacity-90 mt-0.5">
          {isFemale ? 'SPECIALIST' : 'CONSULTANT'}
        </span>

        {/* Stethoscope Mini Badge */}
        <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-md p-1 rounded-lg border border-white/30 z-10">
          <Stethoscope className="w-3.5 h-3.5 text-gold-400" />
        </div>
      </div>
    </div>
  );
}
