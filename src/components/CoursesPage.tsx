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
                  <CourseCard course={course} />
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
    </div>
  );
}
