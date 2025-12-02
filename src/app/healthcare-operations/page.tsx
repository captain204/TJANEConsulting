"use client";

import GetIntouch from "@/components/Contact/ReachUs";
import HealthHero from "@/components/Heros/Healthcare";
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
      <HealthHero />
      <div className="w-full bg-gray-100 text-gray-800 overflow-hidden">
        {/* TOP SECTION */}
        <section className="bg-white shadow-xl max-w-7xl mx-auto px-6 py-20  rounded-2xl grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold text-green-600 mb-6 leading-tight">
              Healthcare Operations
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-4 text-gray-700">
              At TJANE Health Consulting, we strengthen healthcare delivery by
              improving internal systems, reducing operational friction, and
              ensuring smooth workflow performance across all departments.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Many healthcare teams are overwhelmed not because they lack skill,
              but because daily operations drain time, energy, and efficiency.
              That’s where we step in, fixing workflow gaps, simplifying
              internal processes, and improving revenue stability with long-term
              solutions.
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
              alt="Healthcare Operations"
              width={550}
              height={450}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-16 bg-white shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-green-600">
            What We Do
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We build strong operational systems that support seamless healthcare
            delivery.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaCogs size={30} />}
              title="Operational Workflow Optimization"
              desc="We rebuild daily workflows to reduce delays and give healthcare teams clarity and speed."
            />
            <ServiceCard
              icon={<FaHandsHelping size={30} />}
              title="Process Engineering"
              desc="We redesign processes from patient entry to service completion for smoother departmental flow."
            />
            <ServiceCard
              icon={<FaUsersCog size={30} />}
              title="Team Efficiency Systems"
              desc="Tools and frameworks that make collaboration easier and eliminate team confusion."
            />
            <ServiceCard
              icon={<FaChartLine size={30} />}
              title="Revenue Stability Planning"
              desc="We align operations with financial processes to improve revenue strength and faster payments."
            />
            <ServiceCard
              icon={<FaHeartbeat size={30} />}
              title="Burnout Reduction Systems"
              desc="We reduce manual tasks and streamline approvals to preserve staff energy and wellbeing."
            />
            <ServiceCard
              icon={<FaShieldAlt size={30} />}
              title="Compliance & Standard Alignment"
              desc="We ensure operations follow global healthcare standards and transparent governance."
            />
          </div>
        </section>

        {/* ⭐ NEW COMBINED SECTION — HOW WE WORK + OUTCOMES */}
        {/* ⭐ NEW, MORE BEAUTIFUL COMBINED SECTION */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50 shadow-xl max-w-7xl mx-auto px-6 mt-10 rounded-2xl mb-10">
          <h2 className="text-3xl font-bold text-center text-green-600">
            How We Work & Outcomes You Can Expect
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 mb-12">
            Our structured methodology transforms your healthcare operations
            into a smooth, efficient, and high-performance system with clear
            measurable improvements.
          </p>

          <div className="grid md:grid-cols-2 gap-14">
            {/* LEFT SIDE — TIMELINE STEPS */}
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-6">
                Our Operational Approach
              </h3>

              <div className="relative border-l-4 border-green-300 ml-3 space-y-10">
                {[
                  "Operations audit and workflow discovery",
                  "Data-driven bottleneck identification",
                  "Strategy design and internal process mapping",
                  "System implementation and staff alignment",
                  "Performance improvement tracking",
                  "Sustainable handover and support management",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="relative pl-10"
                  >
                    {/* DOT */}
                    <span className="w-5 h-5 bg-green-500 rounded-full absolute -left-[12px] top-1.5 shadow"></span>

                    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition border border-green-100">
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE — OUTCOMES GRID */}
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-6">
                Positive Outcomes for Your Team
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Improved team coordination",
                  "Reduced patient waiting challenges",
                  "Faster documentation and approvals",
                  "Higher revenue assurance",
                  "Lower stress and burnout",
                  "Clear workflow ownership",
                  "Smarter task distribution",
                  "Reduced manual overload",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group bg-white p-6 rounded-xl border border-green-100 shadow hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-3">
                      {/* ICON */}
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
