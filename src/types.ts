export interface PortfolioItem {
  id: string;
  url: string;
  category: 'weddings' | 'pre-weddings' | 'engagements' | 'birthdays';
  title: string;
  location: string;
  photographer: string;
  youtubeId?: string;
}

export interface WeddingStory {
  id: string;
  title: string;
  coupleNames: string;
  date: string;
  location: string;
  category: string;
  coverImage: string;
  excerpt: string;
  storyContent: string;
  galleryImages: string[];
  vimeoOrYoutubeId?: string; // YouTube video id for embedded feel
  isFeature?: boolean;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  priceNote?: string;
  image: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  coupleName: string;
  location: string;
  content: string;
  stars: number;
  image: string;
  eventName: string;
}

export interface CapturedLead {
  id: string;
  name: string;
  mobile: string;
  city: string;
  eventType: string;
  eventDate: string;
  venue?: string;
  message?: string;
  submittedAt: string;
}

export interface InstagramPost {
  id: string;
  url: string;
  location: string;
  likes: string;
  comments: string;
  caption: string;
  link: string;
}

export interface InstagramStoryItem {
  url: string;
  caption: string;
}

export interface InstagramHighlight {
  id: string;
  title: string;
  cover: string;
  stories: InstagramStoryItem[];
}
