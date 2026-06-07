import React, { useState } from 'react';
import { CapturedLead } from '../types';
import { Phone, MessageSquare, MapPin, Calendar, Clock, Sparkles, Send, ShieldCheck, Mail, CheckCircle, Smartphone } from 'lucide-react';

interface ContactViewProps {
  onAddLead: (lead: Omit<CapturedLead, 'id' | 'submittedAt'>) => void;
  selectedService?: string;
}

export default function ContactView({ onAddLead, selectedService = '' }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: 'Hyderabad',
    eventType: selectedService || 'Weddings',
    eventDate: '',
    venue: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.eventDate) {
      alert('Must complete Full Name, Mobile, and Event Date to submit.');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury synchronous database saves and dispatch tickers
    setTimeout(() => {
      onAddLead({
        name: formData.name,
        mobile: formData.mobile,
        city: formData.city,
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        venue: formData.venue,
        message: formData.message
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form save for date
      setFormData({
        name: '',
        mobile: '',
        city: 'Hyderabad',
        eventType: 'Weddings',
        eventDate: '',
        venue: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div id="contact-page-container" className="bg-charcoal text-ivory py-16 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="film-grain" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2 font-semibold">Connect With Bhargav Krishna</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-light text-ivory tracking-wide uppercase gold-glow">
            Book Your Consultation
          </h2>
          <p className="font-lora text-sm text-zinc-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Write us with details about your upcoming celebration. Together, we will craft a bespoke visual visualizer meant to span generations.
          </p>
          <div className="h-[1px] bg-gold/30 w-16 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel: Quick Contact buttons and metadata coordinates */}
          <div className="lg:col-span-5 space-y-8 col-left-panel">
            <div className="bg-night text-ivory border border-gold/25 p-8 rounded relative overflow-hidden shadow-xl">
              {/* film grain overlay */}
              <div className="film-grain animate-grain" />

              <span className="font-montserrat text-[10px] uppercase text-gold tracking-widest block mb-1 font-semibold">Immediate Channels</span>
              <h3 className="font-playfair text-2xl font-light leading-snug mb-6 text-ivory uppercase">Let's talk in real-time.</h3>

              {/* Action grid */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/919849962715?text=Hello%20Bhaskar%20Photography!%20I%20would%20like%20to%20inquire%20about%20booking%20your%20services%20for%20our%20celebration.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-300 transition-all text-sm group text-left"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-400 group-hover:scale-105 transition-all">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-montserrat text-[10px] uppercase block tracking-wider text-emerald-400 font-semibold font-sans">24-Hour Instant WhatsApp</span>
                    <span className="font-mono text-sm tracking-wide font-medium">+91 9849962715</span>
                  </div>
                </a>


              </div>

              {/* Office directions */}
              <div className="mt-8 pt-8 border-t border-gold/15 space-y-4 text-xs font-lora">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gold font-sans uppercase text-[10px] tracking-wider">Studio Address</p>
                    <a 
                      href="https://maps.app.goo.gl/YeQFmi9aSy3Ld7iv9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-300 hover:text-gold mt-1 leading-relaxed block transition-colors group cursor-pointer"
                    >
                      <span>BHASKAR PHOTOGRAPHY, MAIN ROAD, SULTHANABAD, DIST. PEDDAPALLI, TELANGANA - 505185</span>
                      <span className="block text-[10px] text-gold/80 font-sans uppercase font-medium tracking-wider mt-1 group-hover:underline">
                        📍 Get Directions on Google Maps →
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gold font-sans uppercase text-[10px] tracking-wider">Email Communications</p>
                    <p className="text-zinc-300 mt-1">munagantiraviteja@gmail.com (Ops Delivery)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gold font-sans uppercase text-[10px] tracking-wider">Working Hours</p>
                    <p className="text-zinc-300 mt-1">Daily: 10:00 AM — 08:30 PM (Prior Appointment Suggested)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Live status badge */}
            <div className="p-4 bg-night border border-gold/20 rounded flex items-center justify-between font-sans text-xs">
              <span className="text-zinc-400 font-lora">Studio Booking Phase:</span>
              <span className="flex items-center gap-1.5 font-semibold text-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Limited Slots Remaining
              </span>
            </div>
          </div>

          {/* Right panel: Live validation form layout */}
          <div className="lg:col-span-7 col-form-panel">
            {isSuccess ? (
              <div id="booking-success-container" className="bg-night border border-gold/30 p-8 rounded text-center shadow-2xl select-none relative">
                <div className="film-grain" />
                <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-3xl text-gold font-light mb-2">THANK YOU</h3>
                <p className="font-lora text-sm text-zinc-300 max-w-md mx-auto mb-6">
                  Bhaskar Photography will contact you shortly on your registered target cellphone. Let's create something beautiful together.
                </p>
                <div className="p-4 bg-charcoal text-left text-xs font-lora border border-gold/20 rounded max-w-sm mx-auto space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gold block mb-1">SECURE TRANSMISSION INVARIANTS:</span>
                  <p className="text-zinc-300">✔ Syncing database storage complete</p>
                  <p className="text-zinc-300">✔ Dispatched backup via Sheets webhook</p>
                  <p className="text-zinc-300">✔ Triggered instant alert to admin phone</p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 font-montserrat font-semibold text-xs tracking-widest text-gold hover:text-white cursor-pointer transition-colors"
                >
                  Submit Another Consultation Request →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-night border border-gold/20 p-8 rounded shadow-2xl space-y-6 relative">
                <div className="film-grain" />
                <span className="font-montserrat text-[10px] uppercase text-zinc-400 tracking-wider block">SECURE DIGITAL DISPATCH SHEET</span>
                <h3 className="font-playfair text-2xl text-gold font-light border-b border-gold/15 pb-4 uppercase">Celebration Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase text-gold font-semibold tracking-wider font-montserrat mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Archana Reddy"
                      className="border border-gold/20 bg-charcoal focus:border-gold rounded p-2.5 text-xs font-lora text-ivory placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase text-gold font-semibold tracking-wider font-montserrat mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="e.g. +91 9849962715"
                      className="border border-gold/20 bg-charcoal focus:border-gold rounded p-2.5 text-xs font-lora text-ivory placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase text-gold font-semibold tracking-wider font-montserrat mb-1">Wedding City / Celebration Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Hyderabad"
                      className="border border-gold/20 bg-charcoal focus:border-gold rounded p-2.5 text-xs font-lora text-ivory placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase text-gold font-semibold tracking-wider font-montserrat mb-1">Event Category *</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="border border-gold/20 bg-charcoal focus:border-gold rounded p-2.5 text-xs font-lora text-ivory outline-none transition-colors"
                    >
                      <option value="Weddings">Wedding Photography</option>
                      <option value="Pre-Weddings">Pre-Wedding Shoots</option>
                      <option value="Engagements">Engagement Ceremonies</option>
                      <option value="Birthdays">Birthday celebrations</option>
                      <option value="Cinematic Wedding Films">Cinematic Wedding Films</option>
                      <option value="drone">Drone Coverage</option>
                      <option value="albums">Premium Wedding Albums</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase text-gold font-semibold tracking-wider font-montserrat mb-1">Event Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="border border-gold/20 bg-charcoal focus:border-gold rounded p-2.5 text-xs font-lora text-ivory outline-none transition-colors"
                    />
                  </div>

                  {/* Venue (optional) */}
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase text-gold font-semibold tracking-wider font-montserrat mb-1">Specific Venue (optional)</label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="e.g. Taj Falaknuma"
                      className="border border-gold/20 bg-charcoal focus:border-gold rounded p-2.5 text-xs font-lora text-ivory placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Special consultation Notes */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase text-gold font-semibold tracking-wider font-montserrat mb-1">Special Consultation Notes (optional)</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little bit about yourself, the ceremony vibe, or special customs you'd love us to cover..."
                    className="border border-gold/20 bg-charcoal focus:border-gold rounded p-2.5 text-xs font-lora leading-relaxed text-ivory placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gold hover:bg-white text-charcoal font-montserrat text-xs uppercase tracking-widest font-bold rounded flex items-center justify-center gap-2 transition-all cursor-pointer border border-transparent shadow-[0_0_15px_rgba(212,175,106,0.2)]"
                >
                  <Send className="w-3.5 h-3.5" /> 
                  {isSubmitting ? 'Syncing to Secure Servers...' : 'Secure Submit Request'}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 text-center font-mono uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Encrypted SSL Leads Hub Connection
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
