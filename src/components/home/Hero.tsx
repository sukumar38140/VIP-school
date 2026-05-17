"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="relative w-full h-full"
        >
          <Image 
            src="/hero_hd.png" 
            alt="Vision India Public School Campus" 
            fill 
            priority
            className="object-cover"
          />
        </motion.div>
        {/* Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/20 z-10" />
        <div className="absolute inset-0 bg-navy/10 mix-blend-overlay z-10" />
      </div>

      <div className="container mx-auto px-4 z-20 pt-24">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[2px] w-12 bg-secondary" />
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-sm">
              CBSE Affiliation No. 830697
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 text-glow tracking-tighter"
          >
            VISION INDIA <br />
            <span className="text-transparent bg-clip-text gold-gradient">PUBLIC SCHOOL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-bold italic border-l-4 border-secondary pl-6 drop-shadow-lg"
          >
            “Learning Mission with Global Vision”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <motion.button
              onClick={() => router.push('/admissions')}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full gold-gradient text-white font-black text-lg shadow-[0_20px_50px_rgba(212,175,55,0.3)] flex items-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">Apply Online Now</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-45deg]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3"
            >
              <Download className="animate-bounce" />
              <span>Download Brochure</span>
            </motion.button>
          </motion.div>



        </div>
      </div>


    </section>
  );
}
