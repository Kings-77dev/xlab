// // components/PricingPlans.tsx
// import PricingPlanCard, { Plan } from "./PricingPlanCard";

// const plans: Plan[] = [
//   {
//     name: "Basic",
//     price: "€49",
//     period: "/month",
//     features: ["Responsive Design", "Basic SEO", "Email Support"],
//     href: "/contact",
//     buttonText: "Choose Basic",
//   },
//   {
//     name: "Pro",
//     price: "€99",
//     period: "/month",
//     features: [
//       "Everything in Basic",
//       "Advanced SEO",
//       "CMS Integration",
//       "Priority Support",
//     ],
//     href: "/contact",
//     buttonText: "Choose Pro",
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     features: [
//       "Custom Solutions",
//       "Dedicated Account Manager",
//       "24/7 Support",
//     ],
//     href: "/contact",
//     buttonText: "Contact Us",
//   },
// ];

// export default function PricingPlans() {
//   return (
//     <section className="py-16 px-6 md:px-12 bg-background">
//       <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {plans.map((plan, i) => (
//           <PricingPlanCard key={i} plan={plan} />
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// // components/PricingPlans.tsx
// import { useState, useEffect } from "react";
// import PricingPlanCard, { Plan } from "./PricingPlanCard";
// import { motion } from "framer-motion";

// // Skeleton loader matches card dimensions and layout:
// function SkeletonPricingPlanCard() {
//   return (
//     <article className="flex flex-col justify-between bg-black border border-gray-800 rounded-2xl shadow p-8 space-y-6 animate-pulse">
//       <div className="space-y-4">
//         <div className="h-6 bg-gray-700 rounded"></div>
//         <div className="h-12 bg-gray-700 rounded w-1/3"></div>
//         <ul className="space-y-2">
//           {[...Array(3)].map((_, i) => (
//             <li key={i} className="h-4 bg-gray-700 rounded"></li>
//           ))}
//         </ul>
//       </div>
//       <div className="h-10 bg-gray-700 rounded"></div>
//     </article>
//   );
// }

// const plans: Plan[] = [
//   {
//     name: "Basic",
//     price: "€49",
//     period: "/month",
//     features: ["Responsive Design", "Basic SEO", "Email Support"],
//     href: "/contact",
//     buttonText: "Choose Basic",
//   },
//   {
//     name: "Pro",
//     price: "€99",
//     period: "/month",
//     features: [
//       "Everything in Basic",
//       "Advanced SEO",
//       "CMS Integration",
//       "Priority Support",
//     ],
//     href: "/contact",
//     buttonText: "Choose Pro",
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     features: [
//       "Custom Solutions",
//       "Dedicated Account Manager",
//       "24/7 Support",
//     ],
//     href: "/contact",
//     buttonText: "Contact Us",
//   },
// ];

// export default function PricingPlans() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate data fetching delay
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="py-16 px-6 md:px-12 bg-background">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {loading
//           ? plans.map((_, i) => <SkeletonPricingPlanCard key={i} />)
//           : plans.map((plan, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//               >
//                 <PricingPlanCard plan={plan} />
//               </motion.div>
//             ))}
//       </div>
//     </section>
//   );
// }



"use client";

// components/PricingPlans.tsx
import { useState, useEffect } from "react";
import PricingPlanCard, { Plan } from "./PricingPlanCard";
import { motion } from "framer-motion";

// Skeleton loader matches card dimensions and layout:
function SkeletonPricingPlanCard() {
  return (
    <article className="flex flex-col justify-between bg-black border border-gray-800 rounded-2xl shadow p-8 space-y-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-6 bg-gray-700 rounded"></div>
        <div className="h-12 bg-gray-700 rounded w-1/3"></div>
        <ul className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <li key={i} className="h-4 bg-gray-700 rounded"></li>
          ))}
        </ul>
      </div>
      <div className="h-10 bg-gray-700 rounded"></div>
    </article>
  );
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "€49",
    period: "/month",
    features: ["Responsive Design", "Basic SEO", "Email Support"],
    href: "/contact",
    buttonText: "Choose Basic",
  },
  {
    name: "Pro",
    price: "€99",
    period: "/month",
    features: [
      "Everything in Basic",
      "Advanced SEO",
      "CMS Integration",
      "Priority Support",
    ],
    href: "/contact",
    buttonText: "Choose Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Custom Solutions",
      "Dedicated Account Manager",
      "24/7 Support",
    ],
    href: "/contact",
    buttonText: "Contact Us",
  },
];

export default function PricingPlans() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-background">
      <h2 className="text-3xl md:text-[100px] font-semibold text-center mb-8 text-foreground">Our Pricing Plans</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? plans.map((_, i) => <SkeletonPricingPlanCard key={i} />)
          : plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <PricingPlanCard plan={plan} />
              </motion.div>
            ))}
      </div>
    </section>
  );
}
