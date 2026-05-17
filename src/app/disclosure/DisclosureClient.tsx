"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  Scale, 
  Lock, 
  Info,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

const tabs = [
  { id: "disclosure", label: "CBSE Disclosure", icon: ShieldCheck },
  { id: "terms", label: "Terms of Service", icon: Scale },
  { id: "privacy", label: "Privacy Policy", icon: Lock },
] as const;

type TabId = typeof tabs[number]["id"];

export default function DisclosureClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("disclosure");

  const documents = [
    { name: "Affiliation Letter", size: "1.2 MB" },
    { name: "Trust Registration Certificate", size: "850 KB" },
    { name: "No Objection Certificate (NOC)", size: "920 KB" },
    { name: "Recognition Certificate", size: "1.1 MB" },
    { name: "Building Safety Certificate", size: "2.4 MB" },
    { name: "Fire Safety Certificate", size: "1.5 MB" },
    { name: "Water & Sanitation Certificate", size: "780 KB" },
  ];

  // Sync active tab with URL query parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && tabs.some(t => t.id === tabParam)) {
      setActiveTab(tabParam as TabId);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    // Update URL query parameters smoothly without a full page reload
    const newUrl = `${window.location.pathname}?tab=${tabId}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <main className="relative min-h-screen pt-20 bg-slate-50/50">
      <Header />

      <PageHero
        title={
          activeTab === "disclosure" ? "CBSE Public Disclosure" :
          activeTab === "terms" ? "Terms & Conditions" :
          "Privacy Policy"
        }
        subtitle={
          activeTab === "disclosure" ? "Mandatory institutional information, certification and official documentation as required by the CBSE Board." :
          activeTab === "terms" ? "School rules, academic guidelines, codes of conduct, and terms of service for the VIPS community." :
          "How we gather, handle, encrypt, and secure your personal and academic information."
        }
        image="/hero.jpg"
      />

      {/* Elegant Horizontal Tab Switcher */}
      <section className="relative z-20 -mt-10 mb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white/80 backdrop-blur-md p-2 rounded-[2rem] border border-slate-100 shadow-2xl flex gap-1 justify-between items-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex-1 flex items-center justify-center gap-2 px-4 py-4 rounded-2xl font-bold text-xs md:text-sm transition-all duration-300 ${
                    isActive 
                      ? "text-white" 
                      : "text-navy hover:text-secondary hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDisclosureTab"
                      className="absolute inset-0 gold-gradient rounded-2xl shadow-lg shadow-secondary/20 z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={16} className="shrink-0" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              
              {/* TAB 1: CBSE DISCLOSURE */}
              {activeTab === "disclosure" && (
                <div className="space-y-12">
                  <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-xl">
                    <h3 className="text-3xl font-black text-navy mb-8 flex items-center gap-4">
                      <ShieldCheck className="text-secondary shrink-0" size={32} />
                      General Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
                      {[
                        { label: "School Name", val: "Vision India Public School" },
                        { label: "Affiliation No.", val: "830697" },
                        { label: "School Code", val: "45585" },
                        { label: "Address", val: "Srinivasapur, Kolar, Karnataka" },
                        { label: "Principal Name", val: "Mrs. S. Kavitha" },
                        { label: "Contact Email", val: "info@vipschool.edu.in" },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-4">
                          <span className="text-slate-500 font-bold text-sm md:text-base">{item.label}</span>
                          <span className="text-navy font-black text-sm md:text-base text-right">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-xl">
                    <h3 className="text-3xl font-black text-navy mb-8">Official Documentation</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {documents.map((doc, i) => (
                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-slate-50/50 border border-slate-100 rounded-2xl hover:shadow-lg hover:border-secondary/20 transition-all group gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-navy shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                              <FileText size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold text-navy text-sm md:text-base">{doc.name}</h4>
                              <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mt-0.5">{doc.size}</p>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-bold text-xs shadow-sm hover:gold-gradient hover:text-white hover:shadow-lg hover:shadow-secondary/20 transition-all w-full sm:w-auto justify-center">
                            <Download size={14} /> Download PDF
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: TERMS OF SERVICE */}
              {activeTab === "terms" && (
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-xl">
                  <div className="prose prose-slate prose-lg max-w-none">
                    <h3 className="text-3xl font-black text-navy mb-6 flex items-center gap-3">
                      <Scale className="text-secondary" size={32} />
                      School Regulations & Guidelines
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      By enrolling in Vision India Public School, students and parents agree to fully abide by the rules and regulations set forth by the school management and the CBSE board.
                    </p>
                    
                    <h4 className="text-xl font-black text-navy mb-4 mt-8">1. Academic Integrity</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      We maintain absolute high standards of academic honesty. Plagiarism, cheating in examinations, fabrication of data, or copying assignments are strictly prohibited and will result in strict disciplinary action.
                    </p>
                    
                    <h4 className="text-xl font-black text-navy mb-4 mt-8">2. Fee Structure & Deadlines</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      Tuition and institutional fees must be paid on or before the due dates specified in the school catalog during admission. Delay in payments may incur nominal late penalties, and persistent defaults could trigger temporary suspension from academic terms.
                    </p>

                    <h4 className="text-xl font-black text-navy mb-4 mt-8">3. Attendance & Conduct</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      A minimum of 75% student attendance is mandatory for academic promotion as per CBSE guidelines. Proper, neat school uniform is required at all times. Polite, inclusive behavior toward fellow students, teachers, and staff members is mandatory.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: PRIVACY POLICY */}
              {activeTab === "privacy" && (
                <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-xl">
                  <div className="prose prose-slate prose-lg max-w-none">
                    <h3 className="text-3xl font-black text-navy mb-6 flex items-center gap-3">
                      <Lock className="text-secondary" size={32} />
                      Data Protection & Privacy Policy
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      At Vision India Public School, we are highly committed to protecting the absolute privacy and security of our students, parents, and academic staff. This Privacy Policy outlines how we collect, store, safeguard, and use your information.
                    </p>
                    
                    <h4 className="text-xl font-black text-navy mb-4 mt-8">1. Information Collection</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      We collect vital contact data, previous academic records, family details, and general medical history solely to execute the official admission process, student evaluation tracking, and daily school-parent emergency communications.
                    </p>
                    
                    <h4 className="text-xl font-black text-navy mb-4 mt-8">2. Data Security & Storage</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      We implement strict, industry-standard digital access controls, encrypted server storage systems, and firewall protocols to safeguard your personal data from unauthorized access, leakage, loss, or alteration.
                    </p>

                    <h4 className="text-xl font-black text-navy mb-4 mt-8">3. Zero Data Sharing</h4>
                    <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                      VIPS does not trade, sell, share, or lease any student or parent information with third-party commercial organizations under any circumstances. Data is exclusively processed within our school information management system.
                    </p>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
