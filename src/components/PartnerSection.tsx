"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PartnerForSuccess() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-start">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8 lg:pr-12"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Partner for Success
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At{" "}
                <span className="font-semibold text-gray-800">
                  TJane Health Consulting
                </span>
                , we believe every successful healthcare buissiness begins with
                the right systems and support. Our mission is simple, to help
                healthcare teams work smarter, manage better, and grow stronger.
                We measure our success through the transformation we see in our
                partners’ daily operations, staff confidence, and patient
                experience. Most of our new clients come through referrals,
                because great results speak for themselves.
              </p>
            </motion.div>

            {/* Testimonial Cards */}
            <motion.div
              className="relative grid sm:grid-cols-2 gap-6 lg:gap-4 lg:relative lg:left-20 lg:-mr-8"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.3 },
                },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <p className="text-gray-600 italic md:text-2xl text-xl leading-relaxed mb-6">
                  "TJane health consulting has been nothing short of
                  transformative, their expertise, professionalism, and
                  unwavering dedication helped our business avoid folding at a
                  critical time."
                </p>
                <div>
                  <p className="text-green-600 font-semibold text-sm">
                    Sinnai Behavorial Health
                  </p>
                  {/* <p className="text-gray-500 text-sm">Lagos</p> */}
                </div>
              </motion.div>

              {/* healthcare buissiness Administrator Testimonial */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 lg:z-10"
              >
                <p className="text-gray-600 italic md:text-2xl text-xl leading-relaxed mb-6">
                  "Tjane didn't just offer advice they rolled up their sleeves,
                  analyzed every operational detail and guided us step by step
                  towards stability and growth. Medcore Insights"
                </p>
                <div>
                  <p className="text-green-600 font-semibold text-sm">
                    Medicore Insights
                  </p>
                  {/* <p className="text-gray-500 text-sm">Abuja</p> */}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <Link href="/contact-us">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <button className="bg-green-600 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                Book a Free healthcare buissiness Audit
              </button>
            </motion.div>
             </Link>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/doctor.jpeg"
                alt="Healthcare professionals collaborating in a hospital"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
