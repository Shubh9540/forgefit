import React from 'react';
import { ForgeFitTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LegalContent } from '@/components/sections/LegalContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function PrivacyPolicyPage() {
  const templateData: ForgeFitTemplateData = rawData as any;
  const sectionData = templateData?.categories?.ForgeFit?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-[#0f172a] p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.ForgeFitTopBar1} />
      <Header data={sectionData.Header?.variants?.ForgeFitHeader1} />
      <Breadcrumb data={commonData.breadcrumbs['PrivacyBreadcrumb']} />
      <LegalContent data={sectionData.LegalContent?.variants?.ForgeFitPrivacyPolicy} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
