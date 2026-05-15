"use client";

import { useState } from "react";
import { 
  LayoutDashboard, Bell, Image as ImageIcon, Users, 
  GraduationCap, FileText, Settings, LogOut, Plus,
  Search, Filter, MoreVertical, Edit, Trash2
} from "lucide-react";
import { motion } from "framer-motion";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Bell, label: "Notifications" },
  { icon: ImageIcon, label: "Gallery" },
  { icon: Users, label: "Faculty" },
  { icon: GraduationCap, label: "Admissions" },
  { icon: FileText, label: "Result Analysis" },
  { icon: Settings, label: "Settings" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-navy text-white p-8 hidden lg:flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold">V</div>
          <div>
            <h1 className="font-bold text-lg leading-none">VIP SCHOOL</h1>
            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                activeTab === item.label 
                  ? "premium-gradient text-white shadow-lg" 
                  : "text-slate-400 hover:bg-white/5"
              }`}
            >
              <item.icon size={20} />
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-red-400 transition-colors mt-auto">
          <LogOut size={20} />
          <span className="font-bold">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-black text-navy">{activeTab}</h2>
            <p className="text-slate-500 font-medium">Manage your school's digital presence</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="pl-12 pr-6 py-3 rounded-2xl bg-white border border-slate-200 w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://ui-avatars.com/api/?name=Admin+User&background=1A41BB&color=fff" alt="Profile" />
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="grid grid-cols-1 gap-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "New Admissions", val: "45", color: "bg-blue-500" },
              { label: "Pending Notices", val: "12", color: "bg-amber-500" },
              { label: "Gallery Photos", val: "156", color: "bg-purple-500" },
              { label: "Inquiries", val: "89", color: "bg-emerald-500" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-bold mb-1 uppercase tracking-wider">{stat.label}</p>
                  <h4 className="text-3xl font-black text-navy">{stat.val}</h4>
                </div>
                <div className={`w-12 h-12 rounded-2xl ${stat.color} opacity-20`} />
              </div>
            ))}
          </div>

          {/* Recent Notifications Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
              <h3 className="text-xl font-bold text-navy">Manage Notifications</h3>
              <button className="px-6 py-2.5 rounded-xl gold-gradient text-white font-bold flex items-center gap-2 shadow-lg">
                <Plus size={18} /> Add New
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-4">Title</th>
                    <th className="px-8 py-4">Category</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { title: "Admissions Open 2026-27", cat: "Admissions", status: "Active", date: "Oct 12, 2025" },
                    { title: "Teachers Recruitment Drive", cat: "Recruitment", status: "Active", date: "Oct 10, 2025" },
                    { title: "Annual Day Postponed", cat: "Events", status: "Draft", date: "Oct 08, 2025" },
                    { title: "Quarterly Exam Results", cat: "Academic", status: "Active", date: "Oct 05, 2025" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-5 font-bold text-navy">{row.title}</td>
                      <td className="px-8 py-5">
                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">{row.cat}</span>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          row.status === "Active" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                        }`}>{row.status}</span>
                      </td>
                      <td className="px-8 py-5 text-slate-500 text-sm">{row.date}</td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"><Edit size={18} /></button>
                          <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
