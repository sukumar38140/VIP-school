import type { Metadata } from "next";
import { Suspense } from "react";
import DisclosureClient from "./DisclosureClient";

export const metadata: Metadata = {
  title: "CBSE Public Disclosure & Policies | Vision India Public School",
  description: "Official CBSE public disclosure documentation, certifications, school guidelines, terms of service, and privacy policies of Vision India Public School.",
  keywords: ["CBSE disclosure", "school terms", "privacy policy", "VIPS school certifications", "school rules", "regulations"],
  openGraph: {
    title: "VIPS CBSE Public Disclosure & School Policies",
    description: "View mandatory CBSE documentation and legal guidelines of Vision India Public School.",
    images: ["/logo.jpg"],
  },
};

export default function DisclosurePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen pt-20 bg-slate-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-secondary border-t-navy rounded-full animate-spin mx-auto" />
          <p className="text-slate-500 font-bold text-sm">Loading Documents & Policies...</p>
        </div>
      </main>
    }>
      <DisclosureClient />
    </Suspense>
  );
}
