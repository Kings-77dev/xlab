// app/services/web-development/page.tsx
import type { Metadata } from 'next';
import WebDevHero from '../webdesign/WebDevHero';
import WebDevFeatures from './WebDevFeatures';
import WhyPartner from '@/app/components/WhyPartner';
import HowWeWork from '@/app/components/HowWeWork';
import WebDevCTA from '../webdesign/WebDevCTA';


export const metadata: Metadata = {
  title: 'Custom Web Development | Design Point Digital',
  description: 'Expert web development services for small businesses: API integrations, performance optimizations, and scalable solutions.',
  keywords: [
    'web development',
    'custom web applications',
    'API integration',
    'performance optimization',
    'small business web development',
  ],
};

export default function WebDevelopmentPage() {
  return (
    <main className="bg-background">
      <WebDevHero />
      <WebDevFeatures />
      <WhyPartner />
      <HowWeWork />
      <WebDevCTA />
    </main>
  );
}
