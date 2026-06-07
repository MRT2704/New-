import { Calendar, Compass, Award, ShieldCheck, HeartPulse, Sparkles, Star } from 'lucide-react';
import photographerBhaskar from '../assets/images/photographer_bhaskar_enhanced_1780819960134.png';
import weddingPortrait from '../assets/images/south_indian_wedding_portrait_1780819597520.png';

export default function AboutView() {
  const milestoneTimeline = [
    {
      year: '2011',
      title: 'The Inception Devout',
      desc: 'Bhargav Krishna Thurpati founds the studio in Hyderabad, armed with an old lens, immense curiosity for traditional Telugu rituals, and a dream to document families organically.'
    },
    {
      year: '2015',
      title: 'Entering Destination Spheres',
      desc: 'The brand expands custom services beyond Telangana to AP, Karnataka, and Tamil Nadu, developing a signature warm aesthetic style that blends deep heritage with luxury lighting.'
    },
    {
      year: '2019',
      title: 'Artistry Award Credentials',
      desc: 'Recognized as one of the "Top 10 Emerging Luxury Wedding Studios" in South India, having documented over 500 family events, from grand palace weddings to intimate home sangeets.'
    },
    {
      year: '2025-2026',
      title: 'Timeless Stories Core',
      desc: 'With a dedicated cinematic 4K video crew, drones, and museum-grade bound linen albums, Bhargav Krishna Thurpati continues to craft timeless wedding films for premium couples globally.'
    }
  ];

  const coreValues = [
    {
      title: 'Real & Unposed Moments',
      desc: 'No artificial posing or harsh studio lights. We capture the true emotions, natural warmth, and beautiful traditional colors of your celebrations exactly as they happen.'
    },
    {
      title: 'Premium Physical Albums',
      desc: 'We believe printed photos carry a lifetime of warmth that digital screens cannot match. Every package comes with a custom, hand-crafted premium linen album.'
    },
    {
      title: 'Limited Bookings for Quality',
      desc: 'We limit our monthly bookings to ensure we never compromise on quality. This guarantees your celebration receives our team\'s complete, undivided creative focus.'
    }
  ];

  return (
    <div id="about-page" className="bg-night text-ivory">
      {/* Film grain noise overlay */}
      <div className="film-grain" />

      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-mutedgold/15 bg-charcoal text-center overflow-hidden">
        {/* Decorative background visual */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={weddingPortrait}
            alt="Warm lighting"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 select-none">
          <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2">The Face Behind the Lens</span>
          <h1 className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-wide uppercase">Bhargav Krishna Thurpati</h1>
          <p className="font-playfair text-lg text-mutedgold italic mt-2">Founder & Master Storyteller</p>
          <div className="h-[1px] bg-gold w-24 mx-auto my-6" />
        </div>
      </section>

      {/* SECTION - Distinguished Accomplishments & Credentials */}
      <section className="bg-charcoal/40 border-b border-mutedgold/15 py-12 px-4 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2 font-semibold">Prestigious Distinctions</span>
            <h2 className="font-playfair text-2xl sm:text-3xl text-ivory font-light uppercase tracking-widest gold-glow">Distinguished Accolades</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Plaque 1 */}
            <div className="bg-charcoal border border-gold/15 rounded p-6 text-center flex flex-col justify-between items-center transition-all duration-300 hover:border-gold/45 group">
              <div className="w-14 h-14 bg-gold/5 border border-gold/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform">
                🥇
              </div>
              <div>
                <h4 className="font-playfair text-xs text-gold font-semibold uppercase tracking-widest mb-2">Elite Honour</h4>
                <p className="font-sans text-xs text-zinc-300 leading-snug font-medium">
                  National🥇 Gold medal Award Winner(LSAP)
                </p>
              </div>
            </div>

            {/* Plaque 2 */}
            <div className="bg-charcoal border border-gold/15 rounded p-6 text-center flex flex-col justify-between items-center transition-all duration-300 hover:border-gold/45 group">
              <div className="w-14 h-14 bg-gold/5 border border-gold/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform">
                📷
              </div>
              <div>
                <h4 className="font-playfair text-xs text-gold font-semibold uppercase tracking-widest mb-2">Master Rank</h4>
                <p className="font-sans text-xs text-zinc-300 leading-snug font-medium">
                  Master of Photography
                </p>
              </div>
            </div>

            {/* Plaque 3 */}
            <div className="bg-charcoal border border-gold/15 rounded p-6 text-center flex flex-col justify-between items-center transition-all duration-300 hover:border-gold/45 group">
              <div className="w-14 h-14 bg-gold/5 border border-gold/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform">
                📜
              </div>
              <div>
                <h4 className="font-playfair text-xs text-gold font-semibold uppercase tracking-widest mb-2">Distinguished Fellow</h4>
                <p className="font-sans text-xs text-zinc-300 leading-snug font-medium">
                  FHPUK Honour 📜
                </p>
              </div>
            </div>

            {/* Plaque 4 */}
            <div className="bg-charcoal border border-gold/15 rounded p-6 text-center flex flex-col justify-between items-center transition-all duration-300 hover:border-gold/45 group">
              <div className="w-14 h-14 bg-gold/5 border border-gold/20 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform">
                ⚡
              </div>
              <div>
                <h4 className="font-playfair text-xs text-gold font-semibold uppercase tracking-widest mb-2">Pioneering speed</h4>
                <p className="font-sans text-xs text-zinc-300 leading-snug font-medium text-center">
                  Firstime in Telangana deliverd Wedding Album In 1hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Philosophy strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-night text-rose">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 border border-gold/15 rounded pointer-events-none group-hover:scale-101 transition-transform" />
            <img
              src={photographerBhaskar}
              alt="Bhaskar portrait photography"
              className="w-full h-[450px] object-cover rounded shadow-lg opacity-90 group-hover:scale-101 transition-all duration-700"
            />
            {/* Stamp badge */}
            <div className="absolute bottom-4 right-4 bg-charcoal border border-gold/40 text-gold text-[9px] uppercase tracking-widest px-3 py-1 font-sans rounded">
              ESTD 2011 · SULTHANABAD
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-gold" />
              <span className="font-montserrat text-xs text-gold uppercase tracking-widest font-semibold">Our True North</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl text-ivory font-light leading-tight">
              Believing in weddings as deep historical epics.
            </h2>

            <p className="font-lora text-sm sm:text-base leading-relaxed text-zinc-400">
              "We often see wedding photography treated as a generic chore-list. For me, every multi-day celebration is an unrepeated cinematic epic, filled with sacred geometry, ancient aesthetics, and raw family vulnerability."
            </p>

            <blockquote className="font-cormorant text-2xl text-gold italic leading-relaxed border-l-2 border-gold/40 pl-6 py-1">
              "A portrait stands as an heirloom only when it captures not just how you looked, but the precise pressure of the moment, the scent of fresh jasmines, and the tears in your sister's eyes."
            </blockquote>

            <p className="font-lora text-sm text-zinc-400">
              Bhargav Krishna Thurpati's style is characterized by warm color palettes, soft vignettes, and heavy architectural frameworks. Based primarily in Telangana, he routinely documents premium weddings across India.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section className="bg-charcoal py-20 px-4 sm:px-6 lg:px-8 border-y border-mutedgold/15">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2">The Historic Timetable</span>
            <h3 className="font-playfair text-3xl sm:text-4xl font-light text-ivory tracking-wide">
              The Aesthetic Timeline
            </h3>
            <div className="h-[1px] bg-mutedgold/30 w-16 mx-auto mt-4" />
          </div>

          <div className="relative border-l border-gold/30 pl-8 ml-4 sm:ml-12 space-y-12">
            {milestoneTimeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline knot icon */}
                <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-night border border-gold">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                </span>

                <div>
                  <span className="font-mono text-xs text-gold uppercase tracking-widest bg-gold/5 border border-gold/20 px-2 rounded-full py-0.5">
                    {item.year}
                  </span>
                  <h4 className="font-playfair text-xl text-ivory font-light mt-2.5 mb-2">
                    {item.title}
                  </h4>
                  <p className="font-lora text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophies (Grid) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center bg-night">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2">Our Foundation</span>
          <h3 className="font-playfair text-3xl sm:text-4xl text-ivory font-light font-sans tracking-wide">Our Core Philosophy</h3>
          <p className="font-lora text-sm text-ash mt-4">These three simple beliefs guide how we capture every special moment of your life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, index) => (
            <div 
              key={index} 
              className="border border-mutedgold/15 bg-charcoal p-8 rounded hover:border-gold/30 transition-all flex flex-col justify-start text-center relative group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/5 border border-gold/30 text-gold flex items-center justify-center mx-auto mb-6">
                <Star className="w-4 h-4 fill-gold/20" />
              </div>
              <h4 className="font-playfair text-xl text-gold font-light mb-3">{val.title}</h4>
              <p className="font-lora text-sm text-ash leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Star / Press badge strip */}
      <section className="bg-charcoal py-12 px-4 border-t border-mutedgold/15 text-center text-ash text-xs font-montserrat uppercase tracking-[0.25em]">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-50">
          <span>VOGUE WEDDINGS INDIA</span>
          <span>●</span>
          <span>WEDDING SUTRA STARDOM</span>
          <span>●</span>
          <span>HYDERABAD TIMES FINEST</span>
          <span>●</span>
          <span>THE HINDU MAGAZINE</span>
        </div>
      </section>
    </div>
  );
}
