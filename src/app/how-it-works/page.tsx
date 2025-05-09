import React from 'react';
import HowItWorks from '@/components/HowItWorks';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-[family-name:var(--font-geist-sans)]">
      {/* Simple Header */}
      <header className="py-6 px-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
            SoftSell
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              About
            </a>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        <HowItWorks />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-12 px-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 SoftSell. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
