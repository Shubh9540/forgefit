import React from 'react';
import { ForgeFitTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { TrainingPrograms } from '@/components/sections/TrainingPrograms';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Counter } from '@/components/sections/Counter';
import { Testimonials } from '@/components/sections/Testimonials';
import { BlogSection } from '@/components/sections/BlogSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: ForgeFitTemplateData = rawData as any;
  const sectionData = templateData?.categories?.ForgeFit?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-white p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.ForgeFitTopBar1} />
      <Header data={sectionData.Header?.variants?.ForgeFitHeader1} />
      <HeroSection data={sectionData.Hero?.variants?.ForgeFitHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.ForgeFitAbout1} />
      <TrainingPrograms data={sectionData.Training?.variants?.ForgeFitTraining1} />
      <ProcessSection data={sectionData.Process?.variants?.ForgeFitProcess1} />
      <Testimonials data={sectionData.Testimonials?.variants?.ForgeFitTestimonials1} />
      <Counter data={sectionData.Counter?.variants?.ForgeFitCounter1} />
      <BlogSection data={sectionData.Blog?.variants?.ForgeFitBlog1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
