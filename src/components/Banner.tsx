"use client"


import { motion } from 'framer-motion'
import Link from 'next/link'


const Banner = () => {
  return (
    <div>


          <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#1e293b] text-white text-left py-16 px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-extrabold max-w-3xl"
          >
            Empowering Healthcare Teams <br /> with Structure, Clarity, and Growth
          </motion.h1>
         
            <Link href="/contact-us">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-green-600 hover:bg-[#00a85c] text-white font-extrabold md:px-8 px-6 md:py-4 py-3 rounded-full transition"
            >
              Partner With Us <br className="md:block hidden" /> Today
            </motion.button>
            </Link>

        
        </div>
      </motion.div>
    </div>
  )
}

export default Banner