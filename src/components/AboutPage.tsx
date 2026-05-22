/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Compass, 
  Eye, 
  Target, 
  CheckCircle, 
  GraduationCap, 
  ChevronRight, 
  Award, 
  Atom, 
  BookOpen, 
  Cpu 
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Individual Academic Care",
      desc: "Small student-centric batches with personal trackers ensures we recognize exactly where a student is struggling syntactically or conceptually.",
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Result Oriented Testing",
      desc: "Weekly physical mock examinations paired with digital Computer Based Tests (CBT) representing active NTA setups to fully alleviate exam fear.",
      icon: <Target className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Bengali Middle-Class Sensitivity",
      desc: "Providing national supreme standards study kits and facilities, designed within approachable local budget scales built on strong community trust.",
      icon: <Compass className="w-5 h-5 text-teal-400" />
    }
  ];

  const milestones = [
    { year: "2018", title: "Inception in South Kolkata", desc: "MindGrowth founded with 2 small study units, specializing in Class IX-XII board foundations." },
    { year: "2020", title: "Naktala Headquarters Built", desc: "Constructed spacious modular classrooms at Naktala providing advanced smart audio-visual facilities." },
    { year: "2022", title: "Competitive Batches & Sonarpur Launch", desc: "Expanded specialized modules to IIT-JEE, WBJEE and NEET with complete Computer Based Testing (CBT) technology labs." },
    { year: "2024", title: "Canning Regional Unit Active", desc: "Spearheaded supreme tutoring accessibility into rural-suburban South 24 Parganas at Canning, offering expert mentor arrays." },
    { year: "2026", title: "AI Tracking & Monitoring Active", desc: "Launched dynamic conceptual health tracking software to help busy parents monitor chapter mastery analytics on mobile." }
  ];

  const facultyMembers = [
    {
      name: "Dr. S. K. Das",
      role: "Dean & Advanced Physics Mentor",
      qual: "M.Sc., Ph.D. in Applied Physics (JU)",
      desc: "Simplifies complex physical mechanics, coordinate vectors, and vector mechanics with visual spatial diagrams.",
      color: "from-cyan-500/10 to-blue-500/10"
    },
    {
      name: "Prof. Ananya Sen",
      role: "Head of Advanced Organic Chemistry",
      qual: "Ex-Guest Lecturer, Presidency University",
      desc: "Recognized as Kolkata’s supreme trainer for complex Organic Synthesis mechanisms and equilibrium energetics.",
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      name: "Subhabrata Dutt",
      role: "Chief Mathematics & Calculus Coach",
      qual: "B.Tech, IIT Kharagpur (All India Ranker)",
      desc: "Creates high-speed conceptual shortcuts for WBJEE & JEE mains math questions under 30-seconds timed benchmarks.",
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      name: "Dr. Rimita Ghoshal",
      role: "NEET Biology Senior Expert",
      qual: "Ph.D. in Human Physiology (Calcutta University)",
      desc: "Transforms complex genetic maps, cardiac cycles, and botany definitions into easily retentionable optical cues.",
      color: "from-rose-500/10 to-purple-500/10"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950/20 text-slate-100 relative overflow-hidden">
      
      {/* Aurora visual light overlays */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Banner with header intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-500/30 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Atom className="w-3.5 h-3.5 animate-spin" />
            Decoding MindGrowth Academy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4"
          >
            THE COGNITIVE FOUNDATION FOR <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">COMPETITIVE DOMINANCE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-400 font-sans"
          >
            Since 2018, MindGrowth Academy has stood as a beacon of meticulous discipline, 
            academic command, and high tech support for middle-class Bengali students striving to excel 
            in State Boards, IIT-JEE, and NEET.
          </motion.p>
        </div>

        {/* Vision & Mission bento cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-500/20 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold uppercase text-white mb-4">Our Vision</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              To democratize premium CBSE, ICSE and entrance-level education by injecting interactive 
              diagnostics to every Bengali student. We look forward to moulding students into logical thinkers, 
              future-ready leaders, and empathetic professionals capable of competing globally on sheer conceptual merit.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold uppercase text-white mb-4">Our Mission</h2>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              To strip away mechanical memorization (rote-learning) by integrating smart tools, computer-based laboratories, 
              and meticulous personalized correction regimens. By combining academic discipline, student-to-student evaluation, 
              and compassionate motivational counseling, we prepare students to claim the highest brackets in JEE/NEET.
            </p>
          </motion.div>
        </div>

        {/* Interactive Custom Milestone Timeline */}
        <div className="mb-24 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-black uppercase text-white mb-2">Our Legacy Timeline</h2>
            <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Chronological Expansion Milestones</p>
          </div>

          <div className="relative border-l border-slate-800 ml-4 md:ml-32 pl-6 md:pl-16 space-y-12">
            {milestones.map((miles, idx) => (
              <motion.div 
                key={miles.year}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Milestone Counter Year Indicator */}
                <div className="absolute -left-12 md:-left-28 top-0 flex items-center gap-3">
                  <span className="text-sm font-mono font-black text-cyan-400 bg-slate-900 border border-cyan-500/30 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                    {miles.year}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-950 ring-4 ring-cyan-500/20 relative z-20" />
                </div>

                <div className="glass-card p-6 rounded-xl hover:border-cyan-500/30 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2">{miles.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{miles.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>



        {/* Teaching Philosophy with modern quotes */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/60 p-8 md:p-12 relative overflow-hidden mb-12"
        >
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-400/5 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/50 px-3 py-1.5 rounded-md border border-cyan-500/20">
                Core Teaching Philosophy
              </span>
              <h3 className="text-2xl md:text-4xl font-black uppercase text-white mt-4 mb-4">
                &ldquo;Rigid Syllabus Masteries, Delivered and Decoded Conceptually.&rdquo;
              </h3>
              <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
                We believe entrance tests like JEE/NEET aren&rsquo;t simple selection assessments, they are extreme elimination sprints. 
                You cannot defeat these hurdles with raw rote learning. We establish deep intuitive roots across physics vectors, organic reaction routes, 
                and biology morphology mechanics, turning the learning environment into a dynamic discovery center.
              </p>
            </div>
            
            <div className="space-y-4">
              {values.map((v, i) => (
                <div key={v.title} className="flex gap-3 items-start p-3 rounded-xl bg-slate-950/60 border border-slate-800/40">
                  <div className="mt-1">{v.icon}</div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">{v.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-1 leading-normal font-sans">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
