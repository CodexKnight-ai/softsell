"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  // Use refs for intersection observer to optimize animations
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Define animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren",
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.5
      }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.8,
        delay: 0.2
      }
    },
  };

  return (
    <section
      ref={sectionRef}
      className="px-6 py-16 md:px-12 lg:px-24 relative overflow-hidden theme-transition"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 z-10"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight theme-transition"
              variants={itemVariants}
            >
              <span className="sr-only">SoftSell - </span>
              Turn Unused Licenses into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text transform-gpu backface-hidden">
                Revenue
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 theme-transition"
              variants={itemVariants}
            >
              SoftSell helps businesses recover costs on unused software by
              reselling licenses <span className="font-medium">securely</span>,{" "}
              <span className="font-medium">fast</span>, and{" "}
              <span className="font-medium">compliantly</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  mass: 0.5
                }}
                className="transform-gpu will-change-transform"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl theme-transition"
                  aria-label="Get Started with SoftSell"
                >
                  Get Started <span className="ml-2" aria-hidden="true">→</span>
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="transform-gpu"
              >
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-all duration-300 theme-transition"
                  aria-label="Learn how SoftSell works"
                >
                  How it works?
                </a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 md:gap-12"
              variants={containerVariants}
              aria-label="SoftSell key statistics"
            >
              <motion.div className="flex items-center group" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:bg-green-200 dark:group-hover:bg-green-800/40" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:text-green-700 dark:group-hover:text-green-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c.7-1.2 2-2 3.5-2a4 4 0 110 8c-1.5 0-2.8-.8-3.5-2m0-4v8"
                    />
                  </svg>
                </div>
                <dl>
                  <dt className="sr-only">Resold License Value</dt>
                  <dd className="font-bold text-xl text-gray-800 dark:text-white theme-transition">$25M+</dd>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm theme-transition">
                    Resold License Value
                  </dd>
                </dl>
              </motion.div>

              <motion.div className="flex items-center group" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 transition-all duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7H8a4 4 0 00-4 4v2a4 4 0 004 4h8a4 4 0 004-4v-2a4 4 0 00-4-4z"
                    />
                  </svg>
                </div>
                <dl>
                  <dt className="sr-only">Supported Vendors</dt>
                  <dd className="font-bold text-xl text-gray-800 dark:text-white theme-transition">100+</dd>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm">
                    Supported Vendors
                  </dd>
                </dl>
              </motion.div>

              <motion.div className="flex items-center group" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-4 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/40" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600 transition-all duration-300 group-hover:text-yellow-700 dark:group-hover:text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <dl>
                  <dt className="sr-only">Payout Success Rate</dt>
                  <dd className="font-bold text-xl text-gray-800 dark:text-white theme-transition">98%</dd>
                  <dd className="text-gray-600 dark:text-gray-400 text-sm">
                    Payout Success Rate
                  </dd>
                </dl>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-md">
              <Image
                src="/heroMockup.png"
                alt="SoftSell application interface showing license management dashboard"
                width={500}
                height={900}
                className="object-contain theme-transition"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Decorative elements with aria-hidden */}
              <div className="absolute -top-6 -right-6 w-12 h-12 text-gray-400 dark:text-gray-600 theme-transition" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 2L20.5 8M20.5 2L14.5 2M20.5 2L13 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-6 -left-6 w-12 h-12 text-gray-400 dark:text-gray-600 theme-transition" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements with reduced-motion preference support and performance optimizations */}
      <div
        className="absolute top-1/4 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-5 dark:opacity-10 animate-blob motion-reduce:animate-none transform-gpu will-change-transform theme-transition"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/3 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-5 dark:opacity-10 animate-blob animation-delay-2000 motion-reduce:animate-none transform-gpu will-change-transform theme-transition"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/2 right-1/4 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-5 dark:opacity-10 animate-blob animation-delay-4000 motion-reduce:animate-none transform-gpu will-change-transform theme-transition"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Hero;
