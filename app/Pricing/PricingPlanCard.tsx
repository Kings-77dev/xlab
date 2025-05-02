// components/PricingPlanCard.tsx
import Link from "next/link";

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  href: string;
  buttonText: string;
}

export default function PricingPlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="flex flex-col justify-between bg-white rounded-2xl shadow p-8 space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{plan.name}</h3>
        <p className="text-4xl font-bold">
          {plan.price}
          <span className="text-lg font-normal">{plan.period}</span>
        </p>
        <ul className="space-y-2 text-gray-600">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="mt-1 mr-2 text-accent">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={plan.href}
        className="inline-block bg-accent text-white text-center px-6 py-3 rounded-full font-medium hover:bg-accent-dark transition"
      >
        {plan.buttonText}
      </Link>
    </article>
  );
}