"use client";

import { Home } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type HeroSectionProps = {
  breadcrumb?: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
};

export default function HeroSection({
  breadcrumb = "Our Management Services",
  title,
  subtitle,
  // backgroundImage = "/hero.png",
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] bg-black flex flex-col justify-center text-white overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
    
        {/* Dark grey/ash overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/80 via-gray-900/80 to-gray-950/90" />
      </motion.div>

      {/* Breadcrumb */}
      <motion.div
        className="relative z-10 flex hidden  items-center md:justify-center gap-2 text-sm text-gray-300 px-6 md:px-16 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <Home size={14} />
        <span className="tracking-wide">{breadcrumb}</span>
      </motion.div>

      {/* Title and Subtitle */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto md:mt-0 mt-16"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>

      {/* Decorative Bottom Fade */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-gray-950/90 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </section>
  );
}




// "use client";

// import { Home } from "lucide-react";
// import Image from "next/image";

// type HeroSectionProps = {
//   breadcrumb?: string;
//   title: string;
//   subtitle: string;
//   backgroundImage?: string;
// };

// export default function HeroSection({
//   breadcrumb = "Our Management Services",
//   title,
//   subtitle,
//   backgroundImage = "/hero.png",
// }: HeroSectionProps) {
//   return (
//     <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-center text-white">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <Image
//           src={backgroundImage}
//           alt="Background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Breadcrumb - moved to top left */}
//       <div className="relative z-10 flex items-center md:justify-center gap-2 text-sm text-gray-200 px-6 md:px-16 mb-6">
//         <Home size={14} />
//         <span>{breadcrumb}</span>
//       </div>

//       {/* Title + Subtitle (centered) */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
//           {title}
//         </h1>
//         <p className="text-sm md:text-base text-gray-200">{subtitle}</p>
//       </div>
//     </section>
//   );
// }
