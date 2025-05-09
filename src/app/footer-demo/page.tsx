import React from 'react';
import Footer from '@/components/Footer';

export default function FooterDemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-[family-name:var(--font-geist-sans)] flex flex-col">
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
      <main className="flex-grow py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Footer Demo
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This page demonstrates the SoftSell footer component. Scroll down to see it in action.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            The footer includes company information, navigation links, social media links, and a newsletter subscription form.
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
