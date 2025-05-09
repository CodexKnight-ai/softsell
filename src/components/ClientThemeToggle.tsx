"use client";

import dynamic from 'next/dynamic';

// Use dynamic import with no SSR to ensure the component only runs on the client
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false
});

export default function ClientThemeToggle() {
  return <ThemeToggle />;
}
