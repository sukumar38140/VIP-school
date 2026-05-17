import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export default function ResultsPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="Academic Excellence" 
        subtitle="Celebrating the outstanding achievements and results of our students." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl text-center mb-12">
            <h2 className="text-3xl font-black text-navy mb-4">A Legacy of 100% Results</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Our students consistently achieve top ranks in board examinations and competitive tests, setting new benchmarks for academic excellence every year.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-secondary mb-2">100%</div>
                <div className="text-sm font-bold text-navy">Pass Rate</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-secondary mb-2">50+</div>
                <div className="text-sm font-bold text-navy">Distinctions</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-secondary mb-2">15+</div>
                <div className="text-sm font-bold text-navy">State Ranks</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-4xl font-black text-secondary mb-2">500+</div>
                <div className="text-sm font-bold text-navy">Happy Parents</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
