"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  ClipboardList,
  BarChart3,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [specialtyDropdownOpen, setSpecialtyDropdownOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const pathname = usePathname();

  
  const handleLinkClick = () => {
    setDrawerOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  const isActive = (path:any) => pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-[9998] transition-opacity"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 sm:w-80 md:w-96 bg-slate-800 bg-opacity-95 backdrop-blur-sm shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8">
          <nav className="mt-12 space-y-6">
            {/* Home */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className={`flex items-center justify-between text-lg font-semibold transition-colors group ${
                isActive("/") ? "text-green-400" : "text-white hover:text-green-400"
              }`}
            >
              <span>Home</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Our Services (Expandable) */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-white hover:text-green-400 text-lg font-semibold transition-colors"
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    servicesOpen ? "rotate-180 text-green-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-4 ml-4 pl-3 border-l border-green-500 space-y-4"
                  >
                    {/* Credentialling */}
                    <motion.div whileHover={{ scale: 1.03, x: 4 }}>
                      <Link
                        href="/credentialling"
                        onClick={handleLinkClick}
                        className={`flex items-start gap-3 transition-colors ${
                          isActive("/credentialling")
                            ? "text-green-400"
                            : "text-slate-200 hover:text-green-400"
                        }`}
                      >
                        <ClipboardList className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="font-semibold text-base">Credentialling</p>
                          <p className="text-sm text-slate-400 leading-snug">
                            Verify provider details with speed and precision
                          </p>
                        </div>
                      </Link>
                    </motion.div>

                    {/* Billing Audit */}
                    <motion.div whileHover={{ scale: 1.03, x: 4 }}>
                      <Link
                        href="/billing-audit"
                        onClick={handleLinkClick}
                        className={`flex items-start gap-3 transition-colors ${
                          isActive("/billing-audit")
                            ? "text-green-400"
                            : "text-slate-200 hover:text-green-400"
                        }`}
                      >
                        <BarChart3 className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="font-semibold text-base">Billing Audit</p>
                          <p className="text-sm text-slate-400 leading-snug">
                            Audit billing records for accuracy and correction
                          </p>
                        </div>
                      </Link>
                    </motion.div>

                    {/* Healthcare Operations */}
                    <motion.div whileHover={{ scale: 1.03, x: 4 }}>
                      <Link
                        href="/healthcare-operations"
                        onClick={handleLinkClick}
                        className={`flex items-start gap-3 transition-colors ${
                          isActive("/healthcare-operations")
                            ? "text-green-400"
                            : "text-slate-200 hover:text-green-400"
                        }`}
                      >
                        <ClipboardList className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="font-semibold text-base">
                            Healthcare Operations
                          </p>
                          <p className="text-sm text-slate-400 leading-snug">
                            Optimize daily workflows for seamless coordination
                          </p>
                        </div>
                      </Link>
                    </motion.div>

                    {/* Revenue Cycle Management */}
                    <motion.div whileHover={{ scale: 1.03, x: 4 }}>
                      <Link
                        href="/revenue-cycle-management"
                        onClick={handleLinkClick}
                        className={`flex items-start gap-3 transition-colors ${
                          isActive("/revenue-cycle-management")
                            ? "text-green-400"
                            : "text-slate-200 hover:text-green-400"
                        }`}
                      >
                        <BarChart3 className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="font-semibold text-base">
                            Revenue Cycle Management
                          </p>
                          <p className="text-sm text-slate-400 leading-snug">
                            Manage revenue flow for steady financial progression
                          </p>
                        </div>
                      </Link>
                    </motion.div>

                    {/* Compliance */}
                    <motion.div whileHover={{ scale: 1.03, x: 4 }}>
                      <Link
                        href="/compliance-training"
                        onClick={handleLinkClick}
                        className={`flex items-start gap-3 transition-colors ${
                          isActive("/compliance-training")
                            ? "text-green-400"
                            : "text-slate-200 hover:text-green-400"
                        }`}
                      >
                        <BookOpen className="w-6 h-6 text-green-400" />
                        <div>
                          <p className="font-semibold text-base">
                            Compliance & Training
                          </p>
                          <p className="text-sm text-slate-400 leading-snug">
                            Strengthen staff knowledge for safe, compliant operation
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <Link
              href="/about-us"
              onClick={handleLinkClick}
              className={`flex items-center justify-between text-lg font-semibold group transition-colors ${
                isActive("/about-us")
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              <span>About Us</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Testimonials */}
            <Link
              href="/testimonials"
              onClick={handleLinkClick}
              className={`flex items-center justify-between text-lg font-semibold group transition-colors ${
                isActive("/testimonials")
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              <span>Testimonials</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Contact */}
            <Link
              href="/contact-us"
              onClick={handleLinkClick}
              className={`flex items-center justify-between text-lg font-semibold group transition-colors ${
                isActive("/contact-us")
                  ? "text-green-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              <span>Contact Us</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>

            <div className="pt-4 border-t border-slate-600">
              <Link
                href="/contact-us"
                onClick={handleLinkClick}
                className="block text-white hover:text-green-400 text-lg font-semibold transition-colors py-3"
              >
                Schedule a Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar */}
      <motion.nav
        initial={false}
        animate={{ height: scrolled ? 56 : 68 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" onClick={handleLinkClick} className="flex items-center">
              <Image src="/l.jpeg" alt="THC Logo" width={200} height={200} className="object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-32">
              <div
                className="relative"
                onMouseEnter={() => setSpecialtyDropdownOpen(true)}
                onMouseLeave={() => setSpecialtyDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 text-slate-800 hover:text-green-500 font-semibold text-base transition-colors">
                  <span>Specialty Expertise</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {specialtyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl border-t-4 border-green-500 rounded-b-md z-50">
                    <div className="py-4">
                      <a className="block px-6 py-3 text-slate-800 hover:bg-gray-50 hover:text-green-500 font-medium transition-colors">
                        Expert Services for Orthopedic Practice
                      </a>
                      <a className="block px-6 py-3 text-slate-800 hover:bg-gray-50 hover:text-green-500 font-medium transition-colors">
                        Expert Services for Radiology Practices
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setPracticeDropdownOpen(true)}
                onMouseLeave={() => setPracticeDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 text-slate-800 hover:text-green-500 font-semibold text-base transition-colors">
                  <span>All Practice Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {practiceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl border-t-4 border-green-500 rounded-b-md z-50">
                    <div className="py-4">
                      <a className="block px-6 py-3 text-slate-800 hover:bg-gray-50 hover:text-green-500 font-medium transition-colors">
                        Revenue Cycle Management Services
                      </a>
                      <a className="block px-6 py-3 text-slate-800 hover:bg-gray-50 hover:text-green-500 font-medium transition-colors">
                        Practice Management & Consulting
                      </a>
                      <a className="block px-6 py-3 text-slate-800 hover:bg-gray-50 hover:text-green-500 font-medium transition-colors">
                        Coding Education & Consulting
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold">
                Free Analysis
              </button>

              {/* Drawer toggle */}
              <button
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="text-slate-800 hover:text-green-500 transition-colors cursor-pointer"
              >
                {/* <motion.div
                  key={drawerOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                > */}
                  {drawerOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                {/* </motion.div> */}
              </button>
            </div>

            {/* Mobile menu */}
            <button
              className="lg:hidden text-slate-800 cursor-pointer"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <motion.div
                key={drawerOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {drawerOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
