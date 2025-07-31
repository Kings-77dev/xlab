// // components/ContactHero.tsx
// "use client";

// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function ContactHero() {
//   return (
//     <motion.section
//       id="contact-hero"
//       className="bg-background py-16 px-6 md:px-12 text-center"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={fadeInUp}
//       transition={{ duration: 0.6 }}
//     >
//       <h1 className="text-4xl md:text-5xl font-bold">
//         Get in Touch
//       </h1>
//       <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
//         Have a project in mind or questions about our services? Fill out the form below or use the info provided to reach out directly.
//       </p>
//     </motion.section>
//   );
// }

// components/ContactHero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.section
      id="contact-hero"
      className="bg-background text-foreground py-24 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        {/* Nav indicator */}
        <div className="flex items-center space-x-2 mb-6">
          {loaded ? (
            <>
          <span className="inline-block w-2 h-2 rounded-full bg-primary blink-dot" />{" "}
              <span className="text-sm text-gray-400">Contact</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-gray-700 inline-block" />
              <div className="h-4 w-20 rounded bg-gray-700 animate-pulse" />
            </>
          )}
        </div>

        {/* Headline */}
        {loaded ? (
          <h1 className="text-5xl md:text-[100px] font-bold font-serif leading-tight">
            Get in Touch
          </h1>
        ) : (
          <div className="h-12 md:h-20 w-3/4 md:w-1/2 rounded bg-gray-700 animate-pulse" />
        )}

        {/* Subheading */}
        {loaded ? (
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
            Have a project in mind or questions about our services? Fill out the form below or use the info provided to reach out directly.
          </p>
        ) : (
          <div className="mt-4 h-4 w-2/3 rounded bg-gray-700 animate-pulse" />
        )}

        {/* CTA */}
        <div className="mt-8">
          {loaded ? (
            <Link
              href="/contact"
              className="inline-block bg-primary text-foreground px-6 py-3 rounded-lg font-bold hover:scale-105 hover:bg-accent transition"
            >
              Send a Message
            </Link>
          ) : (
            <div className="h-10 w-36 rounded-lg bg-gray-700 animate-pulse" />
          )}
        </div>
      </div>
    </motion.section>
  );
}