import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center px-4">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-6xl font-black text-navy mb-4">404</h1>
        <h2 className="text-3xl font-black text-navy mb-6">Page Not Found</h2>
        
        <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-gradient text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border-2 border-navy text-navy font-bold text-lg hover:bg-slate-50 transition-all"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm mb-6">Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "About", href: "/about" },
              { name: "Academics", href: "/academics" },
              { name: "Admissions", href: "/admissions" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-primary hover:text-secondary font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
