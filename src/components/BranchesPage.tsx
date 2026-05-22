/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Check, 
  MessageSquare, 
  ArrowRight, 
  Sparkles,
  Building 
} from "lucide-react";
import { BRANCHES } from "../data";
import { Branch } from "../types";

export default function BranchesPage() {
  const [activeBranchSlug, setActiveBranchSlug] = useState<string>("naktala");

  const activeBranch = BRANCHES.find((b) => b.slug === activeBranchSlug) || BRANCHES[0];

  const getBranchActiveStyles = (slug: string) => {
    switch (slug) {
      case "sonarpur":
        return "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 text-slate-950 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] font-black scale-105";
      case "canning":
        return "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-black scale-105";
      case "naktala":
      default:
        return "bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] font-black scale-105";
    }
  };

  const getBranchInactiveStyles = (slug: string) => {
    switch (slug) {
      case "sonarpur":
        return "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-purple-550/60 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:scale-105";
      case "canning":
        return "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-emerald-550/60 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-105";
      case "naktala":
      default:
        return "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-cyan-550/60 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:scale-105";
    }
  };

  const getBranchDetailStyles = (slug: string) => {
    switch (slug) {
      case "sonarpur":
        return "hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]";
      case "canning":
        return "hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]";
      case "naktala":
      default:
        return "hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]";
    }
  };

  const getBranchGlowColor = (slug: string) => {
    switch (slug) {
      case "sonarpur": return "bg-purple-500/10";
      case "canning": return "bg-emerald-500/10";
      case "naktala":
      default: return "bg-cyan-500/10";
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-950/25 text-slate-100 relative">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Branch Intro header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase tracking-widest border border-cyan-500/20 mb-4"
          >
            <MapPin className="w-3.5 h-3.5 animate-bounce" />
            Strategic Academic Hubs
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-4"
          >
            OUR ACADEMY <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">BRANCHES</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-slate-400"
          >
            Locate a high-fidelity diagnostic classroom, computerized testing center, 
            or personal counselling zone near you. Fully climatized AC campuses equipped with expert mentors.
          </motion.p>
        </div>

        {/* Branch Navigation pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 max-w-full px-2">
          {BRANCHES.map((branch) => {
            const isActive = activeBranchSlug === branch.slug;
            return (
              <button
                key={branch.slug}
                onClick={() => setActiveBranchSlug(branch.slug)}
                className={`relative px-3.5 sm:px-5 md:px-7 py-2.5 md:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                  isActive
                    ? getBranchActiveStyles(branch.slug)
                    : getBranchInactiveStyles(branch.slug)
                }`}
              >
                <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{branch.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Branch Details Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card Detailed specs */}
          <motion.div 
            layoutId="branchDetailsFrame"
            className={`lg:col-span-5 rounded-2xl glass-card p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 border border-slate-800/85 hover:scale-[1.015] ${getBranchDetailStyles(activeBranch.slug)}`}
          >
            {/* Dynamic decorative backdrop circles */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${getBranchGlowColor(activeBranch.slug)} rounded-full blur-2xl pointer-events-none transition-all duration-500`} />

            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono tracking-widest text-xs uppercase mb-4">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Active Branch Profile</span>
              </div>

              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                {activeBranch.name}
              </h2>
              <p className="text-xs text-cyan-400 font-mono font-semibold mb-6">
                📌 Landmark: {activeBranch.landmark}
              </p>

              {/* Coordinates List */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 flex gap-3.5 items-start">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Classroom Address</span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans">
                      {activeBranch.address}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 flex gap-3.5 items-start">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Official Mailbox</span>
                    <a href={`mailto:${activeBranch.email}`} className="text-xs text-slate-350 hover:text-cyan-400 transition-colors tracking-wide">
                      {activeBranch.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 flex gap-3.5 items-start">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Direct Helpline</span>
                    <a href={`tel:${activeBranch.phone}`} className="text-xs text-slate-300 hover:text-cyan-400 transition-colors font-bold tracking-wide">
                      {activeBranch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Core branch features */}
              <div className="space-y-2 mb-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Infrastructure Advantages</span>
                {activeBranch.features.map((feat) => (
                  <div key={feat} className="flex gap-2 items-center text-xs text-slate-350">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA panel buttons for direct WhatsApp */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${activeBranch.whatsapp}?text=Hi%20MindGrowth%20Academy!%20I%20am%20interested%20in%20classes%20at%20your%20${activeBranch.name}.%20Please%20guide%20me.`}
                target="_blank"
                rel="noreferrer referrer"
                className="flex-1 py-3 text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold tracking-wide flex items-center justify-center gap-2 duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Message
              </a>

              <a
                href={`tel:${activeBranch.phone}`}
                className="px-4 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 rounded-xl flex items-center justify-center duration-200"
                title="Call Helpline Now"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Map display panel (Iframe) */}
          <div className="lg:col-span-7 rounded-2xl glass-card overflow-hidden h-[440px] lg:h-auto border border-slate-800 min-h-[440px] relative transition-all duration-305">
            {/* 🛰️ Premium Interactive Node Radar HUD Overlay */}
            <div className="absolute top-4 left-4 right-4 z-20 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-slate-950/85 backdrop-blur-md rounded-xl border border-slate-800/85 p-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.65)]">
              <div>
                <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[9px] uppercase tracking-widest font-black">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Interactive Network Radar</span>
                </div>
                <h3 className="text-xs font-black uppercase text-white tracking-wide mt-0.5">Campus Selection Nodes</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { slug: "naktala", label: "Naktala Core", coords: "22.48° N, 88.36° E", color: "from-cyan-500 to-blue-500" },
                  { slug: "sonarpur", label: "Sonarpur Hub", coords: "22.44° N, 88.42° E", color: "from-purple-500 to-fuchsia-600" },
                  { slug: "canning", label: "Canning Base", coords: "22.31° N, 88.66° E", color: "from-emerald-500 to-teal-500" }
                ].map((item) => {
                  const isNodeActive = activeBranchSlug === item.slug;
                  return (
                    <button
                      key={item.slug}
                      onClick={() => setActiveBranchSlug(item.slug)}
                      className={`relative px-3 py-2 rounded-lg border text-[10px] font-mono uppercase tracking-wider transition-all duration-355 flex items-center gap-2 cursor-pointer ${
                        isNodeActive
                          ? "bg-slate-900 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(34,211,238,0.25)] scale-105 animate-pulse"
                          : "bg-slate-950/60 border-slate-850 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:scale-[1.02]"
                      }`}
                    >
                      {/* Dual-concentric radar pulsing effect */}
                      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                        {isNodeActive && (
                          <>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400/60 opacity-80" />
                            <span className="animate-pulse absolute inline-flex h-4 w-4 rounded-full bg-cyan-500/20" />
                          </>
                        )}
                        <span className={`relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr ${item.color} shadow-lg`} />
                      </span>
                      <span className="font-bold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranchSlug}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative z-10 pt-24 md:pt-16 pb-12"
              >
                <iframe
                  src={activeBranch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(110%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title={`${activeBranch.name} Map Coordinates Guide`}
                  className="w-full h-full"
                />

                {/* 📍 Interactive Exact Location Pinpointed Laser Marker Overlay */}
                <div className="absolute top-[55%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-30 select-none">
                  {/* Outer dual pulses */}
                  <div className="absolute w-28 h-28 rounded-full border border-cyan-400 bg-cyan-400/5 scale-0 animate-ping" style={{ animationDuration: "3.5s" }} />
                  <div className="absolute w-16 h-16 rounded-full border border-teal-400 bg-teal-400/10 scale-0 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "1s" }} />

                  {/* Pin pointed pointer pin structure */}
                  <div className="relative flex flex-col items-center">
                    {/* Glowing holographic radar sweeps rings */}
                    <div className="absolute -top-1 w-2.5 h-2.5 bg-cyan-400 rounded-full blur-[3px] animate-pulse" />
                    
                    <MapPin className="w-11 h-11 text-cyan-400 fill-cyan-500/25 filter drop-shadow-[0_0_15px_rgba(34,211,238,0.85)] animate-bounce" style={{ animationDuration: "1.8s" }} />
                    
                    {/* Tiny target crosshair/ground pin */}
                    <div className="w-3.5 h-1.5 bg-slate-950/80 rounded-full border border-cyan-400/50 shadow-[0_0_10px_rgba(0,255,255,0.7)] flex items-center justify-center -mt-1.5 animate-pulse">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  {/* Micro glass label indicator locked inside viewport */}
                  <div className="mt-3 bg-slate-950/95 border border-cyan-500/40 rounded-lg px-2.5 py-1 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.85)] flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[9px] font-mono font-black uppercase text-white tracking-wider">
                      {activeBranch.name} Located
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Telemetry coordinate readout board overlayed on maps panel */}
            <div className="absolute bottom-14 left-4 z-20 pointer-events-none hidden sm:block">
              <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800/80 rounded-lg p-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.4)] animate-pulse">
                <div className="text-[8px] font-mono uppercase tracking-widest text-slate-500 font-bold">Node Telemetry</div>
                <div className="text-[10px] font-mono text-cyan-400 mt-1 flex items-center gap-1.5 font-bold">
                  <span className="inline-block w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
                  <span>LAT/LON: {
                    activeBranchSlug === "naktala" ? "22.4885° N, 88.3684° E" :
                    activeBranchSlug === "sonarpur" ? "22.4419° N, 88.4283° E" :
                    "22.3115° N, 88.6631° E"
                  }</span>
                </div>
              </div>
            </div>

            {/* Map Ambient glowing grid */}
            <div className="absolute inset-x-0 bottom-0 py-3.5 px-6 bg-slate-950/90 backdrop-blur-md z-20 border-t border-slate-900/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 uppercase tracking-widest text-[9px] text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Live Satellite Link Grid
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Navigate outside</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
