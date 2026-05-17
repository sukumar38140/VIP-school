import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ContactSection from "@/components/home/ContactSection";

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
