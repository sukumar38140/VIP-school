"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

export default function AboutSection() {
  const cards = [
    {
      title: "Our Vision",
      text: "To be a global leader in education, fostering innovation and excellence.",
      icon: Eye,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Our Mission",
      text: "Providing quality education through activity-based learning and holistic growth.",
      icon: Target,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Philosophy",
      text: "Nurturing each child's unique potential in a safe and supportive environment.",
      icon: Heart,
      color: "bg-rose-50 text-rose-600",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
            >
              <Image 
                src="/vision-india-school.jpg" 
                alt="Vision India Public School Campus" 
                width={600} 
                height={700} 
                className="w-full h-auto object-cover"
              />



              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </motion.div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-2xl z-20 hidden md:block max-w-[300px]"
            >
              <p className="text-secondary font-black text-4xl mb-1">15+</p>
              <p className="text-navy font-bold text-lg mb-2">Years of Excellence</p>
              <p className="text-slate-500 text-sm">Building future leaders since the foundation of VIP School.</p>
            </motion.div>

            {/* Background elements */}
            <div className="absolute top-1/2 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 gold-gradient opacity-10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">About Our School</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight">
                Empowering Students with <span className="text-secondary">Modern Education</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Vision India Public School (CBSE No. 830697) is committed to providing a stimulating learning environment that encourages students to explore, innovate, and excel. Our campus in Srinivasapur is designed to be a sanctuary of knowledge.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "CBSE Certified Curriculum",
                  "Smart Technology Classrooms",
                  "Expert & Dedicated Faculty",
                  "Holistic Student Development",
                  "State-of-the-art Labs",
                  "Extensive Sports Facilities",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-semibold text-navy">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                      <card.icon size={24} />
                    </div>
                    <h4 className="font-bold text-navy mb-2">{card.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
