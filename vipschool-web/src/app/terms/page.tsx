import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export default function TermsAndConditions() {
  return (
    <main>
      <Header />
      <PageHero 
        title="Terms & Conditions"
        subtitle="The guidelines and rules for the Vision India Public School community."
        image="/hero.png"
      />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-navy mb-6">School Regulations</h2>
            <p className="text-slate-600 mb-8">
              By enrolling in Vision India Public School, students and parents agree to abide by the rules and regulations set forth by the school management and the CBSE board.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mb-4">Academic Integrity</h2>
            <p className="text-slate-600 mb-8">
              We maintain high standards of academic honesty. Plagiarism and cheating are strictly prohibited.
            </p>
            
            <h2 className="text-2xl font-bold text-navy mb-4">Fee Structure</h2>
            <p className="text-slate-600 mb-8">
              Fees must be paid on time as per the schedule provided during admission. Late payments may incur penalties.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
