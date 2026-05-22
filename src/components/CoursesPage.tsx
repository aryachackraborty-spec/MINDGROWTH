/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Atom, 
  Binary, 
  Rocket, 
  Cpu, 
  Heart, 
  Languages, 
  Sparkles, 
  BookOpen
} from "lucide-react";
import { COURSES } from "../data";
import { Course } from "../types";
import WhatWeProvide from "./WhatWeProvide";
import Interactive3DModel from "./Interactive3DModel";
import FAQSection from "./FAQSection";
import CourseCard from "./CourseCard";
import { playHoverTick, playExpandClick } from "../utils/audio";

function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl bg-slate-950/30 border border-slate-900 relative overflow-hidden flex flex-col justify-between h-auto min-h-[500px] shadow-xl">
      {/* Glint/shimmer overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
      
      {/* Top indicator glowing header bar */}
      <div className="h-1.5 w-full bg-slate-900/80 animate-pulse" />

      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            {/* Rounder icon holder */}
            <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800/80 animate-pulse" />
            
            {/* Class Badge holder */}
            <div className="w-24 h-5 rounded-full bg-slate-900/80 border border-slate-800/80 animate-pulse" />
          </div>

          {/* Heading title skeleton bar */}
          <div className="h-7 w-4/5 bg-slate-900/90 rounded-xl mb-3 animate-pulse" />
          
          {/* Subtitle/tagline skeleton bar */}
          <div className="h-4 w-2/5 bg-slate-900/60 rounded-md mb-6 animate-pulse" />

          {/* Description abstract paragraph skeleton lines */}
          <div className="space-y-2.5 mb-6">
            <div className="h-3 w-full bg-slate-900/50 rounded-md animate-pulse" />
            <div className="h-3 w-11/12 bg-slate-900/50 rounded-md animate-pulse" />
            <div className="h-3 w-4/5 bg-slate-900/50 rounded-md animate-pulse" />
          </div>

          {/* Simulated 3D interactive widget skeleton stage */}
          <div className="w-full h-32 rounded-xl bg-slate-900/40 border border-slate-800/40 mb-6 flex flex-col justify-center items-center gap-1.5 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/2 to-transparent animate-pulse" />
            <Atom className="w-5 h-5 text-slate-700 animate-spin" style={{ animationDuration: "8s" }} />
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">LOADING CORE ENVIRONMENT...</span>
          </div>
        </div>

        {/* Benefits criteria checkboxes simulated */}
        <div className="space-y-3 mb-6">
          <div className="h-2 w-16 bg-slate-900/40 rounded-sm mb-1 animate-pulse" />
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-slate-905/80 border border-slate-800 animate-pulse" />
            <div className="h-3 w-2/3 bg-slate-900/50 rounded-md animate-pulse" />
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 rounded-full bg-slate-905/80 border border-slate-800 animate-pulse" />
            <div className="h-3 w-1/2 bg-slate-900/50 rounded-md animate-pulse" />
          </div>
        </div>

        {/* Action controls buttons skeleton */}
        <div className="flex gap-3 pt-4 border-t border-slate-900/60 mt-auto">
          <div className="flex-1 h-9 rounded-xl bg-slate-900/80 border border-slate-800 animate-pulse" />
          <div className="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 animate-pulse" />
        </div>
      </div>

      {/* Footer segment layout details */}
      <div className="bg-slate-950/80 border-t border-slate-900/80 px-6 py-3.5 flex items-center justify-between">
        <div className="w-20 h-3 bg-slate-900/80 rounded-sm animate-pulse" />
        <div className="w-16 h-2 bg-slate-500/10 rounded-sm" />
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [comparedCourseIds, setComparedCourseIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Trigger quick loading animation on init or whenever selected category resets
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850); // fast & polished duration
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Filter list
  const filteredCourses = COURSES.filter((course) => {
    if (selectedCategory === "all") return true;
    return course.category === selectedCategory;
  });

  const categories = [
    { label: "All Curriculums", key: "all" },
    { label: "School Foundations (V-XII)", key: "boards" },
    { label: "Entrance Arenas (JEE/NEET)", key: "competitive" },
    { label: "Fluency & Languages", key: "languages" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950/10 text-slate-100 relative">
      
      {/* Visual lighting background elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Course Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase tracking-widest border border-cyan-500/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Empowering Future Achievers
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4"
          >
            Core Academic & <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">Entrance Pathways</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-slate-400 font-sans"
          >
            Explore our scientific curriculum designs mapped strategically for ICSE, CBSE, 
            West Bengal Boards, state-level WBJEE, and national engineering & medical entry exams.
          </motion.p>
        </div>

        {/* Categories filters menu  */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  playExpandClick();
                }}
                onMouseEnter={playHoverTick}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                    : "bg-slate-900/60 text-slate-300 border-slate-800/80 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic course cards display grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, idx) => (
                <motion.div
                  key={`course-skeleton-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                >
                  <CourseCardSkeleton />
                </motion.div>
              ))
            ) : (
              filteredCourses.map((course) => (
                <motion.div
                  layout
                  key={course.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <CourseCard 
                    course={course} 
                    isSelectedForCompare={comparedCourseIds.includes(course.id)}
                    onToggleCompare={() => {
                      setComparedCourseIds((prev) => {
                        if (prev.includes(course.id)) {
                          return prev.filter((id) => id !== course.id);
                        }
                        if (prev.length >= 2) {
                          // FIFO replacement queue for smooth user experience
                          return [prev[1], course.id];
                        }
                        return [...prev, course.id];
                      });
                    }}
                  />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic banner emphasizing Admission call */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-center uppercase"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl md:text-3.5xl font-black text-white mb-4">
            Securing Ranks Across <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Boards & Entrances</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-400 lowercase max-w-2xl mx-auto mb-8 font-sans normal-case">
            Parents looking for trusted academic supervision in Kolkata can schedule a free demo classroom assessment 
            at any of our branches. We ensure complete transparency on progress reports.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                const leadForm = document.getElementById("lead-form");
                if (leadForm) leadForm.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-xl tracking-wider inline-flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] glow-btn cursor-pointer"
            >
              🚀 Inquire Academic Schedule
            </button>
          </div>
        </motion.div>

      </div>

      {/* 💬 Frequently Asked Questions Section representing glassmorphic inquiries */}
      <FAQSection />

      {/* Reusable "What We Provide" section as strictly requested */}
      <WhatWeProvide />

      {/* ⚡ Floating Compare Sync Hub Dock */}
      <AnimatePresence>
        {comparedCourseIds.length > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4"
          >
            <div className="bg-slate-950/95 border border-cyan-500/30 rounded-2xl p-4 shadow-[0_10px_50px_rgba(0,188,255,0.3)] backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-widest block uppercase font-black">Compare Matrix Active</span>
                  <p className="text-xs text-white font-bold font-sans">
                    {comparedCourseIds.length === 1 
                      ? "Select 1 more course to compare" 
                      : `Analyzed: ${COURSES.filter(c => comparedCourseIds.includes(c.id)).map(c => c.title.split(" ")[0]).join(" vs ")}`
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setComparedCourseIds([])}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-805 hover:border-slate-700 text-slate-300 hover:text-white rounded-lg text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Clear
                </button>
                <button
                  disabled={comparedCourseIds.length < 2}
                  onClick={() => setShowCompareModal(true)}
                  className={`px-4 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-widest font-black transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    comparedCourseIds.length === 2
                      ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,188,255,0.45)] animate-pulse"
                      : "bg-slate-900 text-slate-600 border-slate-950 cursor-not-allowed opacity-50"
                  }`}
                >
                  📊 Compare Side-By-Side
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparative Glassmorphic Side-by-Side Modal Panel */}
      <AnimatePresence>
        {showCompareModal && comparedCourseIds.length === 2 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-slate-950/80 border border-slate-800/80 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.85)] flex flex-col"
            >
              {/* Header segment with cyan top glowing bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-purple-500" />
              
              <div className="p-6 md:p-8 border-b border-slate-900/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold block mb-1">Interactive Diagnostic Dashboard</span>
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                    Course Syllabus Side-by-Side Compare
                  </h2>
                </div>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer font-bold"
                  title="Close Comparison Dashboard"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Core Table view viewport containing comparison blocks */}
              <div className="p-4 md:p-8 flex-1 overflow-y-auto space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border-slate-900 min-w-[640px]">
                    <thead>
                      <tr className="border-b border-slate-900">
                        <th className="py-4 px-4 text-[10px] font-mono uppercase tracking-widest text-slate-500 font-black w-[22%]">Metrics Criteria</th>
                        {COURSES.filter(c => comparedCourseIds.includes(c.id)).map((crs, idx) => (
                          <th key={crs.id} className="py-4 px-6 text-left w-[39%]">
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold bg-slate-900 px-3 py-1.5 rounded-full">
                                Channel 0{idx + 1}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-white mt-2 uppercase tracking-tight">{crs.title}</h3>
                            <p className="text-xs text-slate-400 font-semibold mt-0.5 lowercase font-mono">{crs.tagline}</p>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Category level */}
                      <tr className="border-b border-slate-900/45 hover:bg-slate-900/10 hover:duration-205">
                        <td className="py-5 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Syllabus / Board</td>
                        {COURSES.filter(c => comparedCourseIds.includes(c.id)).map((crs) => (
                          <td key={crs.id} className="py-5 px-6">
                            <span className="text-xs font-mono text-cyan-300 font-bold bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-xl block w-fit">
                              {crs.boardText}
                            </span>
                          </td>
                        ))}
                      </tr>

                      {/* Duration commitment info */}
                      <tr className="border-b border-slate-900/45 hover:bg-slate-900/10 hover:duration-205">
                        <td className="py-5 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Duration Commitment</td>
                        {COURSES.filter(c => comparedCourseIds.includes(c.id)).map((crs) => (
                          <td key={crs.id} className="py-5 px-6">
                            <div className="text-xs text-slate-200 font-bold font-sans flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              {crs.duration}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Syllabus / Subject modules */}
                      <tr className="border-b border-slate-900/45 hover:bg-slate-900/10 hover:duration-205">
                        <td className="py-5 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Syllabus Focus</td>
                        {COURSES.filter(c => comparedCourseIds.includes(c.id)).map((crs) => (
                          <td key={crs.id} className="py-5 px-6">
                            <div className="flex flex-wrap gap-1.5">
                              {crs.subjects.map((sub) => (
                                <span key={sub} className="text-[9px] font-mono bg-slate-950 border border-slate-900 hover:border-slate-800 text-slate-350 px-2 py-1 rounded-md transition-colors" title={sub}>
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Description abstract paragraph */}
                      <tr className="border-b border-slate-900/45 hover:bg-slate-900/10 hover:duration-205">
                        <td className="py-5 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Curriculum Context</td>
                        {COURSES.filter(c => comparedCourseIds.includes(c.id)).map((crs) => (
                          <td key={crs.id} className="py-5 px-6">
                            <p className="text-xs text-slate-400 font-sans leading-relaxed text-left min-h-[45px]">
                              {crs.description}
                            </p>
                          </td>
                        ))}
                      </tr>

                      {/* Key Strategic Advantages */}
                      <tr className="border-b border-slate-900/45 hover:bg-slate-900/10 hover:duration-205">
                        <td className="py-5 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Strategic Features</td>
                        {COURSES.filter(c => comparedCourseIds.includes(c.id)).map((crs) => (
                          <td key={crs.id} className="py-5 px-6">
                            <div className="space-y-2">
                              {crs.features.map((feat) => (
                                <div key={feat} className="flex gap-2 items-start text-xs text-slate-300 font-sans">
                                  <span className="text-emerald-400 font-sans font-black mt-0.5">✓</span>
                                  <span className="leading-relaxed text-left text-xs">{feat}</span>
                                </div>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Redirect links direct WhatsApp CTAs */}
                      <tr>
                        <td className="py-6 px-4 font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Admission Inquiry</td>
                        {COURSES.filter(c => comparedCourseIds.includes(c.id)).map((crs) => (
                          <td key={crs.id} className="py-6 px-6">
                            <button
                              onClick={() => {
                                setShowCompareModal(false);
                                const leadForm = document.getElementById("lead-form");
                                if (leadForm) {
                                  leadForm.scrollIntoView({ behavior: "smooth" });
                                } else {
                                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                }
                              }}
                              className="w-full py-2.5 bg-gradient-to-r from-cyan-400/90 to-teal-400/90 hover:opacity-95 text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                            >
                              Request Academic Schedule
                            </button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom helper details */}
              <div className="p-4 bg-slate-950 border-t border-slate-900/80 text-center text-[10px] font-mono text-slate-500 flex justify-between items-center px-8">
                <span>Powered by MindGrowth Interactive Pedagogy Suite</span>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="text-cyan-400 hover:text-white transition-colors cursor-pointer"
                >
                  Dismiss View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
