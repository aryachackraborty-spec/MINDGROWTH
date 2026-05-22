/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  BookOpen, 
  Users, 
  Sparkles, 
  Clock, 
  CheckCircle2,
  FileText
} from "lucide-react";
import { playHoverTick, playExpandClick } from "../utils/audio";

interface FAQItem {
  id: string;
  category: "all" | "teaching" | "admissions" | "prep" | "discipline";
  question: string;
  answer: string;
  badge?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-boards",
    category: "admissions",
    question: "Which boards and classes does MindGrowth Academy support?",
    answer: "We support ICSE, CBSE, and West Bengal Board (WBBSE & WBCHSE) curriculums for Class V to XII. We align our academic schedule precisely with school test milestones, so students never feel split between coaching classes and school requirements.",
    badge: "Class V-XII Boards"
  },
  {
    id: "faq-bilingual",
    category: "teaching",
    question: "Do you teach in English or Bengali?",
    answer: "We offer structured bilingual mentorship. While exam materials and key terminologies conform strictly to English requirements for CBSE/ICSE and JEE/NEET, our mentors explain the root physical and biological mechanisms in conversational Bengali or Hindi. This bridges the cognitive gap and ensures parents can easily follow along.",
    badge: "Bilingual Pedagogy"
  },
  {
    id: "faq-weak-students",
    category: "teaching",
    question: "How do you support students who fall behind in school?",
    answer: "Every batch is supplemented by mandatory weekly Remedial Helper Sessions. We never discard a student for low performance. Instead, our mentors craft custom revision sheets and break down hard conceptual blocks in small, stress-free micro-groups.",
    badge: "Remedial Help"
  },
  {
    id: "faq-mock-tests",
    category: "prep",
    question: "Are your mockup tests modeled on real JEE and NEET procedures?",
    answer: "Yes! We run a modern Computer-Based Test (CBT) suite replicating the NTA (National Testing Agency) visual interface. This helps engineering and medical entrance candidates adapt to high-pressure screening environments, eliminating screen anxiety well ahead of the official exam date.",
    badge: "CBT Mock Exams"
  },
  {
    id: "faq-parent-tracking",
    category: "discipline",
    question: "How do parents monitor their child's scores and attendance?",
    answer: "Transparency is our foundation. Parents receive automated weekly updates regarding attendance, mock performance indices, and specific focus areas. We also schedule customized branch interactions to ensure families are fully aware of national score statistics.",
    badge: "Parent Portal Sync"
  },
  {
    id: "faq-batch-ratio",
    category: "teaching",
    question: "What is the average student count in a single MindGrowth batch?",
    answer: "We strictly cap our offline classes at 25-30 students per physical classroom. Unlike sprawling mass lecture halls where individuals become invisible, our smaller cohorts ensure that professors address physical doubt questions on every student's copy directly.",
    badge: "Personal Focus Cap"
  },
  {
    id: "faq-cctv-discipline",
    category: "discipline",
    question: "What is your stance on the 'Flashy CCTV Surveillance' packages?",
    answer: "We focus on genuine, customized discipline over passive video surveillance. Our branches emphasize micro-mentoring pipelines, counseling roundtables, and structured learning schedules, building intrinsic academic focus rather than a temporary feeling of being watched.",
    badge: "Intrinsic Discipline"
  },
  {
    id: "faq-timing-adjustment",
    category: "admissions",
    question: "What are the session hours, and are weekend batches available?",
    answer: "Our classes run from 4:30 PM to 8:30 PM on weekdays to accommodate primary school cycles. For entrance cohorts (JEE and NEET foundation), we host intensive weekend morning and afternoon batches, giving competitive aspirants adequate self-study blocks.",
    badge: "Optimized Schedules"
  }
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "teaching" | "admissions" | "prep" | "discipline">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("faq-boards");

  const categories = [
    { key: "all", label: "All Questions", icon: Sparkles },
    { key: "teaching", label: "Teaching & Methods", icon: BookOpen },
    { key: "admissions", label: "Admissions & Hours", icon: Clock },
    { key: "prep", label: "JEE / NEET Prep", icon: FileText },
    { key: "discipline", label: "Reports & Discipline", icon: Users },
  ];

  // Filter items based on active category & search query
  const filteredFAQs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    playExpandClick();
  };

  return (
    <section id="faq-section-container" className="py-24 relative overflow-hidden">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers For Families
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-450 font-sans leading-relaxed">
            Have queries regarding syllabus pacing, vernacular instructions, score metrics, or admissions? 
            Explore our curated student and parent answers below.
          </p>
        </div>

        {/* Search and Filter Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Search bar inside glassmorphism package */}
          <div id="faq-search-wrapper" className="lg:col-span-5 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-500" />
            </div>
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search parent concerns, board styles, timings..."
              className="w-full pl-11 pr-4 py-3 bg-slate-900/40 border border-slate-800/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 backdrop-blur-md"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-[10px] text-slate-500 hover:text-cyan-400 font-mono"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Category badges */}
          <div id="faq-cat-wrapper" className="lg:col-span-7 flex flex-wrap gap-2 items-center justify-start lg:justify-end">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  id={`faq-cat-btn-${cat.key}`}
                  onClick={() => {
                    setActiveCategory(cat.key as any);
                    playExpandClick();
                  }}
                  onMouseEnter={playHoverTick}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 border flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-slate-100 text-slate-950 border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      : "bg-slate-900/30 text-slate-450 border-slate-800/60 hover:text-white hover:border-slate-700"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* FAQ Accordion Lists */}
        <div id="faq-accordion-container" className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq, index) => {
              const isExpanded = expandedId === faq.id;
              
              return (
                <motion.div
                  key={faq.id}
                  id={`faq-item-card-${faq.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isExpanded 
                      ? "bg-gradient-to-br from-slate-900/80 to-slate-950/80 border-cyan-500/30 shadow-[0_4px_30px_rgba(34,211,238,0.06)]" 
                      : "bg-slate-950/20 border-slate-900/60 hover:border-slate-800 hover:bg-slate-900/10"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    onMouseEnter={playHoverTick}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex gap-4 items-center pr-4">
                      {/* Left icon wrapper */}
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                        isExpanded 
                          ? "bg-cyan-950/50 border-cyan-500/30 text-cyan-400" 
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}>
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <div>
                        {faq.badge && (
                          <span className="text-[9px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-500/25 px-2 py-0.5 rounded mr-3 inline-block mb-1.5 leading-none">
                            {faq.badge}
                          </span>
                        )}
                        <h3 className="text-sm md:text-base font-bold text-white tracking-tight leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Chevron Animation rotating */}
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-cyan-400" : ""
                    }`} />
                  </button>

                  {/* Accordion Content with framer-motion height ease */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div id={`faq-item-desc-${faq.id}`} className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-400 font-sans leading-relaxed border-t border-slate-900/50">
                          {faq.answer}
                          
                          {/* Reassuring call to action inside description */}
                          <div className="mt-4 flex flex-wrap gap-4 items-center">
                            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              Parent Confirmed Resolution
                            </span>

                            <a
                              href="https://wa.me/919830224455?text=I%20have%20questions%20regarding%3A%20"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] text-cyan-400 font-mono font-bold hover:underline ml-auto flex items-center gap-1"
                            >
                              ASK MORE ON WHATSAPP ➔
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty search outcome handler */}
          {filteredFAQs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-12 text-center rounded-2xl bg-slate-950/20 border border-dashed border-slate-800/80"
            >
              <div className="text-slate-500 text-sm mb-2 font-mono">No matching parent/student queries found for &ldquo;{searchQuery}&rdquo;</div>
              <p className="text-xs text-slate-450 font-sans">
                Please try searching alternative keywords, or tap the Floating WhatsApp button downwards for direct 1-to-1 live guidance.
              </p>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
