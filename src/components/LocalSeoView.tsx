import React, { useState } from 'react';
import { seoLandingPages } from '../data';
import weddingCover from '../assets/images/wedding_cover_1780801065427.png';
import babyBirthday from '../assets/images/south_indian_baby_birthday_1780819667631.png';
import southIndianPreWedding from '../assets/images/south_indian_pre_wedding_1780822146727.png';
import { MapPin, Sparkles, Building, Landmark, BadgeCheck, FileCheck2, Send, CheckCircle } from 'lucide-react';
import { CapturedLead } from '../types';

interface LocalSeoProps {
  slug: string;
  onAddLead: (lead: Omit<CapturedLead, 'id' | 'submittedAt'>) => void;
}

export default function LocalSeoView({ slug, onAddLead }: LocalSeoProps) {
  const pageData = seoLandingPages.find(p => p.slug === slug) || seoLandingPages[0];

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    venue: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Name and Mobile is required.');
      return;
    }
    
    onAddLead({
      name: formData.name,
      mobile: formData.mobile,
      city: pageData.title.split(' in ')[1] || 'Hyderabad',
      eventType: slug.includes('pre-wedding') ? 'Pre-Weddings' : slug.includes('birthday') ? 'Birthdays' : 'Weddings',
      eventDate: formData.date || new Date().toISOString().split('T')[0],
      venue: formData.venue,
      message: formData.message || `SEO Landing conversion for: ${pageData.title}`
    });

    setSuccess(true);
    setFormData({ name: '', mobile: '', date: '', venue: '', message: '' });
  };

  return (
    <div id="seo-landing-pane" className="bg-charcoal text-ivory py-16 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="film-grain" />

      {/* Schema Microdata tag mock */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Bhaskar Photography",
          "image": "https://ais-dev-i5yfv6b2vaahddo6teswvx-826013066214.asia-east1.run.app/src/assets/images/wedding_cover_1780801065427.png",
          "telephone": "+919849962715",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "MAIN ROAD, SULTHANABAD, DIST. PEDDAPALLI",
            "addressLocality": "Sulthanabad",
            "addressRegion": "Telangana",
            "postalCode": "505185",
            "addressCountry": "IN"
          }
        })}
      </script>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 select-none">
          <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2 font-semibold">Regional Photography Guide</span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-light text-ivory tracking-tight mb-4 uppercase gold-glow">
            Bespoke {pageData.title}
          </h1>
          <p className="font-lora text-lg text-gold italic leading-relaxed">
            "{pageData.tagline}"
          </p>
          <div className="h-[1px] bg-mutedgold/30 w-16 mx-auto mt-4" />
        </div>

        {/* Highlight Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="relative rounded overflow-hidden shadow-lg border border-gold/20 group">
            <img
              src={
                slug.includes('pre-wedding')
                  ? southIndianPreWedding
                  : slug.includes('birthday')
                  ? babyBirthday
                  : weddingCover
              }
              alt={pageData.title}
              referrerPolicy="no-referrer"
              className="w-full h-[320px] object-cover rounded opacity-90 group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-ivory">
              <span className="font-montserrat text-[9px] uppercase tracking-wider text-gold">Archival Standard</span>
              <p className="font-playfair text-lg uppercase font-light">Candid Framing Mastery</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-playfair text-2xl text-gold font-light flex items-center gap-2 uppercase">
              <BadgeCheck className="w-5 h-5 text-gold" /> True Localized Vision
            </h3>
            
            <p className="font-lora text-sm leading-relaxed text-zinc-300">
              {pageData.description}
            </p>

            {/* Popular Local Venues covered */}
            <div className="bg-night border border-gold/15 p-6 rounded shadow-xl relative">
              <div className="film-grain" />
              <h4 className="font-montserrat text-[11px] uppercase tracking-wider text-gold font-semibold mb-3 flex items-center gap-1.5 font-sans">
                <Building className="w-4 h-4" /> Popular Local Venues Covered:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-lora text-zinc-300">
                {pageData.nearbyVenues?.map((venue, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 animate-pulse" /> {venue}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Localized Rates/Highlights and High-Conversion inline Lead Booking form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-night text-ivory border border-gold/25 p-6 rounded relative overflow-hidden shadow-xl">
              <div className="film-grain" />
              <h4 className="font-playfair text-xl text-gold mb-4 font-light uppercase">Why families trust Bhaskar in this region:</h4>
              <div className="space-y-4 text-xs font-lora text-zinc-300">
                {pageData.highlights?.map((hl, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-mono text-gold font-semibold text-sm">0{i+1}.</span>
                    <div>
                      <p className="font-medium text-ivory">{hl}</p>
                      <p className="text-zinc-400 mt-0.5 text-[11px]">Custom-graded warm palettes matching {pageData.title.split(' in ')[1] || 'Indian'} wedding decor standards perfectly.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-night border border-gold/15 rounded flex items-center gap-3">
              <span className="text-xl">🏆</span>
              <p className="text-xs font-lora text-zinc-300 leading-normal">
                Each localized book includes a **Complimentary Wedding Album Preview** and 2 hours of pre-shoot orientation completely free.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-night border border-gold/20 p-6 rounded shadow-xl relative">
            <div className="film-grain" />
            {success ? (
              <div className="text-center py-8 select-none">
                <CheckCircle className="w-10 h-10 text-gold mx-auto mb-3" />
                <h4 className="font-playfair text-xl text-gold font-light uppercase">Details Locked In!</h4>
                <p className="font-lora text-xs text-zinc-400 mt-2 leading-normal">
                  Thank you for registering. Bhaskar is preparing localized venue maps for you and will connect shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 font-sans text-[10px] text-gold hover:text-white uppercase tracking-wider font-semibold cursor-pointer transition-colors"
                >
                  Fill Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleLocalSubmit} className="space-y-4">
                <span className="font-montserrat text-[9px] uppercase tracking-widest text-[#A89060] font-semibold block">Quick Regional Inquiry</span>
                <h4 className="font-playfair text-lg text-gold font-light leading-semibold border-b border-gold/15 pb-2 uppercase">Availability Check</h4>

                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] uppercase text-gold font-semibold font-sans tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sreekanth"
                      className="w-full border border-gold/20 bg-charcoal focus:border-gold rounded p-2 text-xs font-lora text-ivory placeholder-zinc-700 outline-none mt-0.5 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-gold font-semibold font-sans tracking-wide">Local Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="e.g. +91 9849962715"
                      className="w-full border border-gold/20 bg-charcoal focus:border-gold rounded p-2 text-xs font-lora text-ivory placeholder-zinc-700 outline-none mt-0.5 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-gold font-semibold font-sans tracking-wide">Preferred Venue</label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="e.g. Falaknuma Palace"
                      className="w-full border border-gold/20 bg-charcoal focus:border-gold rounded p-2 text-xs font-lora text-ivory placeholder-zinc-700 outline-none mt-0.5 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-gold font-semibold font-sans tracking-wide">Celebration Year/Month</label>
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="e.g. Dec 2026"
                      className="w-full border border-gold/20 bg-charcoal focus:border-gold rounded p-2 text-xs font-lora text-ivory placeholder-zinc-700 outline-none mt-0.5 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gold hover:bg-white text-charcoal font-montserrat text-[10px] uppercase tracking-widest font-bold rounded transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,106,0.15)]"
                >
                  Check {pageData.title.split(' in ')[1] || 'Local'} Dates
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
