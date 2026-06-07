import { servicesData } from '../data';
import { Camera, Film, Compass, BookOpen, Layers, Award, Sparkles } from 'lucide-react';

interface ServicesViewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function ServicesView({ onOpenBooking }: ServicesViewProps) {
  // Service category icon maps
  const getIcon = (id: string) => {
    switch(id) {
      case 's-wedding': return <Camera className="w-5 h-5 text-gold" />;
      case 's-films': return <Film className="w-5 h-5 text-gold" />;
      case 's-albums': return <BookOpen className="w-5 h-5 text-gold" />;
      case 's-pre-wedding': return <Sparkles className="w-5 h-5 text-gold" />;
      default: return <Layers className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <div id="services-page" className="bg-charcoal text-ivory py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="film-grain" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold block mb-2 font-semibold">Our Offerings</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-light text-ivory tracking-wide uppercase gold-glow">
            Premium Services
          </h2>
          <p className="font-lora text-sm text-zinc-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Every celebration deserves to be remembered exactly as it felt. Choose from our bespoke coverage styles tailored to your physical heirloom legacy.
          </p>
          <div className="h-[1px] bg-gold/30 w-16 mx-auto mt-4" />
        </div>

        {/* Dynamic section split per service */}
        <div className="space-y-20">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Image Panel with Soft Vignette */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none rounded" />
                  <div className="absolute -inset-1 border border-gold/15 group-hover:scale-102 transition-all duration-500 rounded pointer-events-none" />
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-[320px] sm:h-[400px] object-cover rounded shadow-lg transition-transform duration-700"
                  />
                  {/* Category logo */}
                  <div className="absolute top-4 left-4 bg-charcoal/95 border border-gold/45 p-3 rounded text-gold">
                    {getIcon(service.id)}
                  </div>
                </div>

                {/* Text explanation pane */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[1px] bg-gold" />
                    <span className="font-montserrat text-xs text-gold uppercase tracking-widest">{service.id === 's-wedding' ? 'Flagship Service' : 'Bespoke Medium'}</span>
                  </div>

                  <h3 className="font-playfair text-3xl sm:text-4xl text-gold font-light mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-lora text-sm sm:text-base text-mutedgold mb-3 italic">
                    "{service.description}"
                  </p>

                  <p className="font-lora text-sm text-zinc-400 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Bullet limits list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-gold/80 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-xs text-zinc-300 leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing/Action */}
                  <div className="border-t border-mutedgold/15 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">Service Investment</span>
                      <p className="font-montserrat text-gold text-sm font-semibold tracking-wide">
                        {service.priceNote || 'Pricing custom-made'}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="px-6 py-2.5 text-center text-xs uppercase tracking-widest bg-night hover:bg-gold hover:text-charcoal text-gold hover:border-gold font-montserrat font-semibold rounded border border-gold/45 transition-all w-fit cursor-pointer"
                    >
                      Enquire For {service.title}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
