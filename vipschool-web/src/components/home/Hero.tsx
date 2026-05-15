"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, GraduationCap, Users, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero.png" 
          alt="Vision India Public School Campus" 
          fill 
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30 z-10" />
      </div>


      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary font-bold text-sm mb-8 backdrop-blur-md"
          >
            <Calendar size={16} />
            ADMISSIONS OPEN 2026-27
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6"
          >
            Learning Mission <br />
            <span className="text-transparent bg-clip-text gold-gradient">Global Vision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed"
          >
            Nurturing excellence through innovative CBSE curriculum and activity-based learning. Join the future-ready campus of Vision India Public School.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl gold-gradient text-white font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:shadow-secondary/40 transition-all hover:-translate-y-1">
              Apply Admission <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all group">
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Play size={18} fill="currentColor" />
              </span>
              Explore Campus
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 right-10 hidden xl:flex gap-8 z-20">
        {[
          { icon: GraduationCap, label: "CBSE Affiliated", val: "830697" },
          { icon: Users, label: "Expert Faculty", val: "50+" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
            className="glass p-6 rounded-3xl flex items-center gap-4 border-l-4 border-l-secondary"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-navy font-bold text-2xl">{stat.val}</p>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
