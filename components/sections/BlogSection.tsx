'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ForgeFitBlogData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

export const BlogSection = ({ data }: { data?: ForgeFitBlogData }) => {
  if (!data) return null;

  return (
    <section className="relative bg-white py-16 lg:py-12 overflow-hidden">
      {/* Watermark */}
      <div className="absolute left-0 top-20 text-[10rem] md:text-[14rem] font-black text-gray-50 leading-none select-none z-0 -translate-x-4">
        BLOG
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <SectionHeading
          subtitle={data.subtitle}
          titlePart1={data.titlePart1}
          titleHighlight={data.titleHighlight}
          description={data.description}
        />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-16">
          {data.blogs.slice(0, 3).map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-lg group flex flex-col">
              {/* Image Container with Date Badge */}
              <Link href={blog.url} className="relative h-64 w-full overflow-hidden block">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Date Badge */}
                <div className="absolute top-0 left-6 bg-[var(--color-primary)] text-white text-center py-2 px-4 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold leading-none">{blog.day}</span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase mt-1">{blog.month}</span>
                </div>
              </Link>

              {/* Content Container */}
              <div className="p-8 flex-1 flex flex-col">
                {/* Category with Line */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase">
                    {blog.category}
                  </span>
                  <div className="h-[2px] w-8 bg-[var(--color-primary)]"></div>
                </div>

                {/* Title */}
                <Link href={blog.url} className="mb-4 inline-block">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-tight group-hover:text-[var(--color-primary)] transition-colors">
                    {blog.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <Link href={blog.url} className="mb-6 flex-1 block group">
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-[#1a1a1a] transition-colors">
                    {blog.excerpt}
                  </p>
                </Link>

                {/* Read More Link */}
                <Link
                  href={blog.url}
                  className="inline-flex items-center gap-2 text-[#1a1a1a] font-bold text-sm group-hover:text-[var(--color-primary)] transition-colors mt-auto w-fit"
                >
                  {blog.readMoreText}
                  <FaArrowRight className="text-[var(--color-primary)]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            text={data.buttonText}
            url={data.buttonUrl}
            withSideLines={true}
          />
        </div>
      </div>
    </section>
  );
};
