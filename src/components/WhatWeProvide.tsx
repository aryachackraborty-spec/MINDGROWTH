/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Presentation, 
  Monitor, 
  Flame, 
  FileText, 
  Users, 
  Cpu, 
  Laptop, 
  TrendingUp, 
  BookOpen, 
  Coffee, 
  CheckCircle, 
  ShieldAlert, 
  HeartHandshake, 
  Award 
} from "lucide-react";
import { FACILITIES } from "../data";
import AIMonitoringDashboard from "./AIMonitoringDashboard";

export default function WhatWeProvide() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showAIDashboard, setShowAIDashboard] = useState(false);

  // Smooth-scroll into the interactive AI Diagnostic panel when activated
  useEffect(() => {
    if (showAIDashboard) {
      setTimeout(() => {
        const element = document.getElementById("ai-monitoring-panel");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [showAIDashboard]);

  // Map icon strings to Lucide icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Presentation": return <Presentation className="w-6 h-6 text-cyan-400" />;
      case "Monitor": return <Monitor className="w-6 h-6 text-purple-400" />;
      case "FlameKindling": return <Flame className="w-6 h-6 text-amber-500" />;
      case "FileText": return <FileText className="w-6 h-6 text-emerald-400" />;
      case "Users": return <Users className="w-6 h-6 text-blue-400" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-rose-500 animate-pulse" />;
      case "Laptop": return <Laptop className="w-6 h-6 text-cyan-500" />;
      case "TrendingUp": return <TrendingUp className="w-6 h-6 text-teal-400" />;
      case "BookOpen": return <BookOpen className="w-6 h-6 text-amber-400" />;
      case "Coffee": return <Coffee className="w-6 h-6 text-purple-400" />;
      case "CheckCircle": return <CheckCircle className="w-6 h-6 text-teal-500" />;
      case "ShieldAlert": return <ShieldAlert className="w-6 h-6 text-rose-400" />;
      case "HeartHandshake": return <HeartHandshake className="w-6 h-6 text-indigo-400" />;
      case "Award": return <Award className="w-6 h-6 text-orange-400" />;
      default: return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div id="what-we-provide" className="relative py-16 md:py-24 bg-slate-950/40 border-y border-slate-900">
      {/* Decorative gradient shadows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Ultimate Academic Standards
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase"
          >
            What We <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Provide</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-slate-400 font-sans"
          >
            An unparalleled, tech-driven educational ecosystem that merges high-fidelity classrooms, 
            personalized remedial care, and continuous performance analytics to build real academic confidence.
          </motion.p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FACILITIES.map((facility, index) => {
            const isHovered = hoveredCard === facility.id;
            const isAIMonitoring = facility.id === "ai-monitoring";
            const isDashboardOpen = isAIMonitoring && showAIDashboard;

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(facility.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  if (isAIMonitoring) {
                    setShowAIDashboard(!showAIDashboard);
                  }
                }}
                className={`relative group rounded-2xl glass-card p-6 flex flex-col justify-between h-auto cursor-pointer transition-all duration-300 ${
                  isDashboardOpen 
                    ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)] bg-slate-900/60" 
                    : isAIMonitoring 
                    ? "border-dashed border-cyan-500/30 hover:border-cyan-400" 
                    : ""
                }`}
              >
                {/* Micro border lighting */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none opacity-0 group-hover:opacity-100 border border-cyan-400/30`} />
                
                {/* Animated scanning bar overlay for active AI card */}
                {isAIMonitoring && (
                  <div className="absolute inset-x-4 top-2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse pointer-events-none" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {getIcon(facility.iconName)}
                    </div>
                    {isAIMonitoring ? (
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500 text-slate-950 font-black animate-pulse">
                        {showAIDashboard ? "DASHBOARD ACTIVE" : "LIVE SIMULATOR"}
                      </span>
                    ) : (
                      facility.badge && (
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                          {facility.badge}
                        </span>
                      )
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1.5">
                    {facility.title}
                    {isAIMonitoring && <span className="text-[10px] text-cyan-405 font-mono">⚡</span>}
                  </h3>
                  
                  <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed h-14 overflow-hidden">
                    {isAIMonitoring ? "Interactive: Tap to launch simulated cognitive tracker with performance wave-charts, live feedback diagnostics, and student indices." : facility.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors duration-200">
                  {isAIMonitoring ? (
                    <span className="text-cyan-400 font-extrabold animate-pulse">
                      {showAIDashboard ? "◀ COLLAPSE CONSOLE" : "▶ LAUNCH COGNITIVE DEMO"}
                    </span>
                  ) : (
                    <span>MGA - SEC - {index + 1}</span>
                  )}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-bold text-cyan-405">★ CORE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic AI Diagnostic Dashboard Mockup Demo Container */}
        {showAIDashboard && (
          <div id="ai-monitoring-panel" className="mt-8 relative z-20">
            <AIMonitoringDashboard onClose={() => setShowAIDashboard(false)} />
          </div>
        )}
      </div>
    </div>
  );
}
