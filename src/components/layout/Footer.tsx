import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, Send, PlayCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const links = {
  quick: [
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Gallery", href: "/gallery" },
    { name: "Admissions", href: "/admissions" },
    { name: "Careers", href: "/careers" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "CBSE Disclosure", href: "/disclosure" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Logo" width={60} height={60} className="rounded-full bg-white p-1" />
              <div>
                <h3 className="font-bold text-xl">VISION INDIA</h3>
                <p className="text-secondary text-[10px] tracking-[0.2em] font-semibold">PUBLIC SCHOOL</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering young minds with a global vision and a mission to excel in academics, sports, and character building. Affiliated to CBSE (No. 830697).
            </p>
            <div className="flex gap-4">
              {[Globe, Camera, Send, PlayCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors duration-300">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {links.quick.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-secondary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span className="text-slate-400 text-sm">VIP Campus, Ronur Cross, Srinivasapur – 563135, Kolar Dist, Karnataka</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
                <span className="text-slate-400 text-sm">+91 95357 62911</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-secondary shrink-0" size={20} />
                <span className="text-slate-400 text-sm">info@vipschool.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Admission CTA */}
          <div>
            <h4 className="font-bold text-lg mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Stay updated with our latest news and announcements.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              />
              <button className="w-full py-3 rounded-xl gold-gradient text-white font-bold hover:shadow-lg hover:shadow-secondary/20 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <p>© 2026 Vision India Public School. All Rights Reserved. CBSE Affiliation No: 830697.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-secondary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary">Terms of Service</Link>
            <Link href="/disclosure" className="hover:text-secondary">CBSE Disclosure</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
