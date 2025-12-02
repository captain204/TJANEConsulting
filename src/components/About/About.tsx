"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHIS() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white px-6 md:px-16 py-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5 text-lg">
            <strong className="text-green-600">TJane Health Consulting</strong> began
            with one clear mission: to help healthcare facilities become more
            organized, profitable, and compliant. We understand that healthcare
            organizations face complex daily challenges, and our mission is to
            simplify and strengthen their operations from the inside out.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5 text-lg">
            We’ve worked with both small practices and large hospitals,
            resolving issues that directly affect patient experience and
            revenue. From staff training to billing optimization, we don’t just
            advise, we stay involved until measurable results are achieved.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5 text-lg">
            Our experienced team combines healthcare management expertise with
            a deep understanding of compliance and process improvement. We
            identify bottlenecks, streamline workflows, and enhance financial
            outcomes while ensuring better patient care.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            With a <span className="font-semibold">data-driven approach</span> and a{" "}
            <span className="font-semibold">people-first mindset</span>,
            TJane Health Consulting empowers healthcare providers to thrive,
            not just survive, in today’s evolving healthcare landscape.
          </p>

          {/* <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#16a34a" }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Speak To Our Experts
          </motion.button> */}
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[650px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/about.jpg.webp"
            alt="Healthcare professionals collaborating"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          />
        </motion.div>
      </div>

      {/* What We Do Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto mt-24 text-start"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">
          What We Do
        </h3>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            At <strong className="text-green-600">TJane Health Consulting</strong>, we
            provide hands-on support across all areas of healthcare operations,
            from financial management and billing systems to staff development
            and workflow optimization. Our tailored strategies deliver measurable
            and sustainable results.
          </p>
          <p>
            Our clients consistently experience stronger cash flow, enhanced
            patient satisfaction, and smoother operations. We help build better
            organized teams and clearer communication pathways, driving
            long-lasting profitability.
          </p>
          <p>
            Partnering with us means gaining a dedicated ally, not just a
            consultant. We work alongside your team to implement solutions that
            last. When your healthcare buissiness performs better, everyone wins — your staff,
            your patients, and your bottom line.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
