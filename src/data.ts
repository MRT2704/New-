import { PortfolioItem, WeddingStory, ServiceDetail, TestimonialItem, InstagramPost, InstagramHighlight } from './types';
import wedding_cover from './assets/images/wedding_cover_1780801065427.png';
import wedding_portrait from './assets/images/south_indian_wedding_portrait_1780819597520.png';
import wedding_silhouette from './assets/images/south_indian_wedding_silhouette_1780819617197.png';
import family_wedding from './assets/images/south_indian_family_wedding_picture_1780819633366.png';
import engagement_pic from './assets/images/south_indian_engagement_pic_1780819652101.png';
import baby_birthday from './assets/images/south_indian_baby_birthday_1780819667631.png';
import south_indian_talambralu from './assets/images/south_indian_talambralu_1780822131114.png';
import south_indian_pre_wedding from './assets/images/south_indian_pre_wedding_1780822146727.png';
import south_indian_mehndi_ritual from './assets/images/south_indian_mehndi_ritual_1780822159110.png';
import south_indian_wedding_details from './assets/images/south_indian_wedding_details_1780822172203.png';

// Curated high quality Indian Wedding / Event Images
export const portfolioData: PortfolioItem[] = [
  {
    id: 'p1',
    url: wedding_cover,
    category: 'weddings',
    title: 'The Royal Telugu Vows',
    location: 'Taj Falaknuma Palace, Hyderabad',
    photographer: 'Bhaskar',
    youtubeId: 'VDzS3xVnuBI'
  },
  {
    id: 'p2',
    url: south_indian_talambralu,
    category: 'weddings',
    title: 'Talambralu Rice Jubilation',
    location: 'GMR Arena, Hyderabad',
    photographer: 'Bhaskar',
    youtubeId: '5JBfbtXtf4E'
  },
  {
    id: 'p3',
    url: south_indian_wedding_details,
    category: 'weddings',
    title: 'Sacred Mandap Details',
    location: 'N Convention, Madhapur',
    photographer: 'Bhaskar'
  },
  {
    id: 'p4',
    url: south_indian_mehndi_ritual,
    category: 'pre-weddings',
    title: 'Bridal Mehndi Art',
    location: 'Golconda Fort, Hyderabad',
    photographer: 'Bhaskar',
    youtubeId: 'T7lrfqlqbLw'
  },
  {
    id: 'p5',
    url: wedding_portrait,
    category: 'weddings',
    title: 'Royal Mandap & Golden Vows',
    location: 'JRC Convention Hotel, Hyderabad',
    photographer: 'Bhaskar'
  },
  {
    id: 'p6',
    url: wedding_portrait,
    category: 'weddings',
    title: 'Symphony in Crimson Silk',
    location: 'Chowmahalla Palace, Old City',
    photographer: 'Bhaskar'
  },
  {
    id: 'p7',
    url: engagement_pic,
    category: 'engagements',
    title: 'Promises in Gold',
    location: 'Novotel Shamshabad',
    photographer: 'Bhaskar',
    youtubeId: '_SCiejz_XHY'
  },
  {
    id: 'p8',
    url: south_indian_pre_wedding,
    category: 'engagements',
    title: 'Sunset Pre-Wedding Bliss',
    location: 'Vijayawada, AP',
    photographer: 'Bhaskar',
    youtubeId: 'OxwEo54fzCI'
  },
  {
    id: 'p9',
    url: baby_birthday,
    category: 'birthdays',
    title: 'Splendors of Youth',
    location: 'Westin Mindspace, Hyderabad',
    photographer: 'Bhaskar',
    youtubeId: 'KVHG5J58ND8'
  },
  {
    id: 'p10',
    url: wedding_silhouette,
    category: 'pre-weddings',
    title: 'Sunset Silhouette Stories',
    location: 'Gandipet Lake, Hyderabad',
    photographer: 'Bhaskar',
    youtubeId: 'UwJDEI7Ar_4'
  },
  {
    id: 'p11',
    url: family_wedding,
    category: 'weddings',
    title: 'Traditional Family Legacies',
    location: 'Neknampur Lake Resort',
    photographer: 'Bhaskar'
  },
  {
    id: 'p12',
    url: family_wedding,
    category: 'birthdays',
    title: 'Three Generations in One Frame',
    location: 'Visakhapatnam Beach Road, AP',
    photographer: 'Bhaskar',
    youtubeId: 'tpYQt8oVWX0'
  }
];

