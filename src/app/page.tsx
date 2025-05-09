"use client";

import { useEffect } from "react";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, 
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative">
          <Hero />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Contact Form Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
