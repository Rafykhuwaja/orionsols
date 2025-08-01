'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Component props interface
interface BadgesProps {
  filenames?: string[];
}

// Default list of badge filenames
const DEFAULT_BADGE_FILENAMES = [
  'badge-top-digital-marketing-companies-2024.png',
  'clutch-social-badge.png',
  'DesignRush-Top-Design-Agencies-in-Georgia.png',
  'hub-social-badge.png',
  'itfirms-top-digital-marketing-companies-badge-2023.png',
  'upcity-dm-badge.png',
  'upfirms-seo-agency.png',
  'upfirms-web-development.png',
  'web-design-badge.png'
];

// Function to generate alt text from filename
const generateAltText = (filename: string): string => {
  return filename
    .replace(/\.[^/.]+$/, '') // Remove file extension
    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of children
      delayChildren: 0.2
    }
  }
};

// Animation variants for individual badge items
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Badges: React.FC<BadgesProps> = ({ filenames = DEFAULT_BADGE_FILENAMES }) => {
  return (
    <section className="py-16 px-4">
      {/* Section title */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-[#b8a9fe] mb-4">Our Badges</h2>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          Recognition and awards from industry leaders that showcase our expertise and commitment to excellence
        </p>
      </motion.div>

      {/* Animated badge grid container */}
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {filenames.map((filename, index) => {
            // Generate alt text for accessibility
            const altText = generateAltText(filename);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.08,
                  y: -5,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center p-6 rounded-xl shadow-sm 
                          hover:shadow-xl transition-all duration-300 ease-out
                          cursor-pointer overflow-hidden"
              >
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Next.js Image component with grayscale effect */}
                <div className="relative z-10 w-full h-32 flex items-center justify-center">
                  <Image
                    src={`/badges/${filename}`}
                    alt={altText}
                    width={120}
                    height={80}
                    className="object-contain max-w-full h-auto filter grayscale 
                              group-hover:filter-none transition-all duration-500 ease-out
                              drop-shadow-sm group-hover:drop-shadow-md"
                    style={{
                      maxHeight: '100px',
                      width: 'auto'
                    }}
                  />
                </div>

                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              bg-gradient-to-r from-transparent via-white/20 to-transparent
                              transform -skew-x-12 -translate-x-full group-hover:translate-x-full
                              transition-transform duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    
    </section>
  );
};

export default Badges;