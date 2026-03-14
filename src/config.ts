// Site configuration for Umeir Zammer - Podcast Influencer Portfolio

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Umeir Zammer | Podcast Host & Content Creator",
  description: "Join Umeir Zammer on a journey of self-improvement, motivation, and comedy. Podcast host with 15K+ followers creating content that inspires and entertains.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Umeir Zammer",
  links: [
    { label: "About", href: "#about" },
    { label: "Episodes", href: "#episodes" },
    { label: "Content", href: "#content" },
    { label: "Community", href: "#community" },
  ],
  contactLabel: "Get In Touch",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Umeir Zammer",
  roles: ["Podcast Host", "Content Creator", "Motivational Speaker", "Comedian"],
  backgroundImage: "/images/IMG-20260314-WA0023.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I'm Umeir Zammer, a podcast host and content creator passionate about blending self-improvement with comedy. My mission is to inspire, motivate, and make you laugh while doing it. Through my podcast and social content, I've built a community of 15K+ followers who tune in for authentic conversations, life lessons, and a good dose of humor. Whether I'm interviewing inspiring guests or sharing my own journey, I believe growth should be enjoyable.",
  experienceValue: "3+",
  experienceLabel: "Years of\nPodcasting",
  stats: [
    { value: "15K+", label: "Followers" },
    { value: "100+", label: "Episodes" },
    { value: "50+", label: "Guest Interviews" },
  ],
  images: [
    { src: "/images/IMG-20260314-WA0029.jpg", alt: "Umeir in podcast studio" },
    { src: "/images/IMG-20260314-WA0030.jpg", alt: "Desert adventure" },
    { src: "/images/IMG-20260314-WA0026.jpg", alt: "Podcast recording with guest" },
    { src: "/images/IMG-20260314-WA0019.jpg", alt: "Community meetup" },
  ],
};

// Services section configuration - Podcast Episodes & Content
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "What I Create",
  heading: "Content That Inspires & Entertains",
  services: [
    {
      iconName: "Mic",
      title: "Self-Improvement Podcast",
      description: "Deep dive episodes on personal growth, mindset shifts, and practical strategies to become your best self. New episodes every week.",
      image: "/images/IMG-20260314-WA0031.jpg",
    },
    {
      iconName: "Laugh",
      title: "Comedy Content",
      description: "Light-hearted skits, relatable humor, and funny takes on everyday situations. Because laughter is the best medicine.",
      image: "/images/IMG-20260314-WA0027.jpg",
    },
    {
      iconName: "Users",
      title: "Guest Interviews",
      description: "Conversations with entrepreneurs, creators, and thought leaders sharing their stories and wisdom.",
      image: "/images/IMG-20260314-WA0026.jpg",
    },
    {
      iconName: "Video",
      title: "Short-Form Content",
      description: "Quick motivation boosts and funny moments on Instagram Reels and TikTok. Daily doses of inspiration.",
      image: "/images/IMG-20260314-WA0020.jpg",
    },
  ],
};

// Portfolio section configuration - Featured Content
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Featured Content",
  heading: "Popular Episodes & Moments",
  description: "Explore my most impactful podcast episodes, viral content moments, and collaborations with amazing guests and creators.",
  projects: [
    {
      title: "From Zero to 15K: My Journey",
      category: "Self-Improvement",
      year: "2024",
      image: "/images/IMG-20260314-WA0029.jpg",
      featured: true,
    },
    {
      title: "Basketball & Life Lessons",
      category: "Sports & Mindset",
      year: "2024",
      image: "/images/IMG-20260314-WA0022.jpg",
    },
    {
      title: "Creator Meetup Highlights",
      category: "Community",
      year: "2024",
      image: "/images/IMG-20260314-WA0024.jpg",
    },
    {
      title: "Desert Adventure Vlog",
      category: "Lifestyle",
      year: "2024",
      image: "/images/IMG-20260314-WA0030.jpg",
    },
    {
      title: "Behind the Scenes",
      category: "Podcast Production",
      year: "2024",
      image: "/images/IMG-20260314-WA0031.jpg",
    },
  ],
  cta: {
    label: "Start Listening",
    heading: "Ready to Get Inspired?",
    linkText: "Watch Latest Episode",
    linkHref: "#contact",
  },
  viewAllLabel: "View All Content",
};

// Testimonials section configuration - Listener Reviews
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Community Love",
  heading: "What Listeners Say",
  testimonials: [
    {
      quote: "Umeir's podcast is the perfect blend of motivation and humor. I start every morning with his episodes and it completely changed my mindset!",
      author: "Sarah Ahmed",
      role: "Marketing Manager",
      company: "Dubai",
      image: "/images/IMG-20260314-WA0019.jpg",
      rating: 5,
    },
    {
      quote: "Finally a self-improvement podcast that doesn't take itself too seriously. Umeir makes personal growth fun and accessible for everyone.",
      author: "Mohammed Khan",
      role: "Entrepreneur",
      company: "Abu Dhabi",
      image: "/images/IMG-20260314-WA0027.jpg",
      rating: 5,
    },
    {
      quote: "The guest interviews are incredible. Umeir has a way of making people open up and share their real stories. Highly recommend!",
      author: "Aisha Patel",
      role: "Content Creator",
      company: "Sharjah",
      image: "/images/IMG-20260314-WA0020.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Podcast Host", "Content Creator", "Motivational Speaker", "Comedian"],
  heading: "Let's Create Something Amazing Together",
  description: "Whether you're looking for collaboration, sponsorship opportunities, or just want to say hello - I'd love to hear from you!",
  buttonText: "Get In Touch",
  buttonHref: "mailto:umeir@zammer.podcast",
  email: "umeir@zammer.podcast",
  backgroundImage: "/images/IMG-20260314-WA0029.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Umeir Zammer",
  description: "Podcast host and content creator blending self-improvement with comedy. Inspiring 15K+ followers to grow, laugh, and live better.",
  columns: [
    {
      title: "Content",
      links: [
        { label: "Latest Episodes", href: "#episodes" },
        { label: "Popular Content", href: "#content" },
        { label: "Guest Interviews", href: "#" },
        { label: "Behind the Scenes", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "TikTok", href: "https://tiktok.com" },
        { label: "YouTube", href: "https://youtube.com" },
        { label: "Spotify", href: "https://spotify.com" },
      ],
    },
    {
      title: "Collaborate",
      links: [
        { label: "Sponsorships", href: "#contact" },
        { label: "Guest Appearances", href: "#contact" },
        { label: "Brand Partnerships", href: "#contact" },
        { label: "Speaking Engagements", href: "#contact" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { iconName: "Video", href: "https://tiktok.com", label: "TikTok" },
    { iconName: "Youtube", href: "https://youtube.com", label: "YouTube" },
    { iconName: "Music", href: "https://spotify.com", label: "Spotify" },
  ],
  newsletterHeading: "Join the Community",
  newsletterDescription: "Get weekly motivation, behind-the-scenes content, and exclusive updates delivered to your inbox.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Umeir Zammer. All rights reserved.",
  credit: "Created with passion and a lot of coffee ☕",
};
