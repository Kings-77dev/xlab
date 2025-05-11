// UI/UX Design Services Page

import UIUXBenefits from "./UIUXBenefits";
import UIUXCTA from "./UIUXCTA";
import UIUXHero from "./UIUXHero";
export const metadata = {
  title: "Services – UI/UX | Design Point Digital",
  description:
    "Expert UI/UX design: user research, wireframes, prototyping, visual design, and usability testing.",
};

export default function UIUXPage() {
  return (
    <main className="bg-white">
      <UIUXHero />
      <UIUXBenefits />
      <UIUXCTA />
    </main>
  );
}