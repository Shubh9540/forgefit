'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ForgeFitAwardsCertificationsData } from '@/types/templates.types';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
export const AwardsCertifications = ({ data }: { data?: ForgeFitAwardsCertificationsData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  if (!data) return null;

  return (
    <section className="py-16 lg:py-12 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-10 items-center justify-between">

          {/* Left Text Content */}
          <div className="w-full xl:w-[350px] shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[2px] bg-[#ff4d15]"></div>
              <span className="text-xs font-bold text-[#64748b] tracking-[0.2em] uppercase">
                {data.subtitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-4xl font-bold text-[#0f172a] leading-tight mb-6">
              {data.titlePart1} <br /> <span className="text-[#ff4d15]">{data.titleHighlight}</span>
            </h2>

            <p className="text-[#64748b] text-sm md:text-base mb-8 leading-relaxed pr-4">
              {data.description}
            </p>

            <Link
              href={data.buttonUrl}
              className="inline-flex items-center gap-2 bg-[#ff4d15] text-white font-semibold px-6 py-3 rounded hover:bg-[#e03a00] transition-colors"
            >
              {data.buttonText}
              <FaArrowRight />
            </Link>
          </div>

          {/* Right Certifications Grid */}
          <div className="w-full flex-1 relative px-4 md:px-12 py-4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4 touch-pan-y mt-8 xl:mt-0">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                    <div className="bg-white rounded p-3 sm:p-5 xl:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow flex flex-col items-center sm:justify-between h-full border border-gray-100">
                  <div className="relative w-full h-14 sm:h-20 mb-3 sm:mb-5 shrink-0">
                    <Image
                      src={`${cert.image}?v=2`}
                      alt={cert.imageAlt}
                      fill
                      className="object-contain"
                      unoptimized={true}
                    />
                  </div>
                  <div className="flex flex-col items-center sm:flex-1 sm:justify-end">
                    <h3 className="text-xs sm:text-base xl:text-lg font-bold text-[#0f172a] mb-2 sm:mb-3 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="w-6 sm:w-8 h-[2px] bg-[#ff4d15] mx-auto mb-2 sm:mb-3 shrink-0"></div>
                    <p className="text-[#64748b] text-[10px] sm:text-xs xl:text-sm leading-snug hidden sm:block">
                      {cert.description}
                    </p>
                  </div>
                </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {isMounted && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#ff4d15] hover:bg-[#ff4d15] hover:text-white transition-colors duration-300 z-10"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#ff4d15] hover:bg-[#ff4d15] hover:text-white transition-colors duration-300 z-10"
                >
                  <FaArrowRight />
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
