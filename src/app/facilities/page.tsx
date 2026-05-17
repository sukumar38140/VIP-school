import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export default function FacilitiesPage() {
  const facilities = [
    { title: "Smart Classrooms", desc: "Interactive digital boards and ergonomic seating for an engaging learning experience." },
    { title: "Science & Computer Labs", desc: "State-of-the-art laboratories equipped with the latest technology and safety measures." },
    { title: "Library", desc: "A vast collection of books, encyclopedias, and digital resources to foster a reading habit." },
    { title: "Sports Complex", desc: "Expansive grounds for cricket, football, basketball, and indoor games facilities." },
    { title: "Transport", desc: "Safe, secure, and GPS-enabled fleet of buses covering major routes." },
    { title: "Security & Surveillance", desc: "24/7 CCTV monitoring and trained security personnel ensuring campus safety." },
  ];

  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="World-Class Facilities" 
        subtitle="Creating an environment that inspires excellence in every student." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-black text-navy mb-4">{fac.title}</h3>
                <p className="text-slate-600">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
