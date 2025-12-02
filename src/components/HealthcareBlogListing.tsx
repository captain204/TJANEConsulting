"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HealthcareBlogListing() {
  const posts = [
    {
      image: "/list2.png",
      tags: ["healthcare buissiness Operations", "Workflow Optimization"],
      title:
        "5 Common Workflow Bottlenecks in Hospitals  and How to Fix Them Fast",
      link: "#",
    },
    {
      image: "/list.png",
      tags: ["Billing & Reimbursement", "Practice Management"],
      title:
        "Why Your Billing Team Is Overwhelmed (and How to Streamline Claims for 2025)",
      link: "#",
    },
    {
      image: "/list3.png",
      tags: ["Staff Training", "Leadership", "Operational Efficiency"],
      title:
        "From Chaos to Confidence: How Staff Training Transforms Patient Experience",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Insights for Smarter Healthcare Management
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore strategies to optimize healthcare buissiness operations, strengthen billing
            systems, and empower your healthcare team to deliver exceptional
            results.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          viewport={{ once: true }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 bg-gray-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 line-clamp-3">
                  {post.title}
                </h3>

                {/* Read More Link */}
                <a
                  href={post.link}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
            View More Posts
          </button>
        </motion.div>
      </div>
    </div>
  );
}






// import React from 'react';

// export default function HealthcareBlogListing() {
//   const posts = [
//     {
//       image: '/list2.png',
//       tags: ['Billing & Reimbursement'],
//       title: 'Is Your Billing Vendor Really Taking Work Off Your Plate?',
//       link: '#'
//     },
//     {
//       image: '/list.png',
//       tags: ['Billing & Reimbursement', 'Care Today', 'Healthcare Information Services, LLC', 'Insurance Card Processing'],
//       title: 'Practice sees 2% Increase in CCP',
//       link: '#'
//     },
//     {
//       image: '/list3.png',
//       tags: ['Billing & Reimbursement', 'Revenue Cycle Management'],
//       title: "5 Key Signs It's Time to Outsource Your Revenue Cycle Management (RCM)",
//       link: '#'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//             Healthcare Industry Updates and Articles
//           </h1>
//           <p className="text-gray-600 text-sm sm:text-base">
//             Read our most recent blogs and news from the world of medical billing and practice management.
//           </p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {posts.map((post, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//               {/* Image */}
//               <div className="relative h-48 sm:h-56 bg-gray-200">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full object-fit"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {post.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="inline-block px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 line-clamp-3">
//                   {post.title}
//                 </h3>

//                 {/* Read More Link */}
//                 <a
//                   href={post.link}
//                   className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
//                 >
//                   Read More
//                   <svg
//                     className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="flex justify-center">
//           <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
//             View More Posts
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }