import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="Privacy Policy"
        subtitle="How we protect and manage your data at Vision India Public School."
        image="/hero.jpg"
      />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-navy mb-6">Introduction</h2>
            <p className="text-slate-600 mb-8">
              At Vision India Public School, we are committed to protecting the privacy and security of our students, parents, and staff. This Privacy Policy outlines how we collect, use, and safeguard information.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mb-4">Information Collection</h2>
            <p className="text-slate-600 mb-8">
              We collect information necessary for the admission process, academic tracking, and communication. This includes contact details, academic records, and medical information.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mb-4">Data Protection</h2>
            <p className="text-slate-600 mb-8">
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
