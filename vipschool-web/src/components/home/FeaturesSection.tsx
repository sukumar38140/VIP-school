"use client";

import { motion } from "framer-motion";
import { 
  Monitor, BookOpen, FlaskConical, Trophy, 
  ShieldCheck, BrainCircuit, Users2, Palette 
} from "lucide-react";

const features = [
  {
    title: "Smart Classrooms",
    desc: "Digital learning with interactive smart boards and multimedia content.",
    icon: Monitor,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "CBSE Curriculum",
    desc: "Standardized global curriculum focused on deep understanding and application.",
    icon: BookOpen,
    color: "from-amber-500 to-amber-700",
  },
  {
    title: "Innovation Labs",
    desc: "Advanced Science and Computer labs for practical experimentation.",
    icon: FlaskConical,
    color: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Sports & Fitness",
    desc: "Extensive playgrounds and specialized coaching for various indoor/outdoor sports.",
    icon: Trophy,
    color: "from-rose-500 to-rose-700",
  },
  {
    title: "Activity Learning",
    desc: "Engaging student-centric methodologies that make learning fun and effective.",
    icon: BrainCircuit,
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Cultural Activities",
    desc: "Promoting music, dance, and arts to nurture creative expression.",
    icon: Palette,
    color: "from-pink-500 to-pink-700",
  },
  {
    title: "Safety & Security",
    desc: "CCTV monitored campus with 24/7 security and safe transport facilities.",
    icon: ShieldCheck,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    title: "Expert Faculty",
    desc: "Highly qualified and compassionate educators dedicated to student success.",
    icon: Users2,
    color: "from-indigo-500 to-indigo-700",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Our Facilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-navy mb-6"
          >
            Premium Features for <span className="text-secondary">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            We provide a world-class environment that supports both academic rigor and creative exploration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
}
