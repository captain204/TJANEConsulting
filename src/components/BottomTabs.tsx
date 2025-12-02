"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckSquare, Building2, Phone, Home } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function BottomTabs() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname(); // ✅ Get the current route

  // Scroll hide/show logic
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  // Animation variants
  const containerVariants: any = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        staggerChildren: 0.1,
      },
    },
    exit: { y: 100, opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants: any = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  // ✅ Define your tab structure once
  const tabs = [
      { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Our Services", icon: CheckSquare },
    { path: "/about-us", label: "About Us", icon: Building2 },
    { path: "/contact-us", label: "Contact Us", icon: Phone },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e2833]/95 backdrop-blur-sm py-3 shadow-lg flex justify-around items-center md:hidden"
        >
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.path; // ✅ Check if active
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => handleNavigate(tab.path)}
                className={`flex flex-col items-center text-sm cursor-pointer transition-transform hover:scale-105 ${
                  isActive ? "text-green-600" : "text-white"
                }`}
              >
                <div
                  className={`p-2 rounded-full mb-1 transition-all ${
                    isActive
                      ? "bg-green-600 text-[#1e2833] scale-110"
                      : "bg-green-700"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <span>{tab.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}



// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CheckSquare, Building2, Phone } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function BottomTabs() {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//     const router = useRouter();


//       const handleNavigate = (path: string) => {
//     router.push(path);
//   };
//   // Detect scroll direction
//   useEffect(() => {
//     const controlNavbar = () => {
//       if (window.scrollY > lastScrollY && window.scrollY > 100) {
//         setShow(false); // hide on scroll down
//       } else {
//         setShow(true); // show on scroll up or top
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", controlNavbar);
//     return () => window.removeEventListener("scroll", controlNavbar);
//   }, [lastScrollY]);

//   // Animation variants
//   const containerVariants:any = {
//     hidden: { y: 100, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 70,
//         damping: 12,
//         staggerChildren: 0.1,
//       },
//     },
//     exit: {
//       y: 100,
//       opacity: 0,
//       transition: { duration: 0.3 },
//     },
//   };

//   const itemVariants:any = {
//     hidden: { scale: 0.8, opacity: 0, y: 20 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 120 },
//     },
//   };

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e2833]/95 backdrop-blur-sm py-3 shadow-lg flex justify-around items-center md:hidden"
//         >
//           {/* Tab 1 */}
//           <motion.div
//             variants={itemVariants}
//               onClick={() => handleNavigate("/services")}
//             className="flex flex-col items-center text-white text-sm cursor-pointer hover:scale-105 transition-transform"
//           >
//             <div className="bg-green-500 p-2 rounded-full mb-1">
//               <CheckSquare size={20} />
//             </div>
//             <span>Our Services</span>
//           </motion.div>

//           {/* Tab 2 */}
//           <motion.div
//             variants={itemVariants}
//               onClick={() => handleNavigate("/about-us")}
//             className="flex flex-col items-center text-white text-sm cursor-pointer hover:scale-105 transition-transform"
//           >
//             <div className="bg-green-500 p-2 rounded-full mb-1">
//               <Building2 size={20} />
//             </div>
//             <span>About Us</span>
//           </motion.div>

//           {/* Tab 3 */}
//           <motion.div
//             variants={itemVariants}
//              onClick={() => handleNavigate("/contact-us")}
//             className="flex flex-col items-center text-white text-sm cursor-pointer hover:scale-105 transition-transform"
//           >
//             <div className="bg-green-500 p-2 rounded-full mb-1">
//               <Phone size={20} />
//             </div>
//             <span>Contact Us</span>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