export const weddingStoriesData: WeddingStory[] = [
  {
    id: 'story-traditional-telugu',
    title: 'Traditional Telugu Wedding',
    coupleNames: 'Vamsi & Archana',
    date: 'August 14, 2025',
    location: 'Taj Falaknuma Palace, Hyderabad',
    category: 'weddings',
    coverImage: wedding_cover,
    excerpt: 'An enchanting documentation of traditional Jeelakarra Bellam rituals, fine silk Kanjeevarams, and teary bidais set against the opulent Nizam architecture.',
    storyContent: `At Bhaskar Photography, we had the monumental honor of documenting Vamsi & Archana's wedding celebration at the prestigious Taj Falaknuma Palace in Hyderabad. 

The festivities began with a vibrant Pellikuturu ceremony, filled with laughter, turmeric, and legacy songs passed down through generations. For the main wedding day, the mandap was crafted entirely with sweet jasmine strands, tuberose, and marigold strings under the soft glow of a thousand traditional clay oil lamps.

Archana walked down the steps in a custom-designed Crimson Kanjeevaram silk saree adorned with classic gold zari. The atmosphere was charged with holy chants during the Jeelakarra Bellam ritual. When the cumin and jaggery paste was placed on each other's heads, we captured that fleeting split second where hope, spiritual transition, and profound love materialized in their eyes.

Vamsi's calm confidence complemented Archana's elegant poise. The film captures every detail: the dynamic laughter during the talambralu, the rhythmic steps of the saptapadi, and the tear-filled, heart-stilling bidai that left the palace hallways silent for just a brief moment.`,
    galleryImages: [
      wedding_cover,
      south_indian_talambralu,
      south_indian_wedding_details,
      wedding_portrait
    ],
    vimeoOrYoutubeId: 'VDzS3xVnuBI', // Real youtube wedding video id
    isFeature: true
  },
  {
    id: 'story-luxury-destination',
    title: 'Luxury Destination Wedding',
    coupleNames: 'Rohan & Deepthi',
    date: 'November 22, 2025',
    location: 'Marriott Resort, Bengaluru Resort',
    category: 'weddings',
    coverImage: wedding_portrait,
    excerpt: 'An absolute visual spectacular. A multi-day destination wedding with sunset vows, high-energy sangeet performances, and a modern royal aesthetic.',
    storyContent: `Rohan & Deepthi envisioned a wedding that combined high-fashion editorial styling with raw emotional South Indian traditions. We travelled with them to the stunning hills just outside Bengaluru to curate their wedding archive.

With over 3 sangeet parties and sunset vows, every time of the day offered a new color canvas. We utilized the soft ambient glow of the setting sun to capture minimal post-wedding portraits of the couple. 

For Rohan & Deepthi, we focused on cinematic drone coverage and hand-held filming style, which preserved the warm candlelit colors and kept the natural family rhythms unaltered.`,
    galleryImages: [
      wedding_portrait,
      south_indian_talambralu,
      south_indian_wedding_details,
      family_wedding
    ],
    vimeoOrYoutubeId: '5JBfbtXtf4E'
  },
  {
    id: 'story-elegant-engagement',
    title: 'Elegant Engagement Ceremony',
    coupleNames: 'Karthik & Sneha',
    date: 'October 03, 2025',
    location: 'Novotel Varun Beach, Visakhapatnam',
    category: 'engagements',
    coverImage: engagement_pic,
    excerpt: 'A sea-breeze engagement overlooking the ocean in Vizag, documenting rings exchanged in a sun-drenched floral pavilion.',
    storyContent: `Karthik & Sneha shared their exchange of rings on a breezy afternoon at Vizag's Varun Beach Novotel. Surrounded by 120 of their closest family members, the intimacy was real and palpable.

We focused on soft-vignette portraits, the warm sand hues blending in with Sneha's blush pink lehenga and Karthik's classic cream sherwani. The golden light over the Bay of Bengal served as our main backdrop, preserving the candid warmth of family elders bestowing blessings.`,
    galleryImages: [
      engagement_pic,
      south_indian_mehndi_ritual
    ]
  },
  {
    id: 'story-birthday-highlights',
    title: 'Birthday Celebration Highlights',
    coupleNames: 'Advait\'s 1st Birthday',
    date: 'January 10, 2026',
    location: 'ITC Kohenur, Hyderabad',
    category: 'birthdays',
    coverImage: baby_birthday,
    excerpt: 'A starry, whimsical wonderland curated for baby Advait, capturing the dynamic joys of grandparents and toddlers celebrating together.',
    storyContent: `Advait's first birthday was a festival of childhood and family legacy. Styled under the theme of "Written in the Stars" at ITC Kohenur, the lighting resembled warm starry skies.

Capturing children photography requires infinite patience and rapid shutter decisions. We documented Advait's curious eyes, the dynamic play around balloons, and of course, a multi-generational family portrait that stands as an heirloom for decades to come.`,
    galleryImages: [
      baby_birthday,
      family_wedding
    ]
  }
];

