"use client";

import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";

export default function NoticeMarquee() {
  const notices = [
    "Admissions Open for Nursery, LKG to 9th – Academic Year 2026-27",
    "Teachers Recruitment Drive 2026: Apply Now for PGT & TGT positions",
    "Annual Sports Meet scheduled for next month - Stay tuned!",
    "Vision India Public School ranked among top CBSE schools in Kolar",
  ];

  return (
    <div className="bg-navy border-y border-white/10 relative overflow-hidden h-14 flex items-center z-30">
      <div className="absolute left-0 top-0 bottom-0 px-6 bg-secondary text-white font-bold flex items-center gap-2 z-10 shadow-lg">
        <Megaphone size={18} />
        <span className="whitespace-nowrap">LATEST UPDATES</span>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-20 py-2"
        >
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex gap-20">
              {notices.map((notice, idx) => (
                <span key={idx} className="text-white font-medium flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {notice}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
