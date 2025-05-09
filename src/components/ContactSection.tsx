"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Custom Icons
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseOptions = [
    { value: '', label: 'Select License Type' },
    { value: 'microsoft', label: 'Microsoft' },
    { value: 'adobe', label: 'Adobe' },
    { value: 'autodesk', label: 'Autodesk' },
    { value: 'oracle', label: 'Oracle' },
    { value: 'ibm', label: 'IBM' },
    { value: 'sap', label: 'SAP' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    // License type validation
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <EnvelopeIcon />,
      title: "Email",
      content: "contact@softsell.com",
      link: "mailto:contact@softsell.com"
    },
    {
      icon: <MapPinIcon />,
      title: "Office",
      content: "123 SaaS Street, Tech Valley, CA 94103",
      link: "https://maps.google.com/?q=123+SaaS+Street,+Tech+Valley,+CA+94103"
    },
    {
      icon: <ClockIcon />,
      title: "Hours",
      content: "Monday - Friday: 9AM - 6PM EST",
      link: null
    }
  ];

  return (
    <>
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-3 px-4 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              Contact Us
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let&apos;s Talk About Your Licenses
            </motion.h2>

            <motion.p
              className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Have questions about selling your software licenses? We&apos;re here to help you recover costs quickly and securely.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 md:p-10 h-fit"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {['twitter', 'linkedin', 'facebook'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com/softsell`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social === 'twitter' && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {social === 'linkedin' && (
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        )}
                        {social === 'facebook' && (
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 md:p-10"
            >
              {isSubmitted ? (
                <motion.div
                  className="text-center py-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Your message has been sent successfully. We&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      License Type <span className="text-red-500">*</span>
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.licenseType ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                    >
                      {licenseOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </motion.select>
                    {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01, borderColor: '#3b82f6' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                      placeholder="Tell us about the licenses you want to sell..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <motion.button
                      type="submit"
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-300"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
