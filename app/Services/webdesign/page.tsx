// app/services/web-design/page.tsx
import type { Metadata } from "next";
import WebDesignHero from "./WebDesignHero";
import WebDesignFeatures from "./WebDesignFeatures";
import WhyPartner from "@/app/components/WhyPartner";
import HowWeWork from "@/app/components/HowWeWork";
import WebDesignCTA from "./WebDesignCTA";


export const metadata: Metadata = {
  title: "Custom Web Design | Design Point Digital",
  description: "Professional web design tailored for small businesses: responsive, user-friendly, and SEO-friendly.",
  keywords: [
    "web design",
    "responsive web design",
    "web design Netherlands",
    "small business web design",
    "user-friendly web design",
  ],
};

export default function WebDesignPage() {
  return (
    <main className="bg-background">
      <WebDesignHero/>
      <WebDesignFeatures />
      <WhyPartner />
      <HowWeWork />
      <WebDesignCTA/>
    </main>
  );
}
