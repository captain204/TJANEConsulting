import React from "react";
import { motion } from "framer-motion";
import GetIntouch from "../Contact/ReachUs";

export default function BillingServicesScreen() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-500"
        >
          Billing Services
        </motion.h1>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-sm"
        >
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">TJANE Health Consulting</span>,
            we take a personalized and holistic approach to supporting
            healthcare organizations. Our qualified team will work closely with
            you to understand your practice, identify your needs, and design
            practical solutions that address both your immediate challenges and
            your long-term goals.
          </p>
        </motion.div>

        {/* Main Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-green-200 rounded-2xl p-8 shadow-md"
          >
            <p className="text-lg leading-relaxed">
              Whether you are seeking to improve your administrative workflow,
              optimize healthcare buissiness operations, strengthen compliance, or establish
              a more efficient billing process, we bring the experience and
              insight needed to build a system that truly works for your
              practice.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Every healthcare business operates differently, which is why we
              don’t believe in one-size-fits-all recommendations. Our
              consultants will thoroughly review your existing processes,
              evaluate where gaps or inefficiencies exist, and develop
              strategies tailored specifically to your environment, staff
              capacity, and patient volume.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-sm"
          >
            <p className="text-lg leading-relaxed">
              We understand how essential a well-structured and reliable
              operational system is to the success of any healthcare practice.
              With TJANE Health Consulting, you can expect solutions that are
              practical, sustainable, and aligned with industry standards.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our goal is not just to solve problems, but to empower your
              practice with a framework that supports growth, efficiency, and
              excellent patient care.
            </p>
          </motion.div>
        </div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-green-200 rounded-2xl p-8 shadow-md"
        >
          <p className="text-lg leading-relaxed">
            If you are looking for a consulting partner who will prioritize your
            needs and deliver results you can feel in your day-to-day
            operations, TJANE Health Consulting is here to help.
          </p>
          <p className="text-lg leading-relaxed mt-4 font-medium text-green-600">
            <span className="underline">Contact us today</span> to learn more
            about how we can support you and enhance the performance of your
            practice.
          </p>
        </motion.div>

        {/* Contact Form */}
           <GetIntouch />
      </div>
    </div>
  );
}
