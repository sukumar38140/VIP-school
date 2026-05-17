"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to external service if needed
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-orange-600" />
          </div>
        </div>
        
        <h1 className="text-5xl font-black text-navy mb-4">Oops!</h1>
        <h2 className="text-2xl font-bold text-navy mb-6">Something went wrong</h2>
        
        <p className="text-slate-600 text-base mb-8">
          We encountered an unexpected error. Please try again or return to the home page.
        </p>

        {process.env.NODE_ENV === "development" && error.message && (
          <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-200">
            <p className="text-red-700 text-sm font-mono break-words">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-gradient text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <RefreshCw size={20} />
            Try Again
          </button>
          
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-navy text-navy font-bold text-lg hover:bg-slate-50 transition-all"
          >
            <Home size={20} />
            Go Home
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-xs mb-4">Error Code: {error.digest}</p>
          <p className="text-slate-500 text-sm">
            If this problem persists, please{" "}
            <Link href="/contact" className="text-primary hover:text-secondary font-semibold">
              contact us
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
