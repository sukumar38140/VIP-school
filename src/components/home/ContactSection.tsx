"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8">
                Visit Our Campus or <span className="text-secondary">Reach Out</span>
              </h2>
              <p className="text-slate-500 text-lg mb-12">
                Have questions about admissions or our programs? Our team is here to help you every step of the way.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shadow-sm border border-slate-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Our Location</h4>
                    <p className="text-slate-500">VIP Campus, Ronur Cross, Srinivasapur – 563135, Kolar District, Karnataka</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shadow-sm border border-slate-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Phone Number</h4>
                    <p className="text-slate-500">+91 95357 62911</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shadow-sm border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Email Address</h4>
                    <p className="text-slate-500">info@vipschool.edu.in</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shadow-sm border border-slate-100">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Working Hours</h4>
                    <p className="text-slate-500">Mon - Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/919535762911"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold shadow-xl shadow-[#25D366]/20"
              >
                <MessageCircle size={24} />
                Chat with Admission Office
              </motion.a>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold text-navy mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Student Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter name"
                      className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Grade Applying For</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      <option>Grade 1 - 9</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Parent Mobile</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <button className="w-full py-5 rounded-2xl premium-gradient text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 transition-all">
                  Submit Inquiry <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
