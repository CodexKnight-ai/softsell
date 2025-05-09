"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ChatIconProps {
  isOpen: boolean;
  onClick: () => void;
  unreadMessages: number;
}

const ChatIcon: React.FC<ChatIconProps> = ({ isOpen, onClick, unreadMessages }) => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="relative">
        {/* Decorative outer ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"
          style={{
            padding: '3px',
            animationDuration: '3s',
            filter: 'blur(3px)',
            opacity: 0.7
          }}
        />

        <button
          type="button"
          onClick={onClick}
          className="relative bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.2)'
          }}
        >
          <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gray-900 to-gray-800" />

          <div className="relative z-10 flex items-center justify-center">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </>
            )}
          </div>
        </button>

        {/* Unread messages badge */}
        {!isOpen && unreadMessages > 0 && (
          <motion.div
            className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            style={{
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)'
            }}
          >
            {unreadMessages}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ChatIcon;
