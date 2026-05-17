import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Academics | Vision India Public School",
  description: "Explore our CBSE curriculum, smart classrooms, and activity-based learning methodologies at VIPS.",
  keywords: ["CBSE curriculum", "smart classrooms", "activity-based learning", "academics"],
  openGraph: {
    title: "Academics at Vision India Public School",
    description: "World-class academics with modern learning methodologies.",
    images: ["/logo.jpg"],
  },
};

export default function AcademicsPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="Academics" 
        subtitle="Explore our CBSE curriculum and our activity-based smart learning methodologies." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
              <h3 className="text-2xl font-black text-navy mb-4">CBSE Curriculum</h3>
              <p className="text-slate-600 mb-4">
                We strictly follow the CBSE curriculum, ensuring a structured, globally recognized framework that promotes holistic development from Nursery to Grade 9.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
              <h3 className="text-2xl font-black text-navy mb-4">Smart Learning</h3>
              <p className="text-slate-600 mb-4">
                Classrooms equipped with modern smart boards, digital learning aids, and interactive software to make learning engaging and effective.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
              <h3 className="text-2xl font-black text-navy mb-4">Activity Based Learning</h3>
              <p className="text-slate-600 mb-4">
                Our teaching methodology emphasizes practical, hands-on experiences over rote learning, allowing students to understand concepts deeply.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
              <h3 className="text-2xl font-black text-navy mb-4">Academic Excellence</h3>
              <p className="text-slate-600 mb-4">
                Consistent track record of outstanding performance, driven by personalized attention and continuous assessment systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
