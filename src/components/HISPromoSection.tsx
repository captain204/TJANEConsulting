"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function HISPromoSection() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#1e293b] text-white text-left py-16 px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-extrabold max-w-3xl"
          >
            Empowering Healthcare Teams <br /> with Structure, Clarity, and
            Growth
          </motion.h1>
          <Link href="/contact-us">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-green-600 cursor-pointer hover:bg-[#00a85c] text-white font-extrabold md:px-8 px-6 md:py-4 py-3 rounded-full transition"
            >
              Partner With Us <br className="md:block hidden" /> Today
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 items-center pb-12 md:pl-0 md:pr-12 gap-8">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] md:h-[650px] md:rounded-r-lg overflow-hidden"
        >
          <Image
            src="/pro.jpeg"
            alt="Healthcare professionals collaborating"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 px-6 md:px-0 max-w-xl mx-auto"
        >
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              About TJane Health Consulting
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              At{" "}
              <span className="font-semibold text-gray-800">
                TJane Health Consulting
              </span>
              , we believe every healthcare business deserves structure,
              clarity, and growth. We work hand in hand with health care
              operations and private practices to streamline how they run, from
              the front desk to finance.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3 text-lg">
              Whether your goal is to reduce waiting time, fix billing gaps, or
              train your team for efficiency, we’ll walk you through every step
              until it works. Our mission is to make healthcare operations
              smoother, smarter, and more sustainable.
            </p>
            <a
              href="#"
              className="text-[#00c16a] font-medium mt-3 inline-block hover:underline"
            >
              Discover How We Can Help →
            </a>
          </div>

          {/* ROI Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg p-6 shadow-sm"
          >
            <h1 className="md:text-5xl text-3xl font-extrabold text-gray-800 text-center">
              Our Impact:
            </h1>
            <p className="md:text-5xl text-3xl font-bold text-gray-900 mt-2 text-center">
              20% <span className="font-normal text-gray-800">Improved</span>
            </p>
            <p className="md:text-5xl text-3xl font-bold text-gray-700 mt-1 text-center">
              Workflow Efficiency
            </p>
            <p className="text-xl text-gray-500 mt-2 text-center">
              On average, health care operations working with TJane Health Consulting
              experience a 20% boost in efficiency and smoother day-to-day
              operations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
