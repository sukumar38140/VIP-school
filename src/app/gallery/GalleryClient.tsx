"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Layers, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categories = ["All", "Campus", "Academics", "Sports & Events"] as const;
type Category = typeof categories[number];

const galleryImages = [
  { id: 1, src: "/vision-india-school.jpg", category: "Campus", title: "Main Campus Entrance", desc: "Our premium institutional gateway welcoming bright minds." },
  { id: 2, src: "/campus.jpg", category: "Campus", title: "Lush Campus & Assembly Ground", desc: "Spacious assembly courtyard designed for student interactions." },
  { id: 3, src: "/computer-lab.jpg", category: "Academics", title: "ICT Computer Laboratory", desc: "Equipped with modern computer systems and digital smart modules." },
  { id: 4, src: "/physics-lab.jpg", category: "Academics", title: "Practical Physics Lab", desc: "State-of-the-art laboratory for experimental and logical discovery." },
  { id: 5, src: "/events.jpeg", category: "Sports & Events", title: "Athletics & Cultural Meet", desc: "Annual school sports day promoting teamwork and physical health." },
];

export default function GalleryClient() {
  const [activeCat, setActiveCat] = useState<Category>("All");

  const filteredImages = activeCat === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCat);

  return (
    <main className="relative min-h-screen pt-20 bg-slate-50/50">
      <Header />

      {/* Decorative background visual elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Mini Visual Header */}
      <section className="relative py-20 overflow-hidden bg-navy text-white text-center">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/campus.jpg" alt="Gallery cover" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mx-auto shadow-lg text-white mb-4">
              <Camera size={24} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">Institutional Media Gallery</h1>
            <p className="text-slate-300 max-w-xl mx-auto font-medium text-sm md:text-base">
              A vivid visual journey through our academic facilities, campus architecture, and vibrant student life.
            </p>
          </motion.div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-50/50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }} />
      </section>

      {/* Interactive Photo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Category Filters Swiper */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-16 max-w-2xl mx-auto">
            {categories.map((cat) => {
              const isActive = activeCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    isActive 
                      ? "text-white shadow-lg shadow-secondary/20" 
                      : "text-navy bg-white border border-slate-100 hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryCategory"
                      className="absolute inset-0 gold-gradient rounded-2xl"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && <Check size={14} />}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Animated Grid Container */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((img) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={img.id}
                    className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100/80 flex flex-col group"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image 
                        src={img.src} 
                        alt={img.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="px-4 py-1 rounded-full bg-secondary text-white text-[10px] font-bold uppercase tracking-wider">
                          {img.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-black text-navy mb-2 group-hover:text-primary transition-colors">{img.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{img.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
