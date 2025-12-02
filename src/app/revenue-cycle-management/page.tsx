"use client";

import GetIntouch from "@/components/Contact/ReachUs";
import Revenue from "@/components/Heros/Revenue";
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
      <Revenue />
      <div className="w-full bg-gray-100 text-gray-800 overflow-hidden">
        {/* TOP SECTION */}
        <section className="bg-white shadow-xl max-w-7xl mx-auto px-6 py-20  rounded-2xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold text-green-600 mb-6 leading-tight">
              Revenue Cycle Management
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-700">
              At TJANE Health Consulting, we design smarter revenue systems that
              protect cash flow, eliminate operational stress, and strengthen
              the financial health of healthcare organizations.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Billing errors, missed claims, slow reimbursements, and unclear
              financial tracking can silently drain even the most stable
              facilities. Our RCM solutions close these gaps with structured,
              compliant, and sustainable processes that increase collections and
              reduce administrative overload.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <Image
              src="/list3.png"
              alt="Revenue Cycle Management"
              width={550}
              height={450}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-16 bg-white shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-green-600">
            Core RCM Services
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We strengthen every part of your revenue cycle — from patient entry
            to final reimbursement.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaUsersCog size={30} />}
              title="Patient Access & Registration"
              desc="We build accurate front-end processes that improve clean claim rates and ensure compliant patient onboarding."
            />

            <ServiceCard
              icon={<FaShieldAlt size={30} />}
              title="Documentation Optimization"
              desc="We standardize documentation workflows to ensure accuracy, compliance, and billing readiness."
            />

            <ServiceCard
              icon={<FaCogs size={30} />}
              title="Medical Coding & Audit Support"
              desc="We strengthen coding accuracy, reduce errors, and prepare your team for audit readiness."
            />

            <ServiceCard
              icon={<FaChartLine size={30} />}
              title="Claims Submission & Reimbursement"
              desc="We accelerate claim processing and improve payer response times through structured workflows."
            />

            <ServiceCard
              icon={<FaHandsHelping size={30} />}
              title="Denial Management & Recovery"
              desc="We analyze denial trends, apply corrective strategies, and recover revenue efficiently."
            />

            <ServiceCard
              icon={<FaHeartbeat size={30} />}
              title="Financial Reporting & Visibility"
              desc="We provide clear dashboards, reconciliation frameworks, and real-time revenue insights."
            />
          </div>
        </section>

        {/* ⭐ NEW COMBINED SECTION — HOW WE WORK + OUTCOMES */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50 shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl mb-10">
          <h2 className="text-3xl font-bold text-center text-green-600">
            How We Work & What You Can Expect
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 mb-12">
            Our structured RCM methodology delivers measurable revenue
            improvements, stronger financial stability, and reduced
            administrative burnout.
          </p>

          <div className="grid md:grid-cols-2 gap-14">
            {/* LEFT SIDE — TIMELINE */}
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-6">
                Our RCM Approach
              </h3>

              <div className="relative border-l-4 border-green-300 ml-3 space-y-10">
                {[
                  "Full-cycle revenue assessment and gap analysis",
                  "Documentation, coding, and compliance review",
                  "Workflow redesign and process mapping",
                  "Claim optimization and automation support",
                  "Denial pattern tracking and payer engagement",
                  "Performance reporting and continuous improvement",
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

            {/* RIGHT SIDE — OUTCOMES */}
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-6">
                Outcomes You Can Expect
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Higher first-pass claim success",
                  "Reduced denial rates",
                  "Faster reimbursement turnaround",
                  "Improved reconciliation accuracy",
                  "Stronger payer communication",
                  "Cleaner claim pipelines",
                  "Clearer financial reporting",
                  "Reduced administrative burnout",
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
        <GetIntouch/>
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
