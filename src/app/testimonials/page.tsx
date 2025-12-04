"use client";

import HeroSection from "@/components/PagesHero";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Amelia Grant",
    role: "Medical Director, GreenCross Hospital",
    image: "/doctor1.jpg",
    quote:
      "TJane Healthcare transformed our health care operations. From billing to patient flow, everything is now smoother and more efficient. Their team truly cares about your success.",
  },
  {
    name: "Michael Smith",
    role: "Practice Manager, Starlight Hospital",
    image: "/doctor2.jpg",
    quote:
      "The professionalism and expertise of TJane Healthcare are unmatched. We’ve seen a 30% increase in revenue cycle efficiency within months!",
  },
  {
    name: "Sarah Johnson",
    role: "Owner, Sunrise Family Hospital",
    image: "/doctor3.jpg",
    quote:
      "Their consultants helped us optimize every process. I can confidently say partnering with TJane Healthcare was one of our best business decisions.",
  },
];

export default function Testimonials() {
  return (
    <>
      <HeroSection
        breadcrumb="Our Management Services"
        title="What Our Clients Say"
        subtitle=" Hear from healthcare professionals who trust TJane Healthcare to make their health care operations work better and earn better."
        backgroundImage="/management-bg.jpg"
      />
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 px-6 md:px-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-center bg-cover" />

        {/* <div className="relative z-10 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gray-800"
        >
          What Our Clients Say
  

      {/* Testimonials */}
        <div className="relative z-10 grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-20 h-20 mb-6">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">
                “{t.quote}”
              </p>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  {t.name}
                </h4>
                <p className="text-blue-600 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logo or tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mt-20 text-center"
        >
          <h3 className="text-xl text-gray-700">
            Empowering Healthcare. Enhancing Lives.
          </h3>
          <p className="text-blue-700 font-semibold mt-2">— TJane Healthcare</p>
        </motion.div>
      </section>
    </>
  );
}
