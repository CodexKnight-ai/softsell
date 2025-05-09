"use client";

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// @ts-ignore - uuid doesn't have proper types in this project yet
import ChatIcon from './ChatIcon';
import ChatWindow from './ChatWindow';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);

  // Clear messages when the component mounts (page refresh)
  useEffect(() => {
    // Reset messages to empty array on page load/refresh
    setMessages([]);
  }, []);

  // Track unread messages when chat is closed
  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'assistant') {
        setUnreadMessages((prev) => prev + 1);
      }
    }
  }, [messages, isOpen]);

  // Reset unread messages when chat is opened
  useEffect(() => {
    if (isOpen) {
      setUnreadMessages(0);
    }
  }, [isOpen]);

  const toggleChat = () => {
    // If we're closing the chat, clear the messages
    if (isOpen) {
      setMessages([]);
      setUnreadMessages(0);
    }
    setIsOpen(!isOpen);
  };

  const handleFaqSelect = async (question: string) => {
    if (isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: question,
      id: uuidv4(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    await processUserMessage(userMessage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue.trim(),
      id: uuidv4(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    await processUserMessage(userMessage);
  };

  const processUserMessage = async (userMessage: Message) => {
    try {
      // Format messages for API
      const apiMessages = [...messages, userMessage].map(({ role, content }) => ({
        role: role === 'user' ? 'user' : 'model',
        content,
      }));

      // Call API with streaming response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error details:', errorData);
        throw new Error(`API error: ${errorData.details || response.statusText}`);
      }

      // We'll add the assistant message after we get the response
      // No need to add an empty message first

      try {
        // Get the JSON response
        const jsonResponse = await response.json();
        console.log('API response:', jsonResponse);

        // Extract the text from the response
        let responseText = '';

        if (jsonResponse.candidates && jsonResponse.candidates[0]?.content?.parts) {
          responseText = jsonResponse.candidates[0].content.parts
            .filter((part: any) => part.text)
            .map((part: any) => part.text)
            .join('');
        } else if (jsonResponse.error) {
          // Handle API error response
          throw new Error(jsonResponse.error.message || 'API error');
        }

        if (!responseText) {
          console.warn('No text content found in response:', jsonResponse);
          responseText = "I'm here to help with questions about SoftSell. How can I assist you today?";
        }

        // Add the assistant message with the response text
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: responseText,
            id: uuidv4(),
          },
        ]);
      } catch (error) {
        console.error('Error processing response:', error);

        // Add error message
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: 'Sorry, I encountered an error while generating a response. Please try again.',
            id: uuidv4(),
          },
        ]);
      }
    } catch (error) {
      console.error('Error sending message:', error);

      // Check if it's an API key error
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const isApiKeyError = errorMessage.includes('API key not valid');

      // Add appropriate error message
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: isApiKeyError
            ? 'Sorry, there seems to be an issue with the API configuration. Please contact the site administrator.'
            : 'Sorry, I encountered an error. Please try again later.',
          id: uuidv4(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ChatIcon
        isOpen={isOpen}
        onClick={toggleChat}
        unreadMessages={unreadMessages}
      />
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        handleFaqSelect={handleFaqSelect}
      />
    </>
  );
};

export default ChatBot;
