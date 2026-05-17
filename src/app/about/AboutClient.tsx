"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Info, 
  BookOpen, 
  Building, 
  Award, 
  Compass, 
  Sparkles, 
  Users, 
  ArrowRight,
  Tv,
  FlaskConical,
  Book,
  Bus,
  Shield,
  CheckCircle2
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";

const tabs = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "academics", label: "Academics", icon: BookOpen },
  { id: "facilities", label: "Facilities", icon: Building },
  { id: "results", label: "Achievements", icon: Award },
] as const;

type TabId = typeof tabs[number]["id"];

export default function AboutClient() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  // Sync active tab with URL query parameter
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && tabs.some(t => t.id === tabParam)) {
      setActiveTab(tabParam as TabId);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    // Update URL query parameters smoothly without a full page reload
    const newUrl = `${window.location.pathname}?tab=${tabId}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <main className="relative min-h-screen pt-20 bg-slate-50/50">
      <Header />
      
      <PageHero 
        title={
          activeTab === "overview" ? "About Our School" :
          activeTab === "academics" ? "Academics & Curriculum" :
          activeTab === "facilities" ? "Campus Facilities" :
          "Academic Excellence"
        }
        subtitle={
          activeTab === "overview" ? "Discover our history, vision, and the philosophy that drives our educational excellence." :
          activeTab === "academics" ? "Explore our CBSE curriculum, smart learning models, and interactive educational systems." :
          activeTab === "facilities" ? "World-class infrastructure designed to foster development, creativity, and safety." :
          "Celebrating the outstanding milestones and legacy of achievements at VIP School."
        }
        image={
          activeTab === "overview" ? "/vision-india-school.jpg" :
          activeTab === "academics" ? "/computer-lab.jpg" :
          activeTab === "facilities" ? "/campus.jpg" :
          "/events.jpeg"
        }
      />

      {/* Elegant Horizontal Tab Switcher */}
      <section className="relative z-20 -mt-10 mb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/80 backdrop-blur-md p-2 rounded-[2rem] border border-slate-100 shadow-2xl flex flex-wrap gap-1 justify-center md:justify-between items-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    isActive 
                      ? "text-white" 
                      : "text-navy hover:text-secondary hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAboutTab"
                      className="absolute inset-0 gold-gradient rounded-2xl shadow-lg shadow-secondary/20 z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={18} />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Tab Content Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="space-y-16">
                  {/* Vision & Mission Cards */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[5rem] flex items-center justify-center text-secondary group-hover:bg-secondary/15 transition-all">
                        <Compass size={32} />
                      </div>
                      <h3 className="text-3xl font-black text-navy mb-6">Our Vision</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        We envision a progressive community where every child is inspired to learn, lead, and excel in a nurturing, technologically advanced environment. We aim to spark lifelong curiosity and global awareness in our students.
                      </p>
                    </div>

                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] flex items-center justify-center text-primary group-hover:bg-primary/15 transition-all">
                        <Sparkles size={32} />
                      </div>
                      <h3 className="text-3xl font-black text-navy mb-6">Our Mission</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        At Vision India Public School, our mission is to empower students with a robust foundation of knowledge and skills. We are committed to fostering academic brilliance, active citizenship, and premium character development.
                      </p>
                    </div>
                  </div>

                  {/* Principal's Message with Premium Design */}
                  <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid lg:grid-cols-12">
                      <div className="lg:col-span-4 bg-navy p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-20">
                          <Image src="/campus.jpg" alt="Campus backdrop" fill className="object-cover" />
                        </div>
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/5 rounded-full" />
                        <div className="relative z-10 space-y-6">
                          <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-xl shadow-secondary/10">
                            <Users size={36} />
                          </div>
                          <div>
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-1">Leadership</span>
                            <h4 className="text-2xl font-black">Mrs. S. Kavitha</h4>
                            <p className="text-slate-400 text-sm">Principal, Vision India Public School</p>
                          </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-800 relative z-10">
                          <p className="text-slate-400 text-xs italic">"Education is the most powerful tool which you can use to change the world."</p>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-8 p-12 lg:p-16 flex flex-col justify-center bg-white">
                        <h3 className="text-3xl font-black text-navy mb-6">Principal&apos;s Message</h3>
                        <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
                          <p>
                            Dear Parents, Students, and Friends,
                          </p>
                          <p>
                            Welcome to Vision India Public School, a community where passion meets excellence. We believe that true learning transcends textbooks. Our school is a dynamic lab of curiosity, creativity, and character.
                          </p>
                          <p>
                            We partner closely with families to ensure every student is supported, challenged, and inspired to manifest their potential. Let us build a bright future for our children, rooted in strong values and a global mindset.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="bg-slate-100/50 p-12 md:p-16 rounded-[3rem] border border-slate-200/50">
                    <h3 className="text-3xl font-black text-navy mb-10 text-center">Why Choose Vision India Public School?</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { title: "Premium Campus", desc: "Top-tier institutional infrastructure and lush learning environment." },
                        { title: "Dedicated Faculty", desc: "Highly qualified mentors committed to child-centric development." },
                        { title: "Holistic Development", desc: "Balanced focus on academics, creative arts, and physical sports." },
                        { title: "Smart Classrooms", desc: "Next-gen learning equipped with advanced digital technologies." }
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                          <CheckCircle2 className="text-secondary mb-4" size={28} />
                          <h4 className="font-black text-navy text-lg mb-2">{item.title}</h4>
                          <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ACADEMICS */}
              {activeTab === "academics" && (
                <div className="space-y-16">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h3 className="text-3xl font-black text-navy mb-4">Empowering Minds, Shaping Futures</h3>
                    <p className="text-slate-600">Our academic framework is carefully curated to spark analytical thinking, intellectual curiosity, and hands-on capability.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { 
                        title: "CBSE Curriculum", 
                        icon: Book, 
                        desc: "We strictly adhere to the Central Board of Secondary Education (CBSE) syllabus, delivering a comprehensive, modern curriculum designed to unlock deep scholastic competencies from early childhood to advanced secondary grades." 
                      },
                      { 
                        title: "Smart Learning", 
                        icon: Tv, 
                        desc: "Every classroom is equipped with cutting-edge smart boards and digital modules. Visual learning and interactive software make abstract topics easy to master, keeping students highly engaged and responsive." 
                      },
                      { 
                        title: "Activity Based Learning", 
                        icon: Sparkles, 
                        desc: "Ditching traditional rote learning, our academic methodologies are completely hands-on. Experiential tasks, labs, research projects, and creative tasks shape multi-dimensional problem-solving skills." 
                      },
                      { 
                        title: "Academic Excellence", 
                        icon: Award, 
                        desc: "A consistent track record of outstanding performance, driven by highly detailed attention, micro-testing assessments, and support systems to push every single child to academic greatness." 
                      }
                    ].map((card, idx) => {
                      const CardIcon = card.icon;
                      return (
                        <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all relative overflow-hidden group">
                          <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                            <CardIcon size={28} />
                          </div>
                          <h4 className="text-2xl font-black text-navy mb-4">{card.title}</h4>
                          <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Practical Science & Technology Focus Spotlights */}
                  <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs inline-block uppercase tracking-wider">
                          Hands-on Science & Tech
                        </div>
                        <h3 className="text-3xl font-black text-navy leading-tight">State-of-the-Art Science & ICT Laboratories</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          At Vision India Public School, we believe that science is to be practiced, not just memorized. That is why our laboratories are built to ignite experimental intelligence. 
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          Equipped with advanced high-speed computer systems, professional physics, chemistry, and biology setups, our labs act as creative workshops where students translate textbook formulas into physical discoveries.
                        </p>
                        <div className="pt-4 flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-navy font-bold">
                            <CheckCircle2 className="text-secondary" size={20} />
                            <span>ICT & Programming Lab</span>
                          </div>
                          <div className="flex items-center gap-2 text-navy font-bold">
                            <CheckCircle2 className="text-secondary" size={20} />
                            <span>High-Spec Physics Equipment</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 group">
                          <Image src="/computer-lab.jpg" alt="Computer Lab" fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-6">
                            <span className="text-white font-bold text-sm">ICT & Computing</span>
                          </div>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg mt-8 hover:scale-105 transition-transform duration-500 group">
                          <Image src="/physics-lab.jpg" alt="Physics Lab" fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-6">
                            <span className="text-white font-bold text-sm">Physics Laboratory</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: FACILITIES */}
              {activeTab === "facilities" && (
                <div className="space-y-12">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h3 className="text-3xl font-black text-navy mb-4">World-Class Infrastructure</h3>
                    <p className="text-slate-600">Discover a campus engineered to support premium academic growth, security, physical exploration, and interactive recreation.</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { 
                        title: "Smart Classrooms", 
                        icon: Tv, 
                        desc: "Interactive projection boards, state-of-the-art multimedia materials, and fully ergonomic student seating layouts.",
                        image: "/vision-india-school.jpg"
                      },
                      { 
                        title: "Science & Computer Labs", 
                        icon: FlaskConical, 
                        desc: "High-spec laboratory facilities built with excellent safety protocols and high-speed technology systems.",
                        image: "/computer-lab.jpg"
                      },
                      { 
                        title: "Resource Library", 
                        icon: Book, 
                        desc: "A sprawling catalog of encyclopedias, reference texts, literature, and digital hubs to cultivate intense reading habits.",
                        image: "/physics-lab.jpg"
                      },
                      { 
                        title: "Sports Complex", 
                        icon: Award, 
                        desc: "Expansive green grounds and dedicated indoor arenas for cricket, football, basketball, athletics, and tactical play.",
                        image: "/events.jpeg"
                      },
                      { 
                        title: "Secure Transport", 
                        icon: Bus, 
                        desc: "A thoroughly maintained, GPS-enabled school bus system covering major pick-up points across Kolar district.",
                        image: "/campus.jpg"
                      },
                      { 
                        title: "Advanced Surveillance", 
                        icon: Shield, 
                        desc: "24/7 continuous CCTV monitoring and fully certified security protocols to guarantee campus safety.",
                        image: "/hero.jpg"
                      }
                    ].map((fac, idx) => {
                      const FacIcon = fac.icon;
                      return (
                        <div key={idx} className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col">
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image 
                              src={fac.image} 
                              alt={fac.title} 
                              fill 
                              className="object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-navy/20" />
                            <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-navy flex items-center justify-center shadow-md">
                              <FacIcon size={20} />
                            </div>
                          </div>
                          
                          <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                              <h4 className="text-xl font-black text-navy mb-3">{fac.title}</h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{fac.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 4: ACHIEVEMENTS / RESULTS */}
              {activeTab === "results" && (
                <div className="space-y-12">
                  <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl text-center border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
                    
                    <h3 className="text-4xl font-black text-navy mb-6">A Legacy of 100% Results</h3>
                    <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                      Our students consistently deliver spectacular milestones in CBSE board assessments and co-scholastic competitions, redefining academic parameters every academic calendar.
                    </p>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                      {[
                        { num: "100%", label: "Pass Rate", sub: "CBSE Board Exams" },
                        { num: "50+", label: "Distinctions", sub: "Top Tier Scoring" },
                        { num: "15+", label: "State Ranks", sub: "Scholastic Honors" },
                        { num: "500+", label: "Happy Parents", sub: "Strong Community" }
                      ].map((stat, i) => (
                        <div key={i} className="p-8 bg-slate-50/80 rounded-[2rem] border border-slate-100 shadow-sm hover:scale-105 hover:bg-white hover:shadow-md transition-all duration-300">
                          <div className="text-4xl md:text-5xl font-black text-secondary mb-2">{stat.num}</div>
                          <div className="text-navy font-black text-base mb-1">{stat.label}</div>
                          <div className="text-slate-400 text-xs font-semibold">{stat.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Call-to-action */}
                  <div className="bg-navy rounded-[3rem] p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/events.jpeg')" }} />
                    <h3 className="text-3xl font-black mb-4 relative z-10">Experience the Vision India Excellence</h3>
                    <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base relative z-10 leading-relaxed">
                      Admissions are open for the upcoming academic year. Join a legacy of academic brilliance, character formation, and premium global vision.
                    </p>
                    <div className="flex justify-center relative z-10">
                      <a 
                        href="/admissions" 
                        className="px-8 py-4 rounded-xl gold-gradient text-white font-bold flex items-center gap-3 hover:shadow-lg hover:shadow-secondary/30 transition-all hover:-translate-y-1"
                      >
                        Enroll Now <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
