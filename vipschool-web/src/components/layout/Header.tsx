"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admissions", href: "/admissions" },
  { name: "Facilities", href: "/facilities" },
  { name: "Results", href: "/results" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={cn(
        "bg-primary text-white py-2 transition-all duration-500 overflow-hidden",
        isScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
      )}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-secondary" /> +91 95357 62911</span>
            <span className="flex items-center gap-1.5"><Mail size={14} className="text-secondary" /> info@vipschool.edu.in</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-secondary" /> Srinivasapur, Kolar, Karnataka
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "transition-all duration-500 py-4",
        isScrolled 
          ? "glass shadow-xl py-2 mt-0" 
          : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src="/logo.jpg" 
                alt="VIP School Logo" 
                fill 
                className="object-contain rounded-full shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-xl md:text-2xl tracking-tight transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                VISION INDIA
              </span>
              <span className={cn(
                "text-[10px] md:text-xs font-medium tracking-[0.2em] transition-colors",
                isScrolled ? "text-secondary" : "text-secondary"
              )}>
                PUBLIC SCHOOL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group",
                  isScrolled ? "text-navy hover:text-primary" : "text-white hover:text-secondary"
                )}
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
            <Link 
              href="/admissions" 
              className="ml-4 px-6 py-2.5 rounded-full gold-gradient text-white font-bold text-sm shadow-lg hover:shadow-secondary/30 transition-all hover:-translate-y-1"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-navy" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-navy hover:text-primary transition-colors py-2 border-b border-slate-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/admissions" 
                className="mt-4 px-8 py-4 rounded-xl premium-gradient text-white font-bold text-center shadow-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply for Admission
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
