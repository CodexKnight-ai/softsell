"use client";

import dynamic from 'next/dynamic';

// Dynamically import the GoToTop component with no SSR
const GoToTop = dynamic(() => import('./uicomponents/GoToTop'), { ssr: false });

export default function ClientGoToTopWrapper() {
  return <GoToTop />;
}
