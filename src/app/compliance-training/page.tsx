"use client";

import GetIntouch from "@/components/Contact/ReachUs";
import Compliance from "@/components/Heros/Compliance";
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
    <><Compliance /><div className="w-full bg-gray-100 text-gray-800 overflow-hidden">
      {/* TOP SECTION */}
      <section className="bg-white shadow-xl max-w-7xl mx-auto px-6 py-20  rounded-2xl grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-2xl md:text-5xl font-bold text-green-600 mb-6 leading-tight">
            Compliance Training
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-700">
            TJane Health Consulting delivers practical, high-impact compliance
            training designed for healthcare teams that need clarity, reduced
            risk, and strong operational safeguards.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Our programs simplify complex regulations into actionable steps,
            reinforce accountability, and help organizations build sustainable
            compliance cultures that reduce burnout and support long-term
            operational integrity.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <Image
            src="/service.jpeg"
            alt="Compliance Training"
            width={550}
            height={450}
            className="rounded-xl shadow-lg object-cover" />
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-16 bg-white shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-3 text-green-600">
          Core Compliance Training Programs
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our training strengthens regulatory understanding, internal controls,
          ethical conduct, and compliance-driven decision making.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaUsersCog size={30} />}
            title="Regulatory & Policy Interpretation"
            desc="Understanding healthcare regulations, policies, compliance guidelines, and industry updates." />

          <ServiceCard
            icon={<FaShieldAlt size={30} />}
            title="Billing & Coding Compliance"
            desc="Best practices for compliant claims, medical necessity documentation, modifiers, and error prevention." />

          <ServiceCard
            icon={<FaCogs size={30} />}
            title="Data Privacy & Protection"
            desc="HIPAA, GDPR, NDPR compliance, breach prevention, patient data safety, and internal monitoring." />

          <ServiceCard
            icon={<FaChartLine size={30} />}
            title="Internal Audit & Monitoring"
            desc="Preparing teams for compliance reviews, running internal audits, and automating risk monitoring." />

          <ServiceCard
            icon={<FaHandsHelping size={30} />}
            title="Ethics & Compliance Culture"
            desc="Building anti-fraud awareness, ethical decision frameworks, conflict-of-interest controls, and reporting channels." />

          <ServiceCard
            icon={<FaHeartbeat size={30} />}
            title="Documentation Standards"
            desc="Training on clinical documentation accuracy, integrity, completeness, and standardized structures." />

          <ServiceCard
            icon={<FaShieldAlt size={30} />}
            title="Risk Assessment & Governance"
            desc="Identifying operational risks, mitigation strategies, governance systems, and escalation pathways." />

          <ServiceCard
            icon={<FaUsersCog size={30} />}
            title="Fraud, Waste & Abuse Prevention"
            desc="Claim integrity, red-flag identification, whistleblower systems, and compliance enforcement." />

          <ServiceCard
            icon={<FaChartLine size={30} />}
            title="Quality Standards & Accreditation"
            desc="Preparing organizations for certifications, SOP implementation, and accreditation readiness." />
        </div>
      </section>

      {/* ⭐ NEW COMBINED SECTION — HOW WE WORK + OUTCOMES */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50 shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl mb-10">
        <h2 className="text-3xl font-bold text-center text-green-600">
          How Our Training Works & What You Can Expect
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 mb-12">
          Our training method emphasizes practical understanding, system
          adoption, and long-term behavioral change.
        </p>

        <div className="grid md:grid-cols-2 gap-14">
          {/* LEFT SIDE — TIMELINE */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-6">
              Our Training Approach
            </h3>

            <div className="relative border-l-4 border-green-300 ml-3 space-y-10">
              {[
                "Compliance needs assessment and training gap analysis",
                "Curriculum development tailored to your organization",
                "On-site or virtual practical learning sessions",
                "Interactive case studies and real-world scenarios",
                "System adoption, reinforcement exercises, and assessments",
                "Continuous monitoring, evaluation, and follow-up support",
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
                "Greater compliance confidence",
                "Improved documentation accuracy",
                "Stronger internal controls",
                "Lower regulatory risk exposure",
                "Reduced compliance-related stress",
                "Stronger ethical awareness",
                "Better audit readiness",
                "A more compliant workplace culture",
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
    </div></>
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
