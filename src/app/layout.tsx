import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientChatBotWrapper from "@/components/ClientChatBotWrapper";
import ClientGoToTopWrapper from "@/components/ClientGoToTopWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSell - Turn Unused Software Into Revenue",
  description: "SoftSell helps businesses quickly sell their unused licenses for top dollar — safely, easily, and instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="softsell-theme">
          {children}
          <ClientChatBotWrapper />
          <ClientGoToTopWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
