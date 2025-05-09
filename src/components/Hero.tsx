"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Software <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">advice</span> to get you back where <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">you belong.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Apply <span className="font-medium">quickly</span> and <span className="font-medium">easily</span> for the most exciting contract and temp roles on the <span className="font-medium">market</span>.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Get Started <span className="ml-2">→</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  How it works?
                </a>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
  className="flex flex-wrap gap-8 md:gap-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c.7-1.2 2-2 3.5-2a4 4 0 110 8c-1.5 0-2.8-.8-3.5-2m0-4v8" />
      </svg>
    </div>
    <div>
      <div className="font-bold text-xl">$25M+</div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">Resold License Value</div>
    </div>
  </div>

  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7H8a4 4 0 00-4 4v2a4 4 0 004 4h8a4 4 0 004-4v-2a4 4 0 00-4-4z" />
      </svg>
    </div>
    <div>
      <div className="font-bold text-xl">100+</div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">Supported Vendors</div>
    </div>
  </div>

  <div className="flex items-center">
    <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <div className="font-bold text-xl">98%</div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">Payout Success Rate</div>
    </div>
  </div>
</motion.div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <Image
                src="/heroMockup.png"
                alt="SoftSell App Interface"
                width={500}
                height={900}
                className="object-contain"
                priority
              />

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 text-gray-300 dark:text-gray-600">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 2L20.5 8M20.5 2L14.5 2M20.5 2L13 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="absolute -bottom-6 -left-6 w-12 h-12 text-gray-300 dark:text-gray-600">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/2 right-1/4 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Hero;
