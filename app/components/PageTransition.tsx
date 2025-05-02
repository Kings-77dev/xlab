// // components/PageTransition.tsx
// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// export default function PageTransition({ children }: { children: React.ReactNode }) {
//   const path = usePathname();
//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         key={path}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.4 }}
//       >
//         {children}
//       </motion.main>
//     </AnimatePresence>
//   );
// }