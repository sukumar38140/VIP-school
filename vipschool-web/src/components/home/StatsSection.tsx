"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Trophy, Globe } from "lucide-react";

const stats = [
  { label: "Total Students", value: "1200+", icon: Users },
  { label: "Graduated", value: "5000+", icon: GraduationCap },
  { label: "Awards Won", value: "250+", icon: Trophy },
  { label: "Academic Rank", value: "TOP 5", icon: Globe },
];

export default function StatsSection() {
  return (
    <section className="py-20 premium-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary mx-auto mb-6 backdrop-blur-md border border-white/20">
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Animated background particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/5 rounded-full blur-xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
          }}
        />
      ))}
    </section>
  );
}
