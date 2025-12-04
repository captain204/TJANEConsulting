"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";

export default function ServicesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading + Image */}
        <section className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Heading */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                We take pride in helping healthcare organizations grow stronger.
                Through expert guidance and actionable insights, we streamline
                operations and enhance care delivery. Our goal is simple:
                support your success with strategies that work.
              </h1>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[450px] lg:h-[600px] lg:-mr-16 xl:-mr-24"
            >
              <img
                src="/Women-showing-data.jpeg"
                alt="Business professionals in meeting"
                className="absolute right-0 top-0 w-full lg:w-[120%] h-full object-cover rounded-l-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16"
        >
          {/* Left Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#edf0f7] rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                  <img
                    src="/l.svg"
                    alt="healthcare buissiness Icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Healthcare Operations
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                Strengthen your operational foundations, enhance coordination,
                and reduce workflow bottlenecks with evidence-based systems made
                specifically for healthcare environments.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center text-slate-900 font-semibold hover:text-green-500 transition-colors group"
              >
                healthcare buissiness Operations
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a> */}
            </motion.div>

            {/* Compliance and Training Card */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#edf0f7] rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                  <img
                    src="/l2.svg"
                    alt="Compliance and Training Icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Compliance and Training
              </h3>
              <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                Stay audit-ready with updated documentation, regulatory
                oversight, and hands-on staff training that builds confidence
                and ensures quality care delivery.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center text-slate-900 font-semibold hover:text-green-500 transition-colors group"
              >
                Learn About Compliance Support
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a> */}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 relative lg:pl-8">
            {/* Revenue Cycle Management Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-green-600 rounded-lg p-8 text-white hover:bg-green-600 transition-colors relative z-10 md:-mt-60 shadow-xl"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-opacity-20 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/l3.svg"
                    alt="Revenue Management Icon"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Revenue Cycle Management
              </h3>
              <p className="mb-6 leading-relaxed text-white text-opacity-95 text-lg">
                Identify where money is getting stuck, improve your claims
                process, and grow your cash flow. Our RCM experts help you
                capture every dollar you’ve earned with precision and speed.
              </p>
              {/* <a
                href="#"
                className="inline-flex items-center font-semibold hover:text-slate-200 transition-colors group"
              >
                Explore RCM Solutions
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a> */}
            </motion.div>

            {/* Results & CTA Card */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-[#edf0f7] rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Results and Impact
              </h3>
              <ul className="space-y-3 text-lg text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <BsCheckCircleFill className="text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    Over 100 health care operations supported through operational
                    restructuring
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BsCheckCircleFill className="text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    An average of 20% improvement in billing efficiency
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BsCheckCircleFill className="text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    Trusted by labs, and diagnostic centers across
                    multiple states
                  </span>
                </li>
              </ul>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Let’s help your team run smoother and earn better.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-600 transition-colors group"
              >
                Talk to a Consultant
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-8">
                <p className="text-slate-800 text-lg font-medium mb-4">
                  Your healthcare buissiness doesn't need to be perfect, it just needs a plan
                  plan.
                </p>
                <Link
                   href="/contact-us"
                  className="inline-flex items-center bg-green-600 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Book Your Session
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
