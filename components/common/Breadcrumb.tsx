import React from 'react';
import Link from 'next/link';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import { BreadcrumbData } from '@/types/templates.types';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section
      className="relative w-full h-44 md:h-52 lg:h-60 flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/main logo/breadcrumb.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#051024]/70 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 px-4">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-primary)] tracking-widest uppercase">
          {data.title}
        </h1>

        {/* Breadcrumb Paths */}
        <nav className="flex items-center gap-2 text-sm text-white/80">
          {data.paths.map((path, index) => {
            const isLast = index === data.paths.length - 1;
            return (
              <React.Fragment key={index}>
                {index === 0 ? (
                  path.url ? (
                    <Link
                      href={path.url}
                      className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors"
                    >
                      <FaHome className="text-xs" />
                      <span>{path.label}</span>
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1">
                      <FaHome className="text-xs" />
                      <span>{path.label}</span>
                    </span>
                  )
                ) : isLast ? (
                  <span className="text-white/60">{path.label}</span>
                ) : (
                  <Link
                    href={path.url || '#'}
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    {path.label}
                  </Link>
                )}
                {!isLast && (
                  <FaChevronRight className="text-[10px] text-white/40" />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
