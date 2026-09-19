import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Doctors from './components/Doctors';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  const handleBookDoctor = (doctorName, specialty) => {
    setSelectedDoctor(doctorName);
    setSelectedDept(specialty);
  };

  const handleSelectService = (deptName) => {
    setSelectedDoctor('');
    setSelectedDept(deptName);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-navy-800 selection:text-white">
      {/* 1. Sticky Header */}
      <Header onBookClick={() => { setSelectedDoctor(''); setSelectedDept(''); }} />

      <main>
        {/* 2. Hero Section */}
        <Hero onBookClick={() => { setSelectedDoctor(''); setSelectedDept(''); }} />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Facilities Strip */}
        <Facilities />

        {/* 6. Doctors Section */}
        <Doctors onBookDoctor={handleBookDoctor} />

        {/* 7. Book Appointment Section */}
        <AppointmentForm 
          selectedDoctor={selectedDoctor} 
          selectedDept={selectedDept} 
        />

        {/* 8. Contact Us Section */}
        <Contact />
      </main>

      {/* 9. Footer & Floating WhatsApp */}
      <Footer />
    </div>
  );
}
