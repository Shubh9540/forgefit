import { ForgeFitTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AwardsCounter } from '@/components/sections/AwardsCounter';
import { AwardsMilestones } from '@/components/sections/AwardsMilestones';
import { AwardsCertifications } from '@/components/sections/AwardsCertifications';
import { AwardsCommitment } from '@/components/sections/AwardsCommitment';

export const dynamic = 'force-dynamic';

export default function AwardsPage() {
  const templateData: ForgeFitTemplateData = rawData as any;
  const sectionData = templateData?.categories?.ForgeFit?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.ForgeFitTopBar1} />
      <Header data={sectionData.Header?.variants?.ForgeFitHeader1} />
      <Breadcrumb data={commonData?.breadcrumbs?.AwardsBreadcrumb} />
      <AwardsCounter data={sectionData.AwardsCounter?.variants?.ForgeFitAwardsCounter1} />
      <AwardsMilestones data={sectionData.AwardsMilestones?.variants?.ForgeFitAwardsMilestones1} />
      <AwardsCertifications data={sectionData.AwardsCertifications?.variants?.ForgeFitAwardsCertifications1} />
      <AwardsCommitment data={sectionData.AwardsCommitment?.variants?.ForgeFitAwardsCommitment1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
