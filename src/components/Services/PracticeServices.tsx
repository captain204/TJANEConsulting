"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PracticeServices() {
  return (
    <section className="mx-auto px-6 md:px-0 md:pr-12 py-16 grid md:grid-cols-2 gap-12 items-center bg-white">
      {/* Left Image + Green Card */}
      <div className="relative flex flex-col items-center md:items-start">
        {/* Main Image */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[700px] w-full overflow-hidden rounded-lg">
          <Image
            src="/service.jpeg"
            alt="Practice management team"
            fill
            className="object-cover"
          />
        </div>

        {/* Green Card */}
        <div className="relative md:absolute md:bottom-0 md:left-12 bg-green-600 text-white rounded-lg p-6 sm:p-8 md:p-10 max-w-lg shadow-lg mt-8 md:mt-0 md:transform md:translate-y-1/3">
          <div className="absolute top-4 left-11">
            <Image
              src="/l3.svg"
              alt="RCM Icon"
              width={70}
              height={70}
            />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white mt-20">
            Revenue Cycle Management Services
          </h3>

          <p className="text-sm sm:text-base leading-relaxed mb-4">
            There are several steps to the revenue cycle that can impact the
            profitability and sustainability of your practice. From the
            utilization of your practice management system along with proper
            documentation and coding, down to collections and financial
            forecasting, HIS is ready to optimize your RCM process.
          </p>

          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold hover:underline"
          >
            Explore RCM Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="space-y-8 mt-8 md:mt-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Practice Management Services Tailored to You
        </h2>

        {/* Card 1 */}
        <div className="relative bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="absolute top-4 left-4">
            <Image
              src="/l2.svg"
              alt="Consulting Icon"
              width={70}
              height={70}
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 mt-20">
            Practice Management & Consulting
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            HIS provides practice management and consulting services in addition
            to your revenue cycle to help ensure your practice is able to tackle
            its greatest challenges. Services include Contract Executive
            Leadership, Workflow and Staffing Analysis, Mergers and Acquisitions.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-green-600 font-semibold hover:underline text-lg"
          >
            Explore Practice Consulting
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="relative bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="absolute top-4 left-4">
            <Image
                src="/l2.svg"
              alt="Consulting Icon"
              width={70}
              height={78}
            />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 mt-20">
            Coding Analysis & Education
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our medical coding experience and expertise provide you with a
            comprehensive understanding of what’s going right and where things
            can improve. With certified professional coders on staff, along with
            AHIMA/AAPC approved Instructors, we’re ready for any issues you may
            experience.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-green-600 font-semibold hover:underline text-lg"
          >
            Explore Coding Analysis
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Contact */}
        <div className="pt-4 text-center md:text-left">
          <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
            Contact Us
          </h4>
          <a
            href="#"
            className="text-green-600 font-semibold text-sm hover:underline"
          >
            Speak to Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}
