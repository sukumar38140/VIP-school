"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import GallerySection from "@/components/home/GallerySection";
import { motion, AnimatePresence } from "framer-motion";
import { X, Megaphone, Download, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      <Header />
      
      <div className="relative">
        <Hero />

      </div>
        <AboutSection />
        <FeaturesSection />
        <StatsSection />
        <GallerySection />
      <Footer />

      {/* Admissions Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl glass overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-navy hover:bg-secondary hover:text-white transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div className="flex-1 p-10">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                    <Megaphone size={24} />
                  </div>
                  <h3 className="text-3xl font-black text-navy mb-4 leading-tight">
                    Admissions Open <br />
                    <span className="text-primary text-2xl">2026-2027</span>
                  </h3>
                  <p className="text-slate-500 mb-8 font-medium">
                    Limited seats available for Nursery to Grade 9. Secure your child&apos;s future at the most premium campus in Srinivasapur.
                  </p>
                  <div className="flex flex-col gap-4">
                    <motion.button 
                      onClick={() => router.push('/admissions')}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-2xl gold-gradient text-white font-bold text-lg shadow-xl shadow-secondary/20 flex items-center justify-center gap-2 group"
                    >
                      <span>Apply Online Now</span>
                      <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-2xl bg-slate-100 text-navy font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Download Brochure</span>
                      <Download size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Notification Bell */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full gold-gradient text-white flex items-center justify-center shadow-2xl z-40"
      >
        <Megaphone size={28} />
        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 border-2 border-white text-[10px] font-bold flex items-center justify-center">
          3
        </span>
      </motion.button>
    </main>
  );
}
