import React from 'react';
import { ForgeFitTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function WhyChooseUsPage() {
  const templateData: ForgeFitTemplateData = rawData as any;
  const sectionData = templateData?.categories?.ForgeFit?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-white p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.ForgeFitTopBar1} />
      <Header data={sectionData.Header?.variants?.ForgeFitHeader1} />
      <Breadcrumb data={commonData.breadcrumbs['WhyChooseUsBreadcrumb']} />
      <WhyChooseUsSection data={sectionData.WhyChooseUs?.variants?.ForgeFitWhyChooseUs1} />
      <ProcessSection data={sectionData.Process?.variants?.ForgeFitProcess1} />
      <Testimonials data={sectionData.Testimonials?.variants?.ForgeFitTestimonials1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