export const servicesData: ServiceDetail[] = [
  {
    id: 's-wedding',
    title: 'Wedding Photography',
    description: 'Fine art visual documentation of your main day, focusing on cinematic heirloom portraits, key rituals, and honest emotional candid family bonds.',
    longDescription: 'Our hallmark service. We approach your wedding day not with checklists, but with an trained eye for art, human connections, and timeless aesthetic pacing. From the early dawn Kanjeevaram drapery details to the high-energy bidai, we preserve the authentic atmosphere exactly as it felt.',
    priceNote: 'Tailored pricing upon consultation',
    image: wedding_portrait,
    features: ['Lead photographer Bhaskar + 2 Associate Photographers', 'Art-directed Portrait Session & Unlimited Candids', 'High-Resolution Edited Digital Archive (Online Access)', 'Perfect compatibility for large-screen projection']
  },
  {
    id: 's-pre-wedding',
    title: 'Pre-Wedding Shoots',
    description: 'Curated artistic portrait journals at scenic spots or historical monuments, custom-woven around your unique relationship narrative.',
    longDescription: 'Take a step away from the wedding stress. Our pre-wedding sessions are slow, artistic, and entirely relaxed. We scout empty heritage sites, candlelit ruins, or quiet lakesides in Hyderabad or other destinations to craft natural, magazine-grade couples imagery.',
    priceNote: 'Starting from ₹45,000',
    image: south_indian_pre_wedding,
    features: ['Curated styling & location consulting', '4-Hour slow-paced shoot session', '30 fully-developed editorial portraits', 'Short dynamic cinematic pre-wedding trailer']
  },
  {
    id: 's-films',
    title: 'Cinematic Wedding Films',
    description: 'Breathtaking 4K cinematic movies, combining rich audio soundscapes, traditional music, drone motion, and emotional family interviews.',
    longDescription: 'Images capture a split-second; a film preserves the cadence of voices, the laughter of grandmothers, and the sacred rhythmic thrum of nadaswarams. Our custom wedding reels are edited like high-end Indian short-films, with hand-color-graded warm tones and crisp sound.',
    priceNote: 'Tailored premium packages available',
    image: wedding_portrait,
    features: ['Cinematic 4K cameras & drone equipment', '3-5 Minute cinematic highlight reel', '25-40 Minute full-duration wedding docu-film', 'High-fidelity audio recording for rituals and speeches']
  },
  {
    id: 's-albums',
    title: 'Premium Wedding Albums',
    description: 'Aged-ivory premium bound heirlooms. Hand-stitched layouts with thick gold foil cover-lettering and archival fine art printing.',
    longDescription: 'A digital screen cannot match the tactility of paper. We print our photo books in high-end linen paper imported directly, ensuring gold tones stay lush for 100+ years. Every wedding deserves a physical heirloom meant to be touched, held, and passed down.',
    priceNote: 'Varies with page count and cover-leather styling',
    image: wedding_portrait,
    features: ['Archival fine-art printing paper (anti-fading, anti-scratch)', 'Gold foil letterpress hand-stamped covers', 'Handcrafted leather or heavy linen premium bounding boxes', 'Custom layout design approved preview step']
  },
  {
    id: 's-drone',
    title: 'Drone Coverage',
    description: 'Spectacular bird\'s-eye view sweeps of your open-air mandaps, resort properties, and grand baraat entries.',
    longDescription: 'Add grand dimensions to your wedding film. Our certified drone pilots capture smooth overhead pans displaying the full grandeur of your destination. Absolutely essential for outdoor setups, palace courtyards, and grand scale gatherings.',
    priceNote: 'Available as standard add-on or independent service',
    image: wedding_silhouette,
    features: ['Licensed UHD Drone pilots', 'Creative aerial views & transition planning', 'Safety-first flyover checks', 'Drone video footage synced with ground film editing']
  },
  {
    id: 's-birthdays',
    title: 'Birthday & Family Events',
    description: 'Honoring and keeping lifetime milestones: children birthdays, golden anniversaries, and close family homecomings.',
    longDescription: 'Every family milestone deserves dedicated artistic attention. We bring the same signature lighting and deep candid focus of our high-fashion weddings into close-knit home events, documenting raw childhood wonder and ancestral generations in warm frames.',
    priceNote: 'Starting from ₹25,000',
    image: baby_birthday,
    features: ['Candid coverage of children & elders', 'Group portraits and setup styling details', 'Edited high-resolution gallery ready for sharing in 10 days', 'Candid captures of cake-cutting and speech rituals']
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't1',
    coupleName: 'Archana & Vamsi',
    location: 'Hyderabad',
    stars: 5,
    content: 'Bhaskar garu didn\'t just take photos; he captured the soul of our wedding. Flipping through our luxury album feels like we are standing in the mandap again. Every glance, every tear, and every golden moment is preserved with raw elegance.',
    image: wedding_cover,
    eventName: 'Traditional Telugu Wedding'
  },
  {
    id: 't2',
    coupleName: 'Deepthi & Rohan',
    location: 'Bengaluru Destination',
    stars: 5,
    content: 'Our cinematic film is an absolute masterpiece! The team worked seamlessly in the background without being intrusive. We have watched the trailer fifty times already. Bhaskar Photography is without a doubt the finest wedding studio in India.',
    image: wedding_portrait,
    eventName: 'Destinational Palace Wedding'
  },
  {
    id: 't3',
    coupleName: 'Sneha & Karthik',
    location: 'Visakhapatnam',
    stars: 5,
    content: 'They made us feel so comfortable during our beachside pre-wedding and engagement. The portraits are stunning and we got so many compliments from our families. Their professionalism and artistic vision are truly spectacular.',
    image: engagement_pic,
    eventName: 'Vizag Beach Engagement'
  }
];

