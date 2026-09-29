import React from 'react';
import { ForgeFitWhyChooseUsData } from '@/types/templates.types';
import {
  FaUsers, FaClipboardList, FaDumbbell,
  FaChartLine, FaHeartbeat, FaShieldAlt
} from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaClipboardList': return <FaClipboardList />;
    case 'FaDumbbell': return <FaDumbbell />;
    case 'FaChartLine': return <FaChartLine />;
    case 'FaHeartbeat': return <FaHeartbeat />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    default: return null;
  }
};

export const WhyChooseUsSection = ({ data }: { data?: ForgeFitWhyChooseUsData }) => {
  if (!data) return null;
  return (
    <section
      className="relative bg-white py-12 lg:py-12 mb-12 lg:mb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-8 items-stretch">

          {/* LEFT: Content */}
          <div className="flex flex-col justify-center pr-0 lg:pr-4">

            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#1a1a1a] uppercase">
                {data.subtitle}
              </span>
              <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-[50px] lg:text-[56px] font-black text-[#1a1a1a] leading-[1.1] mb-6">
              {data.titlePart1}
              <br />
              <span className="text-[var(--color-accent)] block mt-2">{data.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-[#6b7280] text-sm md:text-base leading-relaxed mb-12 max-w-[500px]">
              {data.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-12">
              {data.features.map((feature) => (
                <div key={feature.id} className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#fff4e6] flex items-center justify-center text-[var(--color-accent)] text-[22px] shrink-0">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-[15px] mb-2">{feature.title}</h3>
                    <p className="text-[#9ca3af] text-[13px] leading-relaxed pr-2">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tagline */}
            <div className="flex items-center gap-4 mt-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#9ca3af] uppercase whitespace-nowrap">
                {data.bottomTagline}
              </span>
              <div className="w-full h-[1px] bg-gray-200 max-w-[150px]" />
            </div>
          </div>

          {/* RIGHT: Empty to show background */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </section>
  );
};
