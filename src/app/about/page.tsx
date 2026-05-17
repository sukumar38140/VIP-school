import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="About Us" 
        subtitle="Discover our history, vision, and the philosophy that drives our educational excellence." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
            <h2 className="text-3xl font-black text-navy mb-6">Our Vision & Mission</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              At Vision India Public School, our mission is to empower students with a robust foundation of knowledge and skills, preparing them for a dynamic global landscape. We envision a community where every child is inspired to learn, lead, and excel in a nurturing and technologically advanced environment.
            </p>
            <h2 className="text-3xl font-black text-navy mb-6">Principal&apos;s Message</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Education is the most powerful tool which you can use to change the world. We welcome you to a community of learners where passion meets excellence.
            </p>
            <h2 className="text-3xl font-black text-navy mb-6">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-3">
              <li>Premium Institutional Infrastructure</li>
              <li>Experienced and Dedicated Faculty</li>
              <li>Holistic Development Approach</li>
              <li>State-of-the-art Learning Facilities</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
