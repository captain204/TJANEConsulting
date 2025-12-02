"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // 👉 Added
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative lg:min-h-screen overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/heroo.jpg.webp')",
        }}
      ></motion.div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:py-16">
        <div className="text-center max-w-5xl mx-auto mt-20 space-y-8">
          
          {/* Main Heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 lg:mb-10 leading-tight"
          >
            Your Partner In Growth!
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg lg:text-xl text-slate-200 mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            <h1 className="text-xl mx-4  md:mx-0">
              We are dedicated to optimizing your business from the foundation
              up. We don't just find problems, we implement sustainable
              solutions that streamline workflows, maximize revenue, and reduce
              burnout. Ready to transform your practice? Schedule a strategic
              consultation today. Let us handle the business of healthcare so
              you can focus on your patients.
            </h1>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-600 text-lg hover:bg-green-700 text-white px-4 md:py-3 py-2 rounded-full font-extrabold cursor-pointer transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Bottom Link */}
          <motion.a
          href="/about-us"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center md:mb-0 mb-20"
          >
            <button className="flex md:items-center text-left space-x-2 cursor-pointer text-white hover:text-green-400 font-extrabold text-lg transition-colors group">
              <span>Discover How We Transform healthcare buissiness Operations</span>
              <motion.svg
                whileHover={{ x: 5 }}
                className="w-6 h-6 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
}


