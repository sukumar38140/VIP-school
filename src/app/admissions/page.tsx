import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Download } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="Admissions" 
        subtitle="Join the learning mission. Admissions open for the academic year 2026-2027." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl mb-8">
                <h2 className="text-3xl font-black text-navy mb-6">Admission Process</h2>
                <ol className="list-decimal pl-6 text-slate-600 space-y-4 mb-8">
                  <li>Submit the online inquiry form or visit the campus.</li>
                  <li>Purchase and fill out the admission application.</li>
                  <li>Interaction session with the Principal.</li>
                  <li>Document verification and fee payment.</li>
                </ol>
                <h3 className="text-xl font-bold text-navy mb-4">Required Documents</h3>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-8">
                  <li>Birth Certificate</li>
                  <li>Transfer Certificate (TC) from previous school</li>
                  <li>Progress Report / Marks Card</li>
                  <li>Passport size photographs</li>
                  <li>Aadhar Card copy</li>
                </ul>
                <button className="w-full py-4 rounded-2xl bg-slate-100 text-navy font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                  <span>Download Brochure</span>
                  <Download size={20} />
                </button>
              </div>
            </div>
            <div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
                <h2 className="text-3xl font-black text-navy mb-6">Inquiry Form</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Student Name</label>
                    <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary" placeholder="Enter full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Parent/Guardian Name</label>
                    <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary" placeholder="Enter parent name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                      <input type="tel" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary" placeholder="Phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Grade Applying For</label>
                      <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary">
                        <option>Nursery</option>
                        <option>LKG</option>
                        <option>UKG</option>
                        <option>Grade 1 to 9</option>
                      </select>
                    </div>
                  </div>
                  <button type="button" className="w-full py-4 mt-4 rounded-xl gold-gradient text-white font-bold shadow-xl hover:shadow-secondary/30 transition-all">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
