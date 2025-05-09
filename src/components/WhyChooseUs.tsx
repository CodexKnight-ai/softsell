"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import {
  FastPayoutIcon,
  SecureIcon,
  SupportIcon,
  MarketplaceIcon
} from './icons';

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
      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative glow-cursor-container overflow-visible"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        scale: 1.03,
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
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl mb-6 text-blue-600 dark:text-blue-400">
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

const WhyChooseUs: React.FC = () => {
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Spline 3D Component - Left Side */}
          <motion.div
            className="w-full lg:w-3/5 h-full rounded-2xl overflow-hidden shadow-xl flex items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Spline scene="https://prod.spline.design/9ZA7N8zKNjhd67Bh/scene.splinecode" />
          </motion.div>

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
                Why SoftSell
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