export const youtubeShowcaseVideos = [
  {
    id: 'yt1',
    title: 'Traditional Telugu Wedding Ceremony — Highlight Film',
    youtubeId: 'VDzS3xVnuBI',
    thumbnail: 'https://img.youtube.com/vi/VDzS3xVnuBI/maxresdefault.jpg',
    duration: '3:45'
  },
  {
    id: 'yt2',
    title: 'Love in the Heritage Meadows — Pre-Wedding Teaser',
    youtubeId: 'T7lrfqlqbLw',
    thumbnail: 'https://img.youtube.com/vi/T7lrfqlqbLw/maxresdefault.jpg',
    duration: '2:12'
  },
  {
    id: 'yt3',
    title: 'Sea-Breeze Coastal Vows — Gold Engagement Chapter',
    youtubeId: '_SCiejz_XHY',
    thumbnail: 'https://img.youtube.com/vi/_SCiejz_XHY/maxresdefault.jpg',
    duration: '3:05'
  }
];

export const seoLandingPages = [
  {
    slug: 'wedding-photographer-hyderabad',
    title: 'Wedding Photographer in Hyderabad',
    tagline: 'Premium Royal Weddings & Cinematic Films in Hyderabad',
    description: 'Capture your royal Telugu wedding at Taj Falaknuma, N Convention, or Novotel Shamshabad with beautiful candids, traditional rituals, and fine art prints.',
    nearbyVenues: ['Taj Falaknuma Palace', 'N Convention', 'JRC Convention Hall', 'GMR Arena', 'Chowmahalla Palace'],
    highlights: ['Fine Art Kanjeevaram Framing', 'Jeelakarra Bellam Storytelling', 'Cinematic 4K Slow Motion Films']
  },
  {
    slug: 'wedding-photographer-vijayawada',
    title: 'Wedding Photographer in Vijayawada',
    tagline: 'Capturing Traditional Festivities & Heirloom Legacies in AP',
    description: 'Documenting the authentic warmth of massive family reunions, sacred rituals along the Krishna River, and gorgeous heritage mandaps of Amaravati.',
    nearbyVenues: ['A Convention Centre', 'Fortune Murali Park', 'DV Manor', 'Marg Krishnaaya', 'Capital Convention'],
    highlights: ['Multi-generational Family Portraits', 'Authentic Pellikuturu Ceremonies', 'Linen Canvas Heirloom Albums']
  },
  {
    slug: 'wedding-photographer-visakhapatnam',
    title: 'Wedding Photographer in Visakhapatnam',
    tagline: 'Sea-Breeze Engagements & Scenic Destination Weddings',
    description: 'Scenic outdoor mandates on beach lawns, golden sunset portrait shoots, and breezy coastal engagement photography in Vizag.',
    nearbyVenues: ['Novotel Varun Beach', 'Gateway Hotel', 'Siddharth Convention', 'Radisson Blu Resort', 'Vizag Beach Lawns'],
    highlights: ['Golden Hour Coastline Portraits', 'Drone Cinematic Ocean Sweeps', 'Candid Beach Sand Engagements']
  },
  {
    slug: 'pre-wedding-photographer-hyderabad',
    title: 'Pre-Wedding Photographer in Hyderabad',
    tagline: 'Artistic Couplets Journals amidst Charminar and Gandipet Lagoons',
    description: 'Romantic couples photography set across old historic ruins of Golconda Fort, minimalist sunrise frames at Gandipet, and modern high-fashion silhouettes.',
    nearbyVenues: ['Golconda Fort Ruins', 'Gandipet Sunrise Lakeside', 'Qutb Shahi Tombs', 'Taramati Baradari', 'Lotus Pond Jubliee Hills'],
    highlights: ['Personalized Portrait Styling Guide', 'Lightweight Cinematic Trailers', 'Stunning Silhouette Composites']
  },
  {
    slug: 'birthday-photographer-hyderabad',
    title: 'Birthday Photographer in Hyderabad',
    tagline: 'Capturing Pure Toddler Wonder and Milestone Celebrations',
    description: 'High-speed professional framing of cake-smashing joy, grandparent cuddles, and magical whimsical lighting layouts in Banjara Hills and Gachibowli.',
    nearbyVenues: ['ITC Kohenur', 'Westin Mindspace', 'Park Hyatt Jubilee Hills', 'Sheraton Hyderabad', 'Radisson Gachibowli'],
    highlights: ['Toddler Patience Specialists', 'Instant Sharing-Ready Digital Vaults', 'Candids of Cake and Balloons']
  },
  {
    slug: 'destination-wedding-photographer-india',
    title: 'Destination Wedding Photographer in India',
    tagline: 'Travelers for Art, Framing Sacred Vows across Beautiful Landscapes',
    description: 'Available for premium wedding documentation across Delhi, Mumbai, Bengaluru, Chennai, Jaipur, Udaipur, and major South Indian states with streamlined travel packages.',
    nearbyVenues: ['Udaivilas Udaipur', 'Rambagh Palace Jaipur', 'Taj West End Bengaluru', 'InterContinental Mahabalipuram', 'Leela Palace Resorts'],
    highlights: ['Comprehensive Multi-day Crew Travel', 'Dynamic Multi-state Asset Coordination', 'Pre-wedding Destination Cinematic Covers']
  }
];

