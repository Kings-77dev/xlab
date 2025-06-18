// // components/FeatureHighlights.tsx
// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const features = [
//   {
//     icon: "/icons/channels.svg",
//     title: "Own All of the Channels You Need",
//     text: "We’ve assembled the best-of-breed teams into a single relationship so you can avoid managing a network of agencies and internal hires.",
//   },
//   {
//     icon: "/icons/partner.svg",
//     title: "A Partner You Can Count On",
//     text: "“Agency” by definition, our team of All-Stars work as part of your team, invested in your success and the sacredness of your brand.",
//   },
//   {
//     icon: "/icons/advantage.svg",
//     title: "Gain an Unfair Advantage",
//     text: "Beyond top talent and certifications, we built proprietary and use AI technology to help your business lead its category at all times.",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// export default function FeatureHighlights() {
//   return (
//     <motion.section
//       className=" rounded-2xl py-16 px-6 md:px-12"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       {/* Heading */}
//       <motion.div
//         className="text-center mb-12 space-y-2"
//         variants={itemVariants}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-2xl md:text-3xl font-bold ">
//           Be ready to be{" "}
//           <span className="text-primary   ">
//             one of the first
//           </span>{" "}
//           in your specific niche
//         </h2>
//       </motion.div>

//       {/* Feature cards */}
//       <motion.div
//         className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
//         variants={containerVariants}
//       >
//         {features.map(({ icon, title, text }, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-black rounded-xl border border-gray-800 p-6 flex flex-col"
//             variants={itemVariants}
//             transition={{ duration: 0.6 }}
//           >

//             <h3 className="text-3xl font-semibold mb-10">{title}</h3>
//             <p className="text- foreground flex-1">{text}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }

// components/FeatureHighlights.tsx
"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

const features = [
  {
    icon: "/icons/channels.svg",
    title: "Own All of the Channels You Need",
    text: "We’ve assembled the best-of-breed teams into a single relationship so you can avoid managing a network of agencies and internal hires.",
    bgClass: "bg-red-900",
    accentClass: "bg-red-600",
  },
  {
    icon: "/icons/partner.svg",
    title: "A Partner You Can Count On",
    text: "“Agency” by definition, our team of All-Stars work as part of your team, invested in your success and the sacredness of your brand.",
    bgClass: "bg-yellow-800",
    accentClass: "bg-yellow-400",
  },
  {
    icon: "/icons/advantage.svg",
    title: "Gain an Unfair Advantage",
    text: "Beyond top talent and certifications, we built proprietary AI technology to help your business lead its category at all times.",
    bgClass: "bg-green-900",
    accentClass: "bg-green-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureHighlights() {
  return (
    <motion.section
      className="py-16 px-6 md:px-12 rounded-2xl bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">
          Be ready to be{" "}
          <span className="text-primary underline">one of the first</span> in
          your niche
        </h2>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {features.map(({ title, text, bgClass, accentClass }, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            {/* Card */}
            <div
              className={`${bgClass} relative overflow-hidden rounded-2xl h-64 text-white`}
            >
              {/* 1) Quarter-circle accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div
                  className={`absolute bottom-0 left-0 w-32 h-32 ${accentClass} rounded-full`}
                />
              </div>

              {/* 2) Icon */}
              {/* <div className="absolute top-6 left-6 w-12 h-12">
                <Image src={icon} alt={title} fill className="object-contain" />
              </div> */}

              {/* 3) Title + desc pinned bottom-left */}
              <div className="absolute bottom-6 left-6 max-w-[75%] z-10">
                <h3 className="text-xl font-semibold mb-6">{title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
