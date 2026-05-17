import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { FileText, Download, ShieldCheck } from "lucide-react";

export default function DisclosurePage() {
    const documents = [
        { name: "Affiliation Letter", size: "1.2 MB" },
        { name: "Trust Registration Certificate", size: "850 KB" },
        { name: "No Objection Certificate (NOC)", size: "920 KB" },
        { name: "Recognition Certificate", size: "1.1 MB" },
        { name: "Building Safety Certificate", size: "2.4 MB" },
        { name: "Fire Safety Certificate", size: "1.5 MB" },
        { name: "Water & Sanitation Certificate", size: "780 KB" },
    ];

    return (
        <main className="relative min-h-screen pt-20">
            <Header />
            <PageHero
                title="CBSE Public Disclosure"
                subtitle="Mandatory information and documentation as per CBSE requirements."
                image="/hero.jpg"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-xl mb-12">
                            <h2 className="text-3xl font-black text-navy mb-8 flex items-center gap-4">
                                <ShieldCheck className="text-secondary" size={32} />
                                General Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                                {[
                                    { label: "School Name", val: "Vision India Public School" },
                                    { label: "Affiliation No.", val: "830697" },
                                    { label: "School Code", val: "45585" },
                                    { label: "Address", val: "Srinivasapur, Kolar, Karnataka" },
                                    { label: "Principal Name", val: "Mrs. S. Kavitha" },
                                    { label: "Contact Email", val: "info@vipschool.edu.in" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between border-b border-slate-200 pb-4">
                                        <span className="text-slate-500 font-bold">{item.label}</span>
                                        <span className="text-navy font-black">{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 className="text-3xl font-black text-navy mb-8">Documents & Information</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {documents.map((doc, i) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-lg hover:border-secondary/20 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-navy group-hover:bg-secondary group-hover:text-white transition-colors">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy">{doc.name}</h4>
                                            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{doc.size}</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-slate-100 text-navy font-bold text-sm hover:gold-gradient hover:text-white transition-all">
                                        <Download size={16} /> Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
