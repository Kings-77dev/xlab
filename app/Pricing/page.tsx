import PricingCTA from "./PricingCTA";
import PricingHero from "./PricingHero";
import PricingPlans from "./PricingPlans";

export const metadata = {
  title: "Pricing – Design Point Digital",
  description: "Explore pricing plans for web design, development, and SEO services.",
};

export default function PricingPage() {
  return (
    <main className="bg-gray-100">
      <PricingHero />
      <PricingPlans />
      <PricingCTA />
    </main>
  );
}