export const instagramPosts: InstagramPost[] = [
  {
    id: 'inst1',
    url: wedding_cover,
    location: 'Taj Falaknuma Palace, Hyderabad',
    likes: '4,821',
    comments: '245',
    caption: 'A timeless Telugu bride under the fragrant jasmine mandap. Preserving her royal heritage in warm gold tones. 💍💛 #TeluguWedding #HeritageBride #Sultanabad',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  },
  {
    id: 'inst2',
    url: south_indian_talambralu,
    location: 'Marriott Resort, Bengaluru',
    likes: '3,210',
    comments: '119',
    caption: 'Moments of unparsed laughter and talambralu showers! Nothing matches the authentic heartbeat of family unions. 🌸🌾 #SouthIndianWedding #Candid',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  },
  {
    id: 'inst3',
    url: south_indian_wedding_details,
    location: 'Sultanabad Royal Mandap',
    likes: '2,904',
    comments: '98',
    caption: 'The sacred fire rites — Jeelakarra Bellam transition, captured at the exact millisecond. Blessings that echo for generations. 🙏✨ #Traditional #Karimnagar',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  },
  {
    id: 'inst4',
    url: wedding_portrait,
    location: 'Vizag Golden Shoreline',
    likes: '3,950',
    comments: '167',
    caption: 'Exchange of promises with the sea-breeze singing background vows. Minimal bridal portraiture done under gold hour. 🌅💍 #BeachEngagement #CoastalVows',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  },
  {
    id: 'inst5',
    url: south_indian_mehndi_ritual,
    location: 'Golconda Fort, Hyderabad',
    likes: '4,105',
    comments: '182',
    caption: 'Intricate mehndi canvas, deep crimson silk, and expectations of a new chapter starting tomorrow. 📿🍃 #BridalMehndi #Kanjeevaram #WeddingFilm',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  },
  {
    id: 'inst6',
    url: south_indian_pre_wedding,
    location: 'GMR Arena, Hyderabad',
    likes: '3,114',
    comments: '105',
    caption: 'Every look, every smile. Documenting the real glances between Rohan and Deepthi as they walked into their lifetime mandap. ❤️🤵👰 #HappilyEverAfter',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  },
  {
    id: 'inst7',
    url: wedding_silhouette,
    location: 'Gandipet Sunrise Lagoons',
    likes: '4,432',
    comments: '210',
    caption: 'Sunset pre-wedding silhouettes that speak louder than words. Simple, timeless, clean. 🖤✨ #PreWeddingShoot #ArtSession #Hyderabad',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  },
  {
    id: 'inst8',
    url: family_wedding,
    location: 'Main Road Sulthanabad Studio',
    likes: '5,081',
    comments: '312',
    caption: 'Three generations, one single proud legacy. An heirloom frame that will be passed down for the next hundred years. 🏡👴👶 #FamilyHeirloom #Legacy',
    link: 'https://www.instagram.com/bhaskarphotography_official'
  }
];

