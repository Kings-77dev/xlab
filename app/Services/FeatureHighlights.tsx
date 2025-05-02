// components/FeatureHighlights.tsx
import Image from "next/image";
import {
  ShoppingCartIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ShoppingCartIcon,
    title: "E-Commerce Online Stores",
    description:
      "Sell products in minutes with our fully functional e-commerce websites. We’ve helped clients boost sales through a sophisticated online store you can manage on the go.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Content Management System (CMS)",
    description:
      "Custom-built around a user-friendly CMS, giving you the power to update content, add pages, and manage your site without touching code.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Responsive Design",
    description:
      "Your site will look and work beautifully on every device—desktop, tablet or phone—so your customers always get a great experience.",
  },
  {
    icon: FingerPrintIcon,
    title: "UX & User Interaction",
    description:
      "We craft interfaces that guide your visitors intuitively—reducing friction, boosting engagement, and driving conversions.",
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         {/* Left column */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Stand Out With Feature-Rich Sites</h2>
                  <p className="text-gray-700">
                  From selling online to managing content and delighting users on any device, we
                  build the tools your business needs to grow and thrive.
                  </p>
        
                  {/* Illustration under the description */}
                  <div className="relative w-full h-48 md:h-84">
                    <Image
                      src="/conversion.svg"
                      alt="Workflow illustration"
                      fill
                      className="object-contain "
                    />
                  </div>
                </div>

        {/* Right: feature list */}
        <div className="space-y-8">
          {/* <h2 className="text-3xl font-bold">Stand Out With Feature-Rich Sites</h2>
          <p className="text-gray-700 max-w-md">
            From selling online to managing content and delighting users on any device, we
            build the tools your business needs to grow and thrive.
          </p> */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}