import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Media Gallery | Vision India Public School",
  description: "Explore the vibrant campus life, facilities, events, and achievements at Vision India Public School.",
  keywords: ["gallery", "photos", "campus life", "school events"],
  openGraph: {
    title: "Media Gallery",
    description: "Visual journey through Vision India Public School.",
    images: ["/logo.jpg"],
  },
};

const categories = ["All", "Campus", "Sports", "Cultural", "Celebrations", "Academics"];

const images = [
  { id: 1, src: "/hero.jpg", category: "Campus" },
  { id: 2, src: "/hero.jpg", category: "Campus" },
  // More mock images would be added here in a real scenario
];

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="Media Gallery" 
        subtitle="Explore the vibrant life and world-class infrastructure at Vision India Public School." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button 
                key={cat}
                className="px-6 py-2 rounded-full border-2 border-slate-200 text-slate-600 font-bold hover:border-secondary hover:text-secondary transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
                <Image 
                  src={img.src} 
                  alt={img.category} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
