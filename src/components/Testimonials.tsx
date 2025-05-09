"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  review: string;
  image?: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  review,
  image,
  index
}) => {
  // Generate initials if no image is provided
  const initials = name.split(' ').map(n => n[0]).join('');

  // Random pastel background colors for avatar initials
  const bgColors = [
    'bg-blue-100 text-blue-600',
    'bg-green-100 text-green-600',
    'bg-purple-100 text-purple-600',
    'bg-amber-100 text-amber-600',
    'bg-rose-100 text-rose-600',
  ];

  const avatarBg = bgColors[index % bgColors.length];

  return (
    <motion.div
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
    >
      {/* Quote Icon */}
      <div className="text-blue-500 dark:text-blue-400 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow italic">
        &ldquo;{review}&rdquo;
      </p>

      {/* Customer Info */}
      <div className="flex items-center mt-4">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full mr-4"
          />
        ) : (
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4 ${avatarBg}`}>
            {initials}
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      company: "TechSolutions",
      review: "SoftSell helped us recover value from unused licenses quickly and easily. Highly recommend!",
      image: undefined
    },
    {
      name: "Jane Smith",
      role: "CFO",
      company: "CreativeCo",
      review: "A fantastic service for companies looking to sell software licenses they no longer need.",
      image: undefined
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
          >
            Testimonials
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by businesses of all sizes to sell their unused software licenses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              review={testimonial.review}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
