import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import BottomTabs from "@/components/BottomTabs";
import { Toaster } from "sonner";
import SplashWrapper from "@/components/Splash/SplashWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TJANE Consulting",
  description: "Your Partner In Growth!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >

          <SplashWrapper>
        <Navbar />

        <div className="max-w-7xl mx-auto px-2 w-full">
          {children}
          <NewsletterSubscribe />
        </div>

        <Footer />
        <BottomTabs />
        </SplashWrapper>

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
