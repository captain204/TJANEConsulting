"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSubscribe() {
  const [eemail, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");


 const handleSubscribe = async () => {
  setEmailError(""); // clear previous error

  // Empty check
  if (!eemail.trim()) {
    setEmailError("Please enter an email address.");
    return;
  }

  // Format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(eemail)) {
    setEmailError("Please enter a valid email address.");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/send-subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eemail }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Subscription failed");
    } else {
      toast.success("Subscribed successfully!");
      setEmail("");
    }

  } catch (error) {
    toast.error("An error occurred. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="w-full bg-green-600 px-4 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3 drop-shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Subscribe to Our Newsletter
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-white text-base sm:text-lg opacity-95 mb-10 font-medium max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get the latest insights, healthcare tips, and healthcare buissiness
          growth strategies delivered straight to your inbox.
        </motion.p>

        {/* Form */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Email Input */}
       {/* Email Input */}
<motion.input
  type="email"
  placeholder="Enter your email address"
  value={eemail}
  onChange={(e) => {
    setEmail(e.target.value);
    setEmailError(""); // clear error while typing
  }}
  className="w-full sm:flex-1 px-6 py-3.5 border-2 border-white rounded-full text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-white/90 shadow-md"
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>

{/* Error Message */}
{emailError && (
  <p className="text-red-600 text-sm mt-1 w-full text-left">
    {emailError}
  </p>
)}


          {/* Subscribe Button */}
          <motion.button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 cursor-pointer bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
