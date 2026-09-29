'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderData } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!data) return null;

  return (
    <header className="w-full bg-white shadow-md relative z-40">
      <div className="flex items-center justify-between h-20 lg:h-24">
        
        {/* Left Side: Logo with dark slanted background & orange accent */}
        <div className="relative h-full w-72 sm:w-80 lg:w-96 xl:w-[34rem]">
          {/* Orange Background (for the right border effect) */}
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[var(--color-primary)]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
          />
          {/* Dark Background */}
          <div 
            className="absolute top-0 left-0 w-[98%] h-full bg-[#1a202c] flex items-center pl-4 sm:pl-8 lg:pl-12"
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
          >
            <Link href="/" className="relative z-10 block">
              <img 
                src={data.logo} 
                alt={data.logoAlt} 
                className="h-10 sm:h-12 lg:h-20 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Right Side: Nav & Button */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6 xl:gap-16 pr-8 lg:pr-12">
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-4 xl:gap-8">
            {data.navLinks.map((link, index) => {
              const isActive = index === 0; // Just for demo
              return (
                <Link 
                  key={link.id} 
                  href={link.url || '#'}
                  className={`font-semibold text-sm xl:text-base whitespace-nowrap relative group transition-colors duration-300
                    ${isActive ? 'text-[var(--color-primary)]' : 'text-[#1a1a1a] hover:text-[var(--color-primary)]'}
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-primary)]" />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <Link 
            href={data.contactButton.url}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-6 xl:px-8 py-3 flex items-center justify-center gap-2 font-semibold whitespace-nowrap transition-all duration-300"
          >
            {data.contactButton.text}
            <FaArrowRight className="text-sm font-light" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden pr-4 sm:pr-8 flex items-center">
          <button 
            className="text-[var(--color-primary)] text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 gap-4">
          {data.navLinks.map((link, index) => {
            const isActive = index === 0; // Just for demo
            return (
              <Link 
                key={link.id} 
                href={link.url || '#'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-semibold text-base block pb-2 border-b border-gray-100 last:border-0 transition-colors duration-300
                  ${isActive ? 'text-[var(--color-primary)]' : 'text-[#1a1a1a] hover:text-[var(--color-primary)]'}
                `}
              >
                {link.label}
              </Link>
            );
          })}
          
          <Link 
            href={data.contactButton.url}
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-6 py-3 rounded text-center font-semibold mt-2 transition-all duration-300"
          >
            {data.contactButton.text}
          </Link>
        </div>
      )}
    </header>
  );
};
