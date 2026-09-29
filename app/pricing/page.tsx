import { ForgeFitTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

// Common Components
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';

// Page Specific Components
import { PricingCards } from '@/components/sections/PricingCards';
import { PricingTable } from '@/components/sections/PricingTable';

export const dynamic = 'force-dynamic';

export default function PricingPage() {
  const templateData: ForgeFitTemplateData = rawData as any;
  const sectionData = templateData?.categories?.ForgeFit?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white min-h-screen">
      <TopBar data={sectionData.TopBar?.variants?.ForgeFitTopBar1} />
      <Header data={sectionData.Header?.variants?.ForgeFitHeader1} />
      
      <Breadcrumb data={commonData?.breadcrumbs?.PricingBreadcrumb} />
      
      <PricingCards data={sectionData.PricingCards?.variants?.ForgeFitPricingCards1} />
      <PricingTable data={sectionData.PricingTable?.variants?.ForgeFitPricingTable1} />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
