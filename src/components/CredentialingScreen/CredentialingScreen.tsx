import React from "react";
import { motion } from "framer-motion";
import GetIntouch from "../Contact/ReachUs";

export default function CredentialingScreen() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-500"
        >
          Credentialling
        </motion.h1>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-sm"
        >
          <p className="leading-relaxed text-lg">
            At <span className="font-semibold">TJANE Health Consulting</span>, we are committed to delivering exceptional credentialing and
            administrative support services to healthcare providers nationwide. We
            understand that the world of healthcare compliance, enrollment, and
            provider credentialing can be complex and time-consuming, and that’s
            exactly why we exist, to make the process seamless for you.
          </p>
        </motion.div>

        {/* Experience & Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-green-200 rounded-2xl p-8 shadow-md"
        >
          <p className="leading-relaxed text-lg">
            Our team of highly skilled specialists brings years of hands-on experience
            across multiple healthcare systems and provider types. We work closely with
            health care operations, private practices, group practices, and healthcare organizations to
            ensure that every credentialing and contracting requirement is handled with
            accuracy and efficiency.
          </p>
          <p className="leading-relaxed text-lg mt-4">
            We stay fully aligned with current industry regulations, payer standards,
            and evolving compliance guidelines so your practice remains protected and
            ready to operate without delays. At TJANE Health Consulting, we measure our
            success by the stability and growth of your practice. That’s why we provide
            customized, detail-driven solutions designed specifically around your
            operational needs.
          </p>
        </motion.div>

        {/* Growth & Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-sm"
        >
          <p className="leading-relaxed text-lg">
            Whether you're establishing a new practice or improving an existing one, we
            are here to streamline your workflow, reduce administrative burdens, and
            support your long-term growth.
          </p>
      
        </motion.div>

        {/* Contact Form */}
        <GetIntouch />
      </div>
    </div>
  );
}
