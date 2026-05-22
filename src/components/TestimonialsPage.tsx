/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Star, 
  MessageSquare, 
  Sparkles, 
  PlusCircle, 
  FileText, 
  Award, 
  Quote, 
  GraduationCap, 
  TrendingUp, 
  UserCheck 
} from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Testimonial } from "../types";
import { playHoverTick, playExpandClick } from "../utils/audio";

function TestimonialCard({ rev }: { rev: Testimonial }) {
  return (
    <div 
      onMouseEnter={playHoverTick}
      className="rounded-2xl glass-card p-6 md:p-8 flex flex-col justify-between relative group hover:border-cyan-500/20 h-full w-full"
    >
      {/* Visual quote icon ornament */}
      <div className="absolute top-4 right-6 text-slate-850/10 group-hover:text-cyan-500/10 pointer-events-none transition-colors">
        <Quote className="w-8 h-8 rotate-180" />
      </div>

      <div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rev.rating }).map((_, i) => (
            <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* English Testimonial */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans mb-4 italic">
          &ldquo;{rev.textEn}&rdquo;
        </p>

        {/* Optional Bengali support translation */}
        {rev.textBn && (
          <div className="p-3 bg-cyan-950/10 border-l-2 border-cyan-400 rounded-r-xl mb-4 font-sans text-[11px] text-cyan-300">
            <p className="not-italic leading-relaxed">&ldquo;{rev.textBn}&rdquo;</p>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-900 mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md">
          <span className="text-xs font-black text-cyan-400 uppercase">
            {rev.studentName.slice(0, 2)}
          </span>
        </div>
        <div>
          <h4 className="text-xs font-black text-white">{rev.studentName}</h4>
          {rev.parentName && (
            <p className="text-[10px] text-slate-400 font-sans">Parent: {rev.parentName}</p>
          )}
          <p className="text-[9px] text-cyan-400 uppercase tracking-widest font-mono mt-0.5">{rev.classNameOrTarget}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1">
        {rev.tags.map((t) => (
          <span key={t} className="text-[8px] font-mono uppercase bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-900">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function TestimonialCardSkeleton() {
  return (
    <div className="rounded-2xl bg-slate-950/30 border border-slate-900 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[220px] shadow-xl">
      {/* Glint shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
      
      {/* Quote ornament line */}
      <div className="absolute top-4 right-6 text-slate-900/40 pointer-events-none">
        <Quote className="w-8 h-8 rotate-180 opacity-50" />
      </div>

      <div>
        {/* Star evaluation icons row skeleton */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-3.5 h-3.5 rounded-full bg-slate-900/80 border border-slate-850 animate-pulse" />
          ))}
        </div>

        {/* English descriptive review line placeholder */}
        <div className="space-y-2.5 mb-4">
          <div className="h-3 w-full bg-slate-900/60 rounded-md animate-pulse" />
          <div className="h-3 w-11/12 bg-slate-900/60 rounded-md animate-pulse" />
          <div className="h-3 w-2/3 bg-slate-900/60 rounded-md animate-pulse" />
        </div>
      </div>

      {/* Bottom author cluster structure */}
      <div className="pt-4 border-t border-slate-900/60 mt-6 flex items-center gap-3">
        {/* Rounded avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 animate-pulse shrink-0" />
        
        <div className="space-y-2 flex-1 animate-pulse">
          {/* Student name line */}
          <div className="h-3 w-24 bg-slate-905/80 rounded" />
          {/* Parent/Class indicator line */}
          <div className="h-2 w-32 bg-slate-900/50 rounded" />
        </div>
      </div>

      {/* Tags badges row skeleton */}
      <div className="mt-4 flex gap-1 animate-pulse">
        <div className="h-4.5 w-16 bg-slate-900 rounded border border-slate-800/80" />
        <div className="h-4.5 w-24 bg-slate-900 rounded border border-slate-800/80" />
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  // Custom new review state managers
  const [newName, setNewName] = useState("");
  const [newParentName, setNewParentName] = useState("");
  const [newClass, setNewClass] = useState("IIT-JEE Syllabus");
  const [newTextEn, setNewTextEn] = useState("");
  const [newTextBn, setNewTextBn] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newBranch, setNewBranch] = useState("Naktala Branch");
  const [successMsg, setSuccessMsg] = useState(false);

  // Handlers
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newTextEn) return;

    const added: Testimonial = {
      id: "user-" + Date.now(),
      studentName: newName,
      parentName: newParentName || undefined,
      classNameOrTarget: newClass,
      textEn: newTextEn,
      textBn: newTextBn || undefined,
      rating: newRating,
      tags: [newBranch, newClass],
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      featured: true
    };

    setReviews([added, ...reviews]);
    setNewName("");
    setNewParentName("");
    setNewTextEn("");
    setNewTextBn("");
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-950/20 text-slate-100 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase tracking-widest border border-cyan-500/20 mb-4"
          >
            <UserCheck className="w-4 h-4 text-cyan-300 animate-pulse" />
            Vouched for by Families
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4"
          >
            TESTIMONIALS of <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">EXCELLENCE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-slate-400 normal-case font-sans"
          >
            Read genuine English and Bengali success reviews outlining how regular monitoring, comfort zone studies, 
            and OMR evaluation help students leapfrog standard scores.
          </motion.p>
        </div>



        {/* Core Review Showcase Board based on Skeletons or Cinematic Loop */}
        <div className="mb-24">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <motion.div
                    key={`testimonial-skeleton-${idx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                  >
                    <TestimonialCardSkeleton />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-8 marquee-container overflow-hidden w-full relative">
                
                {/* Fade sides gradient panels */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-15 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-15 pointer-events-none" />

                {/* Track 1: Row Scrolling Left */}
                <div className="relative py-2 select-none overflow-hidden">
                  <div className="animate-marquee-left flex gap-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
                    {(() => {
                      const mid = Math.ceil(reviews.length / 2);
                      const t1 = reviews.slice(0, mid);
                      // Duplicate list enough times to exceed viewport window seamlessly
                      let repeated = [...t1];
                      while (repeated.length < 8) {
                        repeated = [...repeated, ...t1];
                      }
                      return repeated.map((rev, idx) => (
                        <div key={`t1-item-${rev.id}-${idx}`} className="w-[300px] sm:w-[360px] shrink-0">
                          <TestimonialCard rev={rev} />
                        </div>
                      ));
                    })()}
                  </div>
                </div>

                {/* Track 2: Row Scrolling Right (Opposite flow!) */}
                <div className="relative py-2 select-none overflow-hidden">
                  <div className="animate-marquee-right flex gap-6 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
                    {(() => {
                      const mid = Math.ceil(reviews.length / 2);
                      const t2 = reviews.slice(mid);
                      let repeated = [...t2];
                      while (repeated.length < 8) {
                        repeated = [...repeated, ...t2];
                      }
                      return repeated.map((rev, idx) => (
                        <div key={`t2-item-${rev.id}-${idx}`} className="w-[300px] sm:w-[360px] shrink-0">
                          <TestimonialCard rev={rev} />
                        </div>
                      ));
                    })()}
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-slate-900/40 px-3 py-1.5 rounded-full border border-slate-900/50">
                    💡 Hover card surface to freeze continuous automated slide loop
                  </span>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Interactive Element: Review Draft Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-800">
          <div className="lg:col-span-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-2">Live Dynamic System</span>
            <h2 className="text-2xl md:text-3.5xl font-black uppercase text-white mb-4">
              DRAFT YOUR REVIEW INSTANTLY
            </h2>
            <p className="text-xs md:text-sm text-slate-400 font-sans leading-relaxed mb-6">
              Are you a MindGrowth Academy student or parent? Fill this conceptual reviewer sandbox module 
              to see your review appear live in the scrolling queue block above! Our dynamic system simulates the feedback array instantly.
            </p>

            <div className="flex gap-4 items-center mb-6">
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                <PlusCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Client State Injection</h4>
                <p className="text-[10px] text-slate-505 font-mono">Simulates real database writes directly inside the browser memory context (localStorage ready).</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubmitReview} className="space-y-4">
              {successMsg && (
                <div className="p-3 text-xs bg-emerald-950 text-emerald-300 border border-emerald-500/20 rounded-xl font-sans uppercase text-center animate-pulse">
                  ✓ Review successfully compiled & injected to local state queue!
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Priyanjali Sen"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-1">Parent Name *(Optional)</label>
                  <input
                    type="text"
                    value={newParentName}
                    onChange={(e) => setNewParentName(e.target.value)}
                    placeholder="e.g. Debasish Sen"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-1">Curriculum Class / Ranker Status</label>
                  <input
                    type="text"
                    value={newClass}
                    onChange={(e) => setNewClass(e.target.value)}
                    placeholder="e.g. Class XII CBSE"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-1">Select Star Rating</label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(parseInt(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-xs text-slate-300 focus:outline-none"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-1">English Review Text *</label>
                <textarea
                  required
                  rows={2}
                  value={newTextEn}
                  onChange={(e) => setNewTextEn(e.target.value)}
                  placeholder="How did MindGrowth improve your mock scores, confidence, or concepts?"
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl p-4 text-xs text-white focus:outline-none font-sans"
                />
              </div>

              <div>
                <label className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-1">Bengali support review (Optional)</label>
                <textarea
                  rows={2}
                  value={newTextBn}
                  onChange={(e) => setNewTextBn(e.target.value)}
                  placeholder="আমার ছেলের confidence অনেক improve করেছে..."
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500 rounded-xl p-4 text-xs text-white focus:outline-none font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-400 to-teal-400 hover:opacity-90 text-slate-950 text-xs font-bold tracking-wider rounded-xl uppercase hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] duration-200 cursor-pointer"
              >
                🚀 Inject Simulated Review Live
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
