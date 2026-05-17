import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Download, Bell, Search } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    { id: 1, title: "Admissions Open for 2026-2027", date: "Oct 15, 2025", type: "Admissions" },
    { id: 2, title: "Term 1 Examination Schedule", date: "Sep 28, 2025", type: "Exams", hasAttachment: true },
    { id: 3, title: "Annual Sports Day Circular", date: "Sep 10, 2025", type: "Events", hasAttachment: true },
    { id: 4, title: "Teacher Recruitment 2025-26", date: "Aug 20, 2025", type: "Careers" },
  ];

  return (
    <main className="relative min-h-screen pt-20">
      <Header />
      <PageHero 
        title="Notifications & Updates" 
        subtitle="Stay updated with the latest news, circulars, and announcements." 
      />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-6 rounded-[2rem] shadow-lg mb-8 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input type="text" placeholder="Search notifications..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary" />
            </div>
            <select className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary font-medium text-slate-600">
              <option>All Categories</option>
              <option>Admissions</option>
              <option>Exams</option>
              <option>Events</option>
            </select>
          </div>

          <div className="space-y-4">
            {notifications.map((note) => (
              <div key={note.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Bell size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">{note.type}</span>
                    <span className="text-xs font-medium text-slate-400">{note.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{note.title}</h3>
                </div>
                {note.hasAttachment && (
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 font-medium transition-colors">
                    <Download size={16} />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
