import type { Metadata } from "next";
import { Suspense } from "react";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Vision India Public School",
  description: "Learn about Vision India Public School's history, vision, mission, and philosophy dedicated to educational excellence.",
  keywords: ["about VIPS", "school mission", "school vision", "educational philosophy", "CBSE school academics", "school facilities"],
  openGraph: {
    title: "About Vision India Public School",
    description: "Discover our commitment to educational excellence, curriculum, facilities, and student development.",
    images: ["/logo.jpg"],
  },
};

export default function AboutPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen pt-20 bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-secondary border-t-navy rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 font-bold text-sm">Loading About Us...</p>
        </div>
      </main>
    }>
      <AboutClient />
    </Suspense>
  );
}
