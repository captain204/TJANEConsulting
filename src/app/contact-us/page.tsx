"use client";

import Form from "@/components/Contact/Form";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 relative overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center px-6 md:px-16 text-center text-white"
        style={{ backgroundImage: "url('/heroo.jpg.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto mt-40 w-full">
       
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-center md:ml-0 ml-2"
          >
            Questions? Comments? Free
            Evaluation?
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed text-left md:ml-0 ml-2"
          >
            Healthcare Information Services can be the single point of contact
            for addressing your medical billing and cash flow problems. Please
            complete this form and let us start working with you today!
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-40 text-left"
          >
            <div className="flex flex-col md:items-end border-b md:border-b-0 md:border-r border-gray-500 md:pr-10 pb-4 md:pb-0">
              <div className="flex items-center  text-center  justify-center space-x-2 text-green-400 mb-1">
                <MapPin className="w-6 h-6" />
                <h1 className="font-semibold md:text-2xl">TJane Headquarters</h1>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-snug text-center md:text-right">
                350 S Northwest Hwy #200 <br /> Park Ridge, IL 60068
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start md:pl-10">
              <div className="flex items-center space-x-2 text-green-400 mb-1">
                <Phone className="w-6 h-6" />
                <span className="font-semibold md:text-2xl">Call Today</span>
              </div>
              <p className="text-white font-semibold text-base md:text-lg">
                847-720-7499
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
  <Form />
    </section>
  );
}
