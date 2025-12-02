"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-white py-16 px-4 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 lg:p-12 border border-gray-200"
      >
        {/* Beautiful Black Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-black rounded-xl py-8 px-6 mb-10 text-center shadow-lg"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Privacy Policy
          </h1>

          <p className="text-gray-300">
            Last updated:{" "}
            <span className="text-green-500 font-semibold">Today</span>
          </p>
        </motion.div>

        {/* Privacy Content Sections */}
        <Section
          title="1. Information We Collect"
          content={[
            "Personal information you provide to us (e.g. name, email, profile data).",
            "Usage data such as interactions, sessions, and device info.",
            "Third-party data from connected services.",
          ]}
        />

        <Section
          title="2. How We Use Your Information"
          content={[
            "To provide, maintain, and improve our services.",
            "To personalize your experience and offer relevant features.",
            "For security, fraud detection, and compliance.",
          ]}
        />

        <Section
          title="3. Sharing Your Information"
          content={[
            "We do not sell your data.",
            "We only share information with trusted partners required for app functionality.",
            "We may share data when legally required.",
          ]}
        />

        <Section
          title="4. Data Security"
          content={[
            "We implement industry-standard security measures to protect your information.",
            "However, no system is completely secure; absolute protection cannot be guaranteed.",
          ]}
        />

        <Section
          title="5. Your Rights"
          content={[
            "You may request access to the data we have about you.",
            "You may request correction or deletion of your information.",
            "You may opt out of notifications or certain data uses.",
          ]}
        />

        <Section
          title="6. Cookies & Tracking"
          content={[
            "We use cookies to improve user experience, analytics, and performance.",
            "You can disable cookies through your browser settings.",
          ]}
        />

        <Section
          title="7. Updates to This Policy"
          content={[
            "We may modify the privacy policy from time to time.",
            "We will notify users of significant changes.",
          ]}
        />

        {/* Company Contact Info */}
        {/* Company Contact Info */}

        <footer className="text-center mt-10 text-gray-500">
          © {new Date().getFullYear()} TJANE Health. All rights reserved.
        </footer>
      </motion.div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-3 border-l-4 border-green-500 pl-3">
        {title}
      </h2>
      <ul className="space-y-2 text-gray-700 leading-relaxed">
        {content.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
