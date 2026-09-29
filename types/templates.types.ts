// ============================================================
// ForgeFit — TypeScript Interfaces
// All interfaces defined here — NEVER inline in components
// ============================================================

// ------------------------------------------------------------
// COMMON / SHARED
// ------------------------------------------------------------

export interface BreadcrumbData {
  title: string;
  paths: { label: string; url?: string }[];
  bgImage: string;
}

export interface TopBarData {
  hours?: string;
  phone?: string;
  address?: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url?: string;
  subLinks?: { id: string; label: string; url: string }[];
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

// ------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------

export interface FooterColumnLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterColumnLink[];
}

export interface FooterContactItem {
  id: string;
  icon: string;
  text: string;
}

export interface FooterContact {
  title: string;
  items: FooterContactItem[];
}

export interface ForgeFitFooterData {
  logo: string;
  logoAlt: string;
  description: string;
  socialLinks: { id: string; icon: string; url: string }[];
  columns: FooterColumn[];
  contact?: FooterContact;
  copyright: string;
  bottomCenterText?: string;
  bottomLinks?: { id: string; label: string; url: string }[];
  testimonials?: {
    variants?: {
      ForgeFitTestimonials1?: ForgeFitTestimonialsData;
    };
  };
}

// ------------------------------------------------------------
// HERO SECTION
// ------------------------------------------------------------

export interface HeroSlide {
  id: string;
  image: string;
  imageAlt: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryButton: { text: string; url: string };
  secondaryButton: { text: string; url: string };
}

export interface ForgeFitHeroData {
  footerTags?: string[];
  slides: HeroSlide[];
}

// ------------------------------------------------------------
// ABOUT US SECTION
// ------------------------------------------------------------

export interface AboutFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ForgeFitAboutData {
  image1: string;
  image2: string;
  image1Alt: string;
  image2Alt: string;
  experienceYears: string;
  experienceLabel: string;
  subtitle: string;
  watermarkText: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  features: AboutFeature[];
  buttonText: string;
  buttonUrl: string;
  bottomTags: string[];
  bottomSlogan: string;
}

export interface ForgeFitAboutPageContentData {
  subtitle: string;
  watermarkText: string;
  titlePart1: string;
  titleHighlight: string;
  descriptions: string[];
  image1: string;
  image2: string;
  image1Alt: string;
  image2Alt: string;
  experienceYears: string;
  experienceLabel: string;
  bottomTags: string[];
}

// ------------------------------------------------------------
// WHY CHOOSE US SECTION
// ------------------------------------------------------------

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ForgeFitWhyChooseUsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  scriptText: string;
  bottomTagline: string;
  features: WhyChooseUsFeature[];
}

// ------------------------------------------------------------
// TRAINING PROGRAMS SECTION
// ------------------------------------------------------------

export interface TrainingProgram {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  url: string;
}

export interface ForgeFitTrainingData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  programs: TrainingProgram[];
  buttonText: string;
  buttonUrl: string;
  buttonSideLines?: boolean;
}

// ------------------------------------------------------------
// PROCESS / HOW IT WORKS SECTION
// ------------------------------------------------------------

export interface ProcessStep {
  id: string;
  icon: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface ForgeFitProcessData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  steps: ProcessStep[];
  image: string;
  imageAlt: string;
}

// ------------------------------------------------------------
// COUNTER / STATS SECTION
// ------------------------------------------------------------

export interface CounterStat {
  id: string;
  value: string;
  suffix: string;
  label: string;
  icon: string;
}

export interface ForgeFitCounterData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  backgroundImage: string;
  stats: CounterStat[];
}

// ------------------------------------------------------------
// TESTIMONIALS SECTION
// ------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  image: string;
  imageAlt?: string;
  rating: number;
  text: string;
}

export interface ForgeFitTestimonialsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description?: string;
  testimonials: Testimonial[];
}

// ------------------------------------------------------------
// BLOG SECTION
// ------------------------------------------------------------

export interface BlogPost {
  id: string;
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  day: string;
  month: string;
  author: string;
  title: string;
  excerpt: string;
  url: string;
  readMoreText: string;
  content?: string;
  tags?: string[];
}

export interface ForgeFitBlogData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  blogs: BlogPost[];
  buttonText: string;
  buttonUrl: string;
}

