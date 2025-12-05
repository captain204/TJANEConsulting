"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-gray-600">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3">
              <Image
                src="/logos.jpeg"
                alt="TJANE Health Logo"
                width={220}
                height={220}
                className="rounded-lg"
              />
              {/* <div className="border-l-2 border-gray-400 pl-3 ml-2">
                <div className="text-sm leading-tight">
                  <div className="font-semibold">TJANE Health</div>
                  <div className="font-semibold">Consulting </div>
                  <div className="font-semibold">Firm, L.L.C.</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Social Icons and CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/Tjanehealth-109808328263521"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.instagram.com/tjanehealth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            {/* <a href="#" className="hover:text-emerald-400 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              <FaTwitter size={20} />
            </a> */}
            {/* <button className="ml-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Free Analysis
            </button> */}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/healthcare-operations"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Healthcare Operations
                </Link>
              </li>

              <li>
                <Link
                  href="/revenue-cycle-management"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Revenue Cycle Management
                </Link>
              </li>

              <li>
                <Link
                  href="/compliance-training"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Compliance and Training
                </Link>
              </li>

              <li>
                <Link
                  href="/credentialling"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Credentialling
                </Link>
              </li>

              <li>
                <Link
                  href="/billing-audit"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Billing Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>847-720-7499</p>
              <p className="font-semibold text-white">
                TJANE Health Headquarters
              </p>
              <p>
                120 Sister Pierre Dr #207
                <br />
                Baltimore, MD 21204, USA
              </p>
              <p>
                <a
                  href="mailto:admin@tjanehealth.com"
                  className="text-emerald-400 hover:underline"
                >
                  admin@tjanehealth.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#243340] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-2 md:mb-0">
              TJANE Consulting. All Rights Reserved © 2025
            </p>
            <div className="flex space-x-4">
              <Link
                href="/privacy-policy"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>-</span>
              <Link
                href="/services"
                className="hover:text-emerald-400 transition-colors"
              >
                Services
              </Link>
              <span>-</span>
              <Link
                href="/contact-us"
                className="hover:text-emerald-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
