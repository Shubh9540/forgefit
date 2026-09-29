import { ForgeFitTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MissionSection } from '@/components/sections/MissionSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { ProcessSection } from '@/components/sections/ProcessSection';

export const dynamic = 'force-dynamic';

export default function MissionVisionPage() {
  const templateData = rawData as unknown as ForgeFitTemplateData;
  const commonData = templateData?.common;
  const sectionData = templateData?.categories?.ForgeFit?.sections;
  const breadcrumbData = commonData?.breadcrumbs?.MissionVisionBreadcrumb;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-[var(--color-bg-light)]">
      <TopBar data={sectionData.TopBar?.variants?.ForgeFitTopBar1} />
      <Header data={sectionData.Header?.variants?.ForgeFitHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <MissionSection data={sectionData.Mission?.variants?.ForgeFitMission1} />
      <VisionSection data={sectionData.Vision?.variants?.ForgeFitVision1} />
      <ProcessSection data={sectionData.Process?.variants?.ForgeFitProcess1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
