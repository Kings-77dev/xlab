// app/portfolio/page.tsx
import Head from "next/head";
import PortfolioClient from "./PortfolioClient";

export const metadata = {
  title: "Our Work – Design Point Digital",
  description:
    "Explore our portfolio of website redesigns, builds, and optimizations for small businesses.",
};

export default function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className="bg-gray-">
        <PortfolioClient />
      </main>
    </>
  );
}