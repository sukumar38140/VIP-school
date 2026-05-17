import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Vision India Public School",
  description: "Get in touch with Vision India Public School for admissions, inquiries, or any assistance. Visit our campus or contact us today.",
  keywords: ["contact", "contact us", "school address", "phone number"],
  openGraph: {
    title: "Contact Vision India Public School",
    description: "Reach out to us for any inquiries or information.",
    images: ["/logo.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-20 bg-slate-50">
      <Header />
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with us for admissions, inquiries, or any assistance." 
      />
      <div className="py-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
