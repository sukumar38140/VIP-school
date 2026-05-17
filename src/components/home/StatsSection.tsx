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
      {[
        { width: 150, height: 150, left: "10%", top: "20%", duration: 6 },
        { width: 250, height: 250, left: "40%", top: "50%", duration: 8 },
        { width: 120, height: 120, left: "70%", top: "10%", duration: 5 },
        { width: 300, height: 300, left: "80%", top: "80%", duration: 9 },
        { width: 200, height: 200, left: "20%", top: "70%", duration: 7 },
        { width: 180, height: 180, left: "50%", top: "30%", duration: 6.5 },
        { width: 220, height: 220, left: "90%", top: "40%", duration: 7.5 },
        { width: 140, height: 140, left: "30%", top: "85%", duration: 5.5 },
        { width: 280, height: 280, left: "5%", top: "5%", duration: 8.5 },
        { width: 160, height: 160, left: "60%", top: "60%", duration: 6 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/5 rounded-full blur-xl"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
          }}
        />
      ))}
    </section>
  );
}
