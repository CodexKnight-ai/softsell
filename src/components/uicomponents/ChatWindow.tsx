"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: string;
  timestamp?: string;
}

interface ChatWindowProps {
  isOpen: boolean;
  messages: Message[];
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  handleFaqSelect?: (question: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  messages,
  inputValue,
  setInputValue,
  handleSubmit,
  isLoading,
  handleFaqSelect,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [avatarType, setAvatarType] = useState<"female" | "male">("female");

  const messagesWithTimestamps = messages.map((message) => {
    if (!message.timestamp) {
      return {
        ...message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    }
    return message;
  });

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleAvatarType = () => {
    setAvatarType((prev) => (prev === "female" ? "male" : "female"));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 w-80 sm:w-96 h-[550px] bg-gray-900 rounded-xl z-40 flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            boxShadow:
              "0 0 25px rgba(59, 130, 246, 0.6), 0 0 70px rgba(147, 51, 234, 0.4)",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between z-10 relative">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 overflow-hidden p-0.5 shadow-inner shadow-blue-500/50">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/ai.png"
                    alt="AI Assistant"
                    width={36}
                    height={36}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm">SoftSell AI</h3>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                  <span className="text-xs">Online</span>
                </div>
              </div>
            </div>

            {/* Avatar toggle button */}
            <button
              type="button"
              onClick={toggleAvatarType}
              className="ml-4 px-2 py-1 text-xs bg-white/20 hover:bg-white/30 rounded-md"
            >
              Avatar: {avatarType === "female" ? "♀" : "♂"}
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messagesWithTimestamps.length === 0 ? (
              <div className="space-y-4">
                {/* Welcome Message */}
                <motion.div
                  className="flex items-start justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 mr-2 flex-shrink-0">
                    <Image
                      src="/ai.png"
                      alt="Assistant Avatar"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-lg px-4 py-2 text-sm shadow-md max-w-[75%] bg-gray-800 text-gray-100">
                    <p>How can I help you?</p>
                    <div className="text-[10px] text-gray-400 text-right mt-1">
                      {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Buttons */}
                <motion.div
                  className="space-y-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <button
                    type="button"
                    onClick={() => handleFaqSelect && handleFaqSelect("How does SoftSell work?")}
                    className="w-full p-3 bg-gray-800 hover:bg-gray-700 text-white text-left rounded-lg transition-all duration-200 border border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20"
                  >
                    How does SoftSell work?
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFaqSelect && handleFaqSelect("Is it legal and safe to resell software licenses?")}
                    className="w-full p-3 bg-gray-800 hover:bg-gray-700 text-white text-left rounded-lg transition-all duration-200 border border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20"
                  >
                    Is it legal and safe to resell software licenses?
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFaqSelect && handleFaqSelect("How long does it take to get paid?")}
                    className="w-full p-3 bg-gray-800 hover:bg-gray-700 text-white text-left rounded-lg transition-all duration-200 border border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20"
                  >
                    How long does it take to get paid?
                  </button>

                  <button
                    type="button"
                    onClick={() => handleFaqSelect && handleFaqSelect("What if my license is rejected?")}
                    className="w-full p-3 bg-gray-800 hover:bg-gray-700 text-white text-left rounded-lg transition-all duration-200 border border-gray-700 hover:border-blue-500 shadow-md hover:shadow-blue-500/20"
                  >
                    What if my license is rejected?
                  </button>
                </motion.div>
              </div>
            ) : (
              // Regular chat messages when there are messages
              messagesWithTimestamps.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 mr-2 flex-shrink-0">
                      <Image
                        src="/ai.png"
                        alt="Assistant Avatar"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div
                    className={`rounded-lg px-4 py-2 text-sm shadow-md max-w-[75%] ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    {msg.content}
                    <div className="text-[10px] text-gray-400 text-right mt-1">
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 ml-2 flex-shrink-0">
                      <Image
                        src={
                          avatarType === "female"
                            ? "/user-female.png"
                            : "/user-male.png"
                        }
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))
            )}

            {/* AI Thinking Bubble */}
            {isLoading && (
              <motion.div
                className="flex items-start justify-start mt-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 mr-2 flex-shrink-0">
                  <Image
                    src="/ai.png"
                    alt="Assistant Avatar"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-lg px-4 py-2 text-sm shadow-md max-w-[75%] bg-gray-800 text-gray-100">
                  <div className="flex items-center space-x-1">
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-gray-700 bg-gray-800 flex items-center z-10"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;