export const instagramHighlights: InstagramHighlight[] = [
  {
    id: 'hl-wed',
    title: 'Weddings',
    cover: wedding_cover,
    stories: [
      { url: wedding_cover, caption: 'Capturing royal Telugu rituals in Taj Falaknuma Palace 💍👑' },
      { url: south_indian_talambralu, caption: 'The epic shower of Talambralu flowers and smiles 🌸🌾' },
      { url: south_indian_wedding_details, caption: 'Sacred fire rites and eternal oaths under jasmine floral frames 🔥' }
    ]
  },
  {
    id: 'hl-pre',
    title: 'Pre-Wedding',
    cover: wedding_silhouette,
    stories: [
      { url: wedding_silhouette, caption: 'Scenic lake sunrises at Gandipet lagoons 🌅🖤' },
      { url: south_indian_pre_wedding, caption: 'Heritage ruins & elegant historical walks at Golconda Fort 🏰' }
    ]
  },
  {
    id: 'hl-bts',
    title: 'Behind Scenes',
    cover: wedding_portrait,
    stories: [
      { url: wedding_portrait, caption: 'Bhaskar setting up the custom 3-point lighting ring at the mandap 💡🎥' },
      { url: south_indian_pre_wedding, caption: 'Directing the couple with warm, stress-free micro-coaching 🎬' }
    ]
  },
  {
    id: 'hl-details',
    title: 'Details',
    cover: south_indian_wedding_details,
    stories: [
      { url: south_indian_wedding_details, caption: 'Archival linen wedding books with real gold foil stenciling 📖✨' },
      { url: engagement_pic, caption: 'Intricate close-ups of bridal hand heirloom jewelry 💎' }
    ]
  }
];
