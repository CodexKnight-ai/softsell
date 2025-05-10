"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  FastPayoutIcon,
  SecureIcon,
  SupportIcon,
  MarketplaceIcon
} from './icons';

// Dynamically import Spline with no SSR to avoid hydration issues and improve initial load time
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[700px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl">
      <div className="animate-pulse text-blue-600 dark:text-blue-400">Loading 3D model...</div>
    </div>
  )
});

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursorRef.current && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Use transform for better performance and smoother animation
      cursorRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full theme-transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`glow-cursor ${isHovered ? 'active' : ''}`}
      />

      <div className="flex flex-col items-start relative z-10">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl mb-6 text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 group-hover:text-blue-700 dark:group-hover:text-blue-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Custom hook to detect screen size
const useScreenSize = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Function to check if screen is desktop size (>= 1024px)
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isDesktop;
};

const WhyChooseUs: React.FC = () => {
  // Use the screen size hook
  const isDesktop = useScreenSize();

  const features = [
    {
      title: "Fast Payouts",
      description: "Get paid within 24 hours of your license being sold, no waiting periods.",
      icon: <FastPayoutIcon className="w-8 h-8" />
    },
    {
      title: "Secure Transactions",
      description: "Bank-level security for all transactions with fraud protection included.",
      icon: <SecureIcon className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist you.",
      icon: <SupportIcon className="w-8 h-8" />
    },
    {
      title: "Global Marketplace",
      description: "Access to thousands of buyers worldwide looking for software licenses.",
      icon: <MarketplaceIcon className="w-8 h-8" />
    }
  ];

  // Container animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="why-us" className="py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Spline 3D Component - Left Side (Only on Desktop) */}
          {isDesktop ? (
            <motion.div
              className="w-full lg:w-3/5 h-[700px] rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="spline-container">
                <Spline scene="https://prod.spline.design/9ZA7N8zKNjhd67Bh/scene.splinecode" />
              </div>
            </motion.div>
          ) : (
            // Placeholder for mobile - much lighter weight
            <motion.div
              className="w-full mb-8 rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl flex items-center justify-center h-[400px]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Trusted Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">Join thousands of businesses already using SoftSell</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Why SoftSell Content - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="text-left mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-3 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
              >
                Why SoftSell ?
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                The Smarter Way to Sell Software Licenses
              </motion.h2>

              <motion.p
                className="max-w-2xl text-xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We make selling unused software licenses simple, secure, and profitable.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
