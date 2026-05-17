"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";

const images = [
  { src: "/vision-india-school.jpg", title: "Main Campus Entrance", cat: "Campus" },
  { src: "/physics-lab.jpg", title: "Practical Physics Lab", cat: "Academic" },
  { src: "/events.jpeg", title: "Sports Day Activities", cat: "Sports" },
  { src: "/campus.jpg", title: "Lush Campus Courtyard", cat: "Campus" },
  { src: "/computer-lab.jpg", title: "High-Tech Computer Lab", cat: "Academic" },
  { src: "/events.jpeg", title: "Annual Celebrations", cat: "Events" },
];




export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Campus", "Academic", "Sports", "Events"];

  const filtered = filter === "All" ? images : images.filter(img => img.cat === filter);

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Gallery</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8">Memories & <span className="text-secondary">Milestones</span></h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full font-bold transition-all ${
                  filter === cat 
                    ? "gold-gradient text-white shadow-lg" 
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((img, i) => (
            <motion.div
              layout
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative h-80 rounded-[2rem] overflow-hidden shadow-xl"
            >
              <Image 
                src={img.src} 
                alt={img.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-2">{img.cat}</p>
                <h4 className="text-white font-extrabold text-2xl">{img.title}</h4>
                <button className="mt-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-secondary transition-colors">
                  <Maximize2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
