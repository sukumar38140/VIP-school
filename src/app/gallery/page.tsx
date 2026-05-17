import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Media Gallery | Vision India Public School",
  description: "Explore a vivid visual journey of the campus, classrooms, computer lab, physics lab, and sports events at Vision India Public School.",
  keywords: ["gallery", "photos", "campus life", "school events", "computer lab photos", "physics lab photos"],
  openGraph: {
    title: "Media Gallery | Vision India Public School",
    description: "Visual journey through Vision India Public School campus, academic labs, and events.",
    images: ["/logo.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <GalleryClient />
  );
}
