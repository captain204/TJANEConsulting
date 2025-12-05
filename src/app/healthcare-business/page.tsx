"use client";

import GetIntouch from "@/components/Contact/ReachUs";
import Compliance from "@/components/Heros/Compliance";
import HealthBusiness from "@/components/Heros/HealthcareBusiness";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHeartbeat,
  FaCogs,
  FaUsersCog,
  FaChartLine,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";

export default function HealthcareOperationsPage() {
  return (
    <>
      <HealthBusiness />

      <div className="w-full bg-gray-100 text-gray-800 overflow-hidden">
        {/* TOP SECTION */}
        <section className="bg-white shadow-xl max-w-7xl mx-auto px-6 py-20 rounded-2xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-2xl md:text-5xl font-bold text-green-600 mb-6 leading-tight">
              Health Care Business Start-Up
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-700">
              Starting a healthcare business requires clear planning, proper
              documentation, and adherence to regulatory standards. TJane Health
              Consulting provides a complete start-up pathway from business
              registration to full licensure, ensuring you launch with confidence.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              We streamline all processes from structural setup to documentation,
              submission, follow-up, and post-licensing guidance making it easier
              for you to meet requirements and begin offering quality healthcare
              services.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <Image
              src="/Team-Meeting.jpeg"
              alt="Healthcare Start-Up"
              width={550}
              height={450}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-16 bg-white shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-green-600">
            What We Help You With
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our start-up support ensures you meet every requirement needed to
            operate a compliant healthcare business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaUsersCog size={30} />}
              title="Business Registration & Structure"
              desc="Guidance on choosing the right business structure and completing full registration."
            />

            <ServiceCard
              icon={<FaShieldAlt size={30} />}
              title="Regulatory Document Preparation"
              desc="We organize and prepare all necessary documents for regulatory approval."
            />

            <ServiceCard
              icon={<FaCogs size={30} />}
              title="Licensure Submission & Follow-Up"
              desc="End-to-end handling of application submission and regulatory follow-up."
            />

            <ServiceCard
              icon={<FaChartLine size={30} />}
              title="Operational Compliance Setup"
              desc="Support with setting up compliant systems and operational procedures."
            />

            <ServiceCard
              icon={<FaHandsHelping size={30} />}
              title="Post-Licensing Guidance"
              desc="We help you navigate early operations to ensure smooth and compliant start-up."
            />

            <ServiceCard
              icon={<FaHeartbeat size={30} />}
              title="Industry-Standard Documentation"
              desc="Ensure all clinical and administrative records meet regulatory expectations."
            />
          </div>
        </section>

        {/* HOW WE WORK + OUTCOMES */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50 shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl mb-10">
          <h2 className="text-3xl font-bold text-center text-green-600">
            How We Guide Your Start-Up & What You Gain
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 mb-12">
            Our process ensures clarity, organization, and efficient approval for
            your healthcare business.
          </p>

          <div className="grid md:grid-cols-2 gap-14">
            {/* LEFT – STEPS */}
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-6">
                Our Start-Up Process
              </h3>

              <div className="relative border-l-4 border-green-300 ml-3 space-y-10">
                {[
                  "Initial consultation & business goal assessment",
                  "Choosing the right business structure and registration pathway",
                  "Compilation & preparation of regulatory documentation",
                  "Submission of licensure application to relevant authorities",
                  "Follow-up, query resolution & approval support",
                  "Post-licensure guidance for operational setup",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="relative pl-10"
                  >
                    <span className="w-5 h-5 bg-green-500 rounded-full absolute -left-[12px] top-1.5 shadow"></span>
                    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border border-green-100">
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT – OUTCOMES */}
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-6">
                What You Gain
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Faster approval & reduced delays",
                  "Complete, well-organized documentation",
                  "Clear regulatory pathway",
                  "Smooth business launch",
                  "Reduced administrative stress",
                  "Professional operational structure",
                  "Full understanding of requirements",
                  "Confidence to begin service delivery",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group bg-white p-6 rounded-xl border border-green-100 shadow hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 group-hover:bg-green-200 transition">
                        <span className="text-green-600 text-lg">✔</span>
                      </div>
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GetIntouch />
      </div>
    </>
  );
}

/* CARD COMPONENT */
function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-200"
    >
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}
