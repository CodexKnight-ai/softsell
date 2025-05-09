"use client";

import dynamic from 'next/dynamic';

const ChatBot = dynamic(
  () => import('./uicomponents/ChatBot'),
  { ssr: false }
);

export default function ClientChatBotWrapper() {
  return <ChatBot />;
}
