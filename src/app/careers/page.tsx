import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Upload } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="Careers at VIP" 
        subtitle="Join our team of dedicated educators and professionals." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-navy mb-6">Current Openings</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-navy mb-2">Primary School Teacher</h3>
                  <p className="text-slate-600 mb-4 text-sm">Subjects: English, Mathematics<br/>Experience: 2-3 Years<br/>Qualification: B.Ed</p>
                  <button className="text-secondary font-bold hover:underline">View Details</button>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-navy mb-2">High School Science Teacher</h3>
                  <p className="text-slate-600 mb-4 text-sm">Subjects: Physics, Chemistry<br/>Experience: 5+ Years<br/>Qualification: M.Sc, B.Ed</p>
                  <button className="text-secondary font-bold hover:underline">View Details</button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
                <h2 className="text-3xl font-black text-navy mb-6">Apply Now</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary" placeholder="Enter your full name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                      <input type="email" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary" placeholder="Email address" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                      <input type="tel" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary" placeholder="Phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Position Applying For</label>
                    <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary">
                      <option>Primary School Teacher</option>
                      <option>High School Science Teacher</option>
                      <option>Other / General Application</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Upload Resume</label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                      <Upload className="text-slate-400 mb-2" />
                      <span className="text-slate-600 font-medium">Click to upload your resume</span>
                      <span className="text-slate-400 text-sm mt-1">PDF or DOCX (Max 5MB)</span>
                    </div>
                  </div>
                  <button type="button" className="w-full py-4 mt-4 rounded-xl gold-gradient text-white font-bold shadow-xl hover:shadow-secondary/30 transition-all">
                    Submit Application
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
