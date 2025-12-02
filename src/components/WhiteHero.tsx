"use client";

import { Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type HeroSectionProps = {
  breadcrumb?: string;
  title: string;
  subtitle: string;
  backgroundColor?: string;
};

export default function HeroSection({
  breadcrumb = "About Us",
  title,
  subtitle,
  backgroundColor = "bg-gray-50",
}: HeroSectionProps) {
  return (
    <section
      className={`relative ${backgroundColor} py-20 px-6 md:px-16 overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center text-sm text-gray-500 space-x-2 mb-6"
        >
          <Link href="/" className="flex items-center gap-1 hover:text-green-600">
            <Home size={14} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">{breadcrumb}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
