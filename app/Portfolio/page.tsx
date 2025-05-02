import Portfolio from "./Portfolio";

export const metadata = {
  title: "Our Work – Design Point Digital",
  description:
    "Explore our portfolio of website redesigns, builds, and optimizations for small businesses.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-gray-100">
      <Portfolio />
      {/* <ProjectGrid /> */}
      {/* <PortfolioCTA /> */}
    </main>
  );
}