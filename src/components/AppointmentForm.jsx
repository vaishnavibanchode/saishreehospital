import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, Stethoscope, FileText, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { doctorsData } from './Doctors';
import { saveAppointment } from '../lib/supabase';

export default function AppointmentForm({ selectedDoctor, selectedDept }) {
  const departments = [
    'General Medicine',
    'Cardiology',
    'Orthopedics',
    'Gynecology & Obstetrics',
    'Critical Care',
    'Nephrology & Kidney Care',
    'Neurology',
    'Laparoscopic Surgery',
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    department: 'General Medicine',
    doctor: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    symptoms: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-fill doctor & department if selected from Doctors or Services cards
  useEffect(() => {
    if (selectedDoctor) {
      setFormData(prev => ({
        ...prev,
        doctor: selectedDoctor,
        department: selectedDept || prev.department,
      }));
    } else if (selectedDept) {
      setFormData(prev => ({
        ...prev,
        department: selectedDept,
      }));
    }
  }, [selectedDoctor, selectedDept]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setErrorMessage('Please enter your full name and phone number.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await saveAppointment(formData);
      if (res.success) {
        setSuccess(true);
      } else {
        setErrorMessage('Could not save appointment. Please try again or call 85519 21222.');
      }
    } catch (err) {
      setErrorMessage('Submission failed. Please call 85519 21222.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      department: 'General Medicine',
      doctor: '',
      preferredDate: '',
      preferredTime: '10:00 AM',
      symptoms: '',
    });
  };

  return (
    <section id="appointment" className="py-20 bg-slate-100 relative">
      
      {/* Decorative background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-navy-800/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emergency-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 text-gold-400 text-xs font-extrabold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Online Registration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight">
            Book an Appointment
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Schedule your consultation with our specialist doctors easily. Fast response guaranteed.
          </p>
        </div>

        {/* Main Appointment Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
          
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-navy-800">
                    Appointment Request Submitted!
                  </h3>
                  <p className="text-slate-600 text-base max-w-md mx-auto">
                    Thank you, <strong className="text-navy-800">{formData.fullName}</strong>. Our hospital reception desk will contact you at <strong className="text-navy-800">{formData.phone}</strong> shortly to confirm your slot.
                  </p>
                </div>

                <div className="p-4 bg-navy-50 rounded-2xl max-w-md mx-auto text-left text-xs text-navy-800 space-y-1">
                  <div><strong>Department:</strong> {formData.department}</div>
                  {formData.doctor && <div><strong>Doctor:</strong> {formData.doctor}</div>}
                  {formData.preferredDate && <div><strong>Preferred Date:</strong> {formData.preferredDate}</div>}
                  <div><strong>Preferred Time:</strong> {formData.preferredTime}</div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-navy-800 text-white rounded-xl font-bold text-sm hover:bg-navy-900 transition-colors"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="appointment-form"
                initial={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Pre-fill Doctor Notification Banner */}
                {formData.doctor && (
                  <div className="p-3.5 rounded-2xl bg-gold-50 border border-gold-300 text-navy-900 text-xs sm:text-sm font-bold flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-600" />
                      <span>Booking consultation for: <strong>{formData.doctor}</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, doctor: '' }))}
                      className="text-xs text-slate-500 underline hover:text-navy-900"
                    >
                      Clear
                    </button>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ramesh Shinde"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="10-digit Mobile Number"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Department */}
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Preferred Department *
                    </label>
                    <div className="relative">
                      <Stethoscope className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all appearance-none bg-white"
                      >
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Doctor (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Preferred Doctor (Optional)
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Any Available Specialist</option>
                        {doctorsData.map((doc) => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name} ({doc.specialty})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all appearance-none bg-white"
                      >
                        <option value="10:00 AM – 1:00 PM">Morning: 10:00 AM – 1:00 PM</option>
                        <option value="2:00 PM – 5:00 PM">Afternoon: 2:00 PM – 5:00 PM</option>
                        <option value="5:00 PM – 9:00 PM">Evening: 5:00 PM – 9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Symptoms / Message (Textarea) */}
                  <div className="sm:col-span-2 lg:col-span-2">
                    <label className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Message / Symptoms (Optional)
                    </label>
                    <textarea
                      name="symptoms"
                      rows="3"
                      value={formData.symptoms}
                      onChange={handleChange}
                      placeholder="Briefly describe your medical concern or symptoms..."
                      className="w-full p-4 rounded-xl border border-slate-300 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/20 text-slate-900 text-sm font-medium outline-none transition-all resize-none"
                    />
                  </div>

                </div>

                {/* Submit & Fallback Strip */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  
                  {/* Fallback Call Direct */}
                  <div className="text-slate-600 text-xs font-semibold flex items-center gap-2">
                    <span>Or call us directly for instant booking:</span>
                    <a href="tel:8551921222" className="text-emergency-600 font-extrabold hover:underline">
                      ☎ 85519 21222
                    </a>
                  </div>

                  {/* Confirm Appointment Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-9 py-3.5 bg-navy-800 hover:bg-navy-900 text-white rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-gold-400" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 text-gold-400" />
                        <span>Confirm Appointment</span>
                      </>
                    )}
                  </button>

                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
