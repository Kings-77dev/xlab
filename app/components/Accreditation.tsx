import AccreditationCarousel from "./AccreditationCarousel";

const accreds = [
  { src: "/accreditations/badge-1.png", alt: "ISO Certified" },
  { src: "/accreditations/badge-2.png", alt: "GDPR Compliant" },
  { src: "/accreditations/badge-3.png", alt: "WordPress Expert" },
  { src: "/accreditations/badge-4.png", alt: "Google Partner" },
];

export default function Accreditation() {
  return (
    <main className="bg-gray-100">
      <AccreditationCarousel images={accreds} interval={4000} />
    </main>
  );
}