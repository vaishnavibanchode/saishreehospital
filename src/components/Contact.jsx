import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, Siren } from 'lucide-react';
import { saveContactMessage } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setErrorMessage('Please fill in your name and message.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await saveContactMessage(formData);
      if (res.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage('Failed to send message. Please call 85519 21222.');
      }
    } catch (err) {
      setErrorMessage('Could not send message. Please call 85519 21222.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 text-navy-800 text-xs font-extrabold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-gold-500" />
            <span>Hospital Location & Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight">
            Get in Touch with Us
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We are conveniently located at Saikheda Phata in Ozar MIDC. Visit us or send us an inquiry.
          </p>
        </div>

        {/* Contact Info & Map / Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Pulsing Emergency Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Animated Red Pulsing Emergency Badge Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-emergency-600 to-rose-700 text-white shadow-xl relative overflow-hidden pulse-emergency">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-md">
                  <Siren className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-gold-300 block">
                    24/7 Trauma & Emergency Line
                  </span>
                  <a href="tel:8551921222" className="text-2xl sm:text-3xl font-black tracking-tight text-white hover:text-gold-300 transition-colors block mt-0.5">
                    85519 21222
                  </a>
                  <p className="text-xs text-rose-100 font-medium mt-1">
                    Immediate casualty admission & ambulance response
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-navy-800 text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-navy-800">Hospital Address</h4>
                <p className="text-sm font-medium text-slate-600 mt-1 leading-relaxed">
                  R.K. Plaza, Saikheda Phata, Ozar MIDC, Dist. Nashik, Maharashtra - 422206
                </p>
              </div>
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase">Call Desk</h5>
                  <a href="tel:8551921222" className="text-sm font-bold text-navy-800 hover:text-emergency-600 transition-colors">
                    85519 21222
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-xs font-bold text-slate-400 uppercase">Email Us</h5>
                  <a href="mailto:info@saishreehospital.com" className="text-xs font-bold text-navy-800 hover:underline truncate block">
                    info@saishreehospital.com
                  </a>
                </div>
              </div>

            </div>

            {/* OPD Hours Card */}
            <div className="p-5 rounded-2xl bg-navy-50 border border-navy-100 flex items-center gap-3.5">
              <Clock className="w-6 h-6 text-navy-800 shrink-0" />
              <div>
                <span className="text-xs font-bold text-navy-800 uppercase block">OPD Working Hours</span>
                <span className="text-xs font-semibold text-slate-600">Monday to Saturday: 10:00 AM – 9:00 PM</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form & Embedded Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Contact Form */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
              <h3 className="text-xl font-extrabold text-navy-800 mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs font-medium text-slate-500 mb-6">
                Have questions regarding treatment, insurance, or OPD? Drop us a quick note.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-extrabold text-emerald-900">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700">Thank you for reaching out. We will get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-navy-800 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-800 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Aniket Patil"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-navy-800 text-slate-900 text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-800 uppercase mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-navy-800 text-slate-900 text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-800 uppercase mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your inquiry here..."
                      className="w-full p-4 rounded-xl bg-white border border-slate-300 focus:border-navy-800 text-slate-900 text-sm outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-navy-800 hover:bg-navy-900 text-white rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin text-gold-400" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold-400" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map (Ozar MIDC) */}
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 h-64 relative">
              <iframe
                title="Sai Shree Super Speciality Hospital Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14986.50578643884!2d73.948!3d20.098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb6382a92e15%3A0x8bbfa5f16e45f9e8!2sOzar%2C%20Maharashtra%20422206!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
