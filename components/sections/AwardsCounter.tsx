'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ForgeFitAwardsCounterData } from '@/types/templates.types';
import { FaAward, FaUsers, FaShieldAlt, FaTrophy } from 'react-icons/fa';

// Custom Hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isIntersecting, end, duration]);

  return { count, ref };
};

const AnimatedNumber = ({ value, suffix, isSmall }: { value: string; suffix: string; isSmall?: boolean }) => {
  const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const { count, ref } = useCountUp(isNaN(numValue) ? 0 : numValue, 2500);

  // Format count with commas if the original value had them (simple heuristic)
  const isLarge = value.includes(',');
  const displayCount = isLarge ? count.toLocaleString() : count;

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <h3 className={`font-bold text-[#ff4d15] ${isSmall ? 'text-lg sm:text-xl md:text-3xl' : 'text-xl sm:text-3xl md:text-5xl'}`}>
        {displayCount}
      </h3>
      <span className={`font-bold text-[#ff4d15] ${isSmall ? 'text-sm sm:text-lg md:text-xl' : 'text-lg sm:text-2xl md:text-3xl'}`}>
        {suffix}
      </span>
    </div>
  );
};

const renderIcon = (iconName: string, isSmall?: boolean) => {
  const iconClasses = isSmall 
    ? "w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#ff4d15]" 
    : "w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-[#ff4d15]";
  switch (iconName) {
    case 'FaAward': return <FaAward className={iconClasses} />;
    case 'FaUsers': return <FaUsers className={iconClasses} />;
    case 'FaShieldAlt': return <FaShieldAlt className={iconClasses} />;
    case 'FaTrophy': return <FaTrophy className={iconClasses} />;
    default: return null;
  }
};

export const AwardsCounter = ({ data, isSmall }: { data?: ForgeFitAwardsCounterData; isSmall?: boolean }) => {
  if (!data || !data.stats) return null;

  return (
    <section className="bg-[#f8f9fc] py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {data.stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-row items-center text-left gap-3 sm:gap-6 ${index !== 0 ? 'md:pl-8 lg:border-l lg:border-gray-300' : ''}`}
            >
              <div className="flex-shrink-0">
                {renderIcon(stat.icon, isSmall)}
              </div>
              <div className="flex flex-col">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isSmall={isSmall} />
                <h4 className={`font-bold text-[#0f172a] mt-0 sm:mt-1 leading-tight ${isSmall ? 'text-[11px] sm:text-sm md:text-base' : 'text-[11px] sm:text-lg md:text-xl'}`}>{stat.title}</h4>
                <p className={`text-[#64748b] mt-0 sm:mt-1 hidden sm:block ${isSmall ? 'text-[10px] sm:text-xs' : 'text-[10px] sm:text-sm'}`}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
