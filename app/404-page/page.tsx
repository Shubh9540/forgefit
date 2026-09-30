import React from 'react';
import { ForgeFitTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { NotFoundContent } from '@/components/sections/NotFoundContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function NotFoundPage() {
  const templateData: ForgeFitTemplateData = rawData as any;
  const sectionData = templateData?.categories?.ForgeFit?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-[#0f172a] p-10">Loading Data...</div>;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.ForgeFitTopBar1} />
      <Header data={sectionData.Header?.variants?.ForgeFitHeader1} />
      <NotFoundContent data={sectionData.NotFoundContent?.variants?.ForgeFit404} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
