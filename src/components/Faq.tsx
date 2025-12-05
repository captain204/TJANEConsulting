"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What exactly does TJane Health Consulting do?",
    answer: (
      <p className="text-gray-700 mb-3">
        We help Health Care Operations and diagnostic centers fix workflow
        issues, streamline billing, and train teams to operate with clarity and
        confidence. From front desk coordination to back-office finance, we
        design practical systems that improve daily efficiency and revenue flow.
      </p>
    ),
  },
  {
    question: "How will consulting improve my Buissiness Performance",
    answer: (
      <>
        <p className="text-gray-700 mb-3">
          Our consulting process identifies hidden inefficiencies that slow your
          team down. We focus on three key areas:
        </p>
        <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-3">
          <li>Reducing patient waiting time and improving appointment flow.</li>
          <li>Closing billing and reimbursement gaps for better cash flow.</li>
          <li>
            Training your team for consistency, clarity, and accountability.
          </li>
        </ul>
        <p className="text-gray-700">
          The result? A more structured, confident, and productive healthcare
          buissiness that runs smoothly every single day.
        </p>
      </>
    ),
  },
  {
    question: "Do you work with small private practices only?",
    answer: (
      <p className="text-gray-700">
        We work with all sizes, from solo practitioners to big health care
        business . Every healthcare business deserves a clear plan for growth no
        matter the scale
      </p>
    ),
  },
  {
    question: "How long does it take to see results after working with you?",
    answer: (
      <p className="text-gray-700">
        Many clients start noticing improvements in workflow and billing within
        4 to 8 weeks. Long-term transformation depends on how quickly your team
        adopts the systems we build together, and we’ll be there to guide you
        every step of the way.
      </p>
    ),
  },
  {
    question: "Can you train our staff directly?",
    answer: (
      <p className="text-gray-700">
        Yes! We offer hands on training for both administrative and non
        administrative staff. Our sessions focus on communication,patient flow
        management,and billing accuracy, so your team can deliver with structure
        and confidence
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#e9edf3] py-16 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl md:mx-auto mx-5 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Want to understand how TJANE Health Consulting delivers value to
          healthcare providers and organizations? Here are some frequently asked
          questions to guide you.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-5xl md:mx-auto mx-5 space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-black pb-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg md:text-2xl font-extrabold text-gray-900 text-left">
                {faq.question}
              </h3>
              <button
                aria-label="Toggle answer"
                className="text-green-600 focus:outline-none cursor-pointer"
              >
                {openIndex === index ? <Minus size={22} /> : <Plus size={22} />}
              </button>
            </div>

            {/* Dropdown animation */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="bg-white border-l-4 border-[#1b2430] p-6 mt-4 text-left rounded-sm shadow-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// "use client";

// import { useState } from "react";
// import { Plus, Minus } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "CMS E/M Guidelines 2023",
//     answer: (
//       <>
//         <p className="text-gray-700 mb-3">
//           The Centers for Medicare & Medicaid Services have released updates for
//           the year to reduce the everyday burden on physicians. E/M Changes in
//           2023. The biggest changes to the 2023 E/M guidelines are as follows:
//         </p>

//         <ul className="text-gray-700 space-y-1 mb-3 list-none">
//           <li>
//             - CPT code definition changes and new descriptor times and revisions
//             for some E/M codes.
//           </li>
//           <li>
//             - There no longer is an option to bill by history and physical exam.
//             Code levels are now based on Medical Decision Making (MDM) or Time.
//           </li>
//           <li>
//             - Physicians do not need to document or use medical and family
//             history to determine a code level. In place of this, there would be
//             a requirement for a medically appropriate history and examination.
//           </li>
//           <li>- The MDM table now aligns with the office/outpatient table.</li>
//         </ul>

//         <p className="text-gray-700">
//           Overall, the CMS E/M Coding Changes for 2023 are designed to simplify
//           coding, streamline billing processes, reduce documentation, and ensure
//           accurate payments for provided services. Providers should take the
//           time to review the changes and familiarize themselves with the new
//           system in order to ensure their practice is compliant and up to date
//           with the latest coding standards.
//         </p>
//       </>
//     ),
//   },
//   {
//     question:
//       "Why is outsourcing my medical billing to HIS better than hiring an in-house team?",
//     answer: (
//       <>
//         <p className="text-gray-700 mb-3">
//           Outsourcing medical billing to HIS offers several benefits compared to
//           managing billing in-house:
//         </p>
//         <ul className="text-gray-700 space-y-1 list-none">
//           <li>- Reduced overhead costs and staff training expenses.</li>
//           <li>
//             - Access to a team of experienced professionals familiar with
//             compliance.
//           </li>
//           <li>- Faster claims processing and fewer denials.</li>
//           <li>
//             - Allows physicians and office staff to focus on patient care.
//           </li>
//         </ul>
//       </>
//     ),
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-[#e9edf3] py-16">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//           CMS E/M Coding Updates and Other Frequently Asked Questions
//         </h2>
//         <p className="text-gray-600 text-lg mb-10">
//           Have you got any questions? We’ve got answers. Check out below some of
//           the most common questions practices are giving us or explore the
//           entire{" "}
//           <span className="font-semibold text-gray-800">FAQs page</span>.
//         </p>
//       </div>

//       <div className="max-w-5xl mx-auto space-y-6">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-b border-black pb-4">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleFAQ(index)}
//             >
//               <h3 className="text-lg md:text-2xl font-extrabold text-gray-900 text-left">
//                 {faq.question}
//               </h3>
//               <button
//                 aria-label="Toggle answer"
//                 className="text-green-600 focus:outline-none cursor-pointer"
//               >
//                 {openIndex === index ? <Minus size={22} /> : <Plus size={22} />}
//               </button>
//             </div>

//             {/* Animated dropdown with Framer Motion */}
//             <AnimatePresence initial={false}>
//               {openIndex === index && (
//                 <motion.div
//                   key="content"
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="overflow-hidden"
//                 >
//                   <div className="bg-white border-l-4 border-[#1b2430] p-6 mt-4 text-left rounded-sm shadow-sm">
//                     {faq.answer}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
