import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Camera,
  Film,
  Sparkles,
  Smartphone,
  Instagram,
  Youtube,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  Calendar,
  Lock,
  Compass,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  Play,
  MessageSquare
} from 'lucide-react';

import Splash from './components/Splash';
import PortfolioView from './components/PortfolioView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import LocalSeoView from './components/LocalSeoView';
import weddingCover from './assets/images/wedding_cover_1780801065427.png';
import photographerBhaskar from './assets/images/photographer_bhaskar_enhanced_1780819960134.png';
import weddingPortrait from './assets/images/south_indian_wedding_portrait_1780819597520.png';
import weddingSilhouette from './assets/images/south_indian_wedding_silhouette_1780819617197.png';
import babyBirthday from './assets/images/south_indian_baby_birthday_1780819667631.png';
import engagementPic from './assets/images/south_indian_engagement_pic_1780819652101.png';
import southIndianPreWedding from './assets/images/south_indian_pre_wedding_1780822146727.png';
import southIndianWeddingDetails from './assets/images/south_indian_wedding_details_1780822172203.png';

import { portfolioData, servicesData, testimonialsData, youtubeShowcaseVideos, seoLandingPages, instagramPosts, instagramHighlights } from './data';
import { CapturedLead, InstagramHighlight, InstagramPost } from './types';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [currentTab, setCurrentTab] = useState<'home' | 'portfolio' | 'stories' | 'services' | 'about' | 'contact' | string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  // Curtain Wipe Transition States
  const [curtainActive, setCurtainActive] = useState(false);
  const [pendingTab, setPendingTab] = useState<string | null>(null);

  // Leads Store
  const [leads, setLeads] = useState<CapturedLead[]>([]);

  // Hero inline form state
  const [heroForm, setHeroForm] = useState({ name: '', mobile: '', city: 'Hyderabad' });
  const [heroFormSuccess, setHeroFormSuccess] = useState(false);

  // Instagram Story Playback States
  const [activeStoryGroup, setActiveStoryGroup] = useState<InstagramHighlight | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [storyProgress, setStoryProgress] = useState<number>(0);

  // Automatic state advance effect for Instagram Stories
  useEffect(() => {
    if (!activeStoryGroup) {
      setStoryProgress(0);
      return;
    }

    const duration = 5000; // 5 seconds per slide
    const intervalTime = 50; 
    const step = (100 / (duration / intervalTime));

    const timer = setInterval(() => {
      setStoryProgress((prev) => {
        if (prev >= 100) {
          setTimeout(() => {
            if (activeStoryIndex < activeStoryGroup.stories.length - 1) {
              setActiveStoryIndex(activeStoryIndex + 1);
            } else {
              setActiveStoryGroup(null);
            }
          }, 0);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    setStoryProgress(0);

    return () => clearInterval(timer);
  }, [activeStoryGroup, activeStoryIndex]);

  // Load leads from storage on init
  useEffect(() => {
    const savedLeads = localStorage.getItem('bhaskar_leads_db');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    } else {
      // Setup seed lead structures if empty to display gorgeous vault stats initially
      setLeads([]);
    }
  }, []);

  // Web scroll listeners
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Action: Add new lead via dispatch triggers
  const handleAddNewLead = (newLeadData: Omit<CapturedLead, 'id' | 'submittedAt'>) => {
    const newLead: CapturedLead = {
      ...newLeadData,
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      submittedAt: new Date().toISOString()
    };
    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem('bhaskar_leads_db', JSON.stringify(updated));
  };

  // Action: Seed Leads for quick administrative inspection
  const handleAddSeedLeads = () => {
    const seeds: CapturedLead[] = [
      {
        id: 'seed-1',
        name: 'Madhuri & Karthik Reddy',
        mobile: '+91 9440582710',
        city: 'Hyderabad',
        eventType: 'Weddings',
        eventDate: '2026-11-20',
        venue: 'Taj Falaknuma Palace',
        message: 'We of high-end wedding planning are inquiring for photography and cinematic films package.',
        submittedAt: new Date(Date.now() - 3600000 * 2).toISOString()
      },
      {
        id: 'seed-2',
        name: 'Srinivas Varma',
        mobile: '+91 9848022815',
        city: 'Vijayawada',
        eventType: 'Pre-Weddings',
        eventDate: '2026-08-14',
        venue: 'Kanal banks & Mandap',
        message: 'Inquiring for specialized traditional pellikuturu shoots near River Krishna.',
        submittedAt: new Date(Date.now() - 3600000 * 18).toISOString()
      },
      {
        id: 'seed-3',
        name: 'Sunitha Naidu',
        mobile: '+91 9100806201',
        city: 'Visakhapatnam',
        eventType: 'Engagements',
        eventDate: '2026-10-02',
        venue: 'Novotel Varun Beach',
        message: 'We are organizing sunset rings exchange looking for fine art vignettes.',
        submittedAt: new Date(Date.now() - 3600000 * 36).toISOString()
      },
      {
        id: 'seed-4',
        name: 'Guhaprasad Chowdary',
        mobile: '+91 9963528114',
        city: 'Hyderabad',
        eventType: 'Birthdays',
        eventDate: '2026-07-01',
        venue: 'Westin Mindspace',
        message: 'Looking to book a professional crew for our grandson Advait 1st birthday milestone.',
        submittedAt: new Date(Date.now() - 3600000 * 48).toISOString()
      }
    ];

    setLeads(seeds);
    localStorage.setItem('bhaskar_leads_db', JSON.stringify(seeds));
  };

  // Action: Delete lead
  const handleDeleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem('bhaskar_leads_db', JSON.stringify(updated));
  };

  // Route Transition: Curtain Wipe Dispatcher
  const navigateWithCurtain = (tabId: string) => {
    if (tabId === currentTab) return;
    setMobileMenuOpen(false);
    setPendingTab(tabId);
    setCurtainActive(true);

    // Wait for curtain to cover center of page (400ms), change tab, then release curtain
    setTimeout(() => {
      setCurrentTab(tabId);
      window.scrollTo({ top: 0 });
    }, 4500); // Luxury GSAP-style curtain holds at center before revealing next view.
    
    // In our quick css sequence let's do a robust, visual 600ms swipe transition
    setTimeout(() => {
      setCurrentTab(tabId);
      window.scrollTo({ top: 0 });
    }, 450);

    setTimeout(() => {
      setCurtainActive(false);
      setPendingTab(null);
    }, 900);
  };

  // Form: Hero inline Check Availability submit
  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.name || !heroForm.mobile) return;
    
    handleAddNewLead({
      name: heroForm.name,
      mobile: heroForm.mobile,
      city: heroForm.city,
      eventType: 'Weddings',
      eventDate: 'Dec 2026 (Winter Season)',
      venue: 'Sought on Hero Block',
      message: 'Quick search query submitted via Hero Inline Form.'
    });

    setHeroFormSuccess(true);
    setHeroForm({ name: '', mobile: '', city: 'Hyderabad' });
    setTimeout(() => setHeroFormSuccess(false), 4000);
  };

  // Check if current tab matches any SEO slug
  const activeSeoPage = seoLandingPages.find(p => p.slug === currentTab);

  return (
    <div className="relative min-h-screen bg-ivory text-ink selection:bg-gold selection:text-charcoal font-lora">
      {/* Film Grain overlay */}
      <div className="film-grain" />

      {/* Intro Loading Splash overlay */}
      <AnimatePresence>
        {showSplash && (
          <Splash onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Deep Charcoal Curtain Wipe Overlay Panel */}
      <div
        id="curtain-wipe-overlay"
        className={`fixed inset-0 bg-charcoal z-[150] transition-transform duration-900 ease-in-out pointer-events-none transform ${
          curtainActive 
            ? 'translate-x-0' 
            : 'translate-x-full'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.85, 0, 0.15, 1)',
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <span className="font-cormorant text-2xl tracking-[0.3em] text-gold uppercase animate-pulse">
            Bhaskar Films
          </span>
          <div className="w-16 h-[1.5px] bg-mutedgold mt-3 scale-x-50" />
        </div>
      </div>

      {/* 1. Urgency dismissable Top Bar banner */}
      {!isBannerDismissed && (
        <div
          id="scarcity-top-banner"
          className="bg-night text-gold py-2 px-4 text-xs font-montserrat tracking-[0.1em] text-center flex justify-between items-center z-[90] relative border-b border-gold/15"
        >
          <div className="mx-auto flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
            <p className="uppercase text-[10px] sm:text-xs">
              Only a limited number of weddings accepted each month — ensuring exceptional art to every celebration.
            </p>
          </div>
          <button
            onClick={() => setIsBannerDismissed(true)}
            className="text-zinc-500 hover:text-gold transition-colors p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 2. Navigation bar (Sticky, scaling wordmark logo) */}
      <nav
        id="main-navigation"
        className={`sticky top-0 w-full z-110 border-b transition-all duration-500 ${
          scrolled 
            ? 'bg-charcoal border-mutedgold/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand Title wordmark */}
          <button
            onClick={() => navigateWithCurtain('home')}
            className="flex flex-col text-left group cursor-pointer"
          >
            <span
              className={`font-cormorant font-bold text-gold tracking-[0.25em] uppercase hover:opacity-80 transition-all ${
                scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}
            >
              BHASKAR PHOTOGRAPHY
            </span>
          </button>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-montserrat uppercase tracking-[0.2em] text-zinc-400">
            <button
              onClick={() => navigateWithCurtain('home')}
              className={`nav-link-underline cursor-pointer transition-colors ${
                currentTab === 'home' ? 'text-gold font-semibold' : 'hover:text-gold'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateWithCurtain('portfolio')}
              className={`nav-link-underline cursor-pointer transition-colors ${
                currentTab === 'portfolio' ? 'text-gold font-semibold' : 'hover:text-gold'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => navigateWithCurtain('services')}
              className={`nav-link-underline cursor-pointer transition-colors ${
                currentTab === 'services' ? 'text-gold font-semibold' : 'hover:text-gold'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => navigateWithCurtain('about')}
              className={`nav-link-underline cursor-pointer transition-colors ${
                currentTab === 'about' ? 'text-gold font-semibold' : 'hover:text-gold'
              }`}
            >
              About
            </button>
            <button
              onClick={() => navigateWithCurtain('contact')}
              className={`nav-link-underline cursor-pointer transition-colors ${
                currentTab === 'contact' ? 'text-gold font-semibold' : 'hover:text-gold'
              }`}
            >
              Contact
            </button>


          </div>

          {/* Book Now button Call-to-action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => navigateWithCurtain('contact')}
              className="shimmer-btn px-4 sm:px-5 py-2 text-xs font-montserrat uppercase tracking-wider font-semibold rounded cursor-pointer text-charcoal shadow-sm transition-all text-center"
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 bg-charcoal/90 border border-gold/40 text-gold rounded cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 bg-charcoal z-[130] flex flex-col justify-between p-6"
          >
            <div className="film-grain" />

            {/* Mobile Nav Header */}
            <div className="flex justify-between items-center border-b border-mutedgold/15 pb-4">
              <span className="font-cormorant text-md text-gold tracking-widest uppercase">
                BHASKAR STYLES
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-night text-gold border border-gold/30 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links list */}
            <div className="flex flex-col gap-6 text-center py-8">
              <button
                onClick={() => navigateWithCurtain('home')}
                className={`font-cormorant text-3xl tracking-wider capitalize cursor-pointer ${
                  currentTab === 'home' ? 'text-gold italic' : 'text-zinc-500'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateWithCurtain('portfolio')}
                className={`font-cormorant text-3xl tracking-wider capitalize cursor-pointer ${
                  currentTab === 'portfolio' ? 'text-gold italic' : 'text-zinc-500'
                }`}
              >
                Portfolio Archive
              </button>
              <button
                onClick={() => navigateWithCurtain('services')}
                className={`font-cormorant text-3xl tracking-wider capitalize cursor-pointer ${
                  currentTab === 'services' ? 'text-gold italic' : 'text-zinc-500'
                }`}
              >
                Bespoke Services
              </button>
              <button
                onClick={() => navigateWithCurtain('about')}
                className={`font-cormorant text-3xl tracking-wider capitalize cursor-pointer ${
                  currentTab === 'about' ? 'text-gold italic' : 'text-zinc-500'
                }`}
              >
                The Storyteller
              </button>
              <button
                onClick={() => navigateWithCurtain('contact')}
                className={`font-cormorant text-3xl tracking-wider capitalize cursor-pointer ${
                  currentTab === 'contact' ? 'text-gold italic' : 'text-zinc-500'
                }`}
              >
                Contact & Forms
              </button>


            </div>

            <div className="text-center text-xs text-ash font-lora border-t border-mutedgold/15 pt-4">
              <p>Direct Enquiries: +91 9849962715</p>
              <p className="text-[10px] mt-1 uppercase font-mono">Hyderabad · Andhra Pradesh · India</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tab/Router Content switches */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen"
        >
          {/* A. If viewing local SEO landing pages */}
          {activeSeoPage ? (
            <LocalSeoView slug={currentTab} onAddLead={handleAddNewLead} />
          ) : (
            <>
              {/* B. Specific view blocks */}
              {currentTab === 'portfolio' && (
                <PortfolioView />
              )}

              {currentTab === 'services' && (
                <ServicesView onOpenBooking={(serviceStr) => {
                  navigateWithCurtain('contact');
                }} />
              )}

              {currentTab === 'about' && (
                <AboutView />
              )}

              {currentTab === 'contact' && (
                <ContactView onAddLead={handleAddNewLead} />
              )}



              {/* C. Primary Home Landing Screen View */}
              {currentTab === 'home' && (
                <div>
                  {/* HERO SECTION with warm cinematic vignette elements */}
                  <header id="home-hero" className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-charcoal">
                    {/* Atmospheric looped background fallback image */}
                    <div className="absolute inset-0">
                      <img
                        src={weddingCover}
                        alt="Royal wedding lighting atmosphere"
                        className="w-full h-full object-cover opacity-35"
                      />
                      {/* Deep Charcoal Warm Vignette Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal" />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10 select-none">
                      {/* Brand Label Above fold */}
                      <span className="font-montserrat text-gold uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold mb-3.5 block animate-fade-in">
                        BHASKAR PHOTOGRAPHY
                      </span>

                      {/* Heading */}
                      <h1 className="font-cormorant font-light italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory tracking-wide leading-tight mb-6">
                        Every Celebration Has A Story Worth Remembering
                      </h1>

                      {/* Subtitle */}
                      <p className="font-montserrat font-light text-xs sm:text-sm md:text-base text-mutedgold uppercase tracking-[0.2em] mb-10 max-w-2xl mx-auto">
                        Luxury Wedding & Event Photography · Hyderabad & Across India
                      </p>

                      {/* Hero Actions */}
                      <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                        <button
                          onClick={() => navigateWithCurtain('portfolio')}
                          className="px-6 py-3 border border-gold hover:bg-gold hover:text-charcoal text-gold font-montserrat text-xs uppercase tracking-widest font-semibold rounded bg-transparent transition-all cursor-pointer"
                        >
                          View Portfolio
                        </button>
                        <button
                          onClick={() => navigateWithCurtain('contact')}
                          className="shimmer-btn px-6 py-3 text-xs font-montserrat uppercase tracking-widest font-semibold rounded cursor-pointer text-charcoal shadow-glow"
                        >
                          Book Your Date
                        </button>
                      </div>
                    </div>
                  </header>

                  {/* SECTION 2 — Categories Strip */}
                  <section id="categories-strip" className="bg-charcoal text-ivory py-16 px-4 relative border-b border-gold/15">
                    <div className="film-grain" />
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center mb-10 select-none">
                        <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2 font-semibold">Portfolio Clusters</span>
                        <h2 className="font-playfair text-3xl sm:text-4xl text-ivory uppercase gold-glow font-light">Crafted Categories</h2>
                      </div>

                      {/* Infinite horizontal scroll grids */}
                      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                        {[
                          { title: 'Weddings', img: weddingCover },
                          { title: 'Pre-Weddings', img: southIndianPreWedding },
                          { title: 'Post-Weddings', img: weddingSilhouette },
                          { title: 'Birthdays', img: babyBirthday },
                          { title: 'Engagements', img: engagementPic },
                          { title: 'Wedding Films', img: southIndianWeddingDetails }
                        ].map((cat, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              navigateWithCurtain('portfolio');
                            }}
                            className="min-w-[240px] flex-1 aspect-[3/4] relative rounded overflow-hidden shadow-lg group cursor-pointer border border-gold/15"
                          >
                            <img
                              src={cat.img}
                              alt={cat.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            {/* Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                            {/* Gold hairline border top-right */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold/40 transition-all pointer-events-none group-hover:scale-102" />
                            
                            <h4 className="absolute bottom-6 left-6 font-playfair text-xl text-ivory group-hover:text-gold transition-colors uppercase font-light">
                              {cat.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* SECTION 3 — About Teaser (2-column layout) */}
                  <section id="about-teaser-strip" className="bg-night text-rose py-20 px-4 sm:px-6 lg:px-8 border-y border-gold/15">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="relative group">
                        {/* Offset gold border frame */}
                        <div className="absolute -inset-2 border border-gold/15 rounded pointer-events-none group-hover:scale-101 transition-transform" />
                        <img
                          src={photographerBhaskar}
                          alt="Photographer Bhaskar portrait"
                          referrerPolicy="no-referrer"
                          className="w-full h-[380px] object-cover rounded opacity-90 shadow-lg group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <Compass className="w-5 h-5 text-gold" />
                          <span className="font-montserrat text-xs text-gold uppercase tracking-widest font-semibold">The Philosophy</span>
                        </div>

                        <h3 className="font-playfair text-3xl sm:text-4xl text-ivory font-light leading-snug">
                          Refined Luxury, Warm South Indian Celebrations
                        </h3>

                        <p className="font-lora text-sm sm:text-base leading-relaxed text-zinc-300">
                          At Bhaskar Photography, we believe every celebration deserves to be remembered exactly as it felt. Our approach combines artistic vision, candid storytelling, and cinematic imagery to create timeless memories for couples and families.
                        </p>

                        {/* Photographer Awards & Speed Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 my-2 border-y border-gold/15 select-none">
                          <div className="flex items-start gap-3">
                            <span className="text-xl shrink-0 mt-0.5">🏆</span>
                            <div>
                              <p className="font-montserrat text-[10px] uppercase tracking-wider text-gold font-semibold">National Gold Medalist</p>
                              <p className="font-sans text-xs text-zinc-300 font-medium leading-tight">National🥇 Gold medal Award Winner(LSAP)</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="text-xl shrink-0 mt-0.5">📷</span>
                            <div>
                              <p className="font-montserrat text-[10px] uppercase tracking-wider text-gold font-semibold">Distinguished Rank</p>
                              <p className="font-sans text-xs text-zinc-300 font-medium leading-tight">Master of Photography</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="text-xl shrink-0 mt-0.5">📜</span>
                            <div>
                              <p className="font-montserrat text-[10px] uppercase tracking-wider text-gold font-semibold">Prestigious Recognition</p>
                              <p className="font-sans text-xs text-zinc-300 font-medium leading-tight">FHPUK Honour 📜</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="text-xl shrink-0 mt-0.5">⚡</span>
                            <div>
                              <p className="font-montserrat text-[10px] uppercase tracking-wider text-gold font-semibold">Telangana Pioneer</p>
                              <p className="font-sans text-xs text-zinc-300 font-medium leading-tight">Firstime in Telangana deliverd Wedding Album In 1hour</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => navigateWithCurtain('about')}
                            className="font-montserrat text-xs uppercase tracking-widest font-semibold text-gold hover:text-ivory flex items-center gap-2 group cursor-pointer"
                          >
                            Meet Bhargav Krishna Thurpati <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Wedding Stories Section Removed */}

                  {/* SECTION 5 — Statistics Bar (Animate on Scroll) */}
                  <section id="statistics-bar" className="bg-night border-y border-mutedgold/20 py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                          { num: '1000+', label: 'Events Captured' },
                          { num: '15+', label: 'Years Experience' },
                          { num: '100+', label: 'Locations Covered' },
                          { num: '500+', label: 'Happy Families' }
                        ].map((stat, idx) => (
                          <div key={idx} className="space-y-1.5 select-none hover:scale-105 transition-transform">
                            <span className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-gold font-light tracking-wide block">
                              {stat.num}
                            </span>
                            <span className="font-montserrat text-[10px] sm:text-xs text-mutedgold uppercase tracking-widest block font-medium">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* SECTION 6 — Services Highlight Grid Overview */}
                  <section id="services-grid-teaser" className="bg-charcoal py-16 px-4 border-b border-gold/15 relative">
                    <div className="film-grain" />
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center mb-12 select-none">
                        <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2 font-semibold">Our Capabilities</span>
                        <h2 className="font-playfair text-3xl sm:text-4xl text-ivory uppercase gold-glow font-light">Services Offered</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {servicesData.slice(0, 3).map((ser) => (
                          <div
                            key={ser.id}
                            onClick={() => navigateWithCurtain('services')}
                            className="bg-night border border-gold/20 p-8 rounded text-center cursor-pointer hover:border-gold/40 transition-all shadow-xl relative group"
                          >
                            <div className="film-grain" />
                            <span className="w-12 h-12 bg-gold/5 border border-gold/25 text-gold rounded-full flex items-center justify-center mx-auto mb-6 relative">
                              <Camera className="w-5 h-5" />
                            </span>
                            <h4 className="font-playfair text-xl text-gold font-light uppercase tracking-wide mb-2 group-hover:text-white transition-colors relative">{ser.title}</h4>
                            <p className="font-lora text-xs text-zinc-300 leading-relaxed mb-4 relative">{ser.description}</p>
                            <span className="font-montserrat font-bold text-[9px] uppercase tracking-widest text-gold group-hover:text-white relative">Explore Option →</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* SECTION 7 — YouTube Showcase Carousel Panel */}
                  <section id="youtube-showcase" className="bg-night py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                      <div className="text-center mb-12 select-none">
                        <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2">Cinematic Epilogues</span>
                        <h2 className="font-playfair text-3xl sm:text-4xl text-ivory font-light italic">Featured Films Showcase</h2>
                        <a
                          href="https://youtube.com/@bhaskarphotography1976"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-montserrat text-[10px] text-zinc-400 hover:text-rose uppercase tracking-widest mt-2 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Youtube className="w-4 h-4 text-red-500" /> Subscribe on YouTube @bhaskarphotography1976
                        </a>
                      </div>

                      {/* Video list Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {youtubeShowcaseVideos.map((video) => (
                          <div
                            key={video.id}
                            className="bg-charcoal border border-mutedgold/15 rounded overflow-hidden group shadow-md"
                          >
                            <div className="relative aspect-[16/9] overflow-hidden">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500"
                                onError={(e) => {
                                  const img = e.currentTarget;
                                  if (img.src.includes('maxresdefault')) {
                                    img.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                                  }
                                }}
                              />
                              {/* Dark overlay vignetters */}
                              <div className="absolute inset-0 bg-charcoal/30 pointer-events-none" />
                              
                              {/* Duration Tag */}
                              <span className="absolute bottom-2 right-2 bg-neutral-900/80 rounded px-2 py-0.5 text-[10px] font-mono text-zinc-300 font-semibold">
                                {video.duration}
                              </span>

                              {/* Play Button Trigger */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <a
                                  href={`https://youtube.com/watch?v=${video.youtubeId}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-11 h-11 bg-gold text-charcoal hover:bg-gold/80 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-glow cursor-pointer ml-1"
                                >
                                  <Play className="w-5 h-5 fill-charcoal text-charcoal" />
                                </a>
                              </div>
                            </div>

                            <div className="p-5">
                              <h4 className="font-playfair text-sm text-ivory leading-normal line-clamp-2">
                                {video.title}
                              </h4>
                              <p className="font-montserrat text-[9px] uppercase tracking-widest text-gold mt-2">
                                Cinema Crop · Ultra Reel
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* SECTION 8 — High End Testimonials Carousel */}
                  <section id="testimonials-carousel" className="bg-charcoal py-20 px-4 border-y border-mutedgold/15 relative overflow-hidden text-center">
                    <div className="max-w-4xl mx-auto relative z-10 select-none">
                      <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-3">Happy Families</span>
                      <h2 className="font-playfair text-3xl sm:text-4xl text-ivory font-light italic mb-10">Kind Words</h2>

                      <div className="space-y-6">
                        <span className="text-xl">⭐⭐⭐⭐⭐</span>
                        <blockquote className="font-cormorant text-2xl sm:text-3xl text-zinc-300 italic leading-relaxed max-w-2xl mx-auto">
                          "{testimonialsData[0].content}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-3 mt-6">
                          <img
                            src={testimonialsData[0].image}
                            alt="Couple avatar"
                            className="w-12 h-12 rounded-full border border-gold"
                          />
                          <div className="text-left font-sans text-xs">
                            <p className="font-semibold text-ivory">{testimonialsData[0].coupleName}</p>
                            <p className="text-zinc-500 italic mt-0.5">{testimonialsData[0].eventName} · {testimonialsData[0].location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* SECTION 10 — High-end Booking CTA bottom */}
                  <section id="booking-anchor" className="relative py-24 sm:py-32 px-4 text-center overflow-hidden bg-charcoal border-t border-gold/15">
                    {/* Background decor */}
                    <div className="absolute inset-0">
                      <img
                        src={southIndianWeddingDetails}
                        alt="Royal wedding background lighting"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 to-charcoal" />
                    </div>

                    <div className="relative z-10 max-w-xl mx-auto">
                      <span className="font-montserrat text-gold text-xs uppercase tracking-[0.3em] block mb-2 font-semibold">Make Memories Eternal</span>
                      <h2 className="font-cormorant italic text-ivory text-4xl sm:text-6xl font-light tracking-wide mb-6">
                        Let's Create Something Beautiful Together
                      </h2>
                      <p className="font-lora text-xs sm:text-sm text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
                        Secure your wedding or event photographer today. Bhaskar will consult you personally on your style, venues, and timings.
                      </p>

                      <button
                        onClick={() => navigateWithCurtain('contact')}
                        className="shimmer-btn px-8 py-3 text-sm font-semibold uppercase tracking-wider font-montserrat rounded cursor-pointer shadow-lg inline-flex items-center gap-2"
                      >
                        Book Your Consultation →
                      </button>
                    </div>
                  </section>
                </div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 4. Elegant footer with brand lines and SEO directories */}
      <footer id="website-footer" className="bg-night border-t border-mutedgold/15 pt-16 pb-8 px-4 text-ash">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo brand label column */}
          <div className="space-y-4 text-left">
            <span className="font-cormorant text-2xl text-gold tracking-widest uppercase font-light">
              BHASKAR PHOTOGRAPHY
            </span>
            <p className="font-lora text-xs text-zinc-500 leading-normal max-w-sm italic">
              Capturing Timeless Stories, One Frame at a Time. Fine art Indian wedding portraiture, traditional cinematic film magazines.
            </p>
            <div className="flex gap-4 text-zinc-400 pt-2 select-none">
              <a 
                href="https://youtube.com/@bhaskarphotography1976" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gold transition-colors cursor-pointer"
              >
                <Youtube className="w-5 h-5 text-red-500" />
              </a>
              <a 
                href="https://www.instagram.com/bhaskarphotography_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gold transition-colors cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* New Column: Physical Studio Address & Map Directions */}
          <div className="space-y-3 text-left">
            <p className="font-montserrat text-[10px] uppercase tracking-wider text-gold font-bold">Studio Headquarters</p>
            <div className="space-y-2 text-xs font-sans leading-relaxed text-zinc-400">
              <p className="font-medium text-gold">
                BHASKAR PHOTOGRAPHY,<br />
                MAIN ROAD, SULTHANABAD,<br />
                DIST. PEDDAPALLI, TELANGANA - 505185
              </p>
              <div className="pt-2">
                <a 
                  href="https://maps.app.goo.gl/YeQFmi9aSy3Ld7iv9" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-[10px] text-gold uppercase tracking-wider font-semibold font-montserrat hover:underline cursor-pointer"
                >
                  📍 Open Google Maps Directions →
                </a>
              </div>
            </div>
          </div>

          {/* Quick linkages Tab list */}
          <div className="space-y-3 text-left">
            <p className="font-montserrat text-[10px] uppercase tracking-wider text-gold font-bold">Quick Inbound Links</p>
            <ul className="space-y-2 text-xs font-lora">
              <li>
                <button onClick={() => navigateWithCurtain('home')} className="hover:text-gold cursor-pointer">
                  Homepage
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithCurtain('portfolio')} className="hover:text-gold cursor-pointer">
                  The Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithCurtain('services')} className="hover:text-gold cursor-pointer">
                  Services List
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithCurtain('about')} className="hover:text-gold cursor-pointer">
                  About Photographer
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithCurtain('contact')} className="hover:text-gold cursor-pointer">
                  Enquire Date
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing copyright label and secure vault link */}
        <div className="max-w-7xl mx-auto border-t border-mutedgold/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-left text-[11px] gap-4">
          <p className="font-mono text-[10px] uppercase">
            © 2026 Bhaskar Photography Studio. Sulthanabad, Peddapalli, Telangana India. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-zinc-500 font-sans">
              Contact: <strong>+91 9849962715</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* 5. Floating Action Buttons stack (Bottom-right corner) */}
      <div
        id="floating-call-stack"
        className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 items-end"
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919849962715?text=Hello!%20Bhaskar%2520Photography!%20Can%20we%20consult%20for%20an%20upcoming%20wedding?"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white rounded-full shadow-lg transition-transform cursor-pointer"
          title="Connect with Bhaskar on WhatsApp"
        >
          <MessageSquare className="w-5.5 h-5.5" />
        </a>

        {/* Call Now Button */}
        <a
          href="tel:+919849962715"
          className="flex items-center justify-center w-12 h-12 bg-gold hover:bg-gold/85 hover:scale-105 active:scale-95 text-charcoal rounded-full shadow-lg transition-transform cursor-pointer"
          title="Direct Cellular Call"
        >
          <Smartphone className="w-5.5 h-5.5" />
        </a>

        {/* Check/Book AVAILABILITY shortcut Button */}
        <button
          onClick={() => navigateWithCurtain('contact')}
          className="flex items-center gap-2 px-4 h-12 bg-charcoal hover:bg-gold hover:text-charcoal border border-gold text-gold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer text-xs uppercase font-montserrat font-bold tracking-wider"
          title="Quick Booking Inquiry"
        >
          <Calendar className="w-4 h-4 shrink-0" /> Check Availability
        </button>
      </div>


    </div>
  );
}
