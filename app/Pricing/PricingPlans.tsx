// components/PricingPlans.tsx
import PricingPlanCard, { Plan } from "./PricingPlanCard";

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
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <PricingPlanCard key={i} plan={plan} />
        ))}
      </div>
    </section>
  );
}