import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";


export const metadata = {
  title: "Contact – Design Point Digital",
  description: "Get in touch with us to discuss your web design, development and SEO needs.",
};

export default function ContactPage() {
  return (
    <main className="bg-gray-100">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}