/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "motion/react";
import { 
  Atom, 
  Binary, 
  Rocket, 
  Cpu, 
  Heart, 
  Languages, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  RotateCcw,
  Sparkles
} from "lucide-react";
import { Course } from "../types";
import Interactive3DModel from "./Interactive3DModel";
import { playHoverTick, playExpandClick } from "../utils/audio";

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  shape: "circle" | "square" | "diamond" | "triangle";
  angle: number;
}

interface CourseCardProps {
  course: Course;
  isSelectedForCompare?: boolean;
  onToggleCompare?: () => void;
}

export default function CourseCard({ course, isSelectedForCompare = false, onToggleCompare }: CourseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const cardOuterRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef<number>(0);

  // GSAP 3D card flip animation hook
  useEffect(() => {
    if (cardInnerRef.current) {
      gsap.to(cardInnerRef.current, {
        rotateY: isFlipped ? 180 : 0,
        duration: 0.8,
        ease: "power2.inOut",
        overwrite: "auto"
      });
    }
  }, [isFlipped]);

  const handleToggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
    playExpandClick();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = Date.now();
    // Throttle to keep rendering and event cycles lightweight & performance-friendly
    if (now - lastSpawnRef.current > 35) {
      lastSpawnRef.current = now;

      // Extract colors corresponding to glow class
      let particleColor = "#22d3ee"; // standard cyan
      if (course.glowColor.includes("purple")) particleColor = "#c084fc";
      else if (course.glowColor.includes("emerald")) particleColor = "#34d399";
      else if (course.glowColor.includes("rose")) particleColor = "#f43f5e";
      else if (course.glowColor.includes("amber")) particleColor = "#f59e0b";

      const shapeOpt: Array<"circle" | "square" | "diamond" | "triangle"> = [
        "circle", "square", "diamond", "triangle"
      ];

      const newParticle: Particle = {
        id: `p-${Math.random().toString(36).substring(2, 9)}`,
        x,
        y,
        size: Math.floor(Math.random() * 6) + 4, // 4px to 10px random shapes
        color: particleColor,
        shape: shapeOpt[Math.floor(Math.random() * shapeOpt.length)],
        angle: Math.random() * Math.PI * 2
      };

      setParticles((prev) => [...prev, newParticle].slice(-15)); // Keep max 15 active trace elements
    }
  };

  const removeParticle = (id: string) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  const getCourseIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case "Atom": return <Atom className={`${className} text-cyan-400`} />;
      case "Binary": return <Binary className={`${className} text-blue-400`} />;
      case "Rocket": return <Rocket className={`${className} text-purple-400 animate-pulse`} />;
      case "Cpu": return <Cpu className={`${className} text-emerald-400`} />;
      case "Heart": return <Heart className={`${className} text-rose-500`} />;
      case "Languages": return <Languages className={`${className} text-amber-500`} />;
      default: return <BookOpen className={`${className} text-cyan-400`} />;
    }
  };

  const handleWhatsAppRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    const contactSection = document.getElementById("lead-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    playExpandClick();
  };

  return (
    <div 
      ref={cardOuterRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={playHoverTick}
      className="perspective-1000 w-full relative h-[740px] xs:h-[710px] sm:h-[685px] md:h-[670px] select-none cursor-default group"
    >
      {/* Dynamic Framer Motion trail particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-30">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute pointer-events-none"
              initial={{ x: p.x, y: p.y, scale: 0, opacity: 0.95 }}
              animate={{
                x: p.x + Math.cos(p.angle) * 35,
                y: p.y + Math.sin(p.angle) * 35,
                scale: [0, 1.2, 0],
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              onAnimationComplete={() => removeParticle(p.id)}
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                borderRadius: p.shape === "circle" ? "50%" : p.shape === "square" ? "2px" : "0px",
                transform: p.shape === "diamond" ? "rotate(45deg)" : undefined,
                clipPath: p.shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : undefined,
                boxShadow: `0 0 8px ${p.color}, 0 0 16px ${p.color}`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Rotating Card Body */}
      <div 
        ref={cardInnerRef}
        className="w-full h-full preserve-3d relative flex flex-col justify-between"
      >
        
        {/* ===================================== FRONT FACE OF THE CARD ===================================== */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl glass-card flex flex-col justify-between overflow-hidden">
          
          {/* Decorative glowing backdrops */}
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.glowColor} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
          
          {/* Glowing neon top-bar */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${course.glowColor}`} />

          <div className="p-5 xs:p-6 md:p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Course Icon container */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {getCourseIcon(course.iconName)}
                </div>
                
                <div className="flex items-center gap-2">
                  {onToggleCompare && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompare();
                      }}
                      className={`px-2.5 py-1 text-[9px] font-mono font-black rounded-full uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-all border duration-200 z-40 ${
                        isSelectedForCompare
                          ? "bg-cyan-500 text-slate-950 border-cyan-400 font-extrabold shadow-[0_0_10px_rgba(0,255,255,0.45)]"
                          : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-cyan-500/40"
                      }`}
                      title={isSelectedForCompare ? "Click to remove from compare queue" : "Select to compare with another course"}
                    >
                      <span>{isSelectedForCompare ? "✓ COMPARING" : "+ COMPARE"}</span>
                    </button>
                  )}
                  
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-950 border border-slate-900 px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {course.boardText}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                {course.title}
              </h3>
              
              <p className="text-xs font-semibold text-cyan-400/90 mt-1 mb-3 font-mono">
                {course.tagline}
              </p>
              
              <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3 min-h-0 xs:min-h-[50px]">
                {course.description}
              </p>

              {/* Interactive 3D Model Visualizer Component */}
              <div className="mb-3 sm:mb-6 relative z-20">
                <Interactive3DModel courseId={course.id} />
              </div>

              {/* Strategic Advantages (Front Overview Preview) */}
              <div className="space-y-2 mb-3 sm:mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Core Advantages</span>
                {course.features.slice(0, 3).map((feat) => (
                  <div key={feat} className="flex gap-2 items-start text-xs text-slate-300 font-sans">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls Button - Triggers 3D Flip */}
            <div className="flex gap-3 pt-3 sm:pt-4 border-t border-slate-900/40 mt-auto">
              <button
                onClick={handleToggleFlip}
                className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-slate-200 flex items-center justify-center gap-1.5 cursor-pointer transition-colors hover:text-cyan-400"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Explore Full Syllabus</span>
              </button>

              <button
                onClick={handleWhatsAppRedirect}
                className="p-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
                title="Inquire directly on WhatsApp"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Footer clock details */}
          <div className="bg-slate-950/60 border-t border-slate-900/80 px-6 py-3.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {course.duration}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500">MGA - SYL - 101</span>
          </div>

        </div>

        {/* ===================================== BACK FACE OF THE CARD ===================================== */}
        <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden rounded-2xl glass-card border border-cyan-500/20 flex flex-col justify-between overflow-hidden">
          
          {/* Top highlight glow */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${course.glowColor}`} />

          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header Action to flip back */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-900">
                <button 
                  onClick={handleToggleFlip}
                  className="flex items-center gap-1.5 text-[10px] hover:text-emerald-400 text-cyan-400 font-mono tracking-wider font-black uppercase cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
                  <span>Return to Card Front</span>
                </button>
                <span className="text-[10px] font-mono text-slate-500">CURRICULUM INDEX</span>
              </div>

              <h4 className="text-lg font-black text-white uppercase tracking-tight mb-3">
                {course.title} <span className="text-cyan-400 font-mono text-xs normal-case">Details</span>
              </h4>

              {/* Dynamic subjects container */}
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-2 font-black">Syllabus / Focus Hub</span>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {course.subjects.map((sub) => (
                  <div key={sub} className="p-2.5 rounded-lg bg-slate-950 border border-slate-900 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                    <span className="text-[10px] font-mono text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap" title={sub}>{sub}</span>
                  </div>
                ))}
              </div>

              {/* Complete checklist of features - representing 'What We Provide' */}
              <div className="space-y-2 mb-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block font-black">Strategic Advantages</span>
                {course.features.map((feat) => (
                  <div key={feat} className="flex gap-2 items-start text-[11px] text-slate-300 font-sans">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Weekly Commits */}
              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/10 mb-4 shadow-inner">
                <span className="text-[9px] font-mono text-cyan-300 block uppercase tracking-wider mb-1 font-semibold">Weekly Commitment Matrix</span>
                <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                  Includes 4 Core lectures, 1 Timed Mock Examination, and mandatory Student-to-Student concept debate sessions under central supervisor guidelines.
                </p>
              </div>
            </div>

            {/* Back face Action to flip card back */}
            <div className="flex gap-3 pt-4 border-t border-slate-900/40 mt-auto shadow-xl">
              <button
                onClick={handleToggleFlip}
                className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>Return to Course info</span>
              </button>

              <button
                onClick={handleWhatsAppRedirect}
                className="px-4 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold rounded-xl tracking-wider uppercase flex items-center justify-center cursor-pointer font-black"
                title="Submit an Admission query for this class"
              >
                <span>Inquire</span>
              </button>
            </div>
          </div>

          {/* Footer metadata indicator */}
          <div className="bg-slate-950/60 border-t border-slate-900/80 px-6 py-3.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {course.duration} Duration
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-500">MGA - SYL - 101</span>
          </div>

        </div>

      </div>
    </div>
  );
}