export interface ForgeFitBlogDetailData {
  posts: BlogPost[];
}

export interface ForgeFitBlogGridData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  posts: BlogPost[];
}

// ------------------------------------------------------------
// TEAM SECTION
// ------------------------------------------------------------

export interface TeamMember {
  id: string;
  image: string;
  imageAlt: string;
  name: string;
  role: string;
  bio?: string;
  experience?: string;
  specialties?: string[];
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface ForgeFitTeamData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  members: TeamMember[];
}

export interface ForgeFitTeamDetailData {
  members: TeamMember[];
}

// ------------------------------------------------------------
// SERVICE / TRAINING DETAIL
// ------------------------------------------------------------

export interface ServiceDetailItem {
  id: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  level: string;
  features: { id: string; text: string }[];
  schedule: { id: string; day: string; time: string }[];
}

export interface ForgeFitServiceDetailData {
  services: ServiceDetailItem[];
}

// ------------------------------------------------------------
// CONTACT SECTION
// ------------------------------------------------------------

export interface ContactInfo {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface ForgeFitContactData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  contactInfo: ContactInfo[];
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  submitText: string;
}

// ------------------------------------------------------------
// SITEMAP PAGE
// ------------------------------------------------------------

export interface SitemapLink {
  id: string;
  label: string;
  url: string;
}

export interface SitemapCategory {
  id: string;
  title: string;
  links: SitemapLink[];
}

export interface ForgeFitSitemapData {
  categories: SitemapCategory[];
}

// ------------------------------------------------------------
// GLOBAL UI STRINGS
// ------------------------------------------------------------

export interface GlobalUIData {
  loading: string;
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    homeButtonText: string;
    homeButtonUrl: string;
  };
}

// ------------------------------------------------------------
// ROOT TEMPLATE DATA INTERFACE
// ------------------------------------------------------------

export interface ForgeFitTemplateData {
  common: {
    globalUI: GlobalUIData;
    breadcrumbs: {
      AboutBreadcrumb?: BreadcrumbData;
      WhyChooseUsBreadcrumb?: BreadcrumbData;
      ServicesBreadcrumb?: BreadcrumbData;
      BlogBreadcrumb?: BreadcrumbData;
      ContactBreadcrumb?: BreadcrumbData;
      GalleryBreadcrumb?: BreadcrumbData;
      PricingBreadcrumb?: BreadcrumbData;
      TestimonialsBreadcrumb?: BreadcrumbData;
      FAQBreadcrumb?: BreadcrumbData;
      [key: string]: BreadcrumbData | undefined;
    };
    Footer: ForgeFitFooterData;
  };
  categories: {
    ForgeFit: {
      templateComponents?: {
        ForgeFit?: {
          shared?: Record<string, string>;
          pages?: Record<string, { components: { key: string; component: string }[] }>;
        };
      };
      sections: {
        TopBar:            { variants: Record<string, TopBarData> };
        Header:            { variants: Record<string, HeaderData> };
        Hero:              { variants: Record<string, ForgeFitHeroData> };
        AboutUs:           { variants: Record<string, ForgeFitAboutData> };
        AboutPageContent:  { variants: Record<string, ForgeFitAboutPageContentData> };
        WhyChooseUs:       { variants: Record<string, ForgeFitWhyChooseUsData> };
        Training:          { variants: Record<string, ForgeFitTrainingData> };
        Process:           { variants: Record<string, ForgeFitProcessData> };
        Counter:           { variants: Record<string, ForgeFitCounterData> };
        Testimonials:      { variants: Record<string, ForgeFitTestimonialsData> };
        Blog:              { variants: Record<string, ForgeFitBlogData> };
        BlogDetail:        { variants: Record<string, ForgeFitBlogDetailData> };
        Team:              { variants: Record<string, ForgeFitTeamData> };
        TeamDetail:        { variants: Record<string, ForgeFitTeamDetailData> };
        ServiceDetail:     { variants: Record<string, ForgeFitServiceDetailData> };
        Contact:           { variants: Record<string, ForgeFitContactData> };
        Sitemap:           { variants: Record<string, ForgeFitSitemapData> };
        [key: string]: any;
      };
    };
  };
}
