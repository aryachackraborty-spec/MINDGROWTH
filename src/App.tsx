/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle, 
  Monitor, 
  Star, 
  GraduationCap, 
  Phone, 
  MessageSquare, 
  Atom, 
  Flame, 
  Laptop, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  BookMarked,
  Rocket
} from "lucide-react";

// Components Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScienceEngine from "./components/ScienceEngine";
import WhatWeProvide from "./components/WhatWeProvide";
import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import TestimonialsPage from "./components/TestimonialsPage";
import BranchesPage from "./components/BranchesPage";
import ContactPage from "./components/ContactPage";
import FAQSection from "./components/FAQSection";
import Preloader from "./components/Preloader";

// Data Imports
import { COURSES, TESTIMONIALS } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [activeTestimonyIndex, setActiveTestimonyIndex] = useState(0);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [showCursorGlow, setShowCursorGlow] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true);

  // Disable scroll while preloading to prevent offset jitter
  useEffect(() => {
    if (isPreloading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreloading]);

  // Subtle GSAP scroll-triggered entrance animation with a staggered float effect for Core Objective card
  useEffect(() => {
    if (currentPage !== "home" || isPreloading) return;

    // Fast layout settlement wait
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vanguard-objective-card",
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(".vanguard-objective-card", 
        { opacity: 0, scale: 0.94, y: 50 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power3.out",
          onComplete: () => {
            const el = document.querySelector(".vanguard-objective-card");
            if (el) {
              el.classList.add("animate-float");
              gsap.set(".vanguard-objective-card", { clearProps: "transform" });
            }
          }
        }
      )
      .fromTo(".vanguard-objective-item",
        { opacity: 0, y: 15 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.12, 
          ease: "power2.out" 
        },
        "-=0.45"
      );
    });

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [currentPage, isPreloading]);

  // Monitor cursor glow trails on desktop standard pointer
  useEffect(() => {
    const checkPointer = window.matchMedia("(pointer: fine)").matches;
    if (!checkPointer) return;
    
    setShowCursorGlow(true);

    const handleMouseMove = (e: MouseEvent) => {
      setGlowPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Slide review reviews interval
  useEffect(() => {
    if (currentPage !== "home") return;
    const interval = setInterval(() => {
      setActiveTestimonyIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const activeTestimony = TESTIMONIALS[activeTestimonyIndex];

  return (
    <div className="relative min-h-screen font-sans antialiased text-slate-200 select-none overflow-x-hidden bg-[#03040b]">
      
      {/* 🚀 Dynamic High-End Preloader */}
      <AnimatePresence mode="wait">
        {isPreloading && (
          <Preloader onComplete={() => setIsPreloading(false)} />
        )}
      </AnimatePresence>

      {!isPreloading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* 🚀 Dynamic Desktop Cursor Glow Trail */}
      {showCursorGlow && (
        <div
          className="fixed pointer-events-none w-80 h-80 rounded-full bg-cyan-500/10 blur-[80px] z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
          style={{
            left: `${glowPosition.x}px`,
            top: `${glowPosition.y}px`,
          }}
        />
      )}

      {/* 🧬 Live Chemistry/Physics Interaction Background Canvas */}
      <ScienceEngine />

      {/* 🧭 Sticky Top glassmorphic Navigation Bar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Scroll Progress line indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-900 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* 🎬 Main Body Panels Transition Engine */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              
              {/* 🌌 HERO SECTION */}
              <section className="relative min-h-[92vh] flex items-center pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Hero Left content block */}
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    
                    {/* Urgency Badges panel */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors border border-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-mono uppercase tracking-widest leading-none">
                        <Flame className="w-4 h-4 text-cyan-400 animate-pulse" />
                        Admissions Open Session 2026
                      </span>
                      
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest leading-none">
                        🔥 Limited Seats Available
                      </span>
                      
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-mono uppercase tracking-widest leading-none">
                        💡 Smart AV Tech Campus
                      </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-[1.05]">
                      Transforming <span className="text-cyan-400 block sm:inline">Students</span> Into <br className="hidden md:inline" />
                      Future <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent">Achievers</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
                      Kolkata’s premier high-tech educational academy designed for **CBSE, ICSE, West Bengal Boards (Class 5-12)**, 
                      and extreme target programs for **IIT-JEE & NEET preparation**. We build conceptual clarity not rote retention.
                    </p>

                    {/* Magnetic CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                      <button
                        onClick={() => setCurrentPage("contact")}
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all glow-btn cursor-pointer flex items-center justify-center gap-2"
                      >
                        🚀 Book Free Demo Class
                      </button>

                      <button
                        onClick={() => setCurrentPage("courses")}
                        className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-white font-black text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Explore Curriculums</span>
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                      </button>
                    </div>

                    {/* Trust indicators indicators */}
                    <div className="pt-6 hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-slate-900 max-w-md mx-auto lg:mx-0 text-left">
                      <div>
                        <span className="text-xl font-black text-white font-mono">1000+</span>
                        <p className="text-[10px] font-mono text-slate-500 uppercase">Enrolled Pupils</p>
                      </div>
                      <div>
                        <span className="text-xl font-black text-white font-mono">95%</span>
                        <p className="text-[10px] font-mono text-slate-500 uppercase">Board Success</p>
                      </div>
                      <div>
                        <span className="text-xl font-black text-white font-mono">3 Campuses</span>
                        <p className="text-[10px] font-mono text-slate-500 uppercase">Across Kolkata</p>
                      </div>
                    </div>

                  </div>

                  {/* Hero Right bento dynamic block visualizer */}
                  <div className="lg:col-span-5 relative">
                    
                    {/* Floating Atom icon */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-cyan-950/40 border border-cyan-400/20 flex items-center justify-center rounded-2xl animate-float pointer-events-none shadow-lg">
                      <Atom className="w-10 h-10 text-cyan-400" />
                    </div>

                    {/* Floating Rocket icon */}
                    <div className="absolute -bottom-10 -right-6 w-16 h-16 bg-purple-950/40 border border-purple-400/20 flex items-center justify-center rounded-2xl animate-float pointer-events-none shadow-lg" style={{ animationDelay: "-3s" }}>
                      <Rocket className="w-8 h-8 text-purple-400" />
                    </div>

                    {/* Main Futuristic Card panel */}
                    <div className="rounded-3xl bg-slate-900/40 border border-white/5 p-6 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                      
                      {/* Top micro light bar */}
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                      
                      <div className="flex items-center gap-2 text-cyan-400 text-[10px] font-mono uppercase tracking-widest mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Intelligence Central</span>
                      </div>

                      <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-4">
                        Concept Mastery Diagnostics
                      </h3>

                      <div className="space-y-3.5">
                        <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-900 flex gap-3 items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <div className="text-left">
                            <h4 className="text-[11px] font-bold text-slate-200 uppercase">OMR Answer Scanning</h4>
                            <p className="text-[9px] text-slate-500 leading-normal">Evaluated immediately to identify weaker chapters.</p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-900 flex gap-3 items-center">
                          <Laptop className="w-4 h-4 text-cyan-400" />
                          <div className="text-left">
                            <h4 className="text-[11px] font-bold text-slate-200 uppercase">NTA Computerized CBT Mock Lab</h4>
                            <p className="text-[9px] text-slate-500 leading-normal">Train on identical software layouts as national portals.</p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-900 flex gap-3 items-center">
                          <TrendingUp className="w-4 h-4 text-purple-400" />
                          <div className="text-left">
                            <h4 className="text-[11px] font-bold text-slate-200 uppercase">Parent WhatsApp Diagnostics</h4>
                            <p className="text-[9px] text-slate-500 leading-normal">Continuous updates detailing syllabus milestones & scores.</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 text-center">
                        <span className="text-[9px] font-mono text-slate-500 uppercase">© ESTD 2018 CODE: MINDGROWTH_LABS</span>
                      </div>
                    </div>

                  </div>

                </div>
              </section>

              {/* 🏆 TRUST INDICATOR LOGO BAR */}
              <div className="py-10 bg-slate-950/60 border-y border-slate-900 relative">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-6">
                    A Sincere Approach To Parent Trust & Sincerity
                  </span>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center hover:border-cyan-500/10 transition-colors">
                      <GraduationCap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <span className="text-xs font-bold text-slate-300 block uppercase">Expert Board Faculty</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center hover:border-cyan-500/10 transition-colors">
                      <Award className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <span className="text-xs font-bold text-slate-300 block uppercase">100% Concept-Oriented</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center hover:border-cyan-500/10 transition-colors">
                      <Laptop className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                      <span className="text-xs font-bold text-slate-300 block uppercase">Mock CBT Exam Suite</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center hover:border-cyan-500/10 transition-colors">
                      <Phone className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                      <span className="text-xs font-bold text-slate-300 block uppercase">Weekly Progress Reports</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🎓 EMOTIONALLY CHARGED ABOUT PREVIEW */}
              <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left layout visual elements */}
                  <div className="space-y-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-md border border-cyan-500/20 inline-block">
                      Concept Clarity Comes First
                    </span>
                    <h2 className="text-3xl md:text-4.5xl font-black uppercase text-white tracking-tight">
                      BENGALI SENSIBILITY BALANCED WITH <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">NATIONAL SUPREME</span> COMPETENCE
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      At MindGrowth Academy, we believe coaching isn&rsquo;t just about writing notes or completing chapters. 
                      Every child is built with different grasping mechanics. Our primary care focuses heavily on concept clarity, 
                      remedial support classes for slower learners, and mental encouragement.
                    </p>

                    <div className="space-y-3.5">
                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase font-sans">Extreme Doubt Clearing Modules</h4>
                          <p className="text-[11px] text-slate-500 font-sans">Extra customized lectures following examinations to clear remaining conceptual hurdles.</p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase font-sans">Student-to-Student Concept Debates</h4>
                          <p className="text-[11px] text-slate-500 font-sans">Fosters confidence, linguistic fluency, logical defenses, and peer evaluations.</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setCurrentPage("about")}
                        className="py-3 px-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-350 cursor-pointer transition-all inline-flex items-center gap-2"
                      >
                        <span>Learn Teaching Philosophy</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right layout visual: Glass cards stacking */}
                  <div className="relative flex items-center justify-center lg:justify-end">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-3xl rounded-3xl pointer-events-none" />
                    
                    {/* Glowing outer orbital paths */}
                    <div className="absolute w-72 h-72 border border-cyan-500/10 rounded-full animate-spin pointer-events-none" style={{ animationDuration: "25s" }} />
                    <div className="absolute w-80 h-80 border-dashed border-purple-500/10 rounded-full animate-spin pointer-events-none" style={{ animationDuration: "40s", animationDirection: "reverse" }} />

                    {/* Highly Polished Glassmorphic Card Panel */}
                    <div 
                      className="vanguard-objective-card w-full max-w-md relative z-10 p-8 rounded-3xl bg-slate-950/75 border border-cyan-500/20 backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden group/objective opacity-0 scale-95 translate-y-12"
                    >
                      {/* Interactive glow effect inside card */}
                      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                      
                      {/* Card border shine line */}
                      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
                      
                      {/* Visual header indicators */}
                      <div className="vanguard-objective-item mb-6 flex justify-between items-center opacity-0 translate-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-black">
                            Vanguard Objective
                          </span>
                        </div>
                        {/* Physics/Vector rotating vector visual */}
                        <div className="relative w-8 h-8 flex items-center justify-center bg-cyan-950/50 rounded-lg border border-cyan-500/30">
                          <Atom className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
                        </div>
                      </div>

                      {/* Quote Mark */}
                      <div className="vanguard-objective-item text-4xl font-serif text-cyan-500/30 leading-none h-4 opacity-0 translate-y-4">&ldquo;</div>

                      <blockquote className="vanguard-objective-item text-sm sm:text-base text-slate-100 font-sans tracking-tight font-medium leading-relaxed mb-6 pt-1 text-left opacity-0 translate-y-4">
                        We make sure every Indian competitive exam aspirant understands why a physics vector rotates, rather than simply memorizing formula variables.
                      </blockquote>
                      
                      <div className="vanguard-objective-item flex justify-between items-center pt-5 border-t border-slate-900/80 opacity-0 translate-y-4">
                        <div>
                          <div className="text-xs font-bold uppercase text-white tracking-wide">MINDGROWTH™ METHOD</div>
                          <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Interactive Pedagogy</div>
                        </div>
                        
                        {/* Interactive mini vector indicator mapping */}
                        <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-cyan-400/80 px-2.5 py-1 bg-cyan-950/30 rounded-full border border-cyan-500/15">
                          <Sparkles className="w-3 h-3 animate-pulse" />
                          <span>Vector Rotator Engine</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </section>

              {/* 📚 DYNAMIC COURSE PREVIEW IN BENTO TILES styling */}
              <section className="py-20 bg-slate-950/20 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-2">Our Curriculums</span>
                      <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
                        Futuristic Course <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Pathways</span>
                      </h2>
                    </div>
                    
                    <div>
                      <button
                        onClick={() => setCurrentPage("courses")}
                        className="py-3 px-6 bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-xs font-black uppercase rounded-xl tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] duration-200 inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>View All Courses & Syllabus</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Course Cards Carousel Grid - Displays 3 core courses preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COURSES.slice(0, 3).map((course, index) => (
                      <div
                        key={course.id}
                        className="rounded-2xl glass-card relative overflow-hidden flex flex-col justify-between group h-full hover:border-cyan-500/20 cursor-pointer"
                        onClick={() => setCurrentPage("courses")}
                      >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.glowColor} opacity-5 blur-2xl`} />
                        <div className={`h-1.5 w-full bg-gradient-to-r ${course.glowColor}`} />

                        <div className="p-6 md:p-8">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight mb-2">
                            {course.title}
                          </h3>
                          <p className="text-[10px] font-mono text-cyan-400/95 uppercase mb-4 tracking-wide leading-tight">
                            {course.tagline}
                          </p>
                          <p className="text-xs text-slate-400 font-sans leading-relaxed h-14 overflow-hidden mb-6">
                            {course.description}
                          </p>

                          <div className="space-y-2">
                            {course.features.slice(0, 2).map((feat, i) => (
                              <div key={i} className="flex gap-2 items-center text-xs text-slate-300">
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-950/60 border-t border-slate-900/80 px-6 py-3.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span className="truncate">{course.duration}</span>
                          <span className="text-cyan-450 hover:translate-x-1 transition-transform">Explore →</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </section>

              {/* 🧠 THE CORE FEATURE GRID (WHAT WE PROVIDE) SECTION */}
              <WhatWeProvide />

              {/* 📊 CINEMATIC SYSTEM COUNTERS AND RESULTS SECTION */}
              <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-3">Live Quantitative Records</span>
                <h2 className="text-2xl md:text-4.5xl font-black uppercase text-white mb-16">
                  OUR COMPILATION OF <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ACADEMIC EXCELLENCE</span>
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="p-6 rounded-2xl glass-card relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center mx-auto mb-4 border border-cyan-500/20 shadow-lg">
                      <GraduationCap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-3xl md:text-4.5xl font-black text-white font-mono block">1000+</span>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2 h-7 overflow-hidden leading-normal">
                      Students Graduated
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl glass-card relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-purple-950 flex items-center justify-center mx-auto mb-4 border border-purple-500/20 shadow-lg">
                      <TrendingUp className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-3xl md:text-4.5xl font-black text-white font-mono block">95%</span>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2 h-7 overflow-hidden leading-normal">
                      Boards Pass Rate
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl glass-card relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-teal-950 flex items-center justify-center mx-auto mb-4 border border-teal-500/20 shadow-lg">
                      <Laptop className="w-6 h-6 text-teal-400" />
                    </div>
                    <span className="text-3xl md:text-4.5xl font-black text-white font-mono block">5000+</span>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2 h-7 overflow-hidden leading-normal">
                      Classes Completed
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl glass-card relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-rose-950 flex items-center justify-center mx-auto mb-4 border border-rose-500/20 shadow-lg">
                      <Award className="w-6 h-6 text-rose-400" />
                    </div>
                    <span className="text-3xl md:text-4.5xl font-black text-white font-mono block">Multiple</span>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2 h-7 overflow-hidden leading-normal">
                      JEE/NEET Achievers
                    </p>
                  </div>
                </div>
              </section>

              {/* 💬 AUTO-SLIDING PREMIUM TESTIMONIAL PREVIEW CAROUSEL */}
              <section className="py-20 bg-slate-950/40 border-y border-slate-900 overflow-hidden relative">
                <div className="absolute top-1/2 left-[-150px] w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 right-[-150px] w-80 h-80 bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-2">Vouched by Families</span>
                  <h3 className="text-2xl md:text-4xl font-black uppercase text-white mb-12">
                    Loved By Parents & Students
                  </h3>

                  {/* Testimonial Active Slider Box */}
                  <div className="min-h-[220px] flex flex-col justify-between items-center bg-slate-900/40 p-6 md:p-10 rounded-2xl border border-white/5 relative">
                    
                    {/* Glowing quotes */}
                    <div className="text-3xl font-serif text-cyan-400 opacity-60 flex justify-center mb-4">&ldquo;</div>

                    <p className="text-sm md:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl italic">
                      {activeTestimony.textEn}
                    </p>

                    {/* Bengali Text Support */}
                    {activeTestimony.textBn && (
                      <p className="text-xs md:text-sm text-cyan-300 font-sans mt-3 font-semibold not-italic">
                        &ldquo;{activeTestimony.textBn}&rdquo;
                      </p>
                    )}

                    <div className="mt-8 flex items-center gap-3">
                      <div>
                        <h4 className="text-xs font-black text-white">{activeTestimony.studentName}</h4>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">{activeTestimony.classNameOrTarget}</p>
                      </div>
                    </div>

                    {/* Selector Dots */}
                    <div className="flex justify-center gap-1.5 mt-8">
                      {TESTIMONIALS.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTestimonyIndex(i)}
                          className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                            activeTestimonyIndex === i ? "bg-cyan-400 w-5" : "bg-slate-700 hover:bg-slate-600"
                          }`}
                        />
                      ))}
                    </div>

                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => setCurrentPage("testimonials")}
                      className="text-xs font-mono text-cyan-400 hover:underline uppercase tracking-wider flex items-center gap-1.5 mx-auto cursor-pointer"
                    >
                      <span>Read More Bengali Review Boards</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </section>

              {/* 💬 FAQ ACCORDION SECTION */}
              <FAQSection />

              {/* 🚀 FINAL CINEMATIC CALL TO ACTION SECTION */}
              <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                <div className="absolute top-1/2 left-0 w-82 h-82 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-16 relative overflow-hidden">
                  
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-4 bg-cyan-950/50 px-3 py-1.5 rounded-md border border-cyan-500/20 w-fit mx-auto leading-none">
                    Admissions Active Now
                  </span>

                  <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
                    BUILD A SMARTER FUTURE WITH <br className="hidden md:inline" />
                    <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-purple-400 bg-clip-text text-transparent">MINDGROWTH ACADEMY</span> 🚀
                  </h2>

                  <p className="text-xs md:text-sm text-slate-400 font-sans max-w-2xl mx-auto mb-8 leading-relaxed">
                    Instantly book a free, no-obligation classroom assessment or motivational counseling session. 
                    Let diagnostics guide your children into India&rsquo;s elite scoring institutions.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => setCurrentPage("contact")}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all glow-btn cursor-pointer inline-flex items-center gap-2"
                    >
                      🚀 Enroll Today
                    </button>

                    <a
                      href="https://wa.me/918051680816?text=Hi%28MindGrowth%28Academy!%28I%28want%28to%28know%28about%28admission%28details."
                      target="_blank"
                      rel="noreferrer"
                      className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-black text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>

                </div>
              </section>

            </motion.div>
          )}

          {/* Conditional routes rendering */}
          {currentPage === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <AboutPage />
            </motion.div>
          )}

          {currentPage === "courses" && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <CoursesPage />
            </motion.div>
          )}

          {currentPage === "testimonials" && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <TestimonialsPage />
            </motion.div>
          )}

          {currentPage === "branches" && (
            <motion.div
              key="branches"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <BranchesPage />
            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 📞 FLOATING WHATSAPP CHAT ON THE RIGHT-HAND SIDE */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/918009900981?text=Hi%20MindGrowth%20Academy%20Kolkata!%20I%20am%20looking%20for%20CBSE/ICSE/JEE/NEET%20admission%20details.%20Please%20guide%20us."
          target="_blank"
          rel="noreferrer"
          className="relative w-14 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center text-slate-950 shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:scale-110 transition-transform duration-300 group cursor-pointer"
          title="Chat with our counselor on WhatsApp"
        >
          {/* Ambient green dynamic pulsing ring */}
          <span className="absolute inset-0 rounded-2xl bg-emerald-500/30 animate-ping pointer-events-none" style={{ animationDuration: "2s" }} />

          <MessageSquare className="w-6 h-6 stroke-[2.5]" />
          
          {/* Tooltip text showing on hovering the icon */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-800 text-slate-350 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
             Admission Desk
          </div>
        </a>
      </div>

      {/* 🎬 FOOTER segment */}
      <Footer setCurrentPage={setCurrentPage} />

        </motion.div>
      )}
    </div>
  );
}
