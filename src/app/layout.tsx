import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  ),
  title: "Vision India Public School | Learning Mission with Global Vision",
  description: "Vision India Public School (CBSE Affiliation No. 830697) - Best CBSE School in Srinivasapur, Kolar. Admissions Open for 2026-27.",
  keywords: ["CBSE school Srinivasapur", "Best school in Kolar", "Vision India Public School", "Admissions 2026-27", "Top school Karnataka"],
  openGraph: {
    title: "Vision India Public School",
    description: "Learning Mission with Global Vision. Join the future of education.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
