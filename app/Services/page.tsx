import Services from "./Services";


export const metadata = {
  title: "Our Services – Design Point Digital",
  description:
    "Smart, modern websites built to grow your business. From full redesigns to ongoing support, we've got you covered.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Services Grid */}
      <Services />
      {/* <FeatureHighlights />
      <ProcessSteps />
      <Testimonials /> */}
    </main>
  );
}
