"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for cleaner code
const fadeUp:any = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

export default function HowTjaneHealthCanHelp() {
  return (
    <section className=" mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center bg-white overflow-hidden">
      {/* Left Image with animation */}
      <motion.div
        className="relative w-full h-[700px] md:h-[950px] rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/Team-Meeting.jpeg"
          alt="TjaneHealth team collaboration"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800"
          variants={fadeUp}
          custom={0.2}
        >
          How TjaneHealth Can Help
        </motion.h2>

        <motion.p
          className="text-gray-600 leading-relaxed text-lg"
          variants={fadeUp}
          custom={0.4}
        >
          At TjaneHealth, when we bring on a new client, our first goal is to
          understand your practice from top to bottom. We know that the people
          are the essence of your organization and ours. But we also understand
          that profits are the lifeblood of your organization, and that means
          constantly innovating to provide support to your employees and ensure
          long-term viability.
        </motion.p>

        {/* List Items */}
        <div className="space-y-8 mt-6">
          {/* Item 1 */}
          <motion.div
            className="flex items-start gap-4"
            variants={fadeUp}
            custom={0.6}
          >
            <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Comprehensive RCM Support
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Revenue cycle services are at the core of TjaneHealth’s
                expertise. Once we understand your practice and its operations,
                we’ll tailor your support to your specific needs in the revenue
                process. We’ll help you establish protocols, ensure optimal
                coding for maximum reimbursement and compliance, and set up
                assembly-line precision for accounts receivable.
              </p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            className="flex items-start gap-4"
            variants={fadeUp}
            custom={0.8}
          >
            <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Planning for Both Today and the Future
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                While making sure day-to-day operations maximize your revenue
                cycle is paramount, it is not the only component to ensuring
                sustainability. To help ensure that your practice continues to
                thrive, TjaneHealth will work with you for potential collection
                agency fee savings, consulting on your technologies, furthering
                coding education, and forecasting business needs and revenue.
              </p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            className="flex items-start gap-4"
            variants={fadeUp}
            custom={1}
          >
            <div className="w-4 h-4 bg-green-600 rounded-full mt-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                Specialized Focus in Orthopedic and Radiology Practices,
                and Now Open for All
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                TjaneHealth was founded upon specifically helping orthopedic and
                radiology practices across the country. But as the demand and
                need for TjaneHealth’s expertise continues to expand beyond
                Orthopedics and Radiology, we’ve extended our expert services to
                aid practices of all kinds. No matter what your specialty, no
                matter what technology you’re using, we’re ready.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
