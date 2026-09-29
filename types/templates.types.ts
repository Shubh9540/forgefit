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

export interface ForgeFitMissionData {
  backgroundNumber: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt: string;
}

export interface ForgeFitVisionData {
  backgroundNumber: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description1: string;
  description2: string;
  image: string;
  imageAlt: string;
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
// TEAM SECTION
// ------------------------------------------------------------

export interface SocialLink {
  id: string;
  icon: string;
  url: string;
}

export interface TeamMemberQuickInfo {
  position: string;
  experience: string;
  specialization: string;
  certification: string;
  location: string;
}

export interface TeamMemberExpertise {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  shortDescription: string;
  quote: string;
  biography: string;
  experience: string;
  certification: string;
  specialization: string;
  trainingStyle: string;
  quickInfo: TeamMemberQuickInfo;
  expertise: TeamMemberExpertise[];
  social: SocialLink[];
}

export interface ForgeFitTeamData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  members: TeamMember[];
}

export interface ForgeFitTeamDetailData {
  teamMemberId?: string;
  // Note: Detail pages typically read directly from the main list.
  // We can pass the whole member object to the detail component.
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
// TRAINING DETAIL SECTION
// ------------------------------------------------------------

export interface TrainingDetailFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TrainingDetailItem {
  id: string;
  slug: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  overviewFeatures: TrainingDetailFeature[];
  
  programType: string;
  level: string;
  duration: string;
  trainerSupport: string;
  equipment: string;
  location: string;
  suitableFor: { id: string; text: string }[];
  
  image1: string;
  image2: string;
  highlightsSubtitle: string;
  highlightsTitlePart1: string;
  highlightsTitleHighlight: string;
  highlights: TrainingDetailFeature[];

  bannerSubtitle: string;
  bannerTitlePart1: string;
  bannerTitleHighlight: string;
  bannerDescription: string;
  bannerBgImage: string;
}

export interface ForgeFitTrainingDetailData {
  programs: TrainingDetailItem[];
}


// ------------------------------------------------------------
// CONTACT SECTION
// ------------------------------------------------------------

export interface ContactInfo {
  id: string;
  icon: string;
  title: string;
  lines: string[];
}

export interface ForgeFitContactData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  contactInfo: ContactInfo[];
  socialLinks: { id: string; icon: string; url: string }[];
  
  formSubtitle: string;
  formTitlePart1: string;
  formTitleHighlight: string;
  formDescription: string;
  submitText: string;
}

export interface ForgeFitContactLocationData {
  mapUrl: string;
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage: string;
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
// PRICING SECTION
// ------------------------------------------------------------

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
}

export interface PricingCardsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
  plans: PricingPlan[];
}

export interface PricingFeatureRow {
  id: string;
  featureName: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
  elite: string | boolean;
}

export interface PricingTableData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  plans: string[];
  features: PricingFeatureRow[];
}


// ------------------------------------------------------------
// CONSULTATION SECTION
// ------------------------------------------------------------

export interface ConsultationFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ConsultationTopData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  features: ConsultationFeature[];
  formSubtitle: string;
  formTitlePart1: string;
  formTitleHighlight: string;
  formDescription: string;
  buttonText: string;
  privacyText: string;
}

export interface ConsultationStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export interface ConsultationBottomData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  steps: ConsultationStep[];
  image: string;
  imageAlt: string;
  imageOverlayText: string;
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
        Mission:           { variants: Record<string, ForgeFitMissionData> };
        Vision:            { variants: Record<string, ForgeFitVisionData> };
        Training:          { variants: Record<string, ForgeFitTrainingData> };
        Process:           { variants: Record<string, ForgeFitProcessData> };
        Team:              { variants: Record<string, ForgeFitTeamData> };
        TeamDetail:        { variants: Record<string, ForgeFitTeamDetailData> };
        Counter:           { variants: Record<string, ForgeFitCounterData> };
        Testimonials:      { variants: Record<string, ForgeFitTestimonialsData> };
        Blog:              { variants: Record<string, ForgeFitBlogData> };
        BlogDetail:        { variants: Record<string, ForgeFitBlogDetailData> };
        TrainingDetail:    { variants: Record<string, ForgeFitTrainingDetailData> };
        Contact:           { variants: Record<string, ForgeFitContactData> };
        ContactLocation:   { variants: Record<string, ForgeFitContactLocationData> };
        Sitemap:           { variants: Record<string, ForgeFitSitemapData> };
        PricingCards:      { variants: Record<string, PricingCardsData> };
        PricingTable:      { variants: Record<string, PricingTableData> };
        ConsultationTop:   { variants: Record<string, ConsultationTopData> };
        ConsultationBottom:{ variants: Record<string, ConsultationBottomData> };
        [key: string]: any;
      };
    };
  };
}
