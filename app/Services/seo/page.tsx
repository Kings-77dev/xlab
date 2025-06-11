import IncludedInSEO from "./IncludedInSEO";
// import SEOBenefits from "./SEOBenefits";
import SEOCTA from "./SEOCTA";
import SEOHero from "./SEOHero";
import WhySEOWithUs from "./WhySEOWithUs";

export const metadata = {
  title: "Services – SEO | Design Point Digital",
  description:
    "Professional SEO services: keyword research, on-page, technical audits, link building and more.",
};

export default function SEOPage() {
  return (
    <main className="bg-white">
      <SEOHero />
      {/* <SEOFeatures /> */}
      <IncludedInSEO />

      <WhySEOWithUs />
      {/* <SEOBenefits /> */}
      <SEOCTA />
    </main>
  );
}
